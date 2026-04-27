import { useState } from 'react';
import { Edit, View, Information, Checkmark, DocumentBlank, UserAvatar, Save, SendAlt } from '@carbon/icons-react';
import { IconButton } from '@webdoxclm/design-system/button/variants/icon-button';
import { StatefulInformationPopover } from '@webdoxclm/design-system/information-popover';

import { FormCard } from '@webdoxclm/design-system/form-card';
import { FormControl } from '@webdoxclm/design-system/form-control';
import { Select } from '@webdoxclm/design-system/select';
import { SectionedCard } from '@webdoxclm/design-system/layouts/cards/sectioned-card/next/sectioned-card.container';
import { BackgroundIcon } from '@webdoxclm/design-system/background-icon/next';
import { Tag } from '@webdoxclm/design-system/tag/next';
import { Notification } from '@webdoxclm/design-system/notification/next';

import type { ContractType, WizardFormData } from './new-process-wizard.data';

const formatDraftDate = (iso: string) => {
  const d = new Date(iso);
  const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  const h = String(d.getHours()).padStart(2, '0');
  const m = String(d.getMinutes()).padStart(2, '0');
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}, ${h}:${m}`;
};

type Step3SummaryProps = {
  contractType: ContractType;
  formData: WizardFormData;
  onBack: () => void;
  onGoToStep: (step: number) => void;
  onSubmit: () => void;
  draftSavedAt?: string | null;
  draftId?: string | null;
  onSaveDraft?: () => void;
  isCorrectionMode?: boolean;
  onFinishCorrection?: () => void;
};

const ACTOR_OPTIONS = [
  { id: 'empresa-a', label: 'Empresa A' },
  { id: 'empresa-b', label: 'Empresa B' },
  { id: 'empresa-c', label: 'Empresa C' },
  { id: 'persona-natural', label: 'Persona Natural' },
  { id: 'filial-norte', label: 'Filial Norte' },
];

type SelectOption = { id: string; label: string };

const SummaryField = ({ label, value }: { label: string; value: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
    <span style={{ fontSize: 12, fontWeight: 600, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
      {label}
    </span>
    <span style={{ fontSize: 14, color: '#111827' }}>{value || '—'}</span>
  </div>
);

export const Step3Summary = ({ contractType, formData, onBack, onGoToStep, onSubmit, draftSavedAt, draftId, onSaveDraft, isCorrectionMode, onFinishCorrection }: Step3SummaryProps) => {
  const templateName = `Plantilla ${contractType.label}`;
  const [entidad1, setEntidad1] = useState<SelectOption[]>([]);
  const [entidad2, setEntidad2] = useState<SelectOption[]>([]);
  const [entidad3, setEntidad3] = useState<SelectOption[]>([]);

  return (
    <FormCard
      $maxWidth="100%"
      title="Formulario de solicitud"
      onBack={onBack}
      headerInfo={
        isCorrectionMode
          ? <Tag kind="warning" variant="light">En corrección</Tag>
          : draftSavedAt
            ? <Tag kind="peace" variant="light">Borrador</Tag>
            : undefined
      }
      headerTitle="Revisa y envía la solicitud"
      headerSubtitle={
        draftId
          ? `ID: ${draftId}`
          : 'Asigna los actores que participarán en el contrato y confirma los datos ingresados antes de enviar.'
      }
      footerLabel={draftSavedAt ? 'Último guardado' : undefined}
      footerText={draftSavedAt ? formatDraftDate(draftSavedAt) : undefined}
      footerActions={
        isCorrectionMode ? (
          <FormCard.FooterActions
            submitButton={{
              text: 'Finalizar corrección',
              size: '44px',
              kind: 'brand',
              startEnhancer: () => <SendAlt size={16} />,
              onClick: onFinishCorrection,
            }}
          />
        ) : (
          <FormCard.FooterActions
            cancelButton={{
              text: 'Guardar borrador',
              size: '44px',
              startEnhancer: () => <Save size={16} />,
              onClick: onSaveDraft,
            }}
            submitButton={{
              text: 'Enviar solicitud',
              size: '44px',
              kind: 'positive',
              startEnhancer: () => <Checkmark size={16} />,
              onClick: onSubmit,
            }}
          />
        )
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: '8px' }}>
        {isCorrectionMode && (
          <Notification
            kind="warning"
            title="El tiempo restante (SLA) permanecerá en pausa hasta que se completen los cambios."
          />
        )}

        {/* Actores del contrato */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <BackgroundIcon icon={UserAvatar} kind="brand" appearance="tonal" size="32px" />
            <span style={{ fontSize: 16, fontWeight: 600 }}>Actores del contrato</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              <FormControl label="Entidad 1">
                <Select
                  options={ACTOR_OPTIONS}
                  value={entidad1}
                  onChange={(value) => setEntidad1(value as SelectOption[])}
                  placeholder="Seleccionar"
                  valueKey="id"
                  labelKey="label"
                />
              </FormControl>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              <FormControl label="Entidad 2">
                <Select
                  options={ACTOR_OPTIONS}
                  value={entidad2}
                  onChange={(value) => setEntidad2(value as SelectOption[])}
                  placeholder="Seleccionar"
                  valueKey="id"
                  labelKey="label"
                />
              </FormControl>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              <FormControl label="Entidad 3">
                <Select
                  options={ACTOR_OPTIONS}
                  value={entidad3}
                  onChange={(value) => setEntidad3(value as SelectOption[])}
                  placeholder="Seleccionar"
                  valueKey="id"
                  labelKey="label"
                />
              </FormControl>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #E5E7EB', margin: 0 }} />

        {/* Resumen de datos completados */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <span style={{ fontSize: 16, fontWeight: 600 }}>Resumen de datos completados</span>

          {/* Plantilla de contrato */}
          <SectionedCard
            hasBorderHeader
            body={
              <SectionedCard.Body>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', color: '#6B7280', letterSpacing: '0.05em' }}>
                      Plantilla de contrato
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 500, marginTop: 2, color: '#0B0E0F' }}>
                      {templateName}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <IconButton kind="secondary" size="32px">
                      <View size={16} />
                    </IconButton>
                    <StatefulInformationPopover
                      data-testid="plantilla-info-popover"
                      title="Plantilla de contrato"
                      content="Esta plantilla se determino en base a las respuestas seleccionadas en el formulario."
                    >
                      <IconButton kind="secondary" size="32px">
                        <Information size={16} />
                      </IconButton>
                    </StatefulInformationPopover>
                  </div>
                </div>
              </SectionedCard.Body>
            }
          />

          {/* Tipo de contrato */}
          <SectionedCard
            hasBorderHeader
            body={
              <SectionedCard.Body>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', color: '#6B7280', letterSpacing: '0.05em' }}>
                      Tipo de contrato
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 500, marginTop: 2, color: '#0B0E0F' }}>
                      {contractType.label}
                    </div>
                  </div>
                  <IconButton kind="secondary" size="32px" onClick={() => onGoToStep(1)}>
                    <Edit size={16} />
                  </IconButton>
                </div>
              </SectionedCard.Body>
            }
          />

          {/* Campos solicitados Parte 1 */}
          <SectionedCard
            hasBorderHeader
            header={
              <SectionedCard.Header
                title="Campos solicitados Parte 1"
                enhancer={
                  <SectionedCard.BackgroundIcon icon={DocumentBlank} kind="brand" appearance="tonal" />
                }
                actions={
                  <IconButton kind="secondary" size="32px" onClick={() => onGoToStep(2)}>
                    <Edit size={16} />
                  </IconButton>
                }
              />
            }
            body={
              <SectionedCard.Body>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <SummaryField label="Nombre" value={formData.nombre} />
                  <SummaryField label="Descripción" value={formData.descripcion} />
                  <SummaryField label="Fecha inicio" value={formData.fechaInicio} />
                  <SummaryField label="Fecha término" value={formData.fechaTermino} />
                  <SummaryField
                    label="Moneda"
                    value={formData.moneda.length > 0 ? formData.moneda[0].label : ''}
                  />
                  <SummaryField label="Valor" value={formData.valor} />
                </div>
              </SectionedCard.Body>
            }
          />

          {/* Campos solicitados Parte 2 */}
          <SectionedCard
            hasBorderHeader
            header={
              <SectionedCard.Header
                title="Campos solicitados Parte 2"
                enhancer={
                  <SectionedCard.BackgroundIcon icon={DocumentBlank} kind="brand" appearance="tonal" />
                }
                actions={
                  <IconButton kind="secondary" size="32px" onClick={() => onGoToStep(3)}>
                    <Edit size={16} />
                  </IconButton>
                }
              />
            }
            body={
              <SectionedCard.Body>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <SummaryField
                    label="País del documento"
                    value={formData.pais.length > 0 ? formData.pais[0].label : ''}
                  />
                  <SummaryField
                    label="Sucursal / Filial"
                    value={formData.sucursal.length > 0 ? formData.sucursal[0].label : ''}
                  />
                </div>
              </SectionedCard.Body>
            }
          />
        </div>
      </div>
    </FormCard>
  );
};
