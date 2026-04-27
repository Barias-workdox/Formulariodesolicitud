export type ContractType = {
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
