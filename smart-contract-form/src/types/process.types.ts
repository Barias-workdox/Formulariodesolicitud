export type ProcessStage = 'FORMULARIO' | 'EN_SOLICITUD' | 'EN_WORKFLOW' | 'FINALIZADO';

export type ProcessStatus =
  | 'En borrador'
  | 'Por asignar'
  | 'Por gestionar'
  | 'En corrección'
  | 'En consulta'
  | 'En curso'
  | 'Por aprobar'
  | 'Por firmar'
  | 'Finalizado'
  | 'Rechazado'
  | 'Cancelada'
  | 'Pausado';

export type ProcessOrigin = 'Solicitud' | 'Workflow';

export type TiempoRestanteTipo = 'atrasado' | 'pausado' | 'normal';

export type Process = {
  id: string;
  nombre: string;
  etapa: ProcessStage;
  estado: ProcessStatus;
  origen: ProcessOrigin;
  tipoProceso: string;
  tipoContrato: string;
  plantillaSolicitud: string | null;
  plantillaWorkflow: string | null;
  ultimaActualizacion: string;
  // EN_SOLICITUD specific
  solicitante?: string | null;
  asignadoA?: string | null;
  fechaSolicitud?: string | null;
  tiempoRestanteGestion?: string | null;
  // EN_WORKFLOW specific
  pasoActual?: string | null;
  responsablePasoActual?: string | null;
  responsableInitials?: string | null;
  fechaInicioPaso?: string | null;
  tiempoRestantePaso?: string | null;
  tiempoRestanteTipo?: TiempoRestanteTipo | null;
  vencimientoPaso?: string | null;
};
