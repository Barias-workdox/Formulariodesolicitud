export type ContractType = {
  id: string;
  label: string;
};

export type FormTemplate = {
  id: string;
  label: string;
};

export type SelectOption = {
  id: string;
  label: string;
};

export type WizardFormData = {
  nombre: string;
  descripcion: string;
  fechaInicio: string;
  fechaTermino: string;
  moneda: SelectOption[];
  valor: string;
  pais: SelectOption[];
  sucursal: SelectOption[];
};

export const MOCK_TEMPLATES: Record<string, FormTemplate[]> = {
  'compraventa': [
    { id: 'cv-simple', label: 'Compraventa simple de bien mueble' },
    { id: 'cv-inmueble', label: 'Compraventa de bien inmueble' },
    { id: 'cv-internacional', label: 'Compraventa internacional' },
  ],
  'prestacion-servicios': [
    { id: 'ps-ovejas', label: 'Solicitud prestación de servicio - Ovejas' },
    { id: 'ps-perros', label: 'Solicitud prestación de servicio - Perros' },
    { id: 'ps-gatos', label: 'Solicitud prestación de servicio - Gatos' },
    { id: 'ps-cuervos', label: 'Solicitud prestación de servicio - Cuervos' },
    { id: 'ps-general', label: 'Solicitud prestación de servicio - General' },
  ],
  'trabajo': [
    { id: 'tr-indefinido', label: 'Contrato indefinido' },
    { id: 'tr-plazo-fijo', label: 'Contrato a plazo fijo' },
    { id: 'tr-obra-faena', label: 'Contrato por obra o faena' },
  ],
  'confidencialidad': [
    { id: 'nda-unilateral', label: 'NDA unilateral' },
    { id: 'nda-bilateral', label: 'NDA bilateral' },
  ],
  'arriendo': [
    { id: 'arr-habitacional', label: 'Arriendo habitacional' },
    { id: 'arr-comercial', label: 'Arriendo comercial' },
    { id: 'arr-bodega', label: 'Arriendo de bodega' },
  ],
};

const GENERIC_TEMPLATES: FormTemplate[] = [
  { id: 'gen-plantilla-a', label: 'Plantilla estándar A' },
  { id: 'gen-plantilla-b', label: 'Plantilla estándar B' },
];

export const getTemplatesForContractType = (contractTypeId: string): FormTemplate[] =>
  MOCK_TEMPLATES[contractTypeId] ?? GENERIC_TEMPLATES;

export const MOCK_CONTRACT_TYPES: ContractType[] = [
  { id: 'compraventa', label: 'Contrato de compraventa' },
  { id: 'prestacion-servicios', label: 'Contrato de prestación de servicios' },
  { id: 'trabajo', label: 'Contrato de trabajo' },
  { id: 'confidencialidad', label: 'Contrato de confidencialidad' },
  { id: 'manufacturacion', label: 'Contrato de manofacturación' },
  { id: 'arriendo', label: 'Contrato de arriendo' },
  { id: 'colaboracion', label: 'Contrato de colaboración' },
  { id: 'distribucion', label: 'Contrato de distribución' },
  { id: 'comision', label: 'Contrato de comisión' },
  { id: 'consultoria', label: 'Contrato de consultoría' },
  { id: 'comodato', label: 'Contrato de comodato' },
  { id: 'suministro', label: 'Contrato de suministro' },
  { id: 'licenciamiento', label: 'Contrato de licenciamiento' },
  { id: 'marco', label: 'Contrato marco' },
  { id: 'mantencion', label: 'Contrato de mantención' },
];
