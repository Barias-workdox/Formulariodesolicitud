import { useMemo, useState, useRef, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Search, Chat, SendAlt } from '@carbon/icons-react';

import { Drawer } from '@webdoxclm/design-system/drawer';
import { FormCard } from '@webdoxclm/design-system/form-card';
import { PageHeader } from '@webdoxclm/design-system/page-header';
import { IconButton } from '@webdoxclm/design-system/button/variants/icon-button';
import { Breadcrumbs } from '@webdoxclm/design-system/breadcrumbs/next';
import { RadioGroup } from '@webdoxclm/design-system/radio';
import { Input } from '@webdoxclm/design-system/input/next';
import { Notification } from '@webdoxclm/design-system/notification/next';
import { getToasterContainerContext, ToasterContainerProvider, useToaster } from '@webdoxclm/design-system/notification/toast';

import { MOCK_CONTRACT_TYPES } from './new-process-wizard.data';
import { Step2Form } from './Step2Form';
import { Step2Part2Form } from './Step2Part2Form';
import { Step3Summary } from './Step3Summary';
import { SolicitudSubmittedView } from './SolicitudSubmittedView';
import type { GestionState } from './SolicitudSubmittedView';

import type { ContractType, WizardFormData } from './new-process-wizard.data';

const toasterContext = getToasterContainerContext();

const INITIAL_FORM_DATA: WizardFormData = {
  nombre: '',
  descripcion: '',
  fechaInicio: '',
  fechaTermino: '',
  moneda: [{ id: 'CLP', label: 'CLP' }],
  valor: '',
  pais: [],
  sucursal: [],
};

const MOCK_PROCESS_FORM_DATA: Record<string, Partial<WizardFormData>> = {
  'PC-001': {
    nombre: 'Contrato de prestación de servicios TI',
    descripcion: 'Contratación de servicios de desarrollo y soporte de sistemas para el área de TI corporativa.',
    fechaInicio: '2025-03-01T00:00:00.000Z',
    fechaTermino: '2026-02-28T00:00:00.000Z',
    moneda: [{ id: 'CLP', label: 'CLP' }],
    valor: '4.500.000',
    pais: [{ id: 'CL', label: 'Chile' }],
    sucursal: [{ id: 'casa-matriz', label: 'Casa Matriz' }],
  },
};

type EditLocationState = {
  editStep: number;
  process: { id: string; nombre: string; tipoContrato: string };
  isCorrectionMode?: boolean;
  correctionMessage?: string;
  gestionState?: GestionState;
  draftSavedAt?: string;
} | undefined;

export const NewProcessWizard = () => (
  <ToasterContainerProvider toasterContext={toasterContext}>
    <NewProcessWizardInner />
  </ToasterContainerProvider>
);

const NewProcessWizardInner = () => {
  const toaster = useToaster(toasterContext);
  const history = useHistory();
  const location = useLocation<EditLocationState>();
  const editState = location.state;

  const resolvedContractType = editState
    ? MOCK_CONTRACT_TYPES.find((ct) =>
        ct.label.toLowerCase().includes(editState.process.tipoContrato.toLowerCase()) ||
        editState.process.tipoContrato.toLowerCase().includes(ct.id)
      ) ?? MOCK_CONTRACT_TYPES[0]
    : null;

  const resolvedFormData: WizardFormData = editState
    ? { ...INITIAL_FORM_DATA, nombre: editState.process.nombre, ...(MOCK_PROCESS_FORM_DATA[editState.process.id] ?? {}) }
    : INITIAL_FORM_DATA;

  const siblingRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(editState?.editStep ?? 1);
  const [selectedContractType, setSelectedContractType] = useState<ContractType | null>(resolvedContractType);
  const [formData, setFormData] = useState<WizardFormData>(resolvedFormData);
  const [submitted, setSubmitted] = useState(false);
  const [draftSavedAt, setDraftSavedAt] = useState<string | null>(editState?.draftSavedAt ?? null);
  const [draftId, setDraftId] = useState<string | null>(editState ? editState.process.id : null);

  const isCorrectionMode = editState?.isCorrectionMode ?? false;
  const correctionMessage = editState?.correctionMessage ?? '';

  useEffect(() => {
    if (editState?.isCorrectionMode) {
      setSubmitted(false);
      setCurrentStep(editState.editStep ?? 4);
    }
  }, [editState?.isCorrectionMode]);

  const updateFormData = (partial: Partial<WizardFormData>) => {
    setFormData((prev) => ({ ...prev, ...partial }));
  };

  const handleBack = () => {
    if (currentStep === 1) {
      history.push('/processes');
    } else {
      setCurrentStep((s) => s - 1);
    }
  };

  const handleContinue = () => {
    setCurrentStep((s) => s + 1);
  };

  const goToStep = (step: number) => {
    setCurrentStep(step);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleFinishCorrection = () => {
    const gestionState = editState?.gestionState;
    const process = editState?.process;
    setSubmitted(true);
    history.replace('/processes/new', gestionState && process ? { gestionState, process, editStep: 4 } : undefined);
  };

  const handleSaveDraft = () => {
    if (!draftId) setDraftId('SOL-001');
    setDraftSavedAt(new Date().toISOString());
    toaster.positive({
      title: '¡Listo!',
      body: 'Solicitud guardada como borrador.',
      zIndex: 9999,
    });
  };

  if (submitted && selectedContractType) {
    return (
      <SolicitudSubmittedView
        contractType={selectedContractType}
        formData={formData}
        onExit={() => history.push('/processes')}
        initialGestionState={editState?.gestionState}
      />
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#FFFFFF' }}>
      <PageHeader
        title=""
        showBorder
        startEnhancer={
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <IconButton
              kind="control"
              size="32px"
              onClick={() => history.push('/processes')}
            >
              <ArrowLeft size={20} />
            </IconButton>
            <Breadcrumbs>
              <Breadcrumbs.Item label="Procesos" isFirst onClick={() => history.push('/processes')}>
                Procesos
              </Breadcrumbs.Item>
              <Breadcrumbs.Item label={editState?.process.nombre ?? 'Nueva solicitud'} isLast>
                {editState?.process.nombre ?? 'Nueva solicitud'}
              </Breadcrumbs.Item>
            </Breadcrumbs>
          </div>
        }
      />

      <div
        ref={siblingRef}
        style={{ flex: 1, display: 'flex', overflow: 'hidden' }}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            padding: '24px 16px',
            overflow: 'auto',
            background: '#F4F5FA',
            gap: 16,
          }}
        >
          <div style={{ width: '100%', maxWidth: 736, background: '#FFFFFF', borderRadius: 12, flexShrink: 0 }}>
            {currentStep === 1 && (
              <Step1
                selectedContractType={selectedContractType}
                onSelect={setSelectedContractType}
                onBack={handleBack}
                onContinue={handleContinue}
              />
            )}
            {currentStep === 2 && selectedContractType && (
              <Step2Form
                contractType={selectedContractType}
                formData={formData}
                onUpdateFormData={updateFormData}
                onBack={handleBack}
                onContinue={handleContinue}
                draftSavedAt={draftSavedAt}
                draftId={draftId}
                onSaveDraft={handleSaveDraft}
              />
            )}
            {currentStep === 3 && selectedContractType && (
              <Step2Part2Form
                contractType={selectedContractType}
                formData={formData}
                onUpdateFormData={updateFormData}
                onBack={handleBack}
                onContinue={handleContinue}
                draftSavedAt={draftSavedAt}
                draftId={draftId}
                onSaveDraft={handleSaveDraft}
              />
            )}
            {currentStep === 4 && selectedContractType && (
              <Step3Summary
                contractType={selectedContractType}
                formData={formData}
                onBack={handleBack}
                onGoToStep={goToStep}
                onSubmit={handleSubmit}
                draftSavedAt={draftSavedAt}
                draftId={draftId}
                onSaveDraft={handleSaveDraft}
                isCorrectionMode={isCorrectionMode}
                onFinishCorrection={handleFinishCorrection}
              />
            )}
          </div>
        </div>
        <Drawer
          drawerType="slide"
          isOpen={isCorrectionMode && currentStep === 4}
          sibling={siblingRef}
          anchor="right"
          size="500px"
          showBackdrop={false}
          onClose={() => {}}
        >
          <CorrectionChatDrawer message={correctionMessage} />
        </Drawer>
      </div>
    </div>
  );
};

type ChatMessage = { from: 'manager' | 'me'; text: string; name: string; timestamp: string };

const formatTimestamp = (date: Date) =>
  date.toLocaleDateString('es', { day: '2-digit', month: 'short', year: 'numeric' }).replace('.', '') +
  ', ' +
  date.toLocaleTimeString('es', { hour: '2-digit', minute: '2-digit' });

const getInitials = (name: string) =>
  name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase();

const MessageCard = ({ msg, onDelete, onSave }: { msg: ChatMessage; onDelete: () => void; onSave: (text: string) => void }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(msg.text);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleSave = () => { onSave(editText); setEditing(false); };
  const handleCancel = () => { setEditText(msg.text); setEditing(false); };

  return (
    <div style={{ background: '#FFFFFF', border: `1px solid ${editing ? '#334199' : '#E0E3EB'}`, borderRadius: 12, padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#334199', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>
          {getInitials(msg.name)}
        </div>
        {editing ? (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <textarea
              value={editText}
              onChange={e => setEditText(e.target.value)}
              autoFocus
              rows={4}
              style={{ width: '100%', resize: 'none', border: 'none', outline: 'none', fontSize: 14, fontFamily: 'inherit', lineHeight: 1.6, color: '#171A1C', boxSizing: 'border-box' }}
            />
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
              <button onClick={handleCancel} style={{ padding: '8px 16px', borderRadius: 8, border: '1px solid #C5CAD6', background: '#FFFFFF', fontSize: 13, fontWeight: 600, color: '#171A1C', cursor: 'pointer' }}>
                Cancelar
              </button>
              <button onClick={handleSave} style={{ padding: '8px 16px', borderRadius: 8, border: 'none', background: '#334199', fontSize: 13, fontWeight: 600, color: '#FFFFFF', cursor: 'pointer' }}>
                Guardar
              </button>
            </div>
          </div>
        ) : (
          <div style={{ flex: 1, minWidth: 0 }}>
            <div>
              <span style={{ fontWeight: 700, fontSize: 14, color: '#171A1C' }}>{msg.name}</span>
              <span style={{ fontSize: 12, color: '#69768B', marginLeft: 8 }}>{msg.timestamp}</span>
            </div>
            <p style={{ margin: '8px 0 0', fontSize: 14, color: '#171A1C', lineHeight: 1.6 }}>{msg.text}</p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'relative', marginTop: 8 }} ref={menuRef}>
              <button
                onClick={() => setMenuOpen(v => !v)}
                style={{ width: 32, height: 32, borderRadius: 6, border: '1px solid #E0E3EB', background: '#FFFFFF', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, color: '#69768B' }}
              >
                ···
              </button>
              {menuOpen && (
                <div style={{ position: 'absolute', bottom: 36, right: 0, background: '#FFFFFF', border: '1px solid #E0E3EB', borderRadius: 8, boxShadow: '0 4px 12px rgba(0,0,0,0.08)', minWidth: 130, zIndex: 10 }}>
                  {[{ label: 'Editar', action: () => { setEditing(true); setEditText(msg.text); } }, { label: 'Eliminar', action: onDelete }].map(item => (
                    <button key={item.label} onClick={() => { item.action(); setMenuOpen(false); }}
                      style={{ display: 'block', width: '100%', padding: '10px 16px', textAlign: 'left', background: 'none', border: 'none', fontSize: 13, color: item.label === 'Eliminar' ? '#C4314B' : '#171A1C', cursor: 'pointer' }}>
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CorrectionChatDrawer = ({ message }: { message: string }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { from: 'manager', text: message || 'Se ha solicitado una corrección en esta solicitud.', name: 'Amanda Rodriguez Gui', timestamp: formatTimestamp(new Date(2026, 0, 12, 14, 30)) },
  ]);
  const [reply, setReply] = useState('');

  const handleSend = () => {
    if (!reply.trim()) return;
    setMessages(prev => [...prev, { from: 'me', text: reply.trim(), name: 'Tú', timestamp: formatTimestamp(new Date()) }]);
    setReply('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', boxSizing: 'border-box', paddingBottom: 16 }}>
      <div style={{ padding: '12px 16px', borderBottom: '1px solid #E0E3EB', display: 'flex', alignItems: 'center', gap: 8 }}>
        <Chat size={16} color="#334199" />
        <span style={{ fontSize: 14, fontWeight: 600, color: '#171A1C' }}>Corrección solicitada</span>
      </div>
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {messages.map((msg, i) => (
          <MessageCard
            key={i}
            msg={msg}
            onDelete={() => setMessages(prev => prev.filter((_, idx) => idx !== i))}
            onSave={(newText) => setMessages(prev => prev.map((m, idx) => idx === i ? { ...m, text: newText } : m))}
          />
        ))}
      </div>
      <div style={{ padding: 12, borderTop: '1px solid #E0E3EB', display: 'flex', gap: 8, alignItems: 'flex-end' }}>
        <textarea
          value={reply}
          onChange={e => setReply(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
          placeholder="Escribe un mensaje..."
          rows={2}
          style={{ flex: 1, resize: 'none', border: '1px solid #C5CAD6', borderRadius: 8, padding: '8px 10px', fontSize: 13, fontFamily: 'inherit', outline: 'none', lineHeight: 1.5 }}
        />
        <button
          onClick={handleSend}
          disabled={!reply.trim()}
          style={{ width: 36, height: 36, borderRadius: 8, border: 'none', background: reply.trim() ? '#334199' : '#E0E3EB', color: reply.trim() ? '#FFFFFF' : '#69768B', cursor: reply.trim() ? 'pointer' : 'default', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
        >
          <SendAlt size={16} />
        </button>
      </div>
    </div>
  );
};

const Step1 = ({
  selectedContractType,
  onSelect,
  onBack,
  onContinue,
}: {
  selectedContractType: ContractType | null;
  onSelect: (ct: ContractType | null) => void;
  onBack: () => void;
  onContinue: () => void;
}) => {
  const [searchFilter, setSearchFilter] = useState('');
  const [showError, setShowError] = useState(false);

  const filteredContractTypes = useMemo(
    () =>
      MOCK_CONTRACT_TYPES.filter((ct) =>
        ct.label.toLowerCase().includes(searchFilter.toLowerCase()),
      ),
    [searchFilter],
  );

  const handleContinue = () => {
    if (!selectedContractType) {
      setShowError(true);
      return;
    }
    onContinue();
  };

  return (
    <FormCard
      $maxWidth="100%"
      title="Seleccionar tipo de contrato"
      onBack={onBack}
      headerTitle="Selecciona el tipo de contrato que quieras solicitar"
      headerSubtitle="Solo puedes seleccionar una opción."
      footerInfo={
        showError && !selectedContractType ? (
          <Notification
            kind="negative"
            title="Selecciona un tipo de contrato"
            description="El tipo de contrato es requisito para continuar con el proceso."
          />
        ) : undefined
      }
      footerActions={
        <FormCard.FooterActions
          submitButton={{
            text: 'Continuar',
            size: '44px',
            endEnhancer: () => <ArrowRight size={16} />,
            onClick: handleContinue,
          }}
        />
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: '8px' }}>
        <Input
          placeholder="Filtrar tipo de contrato"
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.currentTarget.value)}
          startEnhancer={() => <Search size={16} />}
          clearable
          onClear={() => setSearchFilter('')}
        />

        <span style={{ fontSize: 14, color: '#4B5563' }}>
          Selecciona solo 1 de los {filteredContractTypes.length} tipos disponibles
        </span>

        <div
          style={{
            maxHeight: 480,
            overflowY: 'auto',
            border: '1px solid #E5E7EB',
            borderRadius: 8,
            padding: 16,
          }}
        >
          <RadioGroup
            options={filteredContractTypes}
            valueKey="id"
            labelKey="label"
            value={selectedContractType?.id ?? ''}
            onChange={(e) => {
              const ct = MOCK_CONTRACT_TYPES.find((c) => c.id === e.currentTarget.value);
              onSelect(ct ?? null);
              setShowError(false);
            }}
          />
        </div>
      </div>
    </FormCard>
  );
};
