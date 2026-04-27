import { useRef, useState } from 'react';
import { ArrowRight, Edit, DocumentBlank, RequestQuote, DataFormat, Result, Save } from '@carbon/icons-react';
import { IconButton } from '@webdoxclm/design-system/button/variants/icon-button';

import { FormCard } from '@webdoxclm/design-system/form-card';
import { FormControl } from '@webdoxclm/design-system/form-control';
import { Input } from '@webdoxclm/design-system/input/next';
import { Textarea } from '@webdoxclm/design-system/textarea';
import { Select } from '@webdoxclm/design-system/select';
import { Datepicker } from '@webdoxclm/design-system/datepicker';
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

const CURRENCY_OPTIONS = [
  { id: 'CLP', label: 'CLP' },
  { id: 'USD', label: 'USD' },
  { id: 'EUR', label: 'EUR' },
  { id: 'UF', label: 'UF' },
];

const ERROR_MESSAGE = 'Este campo es requerido';
const NO_CAPTION_ICON = { CaptionIcon: { style: { display: 'none' } } };

type Step2FormProps = {
  contractType: ContractType;
  formData: WizardFormData;
  onUpdateFormData: (partial: Partial<WizardFormData>) => void;
  onBack: () => void;
  onContinue: () => void;
  draftSavedAt?: string | null;
  draftId?: string | null;
  onSaveDraft?: () => void;
};

export const Step2Form = ({ contractType, formData, onUpdateFormData, onBack, onContinue, draftSavedAt, draftId, onSaveDraft }: Step2FormProps) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const nombreRef = useRef<HTMLDivElement>(null);
  const fechaInicioRef = useRef<HTMLDivElement>(null);
  const fechaTerminoRef = useRef<HTMLDivElement>(null);
  const monedaRef = useRef<HTMLDivElement>(null);
  const valorRef = useRef<HTMLDivElement>(null);

  const focusField = (ref: React.RefObject<HTMLDivElement | null>) => {
    const input = ref.current?.querySelector('input');
    input?.focus();
  };

  const handleContinue = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nombre.trim()) newErrors.nombre = ERROR_MESSAGE;
    if (!formData.fechaInicio) newErrors.fechaInicio = ERROR_MESSAGE;
    if (!formData.fechaTermino) newErrors.fechaTermino = ERROR_MESSAGE;
    if (formData.moneda.length === 0) newErrors.moneda = ERROR_MESSAGE;
    if (!formData.valor.trim()) newErrors.valor = ERROR_MESSAGE;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      const fieldRefs = [
        { key: 'nombre', ref: nombreRef },
        { key: 'fechaInicio', ref: fechaInicioRef },
        { key: 'fechaTermino', ref: fechaTerminoRef },
        { key: 'moneda', ref: monedaRef },
        { key: 'valor', ref: valorRef },
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

        {/* Divider */}
        <hr style={{ border: 'none', borderTop: '1px solid #E5E7EB', margin: 0 }} />

        {/* Sección: Información de la solicitud */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <BackgroundIcon icon={DataFormat} kind="brand" appearance="tonal" size="32px" />
            <span style={{ fontSize: 16, fontWeight: 600 }}>Información de la solicitud</span>
          </div>

          <div ref={nombreRef}>
            <FormControl label="Nombre de la solicitud" required error={!!errors.nombre} caption={errors.nombre} overrides={NO_CAPTION_ICON}>
              <Input
                placeholder="Ingresar nombre"
                value={formData.nombre}
                error={!!errors.nombre}
                onChange={(e) => {
                  onUpdateFormData({ nombre: e.currentTarget.value });
                  if (errors.nombre) setErrors((prev) => ({ ...prev, nombre: '' }));
                }}
              />
            </FormControl>
          </div>

          <FormControl label="Descripción de la solicitud (opcional)">
            <Textarea
              placeholder="Ingresar"
              value={formData.descripcion}
              onChange={(e) => onUpdateFormData({ descripcion: e.currentTarget.value })}
              resize="vertical"
            />
          </FormControl>
        </div>

        {/* Divider */}
        <hr style={{ border: 'none', borderTop: '1px solid #E5E7EB', margin: 0 }} />

        {/* Sección: Campos solicitados */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <BackgroundIcon icon={Result} kind="brand" appearance="tonal" size="32px" />
            <span style={{ fontSize: 16, fontWeight: 600 }}>Campos solicitados</span>
          </div>

          <Notification
            kind="info"
            title="Instrucciones"
            description="Instrucciones entregadas por el usuario en la configuración de la solicitud."
          />

          <div ref={fechaInicioRef} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <FormControl label="Fecha de inicio" required error={!!errors.fechaInicio} caption={errors.fechaInicio} overrides={NO_CAPTION_ICON}>
              <Datepicker
                placeholder="Seleccionar fecha"
                value={formData.fechaInicio ? new Date(formData.fechaInicio) : undefined}
                error={!!errors.fechaInicio}
                onChange={({ date }) => {
                  onUpdateFormData({ fechaInicio: date instanceof Date ? date.toISOString() : '' });
                  if (errors.fechaInicio) setErrors((prev) => ({ ...prev, fechaInicio: '' }));
                }}
                formatString="dd/MM/yyyy"
              />
            </FormControl>
          </div>

          <div ref={fechaTerminoRef} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <FormControl label="Fecha de término" required error={!!errors.fechaTermino} caption={errors.fechaTermino} overrides={NO_CAPTION_ICON}>
              <Datepicker
                placeholder="Seleccionar fecha"
                value={formData.fechaTermino ? new Date(formData.fechaTermino) : undefined}
                error={!!errors.fechaTermino}
                onChange={({ date }) => {
                  onUpdateFormData({ fechaTermino: date instanceof Date ? date.toISOString() : '' });
                  if (errors.fechaTermino) setErrors((prev) => ({ ...prev, fechaTermino: '' }));
                }}
                formatString="dd/MM/yyyy"
              />
            </FormControl>
          </div>

          <div style={{ display: 'flex', gap: 12 }}>
            <div ref={monedaRef} style={{ width: 120 }}>
              <FormControl label="Moneda" required error={!!errors.moneda} caption={errors.moneda} overrides={NO_CAPTION_ICON}>
                <Select
                  options={CURRENCY_OPTIONS}
                  value={formData.moneda}
                  error={!!errors.moneda}
                  onChange={(value) => {
                    onUpdateFormData({ moneda: value as { id: string; label: string }[] });
                    if (errors.moneda) setErrors((prev) => ({ ...prev, moneda: '' }));
                  }}
                  placeholder="Sele..."
                  valueKey="id"
                  labelKey="label"
                />
              </FormControl>
            </div>
            <div ref={valorRef} style={{ flex: 1 }}>
              <FormControl label="Valor" required error={!!errors.valor} caption={errors.valor} overrides={NO_CAPTION_ICON}>
                <Input
                  placeholder="Ingresar"
                  value={formData.valor}
                  error={!!errors.valor}
                  type="number"
                  min="0"
                  onChange={(e) => {
                    const raw = e.currentTarget.value;
                    if (raw !== '' && !/^\d*\.?\d*$/.test(raw)) return;
                    onUpdateFormData({ valor: raw });
                    if (errors.valor) setErrors((prev) => ({ ...prev, valor: '' }));
                  }}
                />
              </FormControl>
            </div>
          </div>
        </div>
      </div>
    </FormCard>
  );
};
