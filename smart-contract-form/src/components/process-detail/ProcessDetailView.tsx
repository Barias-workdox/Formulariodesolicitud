import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  OverflowMenuVertical,
  RecentlyViewed,
  ListChecked,
  Document,
  Edit,
} from '@carbon/icons-react';

import { PageHeader } from '@webdoxclm/design-system/page-header';
import { IconButton } from '@webdoxclm/design-system/button/variants/icon-button';
import { Breadcrumbs } from '@webdoxclm/design-system/breadcrumbs/next';
import { Button as ButtonNext } from '@webdoxclm/design-system/button/next';
import { Tag } from '@webdoxclm/design-system/tag/next';
import type { TagKind } from '@webdoxclm/design-system/tag/next';

import { GestionCard } from '../new-process-wizard/SolicitudSubmittedView';
import {
  MOCK_PROCESSES,
  MOCK_SOLICITUD_PROCESSES,
  MOCK_WORKFLOW_PROCESSES,
} from '../process-manager/process-manager.data';
import type { Process } from '../../types/process.types';

const ALL_PROCESSES: Process[] = [
  ...MOCK_PROCESSES,
  ...MOCK_SOLICITUD_PROCESSES,
  ...MOCK_WORKFLOW_PROCESSES,
];


const UPPER_LABEL: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 400,
  color: '#52617A',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  lineHeight: 1.5,
};

const VALUE_TEXT: React.CSSProperties = {
  fontSize: 14,
  fontWeight: 400,
  color: '#171A1C',
  lineHeight: 1.5,
};

const Divider = () => (
  <hr style={{ border: 'none', borderTop: '1px solid #E0E3EB', margin: 0, width: '100%' }} />
);

const SummaryFieldBlock = ({ label, value }: { label: string; value?: string | null }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
    <span style={UPPER_LABEL}>{label}</span>
    <span style={VALUE_TEXT}>{value || '—'}</span>
  </div>
);

const SummarySection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div
    style={{
      background: '#FFFFFF',
      border: '1px solid #E0E3EB',
      borderRadius: 8,
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
    }}
  >
    <span style={{ fontSize: 16, fontWeight: 700, color: '#171A1C', lineHeight: 1.5 }}>{title}</span>
    <Divider />
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>{children}</div>
  </div>
);

const statusKindMap: Record<string, TagKind> = {
  'En borrador': 'peace',
  'Por asignar': 'warning',
  'Por gestionar': 'warning',
  'En corrección': 'warning',
  'En consulta': 'warning',
  'En curso': 'positive',
  'Por aprobar': 'brand',
  'Por firmar': 'brand',
  'Finalizado': 'neutral',
  'Rechazado': 'negative',
  'Cancelada': 'negative',
  'Pausado': 'neutral',
};

const SIMULATED_FORM: Record<string, {
  descripcion: string;
  entidad1: string;
  entidad2: string;
  entidad3?: string;
  fechaInicio: string;
  fechaTermino: string;
  moneda: string;
  pais: string;
  sucursal: string;
}> = {
  'PC-002': {
    descripcion: 'Renovación del contrato de arriendo de las oficinas corporativas en Providencia por 24 meses adicionales.',
    entidad1: 'Acme Company S.A.',
    entidad2: 'Inmobiliaria del Pacífico Ltda.',
    fechaInicio: '01/05/2026',
    fechaTermino: '30/04/2028',
    moneda: 'CLP 24.000.000',
    pais: 'Chile',
    sucursal: 'Filial Norte',
  },
};

const DEFAULT_FORM = {
  descripcion: '—',
  entidad1: 'Acme Company S.A.',
  entidad2: '—',
  entidad3: undefined,
  fechaInicio: '—',
  fechaTermino: '—',
  moneda: 'CLP',
  pais: 'Chile',
  sucursal: '—',
};

const ProcessResumen = ({ process, onEdit }: { process: Process; onEdit: () => void }) => {
  const form = SIMULATED_FORM[process.id] ?? DEFAULT_FORM;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: '#171A1C', lineHeight: 1.3 }}>
          Resumen
        </h2>
        <ButtonNext
          kind="brand"
          appearance="outlined"
          size="32px"
          startEnhancer={() => <Edit size={16} />}
          onClick={onEdit}
        >
          Editar solicitud
        </ButtonNext>
      </div>

      <SummarySection title="Sobre la solicitud">
        <SummaryFieldBlock label="Nombre de la solicitud" value={process.nombre} />
        <SummaryFieldBlock label="Descripción de la solicitud" value={form.descripcion} />
        <SummaryFieldBlock label="Tipo de contrato" value={process.tipoContrato} />
      </SummarySection>

      <SummarySection title="Datos de la solicitud">
        <SummaryFieldBlock label="Entidad 1" value={form.entidad1} />
        <SummaryFieldBlock label="Entidad 2" value={form.entidad2} />
        {form.entidad3 && <SummaryFieldBlock label="Entidad 3" value={form.entidad3} />}
        <SummaryFieldBlock label="Fecha inicio" value={form.fechaInicio} />
        <SummaryFieldBlock label="Fecha de término" value={form.fechaTermino} />
        <SummaryFieldBlock label="Moneda" value={form.moneda} />
        <SummaryFieldBlock label="País del documento" value={form.pais} />
        <SummaryFieldBlock label="Sucursal / Filial" value={form.sucursal} />
      </SummarySection>
    </div>
  );
};

export const ProcessDetailView = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [activeTab, setActiveTab] = useState<'resumen' | 'documento'>('resumen');

  const process = ALL_PROCESSES.find((p) => p.id === id);

  if (!process) {
    history.replace('/processes');
    return null;
  }

  const isSolicitud = process.etapa === 'EN_SOLICITUD' || process.estado === 'Por asignar';
  const isEnCurso = process.estado === 'En curso' && process.etapa === 'EN_WORKFLOW';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#F4F5FA' }}>
      <PageHeader
        title=""
        showBorder
        startEnhancer={
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <IconButton kind="control" size="32px" onClick={() => history.push('/processes')}>
              <ArrowLeft size={20} />
            </IconButton>
            <Breadcrumbs>
              <Breadcrumbs.Item label="Gestor de procesos" isFirst onClick={() => history.push('/processes')}>
                Gestor de procesos
              </Breadcrumbs.Item>
              <Breadcrumbs.Item label={process.nombre} isLast>
                {process.nombre}
              </Breadcrumbs.Item>
            </Breadcrumbs>
          </div>
        }
        endEnhancer={
          <PageHeader.EndEnhancerWrapper>
            <ButtonNext
              kind="neutral"
              appearance="outlined"
              size="32px"
              startEnhancer={() => <RecentlyViewed size={16} />}
              onClick={() => {}}
            >
              Historial
            </ButtonNext>
            <ButtonNext
              kind="neutral"
              appearance="outlined"
              size="32px"
              startEnhancer={() => <OverflowMenuVertical size={16} />}
              onClick={() => {}}
            >
              Opciones
            </ButtonNext>
          </PageHeader.EndEnhancerWrapper>
        }
      />

      {/* Tabs */}
      <div
        style={{
          background: '#FFFFFF',
          boxShadow: '0px 1px 2px 0px rgba(82, 97, 122, 0.12)',
          borderBottom: '1px solid #E0E3EB',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div style={{ display: 'flex' }}>
          <button
            onClick={() => setActiveTab('resumen')}
            style={{
              background: 'none',
              border: 'none',
              borderBottom: activeTab === 'resumen' ? '2px solid #334199' : '2px solid transparent',
              padding: '12px 16px',
              height: 44,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 16,
              fontWeight: activeTab === 'resumen' ? 500 : 400,
              color: activeTab === 'resumen' ? '#334199' : '#69768B',
              lineHeight: 1.5,
            }}
          >
            <ListChecked size={16} />
            Resumen de solicitud
          </button>
          <button
            onClick={() => setActiveTab('documento')}
            style={{
              background: 'none',
              border: 'none',
              borderBottom: activeTab === 'documento' ? '2px solid #334199' : '2px solid transparent',
              padding: '12px 16px',
              height: 44,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 16,
              fontWeight: activeTab === 'documento' ? 500 : 400,
              color: activeTab === 'documento' ? '#334199' : '#69768B',
              lineHeight: 1.5,
            }}
          >
            <Document size={16} />
            Documento
          </button>
        </div>
      </div>

      {/* Body */}
      <div
        style={{
          flex: '1 1 0',
          minHeight: 0,
          overflow: 'hidden',
          background: '#F4F5FA',
          boxShadow: 'inset 0px 4px 8px 0px rgba(82, 97, 122, 0.14)',
          display: 'flex',
          alignItems: 'stretch',
        }}
      >
        {isSolicitud && (
          <div style={{ flex: '1 1 300px', minWidth: 0, padding: 8, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
            <GestionCard onCorrectionRequested={(text) => history.push('/processes/new', {
                editStep: 4,
                isCorrectionMode: true,
                correctionMessage: text,
                process: { id: process.id, nombre: process.nombre, tipoContrato: process.tipoContrato },
              })} />
          </div>
        )}
        {isEnCurso && (
          <div style={{ flex: '1 1 300px', minWidth: 0, padding: 8, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
            <GestionCard
              initialIsAssigned
              initialConfirmedAssignee={[{ id: '1', label: 'Amanda Rodríguez' }]}
              initialIsEnCurso
              onCorrectionRequested={() => {}}
            />
          </div>
        )}
        <div
          style={{
            flex: '2 1 400px',
            minWidth: 0,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          <div style={{ flex: 1, overflowY: 'auto', padding: '24px 16px' }}>
            {activeTab === 'resumen' ? (
              <ProcessResumen process={process} onEdit={() => history.push('/processes/new', { editStep: 4, process })} />
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#69768B' }}>
                Vista de documento no disponible
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
