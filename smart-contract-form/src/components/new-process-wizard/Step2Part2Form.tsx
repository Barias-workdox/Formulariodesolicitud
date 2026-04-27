import { useRef, useState } from 'react';
import { ArrowRight, Edit, DocumentBlank, Result, Save } from '@carbon/icons-react';
import { IconButton } from '@webdoxclm/design-system/button/variants/icon-button';

import { FormCard } from '@webdoxclm/design-system/form-card';
import { FormControl } from '@webdoxclm/design-system/form-control';
import { Select } from '@webdoxclm/design-system/select';
import { SectionedCard } from '@webdoxclm/design-system/components/layouts/cards/sectioned-card/next/sectioned-card.container';
import { Notification } from '@webdoxclm/design-system/notification/next';
import { BackgroundIcon } from '@webdoxclm/design-system/background-icon/next';
import { Tag } from '@webdoxclm/design-system/tag/next';

import type { ContractType, WizardFormData } from './new-process-wizard.data';

const formatDraftDate = (iso: string) => {
  const d = new Date(iso);
  const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  const h = String(d.getHours()).padStart(2, '0');
  const m = String(d.getMinutes()).padStart(2, '0');
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}, ${h}:${m}`;
};

const COUNTRY_OPTIONS = [
  { id: 'CL', label: 'Chile' },
  { id: 'AR', label: 'Argentina' },
  { id: 'CO', label: 'Colombia' },
  { id: 'MX', label: 'México' },
  { id: 'PE', label: 'Perú' },
  { id: 'BR', label: 'Brasil' },
  { id: 'US', label: 'Estados Unidos' },
  { id: 'ES', label: 'España' },
];

const BRANCH_OPTIONS = [
  { id: 'casa-matriz', label: 'Casa Matriz' },
  { id: 'sucursal-norte', label: 'Sucursal Norte' },
  { id: 'sucursal-sur', label: 'Sucursal Sur' },
  { id: 'filial-internacional', label: 'Filial Internacional' },
  { id: 'oficina-regional', label: 'Oficina Regional' },
];

const ERROR_MESSAGE = 'Este campo es requerido';
const NO_CAPTION_ICON = { CaptionIcon: { style: { display: 'none' } } };

type Step2Part2FormProps = {
  contractType: ContractType;
  formData: WizardFormData;
  onUpdateFormData: (partial: Partial<WizardFormData>) => void;
  onBack: () => void;
  onContinue: () => void;
  draftSavedAt?: string | null;
  draftId?: string | null;
  onSaveDraft?: () => void;
};

export const Step2Part2Form = ({ contractType, formData, onUpdateFormData, onBack, onContinue, draftSavedAt, draftId, onSaveDraft }: Step2Part2FormProps) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const paisRef = useRef<HTMLDivElement>(null);
  const sucursalRef = useRef<HTMLDivElement>(null);

  const focusField = (ref: React.RefObject<HTMLDivElement | null>) => {
    const input = ref.current?.querySelector('input');
    input?.focus();
  };

  const handleContinue = () => {
    const newErrors: Record<string, string> = {};

    if (formData.pais.length === 0) newErrors.pais = ERROR_MESSAGE;
    if (formData.sucursal.length === 0) newErrors.sucursal = ERROR_MESSAGE;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      const fieldRefs = [
        { key: 'pais', ref: paisRef },
        { key: 'sucursal', ref: sucursalRef },
      ];
      const firstError = fieldRefs.find((f) => newErrors[f.key]);
      if (firstError) focusField(firstError.ref);
      return;
    }

    setErrors({});
    onContinue();
  };

  return (
    <FormCard
      $maxWidth="100%"
      title="Formulario de solicitud"
      onBack={onBack}
      headerInfo={draftSavedAt ? <Tag kind="peace" variant="light">Borrador</Tag> : undefined}
      headerTitle="Completa los campos obligatorios (*) del formulario para continuar"
      headerSubtitle={draftId ? `ID: ${draftId}` : undefined}
      footerLabel={draftSavedAt ? 'Último guardado' : undefined}
      footerText={draftSavedAt ? formatDraftDate(draftSavedAt) : undefined}
      footerActions={
        <FormCard.FooterActions
          cancelButton={{
            text: 'Guardar borrador',
            size: '44px',
            startEnhancer: () => <Save size={16} />,
            onClick: onSaveDraft,
          }}
          submitButton={{
            text: 'Continuar',
            size: '44px',
            endEnhancer: () => <ArrowRight size={16} />,
            onClick: handleContinue,
          }}
        />
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: '8px' }}>
        {/* Tipo de contrato card */}
        <SectionedCard
          hasBorderHeader
          body={
            <SectionedCard.Body>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', color: '#6B7280', letterSpacing: '0.05em' }}>
                    Tipo de contrato
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 500, marginTop: 2, color: '#0B0E0F' }}>
                    {contractType.label.replace('Contrato de ', '').replace('Contrato ', '')}
                  </div>
                </div>
                <IconButton kind="secondary" size="32px" onClick={onBack}>
                  <Edit size={16} />
                </IconButton>
              </div>
            </SectionedCard.Body>
          }
        />

        {/* Sección: Parte 2 - Campos solicitados */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <BackgroundIcon icon={Result} kind="brand" appearance="tonal" size="32px" />
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', color: '#6B7280', letterSpacing: '0.05em' }}>
                Parte 2
              </div>
              <span style={{ fontSize: 16, fontWeight: 600 }}>Campos solicitados</span>
            </div>
          </div>

          <Notification
            kind="info"
            title="Instrucciones"
            description="Instrucciones entregadas por el usuario en la configuración de la solicitud."
          />

          <div ref={paisRef}>
            <FormControl label="País del documento" required error={!!errors.pais} caption={errors.pais} overrides={NO_CAPTION_ICON}>
              <Select
                options={COUNTRY_OPTIONS}
                value={formData.pais}
                error={!!errors.pais}
                onChange={(value) => {
                  onUpdateFormData({ pais: value as { id: string; label: string }[] });
                  if (errors.pais) setErrors((prev) => ({ ...prev, pais: '' }));
                }}
                placeholder="Seleccionar"
                valueKey="id"
                labelKey="label"
              />
            </FormControl>
          </div>

          <div ref={sucursalRef}>
            <FormControl label="Sucursal / Filial" required error={!!errors.sucursal} caption={errors.sucursal} overrides={NO_CAPTION_ICON}>
              <Select
                options={BRANCH_OPTIONS}
                value={formData.sucursal}
                error={!!errors.sucursal}
                onChange={(value) => {
                  onUpdateFormData({ sucursal: value as { id: string; label: string }[] });
                  if (errors.sucursal) setErrors((prev) => ({ ...prev, sucursal: '' }));
                }}
                placeholder="Seleccionar"
                valueKey="id"
                labelKey="label"
              />
            </FormControl>
          </div>
        </div>
      </div>
    </FormCard>
  );
};
