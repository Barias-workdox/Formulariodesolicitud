import { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useHistory } from 'react-router-dom';
import {
  ArrowLeft,
  Chat,
  OverflowMenuVertical,
  RecentlyViewed,
  ListChecked,
  Document,
  Edit,
  Warning,
} from '@carbon/icons-react';

import { PageHeader } from '@webdoxclm/design-system/page-header';
import { IconButton } from '@webdoxclm/design-system/button/variants/icon-button';
import { Breadcrumbs } from '@webdoxclm/design-system/breadcrumbs/next';
import { Button as ButtonNext } from '@webdoxclm/design-system/button/next';
import { Tag } from '@webdoxclm/design-system/tag';
import { Avatar } from '@webdoxclm/design-system/avatar';
import { Notification } from '@webdoxclm/design-system/notification/next';
import { Select } from '@webdoxclm/design-system/select';
import { FormControl } from '@webdoxclm/design-system/form-control';
import { Timeline, TimelineActivity, TimelineIcon } from '@webdoxclm/design-system/timeline';
import { Textarea } from '@webdoxclm/design-system/textarea/next';

import type { ContractType, WizardFormData } from './new-process-wizard.data';

const formatDate = (isoString: string): string => {
  if (!isoString) return '—';
  const date = new Date(isoString);
  return date.toLocaleDateString('es-CL', { day: 'numeric', month: 'short', year: 'numeric' });
};

export type GestionState = {
  isAssigned: boolean;
  confirmedAssignee: { id: string; label: string }[];
  isEnCurso: boolean;
};

type SolicitudSubmittedViewProps = {
  contractType: ContractType;
  formData: WizardFormData;
  onExit: () => void;
  initialGestionState?: GestionState;
};

const ASSIGNEE_OPTIONS = [
  { id: '1', label: 'Amanda Rodríguez' },
  { id: '2', label: 'Roberto Farías' },
  { id: '3', label: 'Carolina Muñoz' },
];

const REQUEST_ID = '#123445';

const MOCK_WORKFLOW_STEPS = [
  { id: 1, label: '1.0 Redacción', date: '2026-01-12', status: 'En curso', responsable: 'Amanda Rodríguez', isActive: true },
  { id: 2, label: '2.0 Aprobación', date: '2026-01-19', status: 'Pendiente', responsable: 'Sin asignación', isActive: false },
  { id: 3, label: '3.0 Firma', date: '2026-01-26', status: 'Pendiente', responsable: 'Sin asignación', isActive: false },
  { id: 4, label: '4.0 Clasificación', date: '2026-02-02', status: 'Pendiente', responsable: 'Sin asignación', isActive: false },
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

type GestionCardProps = {
  onCorrectionRequested: (text: string, state: GestionState) => void;
  initialIsAssigned?: boolean;
  initialConfirmedAssignee?: { id: string; label: string }[];
  initialIsEnCurso?: boolean;
};

export const GestionCard = ({ onCorrectionRequested, initialIsAssigned, initialConfirmedAssignee, initialIsEnCurso }: GestionCardProps) => {
  const [confirmedAssignee, setConfirmedAssignee] = useState<{ id: string; label: string }[]>(initialConfirmedAssignee ?? []);
  const [displayAssignee, setDisplayAssignee] = useState<{ id: string; label: string }[]>(initialConfirmedAssignee ?? []);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isAssigned, setIsAssigned] = useState(initialIsAssigned ?? false);
  const [isGestionPopoverOpen, setIsGestionPopoverOpen] = useState(false);
  const [isIniciarWorkflowModalOpen, setIsIniciarWorkflowModalOpen] = useState(false);
  const [isEnCurso, setIsEnCurso] = useState(initialIsEnCurso ?? false);
  const [isCorrectionModalOpen, setIsCorrectionModalOpen] = useState(false);
  const [correctionText, setCorrectionText] = useState('');
  const gestionButtonRef = useRef<HTMLDivElement>(null);

  const handleAssigneeChange = (value: readonly { id: string; label: string }[]) => {
    if (value && value.length > 0) {
      setDisplayAssignee([...value]);
      setIsConfirmModalOpen(true);
    }
  };

  const handleConfirm = () => {
    setConfirmedAssignee(displayAssignee);
    setIsAssigned(true);
    setIsConfirmModalOpen(false);
  };

  const handleCancel = () => {
    // Revert the Select back to the last confirmed value
    setDisplayAssignee(confirmedAssignee);
    setIsConfirmModalOpen(false);
  };

  const handleConfirmWorkflow = () => {
    setIsEnCurso(true);
    setIsIniciarWorkflowModalOpen(false);
    setIsGestionPopoverOpen(false);
  };

  return (
    <div
      style={{
        background: '#FFFFFF',
        border: '1px solid #E0E3EB',
        borderRadius: 8,
        boxShadow: '0px 4px 8px -1px rgba(82, 97, 122, 0.14)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        flex: 1,
      }}
    >
      {/* Stepper header + title */}
      <div style={{ padding: 8 }}>
        <div
          style={{
            background: 'linear-gradient(180deg, #F4F5FA 0%, #F4F5FA 74.5%, #FFFFFF 100%)',
            borderRadius: 4,
          }}
        >
          <div
            style={{
              borderBottom: '1px solid #E0E3EB',
              padding: 8,
              minHeight: 48,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: 14, fontWeight: 500, color: '#52617A', lineHeight: 1.5 }}>
              Gestión de la solicitud
            </span>
          </div>
          <div
            style={{
              padding: '12px 8px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              minHeight: 112,
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 20,
                fontWeight: 700,
                color: '#171A1C',
                lineHeight: 1.3,
              }}
            >
              {isEnCurso ? 'Solicitud en curso' : 'Solicitud pendiente de asignación'}
            </p>
            <p style={{ margin: 0, fontSize: 16, fontWeight: 400, color: '#171A1C', lineHeight: 1.5 }}>
              ID {REQUEST_ID}
            </p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div
        style={{
          padding: 16,
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
          flex: 1,
          minHeight: 0,
          overflowY: 'auto',
        }}
      >
        {/* Gestores: Solicitante + Asignado a */}
        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontSize: 16, fontWeight: 400, color: '#171A1C', lineHeight: 1.5 }}>
              Solicitante <span style={{ color: '#69768B' }}>*</span>
            </span>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <Avatar initials="A" name="Amanda Rodríguez" backgroundColor="brand" size="32px" />
              <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, flex: 1 }}>
                <span style={{ fontSize: 16, color: '#1E282D', lineHeight: 1.5 }}>
                  Amanda Rodríguez Gui
                </span>
                <span style={{ fontSize: 14, color: '#52617A', lineHeight: 1.5 }}>
                  Grupo Legal
                </span>
              </div>
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <FormControl label="Asignado a" required>
              <Select
                options={ASSIGNEE_OPTIONS}
                value={displayAssignee}
                onChange={handleAssigneeChange}
                placeholder="Seleccionar"
                valueKey="id"
                labelKey="label"
              />
            </FormControl>
          </div>
        </div>

        <Divider />

        {/* Información: Estados, Tiempo, Tipo */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span style={UPPER_LABEL}>Estados</span>
            <div>
              <Tag
                kind={isEnCurso ? 'accent' : isAssigned ? 'positive' : 'warning'}
                closeable={false}
              >
                {isEnCurso ? 'En curso' : isAssigned ? 'Por gestionar' : 'Por asignar'}
              </Tag>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span style={UPPER_LABEL}>Tiempo restante de gestión</span>
            <span style={VALUE_TEXT}>{isEnCurso ? '—' : 'Quedan 7 días laborales y 3 horas'}</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span style={UPPER_LABEL}>Tipo de asignación</span>
            <span style={VALUE_TEXT}>Manual</span>
          </div>
        </div>

        {isEnCurso && (
          <>
            <Divider />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: '#171A1C', lineHeight: 1.3 }}>
                Seguimiento de la solicitud en Workflow
              </span>
              <Timeline
                activities={MOCK_WORKFLOW_STEPS.map((step, i) => ({
                  id: step.id,
                  component: (
                    <TimelineActivity
                      title=""
                      subtitle=""
                      isLast={i === MOCK_WORKFLOW_STEPS.length - 1}
                      indicator={
                        <TimelineIcon
                          Icon={Chat}
                          backgroundColor={step.isActive ? 'brandSubtle' : 'neutralSubtle'}
                          iconColor={step.isActive ? 'brand' : 'neutral'}
                          size="32px"
                        />
                      }
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingBottom: 12 }}>
                        <span style={{ fontSize: 14, fontWeight: 500, color: '#171A1C', lineHeight: 1.4 }}>
                          {step.label}
                        </span>
                        <span style={{ fontSize: 12, color: '#69768B' }}>
                          Fecha límite&nbsp;&nbsp;{formatDate(step.date)}
                        </span>
                        <div style={{ width: 'fit-content' }}>
                          <Tag kind={step.isActive ? 'accent' : 'neutral'} closeable={false}>
                            {step.status}
                          </Tag>
                        </div>
                        <span style={{ fontSize: 13, color: '#52617A' }}>
                          Responsable: {step.responsable}
                        </span>
                      </div>
                    </TimelineActivity>
                  ),
                }))}
              />
            </div>
          </>
        )}
      </div>

      {/* Footer: Notification + buttons */}
      <div
        style={{
          borderTop: '1px solid #E0E3EB',
          padding: 16,
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          background: '#FFFFFF',
        }}
      >
        {!isAssigned && !isEnCurso && (
          <Notification
            kind="warning"
            title="Pendiente de asignación"
            description="Asigna a un responsable para poder gestionar la solicitud."
            Icon={Warning}
          />
        )}
        {isEnCurso ? (
          <div ref={gestionButtonRef} style={{ position: 'relative', display: 'flex', justifyContent: 'flex-end' }}>
            <ButtonNext
              kind="brand"
              appearance="outlined"
              onClick={() => {}}
            >
              Ver workflow
            </ButtonNext>
          </div>
        ) : (
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ flex: 1 }}>
              <ButtonNext
                kind="brand"
                appearance="outlined"
                disabled={!isAssigned}
                onClick={() => setIsCorrectionModalOpen(true)}
                overrides={{ BaseButton: { style: { width: '100%' } } }}
              >
                Solicitar corrección
              </ButtonNext>
            </div>
            <div ref={gestionButtonRef} style={{ flex: 1, position: 'relative' }}>
              <ButtonNext
                kind="brand"
                appearance="filled"
                disabled={!isAssigned}
                onClick={() => setIsGestionPopoverOpen((prev) => !prev)}
                overrides={{ BaseButton: { style: { width: '100%' } } }}
              >
                Gestionar solicitud
              </ButtonNext>

              {/* Popover */}
              {isGestionPopoverOpen && createPortal(
                <>
                  {/* Backdrop to close popover */}
                  <div
                    style={{ position: 'fixed', inset: 0, zIndex: 999 }}
                    onClick={() => setIsGestionPopoverOpen(false)}
                  />
                  {/* Popover card - positioned above the button */}
                  <div
                    style={{
                      position: 'fixed',
                      zIndex: 1000,
                      bottom: (() => {
                        const el = gestionButtonRef.current;
                        if (!el) return 64;
                        const rect = el.getBoundingClientRect();
                        return window.innerHeight - rect.top + 8;
                      })(),
                      left: (() => {
                        const el = gestionButtonRef.current;
                        if (!el) return 0;
                        const rect = el.getBoundingClientRect();
                        return rect.left;
                      })(),
                      width: 400,
                      background: '#FFFFFF',
                      borderRadius: 8,
                      boxShadow: '0px 8px 24px -4px rgba(82, 97, 122, 0.24), 0px 0px 0px 1px rgba(82,97,122,0.12)',
                      display: 'flex',
                      flexDirection: 'column',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Popover header */}
                    <div
                      style={{
                        padding: '12px 16px',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 12,
                        borderBottom: '1px solid #E0E3EB',
                      }}
                    >
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 6,
                          background: '#EEEEFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <ListChecked size={18} color="#334199" />
                      </div>
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <span style={{ fontSize: 14, fontWeight: 700, color: '#171A1C', lineHeight: 1.4 }}>
                          Atender solicitud
                        </span>
                        <span style={{ fontSize: 12, color: '#52617A', lineHeight: 1.5 }}>
                          Selecciona una de las opciones de gestión para continuar con el proceso.
                        </span>
                      </div>
                      <button
                        onClick={() => setIsGestionPopoverOpen(false)}
                        style={{
                          background: '#F4F5FA',
                          border: 'none',
                          borderRadius: 4,
                          width: 28,
                          height: 28,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          fontSize: 16,
                          color: '#52617A',
                        }}
                      >
                        ×
                      </button>
                    </div>
                    {/* Popover actions */}
                    <div style={{ padding: 12, display: 'flex', gap: 8 }}>
                      <button
                        onClick={() => setIsGestionPopoverOpen(false)}
                        style={{
                          flex: 1,
                          height: 44,
                          borderRadius: 6,
                          border: 'none',
                          background: '#A8170D',
                          fontSize: 14,
                          fontWeight: 500,
                          color: '#FFFFFF',
                          cursor: 'pointer',
                        }}
                      >
                        Rechazar
                      </button>
                      <button
                        onClick={() => {
                          setIsGestionPopoverOpen(false);
                          setIsIniciarWorkflowModalOpen(true);
                        }}
                        style={{
                          flex: 1,
                          height: 44,
                          borderRadius: 6,
                          border: 'none',
                          background: '#0C5132',
                          fontSize: 14,
                          fontWeight: 500,
                          color: '#FFFFFF',
                          cursor: 'pointer',
                        }}
                      >
                        Iniciar Workflow
                      </button>
                    </div>
                    {/* Arrow pointing down */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: -7,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 14,
                        height: 7,
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          width: 10,
                          height: 10,
                          background: '#FFFFFF',
                          border: '1px solid rgba(82,97,122,0.12)',
                          transform: 'rotate(45deg)',
                          margin: '-5px auto 0',
                          boxShadow: '0px 8px 24px -4px rgba(82, 97, 122, 0.24)',
                        }}
                      />
                    </div>
                  </div>
                </>,
                document.body
              )}
            </div>
          </div>
        )}
      </div>

      {/* Iniciar Workflow confirmation modal */}
      {isIniciarWorkflowModalOpen && createPortal(
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(23, 26, 28, 0.48)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => setIsIniciarWorkflowModalOpen(false)}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: 8,
              boxShadow: '0px 8px 24px -4px rgba(82, 97, 122, 0.24)',
              width: 480,
              maxWidth: '90vw',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div style={{ padding: '20px 24px 16px', borderBottom: '1px solid #E0E3EB' }}>
              <span style={{ fontSize: 18, fontWeight: 700, color: '#171A1C', lineHeight: 1.3 }}>
                Iniciar workflow
              </span>
            </div>
            {/* Body */}
            <div style={{ padding: '20px 24px' }}>
              <p style={{ margin: 0, fontSize: 16, fontWeight: 400, color: '#171A1C', lineHeight: 1.5 }}>
                ¿Confirmas que deseas iniciar el workflow para esta solicitud? Esta acción cambiará el estado a{' '}
                <strong>En curso</strong>.
              </p>
            </div>
            {/* Footer */}
            <div style={{ padding: '16px 24px', borderTop: '1px solid #E0E3EB', display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <button
                onClick={() => setIsIniciarWorkflowModalOpen(false)}
                style={{ padding: '0 16px', height: 40, borderRadius: 6, border: '1px solid #C5CAD6', background: '#FFFFFF', fontSize: 14, fontWeight: 500, color: '#171A1C', cursor: 'pointer' }}
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirmWorkflow}
                style={{ padding: '0 16px', height: 40, borderRadius: 6, border: 'none', background: '#334199', fontSize: 14, fontWeight: 500, color: '#FFFFFF', cursor: 'pointer' }}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Correction request modal */}
      {isCorrectionModalOpen && createPortal(
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(23, 26, 28, 0.48)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => setIsCorrectionModalOpen(false)}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: 8,
              boxShadow: '0px 8px 24px -4px rgba(82, 97, 122, 0.24)',
              width: 480,
              maxWidth: '90vw',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div style={{ padding: '20px 24px 16px', borderBottom: '1px solid #E0E3EB' }}>
              <span style={{ fontSize: 18, fontWeight: 700, color: '#171A1C', lineHeight: 1.3 }}>
                Solicitar corrección
              </span>
            </div>
            {/* Body */}
            <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <p style={{ margin: 0, fontSize: 14, color: '#52617A', lineHeight: 1.5 }}>
                Describe la corrección que debe realizarse en la solicitud. El solicitante podrá revisar y editar los datos antes de reenviarla.
              </p>
              <FormControl label="Descripción de la corrección" required>
                <Textarea
                  value={correctionText}
                  onChange={(e) => setCorrectionText(e.currentTarget.value)}
                  placeholder="Ej: Actualizar la entidad 2 con el nombre correcto del contraparte..."
                  rows={4}
                />
              </FormControl>
            </div>
            {/* Footer */}
            <div style={{ padding: '16px 24px', borderTop: '1px solid #E0E3EB', display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <button
                onClick={() => { setIsCorrectionModalOpen(false); setCorrectionText(''); }}
                style={{ padding: '0 16px', height: 40, borderRadius: 6, border: '1px solid #C5CAD6', background: '#FFFFFF', fontSize: 14, fontWeight: 500, color: '#171A1C', cursor: 'pointer' }}
              >
                Cancelar
              </button>
              <button
                disabled={!correctionText.trim()}
                onClick={() => {
                  const text = correctionText;
                  setIsCorrectionModalOpen(false);
                  setCorrectionText('');
                  onCorrectionRequested(text, { isAssigned, confirmedAssignee, isEnCurso });
                }}
                style={{
                  padding: '0 16px',
                  height: 40,
                  borderRadius: 6,
                  border: 'none',
                  background: correctionText.trim() ? '#334199' : '#C5CAD6',
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#FFFFFF',
                  cursor: correctionText.trim() ? 'pointer' : 'default',
                }}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Confirmation modal */}
      {isConfirmModalOpen && createPortal(
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(23, 26, 28, 0.48)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={handleCancel}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: 8,
              boxShadow: '0px 8px 24px -4px rgba(82, 97, 122, 0.24)',
              width: 480,
              maxWidth: '90vw',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div style={{ padding: '20px 24px 16px', borderBottom: '1px solid #E0E3EB' }}>
              <span style={{ fontSize: 18, fontWeight: 700, color: '#171A1C', lineHeight: 1.3 }}>
                Confirmar asignación
              </span>
            </div>
            {/* Body */}
            <div style={{ padding: '20px 24px' }}>
              <p style={{ margin: 0, fontSize: 16, fontWeight: 400, color: '#171A1C', lineHeight: 1.5 }}>
                ¿Confirmas la asignación de{' '}
                <strong>{displayAssignee[0]?.label}</strong>{' '}
                a esta solicitud?
              </p>
            </div>
            {/* Footer */}
            <div style={{ padding: '16px 24px', borderTop: '1px solid #E0E3EB', display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <button
                onClick={handleCancel}
                style={{ padding: '0 16px', height: 40, borderRadius: 6, border: '1px solid #C5CAD6', background: '#FFFFFF', fontSize: 14, fontWeight: 500, color: '#171A1C', cursor: 'pointer' }}
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirm}
                style={{ padding: '0 16px', height: 40, borderRadius: 6, border: 'none', background: '#334199', fontSize: 14, fontWeight: 500, color: '#FFFFFF', cursor: 'pointer' }}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}

    </div>
  );
};

const DocumentPreview = () => {
  const paragraphStyle: React.CSSProperties = {
    margin: 0,
    fontSize: 14,
    color: '#171A1C',
    lineHeight: 1.7,
    textAlign: 'justify',
  };

  const clauseTitleStyle: React.CSSProperties = {
    margin: 0,
    fontSize: 14,
    fontWeight: 700,
    color: '#171A1C',
    lineHeight: 1.5,
    textTransform: 'uppercase',
    letterSpacing: '0.02em',
  };

  return (
    <div
      style={{
        background: '#FFFFFF',
        border: '1px solid #E0E3EB',
        borderRadius: 8,
        boxShadow: '0px 4px 8px -1px rgba(82, 97, 122, 0.08)',
        padding: '64px 72px',
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        maxWidth: 820,
        margin: '0 auto',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center', textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: '#171A1C', lineHeight: 1.3, textTransform: 'uppercase' }}>
          Contrato de prestación de servicios
        </h1>
        <span style={{ fontSize: 13, color: '#52617A', lineHeight: 1.5 }}>
          Santiago de Chile, a 10 de abril de 2026
        </span>
      </div>

      <p style={paragraphStyle}>
        Entre <strong>Acme Company S.A.</strong>, RUT 76.123.456-7, representada legalmente por don
        <strong> Roberto Farías</strong>, cédula nacional de identidad N° 12.345.678-9, ambos con
        domicilio en Av. Apoquindo 4501, piso 12, comuna de Las Condes, en adelante «la Empresa»;
        y doña <strong>Almendra Acosta</strong>, cédula nacional de identidad N° 18.765.432-1, con
        domicilio en Av. Providencia 1234, comuna de Providencia, en adelante «la Prestadora»; se
        ha convenido el siguiente contrato de prestación de servicios:
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <h2 style={clauseTitleStyle}>Primero: Objeto del contrato</h2>
        <p style={paragraphStyle}>
          La Prestadora se obliga a ejecutar, por cuenta y encargo de la Empresa, los servicios
          profesionales de asesoría legal en materia corporativa, incluyendo la revisión de
          contratos, elaboración de informes en derecho y acompañamiento en negociaciones
          comerciales, conforme a las especificaciones técnicas que las partes acuerden.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <h2 style={clauseTitleStyle}>Segundo: Plazo</h2>
        <p style={paragraphStyle}>
          El presente contrato tendrá una duración de doce (12) meses, contados desde la fecha
          de su suscripción, prorrogables automáticamente por períodos iguales y sucesivos, salvo
          que alguna de las partes manifieste su voluntad en contrario con una anticipación no
          inferior a treinta (30) días corridos a la fecha de vencimiento.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <h2 style={clauseTitleStyle}>Tercero: Honorarios</h2>
        <p style={paragraphStyle}>
          Como contraprestación por los servicios descritos en la cláusula primera, la Empresa
          pagará a la Prestadora la suma mensual de $3.500.000 (tres millones quinientos mil
          pesos chilenos), monto que será pagado dentro de los primeros cinco (5) días hábiles
          del mes siguiente al de la prestación de los servicios, previa emisión de la boleta
          de honorarios correspondiente.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <h2 style={clauseTitleStyle}>Cuarto: Confidencialidad</h2>
        <p style={paragraphStyle}>
          La Prestadora se compromete a mantener estricta reserva sobre toda información técnica,
          comercial, financiera o de cualquier otra naturaleza que conozca con ocasión del presente
          contrato, obligación que subsistirá incluso una vez terminada la relación contractual
          por un plazo de cinco (5) años.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <h2 style={clauseTitleStyle}>Quinto: Terminación anticipada</h2>
        <p style={paragraphStyle}>
          Cualquiera de las partes podrá poner término anticipado al presente contrato, sin
          expresión de causa, mediante aviso por escrito remitido a la otra parte con a lo menos
          treinta (30) días de anticipación, sin que ello genere derecho a indemnización alguna.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <h2 style={clauseTitleStyle}>Sexto: Domicilio y jurisdicción</h2>
        <p style={paragraphStyle}>
          Para todos los efectos legales derivados del presente contrato, las partes fijan su
          domicilio en la ciudad de Santiago y se someten a la jurisdicción de sus Tribunales
          Ordinarios de Justicia.
        </p>
      </div>

      <p style={paragraphStyle}>
        En comprobante y previa lectura, firman las partes en dos ejemplares de igual tenor y
        fecha, quedando uno en poder de cada una.
      </p>

      <div style={{ display: 'flex', gap: 48, marginTop: 40, justifyContent: 'space-around' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, flex: 1 }}>
          <div style={{ borderTop: '1px solid #171A1C', width: '100%', maxWidth: 240 }} />
          <span style={{ fontSize: 13, fontWeight: 700, color: '#171A1C' }}>Roberto Farías</span>
          <span style={{ fontSize: 12, color: '#52617A' }}>Acme Company S.A.</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, flex: 1 }}>
          <div style={{ borderTop: '1px solid #171A1C', width: '100%', maxWidth: 240 }} />
          <span style={{ fontSize: 13, fontWeight: 700, color: '#171A1C' }}>Almendra Acosta</span>
          <span style={{ fontSize: 12, color: '#52617A' }}>Prestadora de servicios</span>
        </div>
      </div>
    </div>
  );
};

const SummaryFieldBlock = ({ label, value }: { label: string; value: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
    <span style={UPPER_LABEL}>{label}</span>
    <span style={VALUE_TEXT}>{value || '—'}</span>
  </div>
);

const SummarySection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
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
    <span style={{ fontSize: 16, fontWeight: 700, color: '#171A1C', lineHeight: 1.5 }}>
      {title}
    </span>
    <Divider />
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>{children}</div>
  </div>
);

const ResumenSection = ({
  contractType,
  formData,
  onEdit,
}: {
  contractType: ContractType;
  formData: WizardFormData;
  onEdit: () => void;
}) => {
  const monedaLabel = formData.moneda.length > 0 ? formData.moneda[0].label : 'CLP';
  const paisLabel = formData.pais.length > 0 ? formData.pais[0].label : '—';
  const sucursalLabel = formData.sucursal.length > 0 ? formData.sucursal[0].label : '—';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
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
        <SummaryFieldBlock
          label="Nombre de la solicitud"
          value={
            formData.nombre ||
            '[Tipo de contrato]+[País del documento]+[Sucursal/Filial]'
          }
        />
        <SummaryFieldBlock
          label="Descripción de la solicitud"
          value={formData.descripcion}
        />
        <SummaryFieldBlock label="Tipo de contrato" value={contractType.label} />
      </SummarySection>

      <SummarySection title="Datos de la solicitud">
        <SummaryFieldBlock label="Entidad 1" value="Acme Company" />
        <SummaryFieldBlock label="Entidad 2" value="Almendra Acosta" />
        <SummaryFieldBlock label="Entidad 3" value="Roberto Farías" />
        <SummaryFieldBlock label="Fecha inicio" value={formatDate(formData.fechaInicio)} />
        <SummaryFieldBlock label="Fecha de término" value={formatDate(formData.fechaTermino)} />
        <SummaryFieldBlock
          label="Moneda"
          value={`${monedaLabel}${formData.valor ? ` ${formData.valor}` : ''}`}
        />
        <SummaryFieldBlock label="País del documento" value={paisLabel} />
        <SummaryFieldBlock label="Sucursal / Filial" value={sucursalLabel} />
      </SummarySection>
    </div>
  );
};

const ACTOR_OPTIONS = [
  { id: 'empresa-a', label: 'Empresa A' },
  { id: 'empresa-b', label: 'Empresa B' },
  { id: 'empresa-c', label: 'Empresa C' },
  { id: 'persona-natural', label: 'Persona Natural' },
  { id: 'filial-norte', label: 'Filial Norte' },
];

type SelectOption = { id: string; label: string };

export const EntidadEditView = ({ onSave }: { onSave: () => void }) => {
  const [entidad1, setEntidad1] = useState<SelectOption[]>([]);
  const [entidad2, setEntidad2] = useState<SelectOption[]>([]);
  const [entidad3, setEntidad3] = useState<SelectOption[]>([]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: '#171A1C', lineHeight: 1.3 }}>
          Editar actores del contrato
        </h2>
      </div>

      <Notification
        kind="warning"
        title="Corrección solicitada"
        description="Se ha solicitado una corrección. Actualiza los actores del contrato y guarda los cambios."
        Icon={Warning}
      />

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
        <span style={{ fontSize: 16, fontWeight: 700, color: '#171A1C' }}>Actores del contrato</span>
        <Divider />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <FormControl label="Entidad 1">
            <Select
              options={ACTOR_OPTIONS}
              value={entidad1}
              onChange={(v) => setEntidad1(v as SelectOption[])}
              placeholder="Seleccionar"
              valueKey="id"
              labelKey="label"
            />
          </FormControl>
          <FormControl label="Entidad 2">
            <Select
              options={ACTOR_OPTIONS}
              value={entidad2}
              onChange={(v) => setEntidad2(v as SelectOption[])}
              placeholder="Seleccionar"
              valueKey="id"
              labelKey="label"
            />
          </FormControl>
          <FormControl label="Entidad 3">
            <Select
              options={ACTOR_OPTIONS}
              value={entidad3}
              onChange={(v) => setEntidad3(v as SelectOption[])}
              placeholder="Seleccionar"
              valueKey="id"
              labelKey="label"
            />
          </FormControl>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 8 }}>
          <ButtonNext kind="brand" appearance="filled" onClick={onSave}>
            Guardar cambios
          </ButtonNext>
        </div>
      </div>
    </div>
  );
};

export const SolicitudSubmittedView = ({
  contractType,
  formData,
  onExit,
  initialGestionState,
}: SolicitudSubmittedViewProps) => {
  const history = useHistory();
  const [activeTab, setActiveTab] = useState<'resumen' | 'documento'>('resumen');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        background: '#F4F5FA',
      }}
    >
      <PageHeader
        title=""
        showBorder
        startEnhancer={
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <IconButton kind="control" size="32px" onClick={onExit}>
              <ArrowLeft size={20} />
            </IconButton>
            <Breadcrumbs>
              <Breadcrumbs.Item label="Gestor de procesos" isFirst onClick={onExit}>
                Gestor de procesos
              </Breadcrumbs.Item>
              <Breadcrumbs.Item label="Nueva solicitud" isLast>
                Nueva solicitud
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
              borderBottom:
                activeTab === 'resumen' ? '2px solid #334199' : '2px solid transparent',
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
              borderBottom:
                activeTab === 'documento' ? '2px solid #334199' : '2px solid transparent',
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
        <div style={{ flex: '1 1 300px', minWidth: 0, padding: 8, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
          <GestionCard
            initialIsAssigned={initialGestionState?.isAssigned}
            initialConfirmedAssignee={initialGestionState?.confirmedAssignee}
            initialIsEnCurso={initialGestionState?.isEnCurso}
            onCorrectionRequested={(text, gestionState) => history.push('/processes/new', {
              editStep: 5,
              isCorrectionMode: true,
              correctionMessage: text,
              gestionState,
              process: { id: 'SOL-001', nombre: formData.nombre || 'Solicitud', tipoContrato: contractType.id },
            })}
          />
        </div>
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
              <ResumenSection
                contractType={contractType}
                formData={formData}
                onEdit={onExit}
              />
            ) : (
              <DocumentPreview />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
