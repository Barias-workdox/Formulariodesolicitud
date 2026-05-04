import { useCallback, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { useHistory } from 'react-router-dom';

import {
  Add,
  DocumentSigned,
  FlowData,
  Folder,
  Home,
  List,
  OverflowMenuHorizontal,
  Pause,
  Pen,
  Result,
  Schematics,
  Settings,
  Time,
  UserFollow,
  UserMultiple,
} from '@carbon/icons-react';
import { DataTable, TableActionButton, getTableData } from '@webdoxclm/design-system/data-table';
import { PopoverMenu } from '@webdoxclm/design-system/data-table/components/popover-menu';
import { Button } from '@webdoxclm/design-system/button/next';
import { Filter } from '@webdoxclm/design-system/filter';
import { SuggestionInput } from '@webdoxclm/design-system/suggestion-input';
import { PageHeader } from '@webdoxclm/design-system/page-header';
import { Sidebar, SidebarHeader, SidebarLink, SidebarProvider, useSidebar } from '@webdoxclm/design-system/sidebar';
import logoUrl from '../../assets/logo.svg';
import { BackgroundIcon } from '@webdoxclm/design-system/background-icon/next';
import { Avatar } from '@webdoxclm/design-system/avatar/next';
import { Modal, SectionedModalHeader, SectionedModalBody, SectionedModalFooter } from '@webdoxclm/design-system/modal';
import { Select } from '@webdoxclm/design-system/select';
import { FormControl } from '@webdoxclm/design-system/form-control';

import { MOCK_PROCESSES, MOCK_SOLICITUD_PROCESSES, MOCK_WORKFLOW_PROCESSES } from './process-manager.data';
import { ProcessEtapa } from './ProcessEtapa';
import { ProcessStatusTag } from './ProcessStatusTag';
import { ErrorBoundary } from '../ErrorBoundary';

import type { ColumnConfig, DataTableProps } from '@webdoxclm/design-system/data-table';
import type { FilterValue } from '@webdoxclm/design-system/filter';
import type { Process, TiempoRestanteTipo } from '../../types/process.types';

const LogoTrigger = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <button
      onClick={toggleSidebar}
      aria-label="Toggle sidebar"
      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}
    >
      <img src={logoUrl} alt="Logo" width={32} height={32} />
    </button>
  );
};

// ─── Constants ────────────────────────────────────────────────────────────────

const ETAPA_OPTIONS: FilterValue[] = [
  { id: 'FORMULARIO', label: 'Formulario' },
  { id: 'EN_SOLICITUD', label: 'En solicitud' },
  { id: 'EN_WORKFLOW', label: 'En workflow' },
  { id: 'FINALIZADO', label: 'Finalizado' },
];

const ESTADO_OPTIONS: FilterValue[] = [
  { id: 'En borrador', label: 'En borrador' },
  { id: 'Por asignar', label: 'Por asignar' },
  { id: 'En curso', label: 'En curso' },
  { id: 'Finalizado', label: 'Finalizado' },
];

// ─── Column configs ───────────────────────────────────────────────────────────

type ExtraColumns = 'acciones';
type TableType = DataTableProps<Process, ExtraColumns>;

const todosColumnsConfig: ColumnConfig<keyof Process | ExtraColumns>[] = [
  { id: 'nombre', label: 'Nombre', isDraggable: true, isSortable: true, isRemovable: false, isFixed: true, dataType: 'string', renderType: 'string', minWidth: '280px' },
  { id: 'id', label: 'ID', isDraggable: true, isSortable: true, isRemovable: true, dataType: 'string', renderType: 'string', minWidth: '80px', maxWidth: '100px' },
  { id: 'etapa', label: 'Etapa', isDraggable: true, isSortable: false, isRemovable: true, dataType: 'string', renderType: 'custom', minWidth: '150px' },
  { id: 'estado', label: 'Estado', isDraggable: true, isSortable: true, isRemovable: true, dataType: 'string', renderType: 'custom', minWidth: '120px' },
  { id: 'origen', label: 'Origen', isDraggable: true, isSortable: true, isRemovable: true, dataType: 'string', renderType: 'string', minWidth: '90px' },
  { id: 'tipoProceso', label: 'Tipo de proceso', isDraggable: true, isSortable: true, isRemovable: true, dataType: 'string', renderType: 'string', minWidth: '180px' },
  { id: 'tipoContrato', label: 'Tipo de contrato', isDraggable: true, isSortable: true, isRemovable: true, dataType: 'string', renderType: 'string', minWidth: '170px' },
  { id: 'plantillaSolicitud', label: 'Plantilla de solicitud', isDraggable: true, isSortable: true, isRemovable: true, dataType: 'string', renderType: 'custom', minWidth: '180px' },
  { id: 'plantillaWorkflow', label: 'Plantilla de Workflow', isDraggable: true, isSortable: true, isRemovable: true, dataType: 'string', renderType: 'custom', minWidth: '180px' },
  { id: 'ultimaActualizacion', label: 'Última actualización', isDraggable: true, isSortable: true, isRemovable: true, dataType: 'string', renderType: 'string', minWidth: '160px' },
];

const solicitudColumnsConfig: ColumnConfig<keyof Process | ExtraColumns>[] = [
  { id: 'nombre', label: 'Nombre', isDraggable: true, isSortable: true, isRemovable: false, isFixed: true, dataType: 'string', renderType: 'string', minWidth: '280px' },
  { id: 'id', label: 'ID', isDraggable: true, isSortable: true, isRemovable: true, dataType: 'string', renderType: 'string', minWidth: '80px', maxWidth: '100px' },
  { id: 'etapa', label: 'Etapa', isDraggable: true, isSortable: false, isRemovable: true, dataType: 'string', renderType: 'custom', minWidth: '150px' },
  { id: 'estado', label: 'Estado', isDraggable: true, isSortable: true, isRemovable: true, dataType: 'string', renderType: 'custom', minWidth: '120px' },
  { id: 'solicitante', label: 'Solicitante', isDraggable: true, isSortable: true, isRemovable: true, dataType: 'string', renderType: 'custom', minWidth: '160px' },
  { id: 'asignadoA', label: 'Asignado a', isDraggable: true, isSortable: true, isRemovable: true, dataType: 'string', renderType: 'custom', minWidth: '160px' },
  { id: 'fechaSolicitud', label: 'Fecha de solicitud', isDraggable: true, isSortable: true, isRemovable: true, dataType: 'string', renderType: 'string', minWidth: '150px' },
  { id: 'tiempoRestanteGestion', label: 'Tiempo restante de gestión', isDraggable: true, isSortable: false, isRemovable: true, dataType: 'string', renderType: 'custom', minWidth: '200px' },
  { id: 'tipoProceso', label: 'Tipo de proceso', isDraggable: true, isSortable: true, isRemovable: true, dataType: 'string', renderType: 'string', minWidth: '180px' },
  { id: 'tipoContrato', label: 'Tipo de contrato', isDraggable: true, isSortable: true, isRemovable: true, dataType: 'string', renderType: 'string', minWidth: '170px' },
  { id: 'plantillaSolicitud', label: 'Plantilla de solicitud', isDraggable: true, isSortable: true, isRemovable: true, dataType: 'string', renderType: 'custom', minWidth: '180px' },
  { id: 'ultimaActualizacion', label: 'Última actualización', isDraggable: true, isSortable: true, isRemovable: true, dataType: 'string', renderType: 'string', minWidth: '160px' },
];

const workflowColumnsConfig: ColumnConfig<keyof Process | ExtraColumns>[] = [
  { id: 'nombre', label: 'Nombre', isDraggable: true, isSortable: true, isRemovable: false, isFixed: true, dataType: 'string', renderType: 'string', minWidth: '280px' },
  { id: 'id', label: 'ID', isDraggable: true, isSortable: true, isRemovable: true, dataType: 'string', renderType: 'string', minWidth: '80px', maxWidth: '100px' },
  { id: 'etapa', label: 'Etapa', isDraggable: true, isSortable: false, isRemovable: true, dataType: 'string', renderType: 'custom', minWidth: '150px' },
  { id: 'estado', label: 'Estado', isDraggable: true, isSortable: true, isRemovable: true, dataType: 'string', renderType: 'custom', minWidth: '120px' },
  { id: 'pasoActual', label: 'Paso actual', isDraggable: true, isSortable: true, isRemovable: true, dataType: 'string', renderType: 'string', minWidth: '180px' },
  { id: 'responsablePasoActual', label: 'Responsable del paso actual', isDraggable: true, isSortable: true, isRemovable: true, dataType: 'string', renderType: 'custom', minWidth: '200px' },
  { id: 'fechaInicioPaso', label: 'Fecha inicio del paso', isDraggable: true, isSortable: true, isRemovable: true, dataType: 'string', renderType: 'string', minWidth: '170px' },
  { id: 'tiempoRestantePaso', label: 'Tiempo restante del paso', isDraggable: true, isSortable: false, isRemovable: true, dataType: 'string', renderType: 'custom', minWidth: '200px' },
  { id: 'vencimientoPaso', label: 'Vencimiento del paso', isDraggable: true, isSortable: true, isRemovable: true, dataType: 'string', renderType: 'custom', minWidth: '170px' },
  { id: 'tipoProceso', label: 'Tipo de proceso', isDraggable: true, isSortable: true, isRemovable: true, dataType: 'string', renderType: 'string', minWidth: '180px' },
  { id: 'plantillaWorkflow', label: 'Plantilla de Workflow', isDraggable: true, isSortable: true, isRemovable: true, dataType: 'string', renderType: 'custom', minWidth: '180px' },
  { id: 'tipoContrato', label: 'Tipo de contrato', isDraggable: true, isSortable: true, isRemovable: true, dataType: 'string', renderType: 'string', minWidth: '170px' },
  { id: 'ultimaActualizacion', label: 'Última actualización', isDraggable: true, isSortable: true, isRemovable: true, dataType: 'string', renderType: 'string', minWidth: '160px' },
];

// ─── Cell components ──────────────────────────────────────────────────────────

const USER_OPTIONS = [
  { id: 'amanda-rodriguez', label: 'Amanda Rodríguez' },
  { id: 'carolina-munoz', label: 'Carolina Muñoz' },
  { id: 'roberto-farias', label: 'Roberto Farías' },
  { id: 'pedro-silva', label: 'Pedro Silva' },
  { id: 'maria-gonzalez', label: 'María González' },
];

type UserOption = { id: string; label: string };

const AsignarModal = ({
  isOpen,
  onClose,
  onConfirm,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (name: string) => void;
}) => {
  const [selected, setSelected] = useState<UserOption[]>([]);

  const handleConfirm = () => {
    if (selected.length > 0) {
      onConfirm(selected[0].label);
      setSelected([]);
      onClose();
    }
  };

  const handleClose = () => {
    setSelected([]);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <SectionedModalHeader>Asignar responsable</SectionedModalHeader>
      <SectionedModalBody>
        <FormControl label="Responsable">
          <Select
            options={USER_OPTIONS}
            value={selected}
            onChange={(v) => setSelected(v as UserOption[])}
            placeholder="Buscar persona..."
            valueKey="id"
            labelKey="label"
          />
        </FormControl>
      </SectionedModalBody>
      <SectionedModalFooter>
        <Button kind="neutral" appearance="outlined" size="44px" onClick={handleClose}>
          Cancelar
        </Button>
        <Button
          kind="brand"
          appearance="filled"
          size="44px"
          onClick={handleConfirm}
          disabled={selected.length === 0}
        >
          Confirmar
        </Button>
      </SectionedModalFooter>
    </Modal>
  );
};

const ActionCell = ({ id }: Process) => (
  <TableActionButton
    dataTestId={`process-action--${id}`}
    popoverProps={{
      placement: 'left',
      popoverMargin: 8,
      content: () => (
        <PopoverMenu>
          <PopoverMenu.Item onClick={() => {}} $styles={{ justifyContent: 'flex-start' }}>
            Ver detalle
          </PopoverMenu.Item>
          <PopoverMenu.Item onClick={() => {}} $styles={{ justifyContent: 'flex-start' }}>
            Editar
          </PopoverMenu.Item>
          <PopoverMenu.Item onClick={() => {}} $styles={{ justifyContent: 'flex-start' }}>
            Eliminar
          </PopoverMenu.Item>
        </PopoverMenu>
      ),
    }}
  >
    <OverflowMenuHorizontal />
  </TableActionButton>
);

const NullableCell = ({ value }: { value: string | null | undefined }) => (
  <span style={{ color: value ? 'inherit' : '#9CA3AF' }}>{value ?? '–'}</span>
);

const PersonCell = ({ name }: { name: string | null | undefined }) => {
  if (!name) return <span style={{ color: '#9CA3AF' }}>–</span>;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Avatar name={name} kind="users" size="24px" />
      <span style={{ fontSize: 14, color: '#171A1C', whiteSpace: 'nowrap' }}>{name}</span>
    </div>
  );
};

const AsignadoACell = ({ name }: { name: string | null | undefined }) => {
  const [localName, setLocalName] = useState(name);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (localName) return <PersonCell name={localName} />;

  return (
    <>
      <span onClick={(e) => e.stopPropagation()} style={{ display: 'inline-flex' }}>
        <Button
          kind="neutral"
          appearance="outlined"
          size="32px"
          startEnhancer={() => <UserFollow size={16} />}
          onClick={() => { _asignarClickPending = true; setIsModalOpen(true); }}
        >
          Asignar
        </Button>
      </span>
      <AsignarModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={(assigned) => setLocalName(assigned)}
      />
    </>
  );
};

const TiempoRestanteCell = ({
  value,
  tipo,
}: {
  value: string | null | undefined;
  tipo: TiempoRestanteTipo | null | undefined;
}) => {
  if (!value) return <span style={{ color: '#9CA3AF' }}>–</span>;

  if (tipo === 'atrasado') {
    return (
      <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#C4280D', fontSize: 14 }}>
        <BackgroundIcon icon={Time} kind="negative" appearance="tonal" size="24px" shape="square" />
        {value}
      </span>
    );
  }
  if (tipo === 'pausado') {
    return (
      <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#69768B', fontSize: 14 }}>
        <BackgroundIcon icon={Pause} kind="warning" appearance="tonal" size="24px" shape="square" />
        {value}
      </span>
    );
  }
  return (
    <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#171A1C', fontSize: 14 }}>
      <BackgroundIcon icon={Time} kind="brand" appearance="tonal" size="24px" shape="square" />
      {value}
    </span>
  );
};

// ─── Filter UI ────────────────────────────────────────────────────────────────

const FilterContent = ({
  options,
  selected,
  onToggle,
}: {
  options: FilterValue[];
  selected: FilterValue[];
  onToggle: (option: FilterValue) => void;
}) => (
  <div style={{ padding: '8px 0', minWidth: 180 }}>
    {options.map((option) => {
      const isSelected = selected.some((s) => s.id === option.id);
      return (
        <div
          key={String(option.id)}
          onClick={() => onToggle(option)}
          style={{
            padding: '8px 16px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            backgroundColor: isSelected ? '#F0F4FF' : 'transparent',
          }}
        >
          <input type="checkbox" checked={isSelected} readOnly style={{ cursor: 'pointer' }} />
          {option.label}
        </div>
      );
    })}
  </div>
);

// ─── Demo access control ──────────────────────────────────────────────────────

const DEMO_ACCESSIBLE_IDS = new Set(['PC-001', 'PC-002', 'PC-003']);

// Set to true by AsignadoACell's button click (fires before row click in React)
let _asignarClickPending = false;

// ─── Main component ───────────────────────────────────────────────────────────

export const ProcessManager = () => {
  const history = useHistory();
  const [activeTab, setActiveTab] = useState<'todos' | 'solicitud' | 'workflow'>('todos');
  const [search, setSearch] = useState('');
  const [etapaFilter, setEtapaFilter] = useState<FilterValue[]>([]);
  const [estadoFilter, setEstadoFilter] = useState<FilterValue[]>([]);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const toggleFilter = (current: FilterValue[], option: FilterValue): FilterValue[] =>
    current.some((v) => v.id === option.id)
      ? current.filter((v) => v.id !== option.id)
      : [...current, option];

  // ── "Todos" tab ──────────────────────────────────────────────────────────
  const [todosTableState, setTodosTableState] = useState({
    orderBy: 'nombre' as keyof Process,
    orderDirection: 'asc' as 'asc' | 'desc',
    columnsConfig: todosColumnsConfig,
  });

  const todosFiltered = useMemo(
    () =>
      MOCK_PROCESSES.filter((p) => {
        if (!p.nombre.toLowerCase().includes(search.toLowerCase())) return false;
        if (etapaFilter.length > 0 && !etapaFilter.some((f) => f.id === p.etapa)) return false;
        if (estadoFilter.length > 0 && !estadoFilter.some((f) => f.id === p.estado)) return false;
        return true;
      }),
    [search, etapaFilter, estadoFilter],
  );

  const todosTableData = useMemo(
    () =>
      getTableData({
        rawData: todosFiltered,
        columnsConfig: todosTableState.columnsConfig,
        actionCell: ActionCell,
        customRenders: {
          etapa: (row) => <ProcessEtapa etapa={row.etapa} />,
          estado: (row) => <ProcessStatusTag status={row.estado} />,
          plantillaSolicitud: (row) => <NullableCell value={row.plantillaSolicitud} />,
          plantillaWorkflow: (row) => <NullableCell value={row.plantillaWorkflow} />,
        },
      }),
    [todosFiltered, todosTableState.columnsConfig],
  );

  // ── "En solicitud" tab ───────────────────────────────────────────────────
  const [solicitudTableState, setSolicitudTableState] = useState({
    orderBy: 'nombre' as keyof Process,
    orderDirection: 'asc' as 'asc' | 'desc',
    columnsConfig: solicitudColumnsConfig,
  });

  const solicitudFiltered = useMemo(
    () =>
      MOCK_SOLICITUD_PROCESSES.filter((p) => {
        if (!p.nombre.toLowerCase().includes(search.toLowerCase())) return false;
        if (estadoFilter.length > 0 && !estadoFilter.some((f) => f.id === p.estado)) return false;
        return true;
      }),
    [search, estadoFilter],
  );

  const solicitudTableData = useMemo(
    () =>
      getTableData({
        rawData: solicitudFiltered,
        columnsConfig: solicitudTableState.columnsConfig,
        actionCell: ActionCell,
        customRenders: {
          etapa: (row) => <ProcessEtapa etapa={row.etapa} />,
          estado: (row) => <ProcessStatusTag status={row.estado} />,
          solicitante: (row) => <PersonCell name={row.solicitante} />,
          asignadoA: (row) => <AsignadoACell name={row.asignadoA} />,
          tiempoRestanteGestion: (row) => (
            <TiempoRestanteCell
              value={row.tiempoRestanteGestion}
              tipo={row.tiempoRestanteGestion?.toLowerCase().startsWith('atrasado') ? 'atrasado' : 'normal'}
            />
          ),
          plantillaSolicitud: (row) => <NullableCell value={row.plantillaSolicitud} />,
        },
      }),
    [solicitudFiltered, solicitudTableState.columnsConfig],
  );

  // ── "En workflow" tab ────────────────────────────────────────────────────
  const [workflowTableState, setWorkflowTableState] = useState({
    orderBy: 'nombre' as keyof Process,
    orderDirection: 'asc' as 'asc' | 'desc',
    columnsConfig: workflowColumnsConfig,
  });

  const workflowFiltered = useMemo(
    () =>
      MOCK_WORKFLOW_PROCESSES.filter((p) => {
        if (!p.nombre.toLowerCase().includes(search.toLowerCase())) return false;
        if (estadoFilter.length > 0 && !estadoFilter.some((f) => f.id === p.estado)) return false;
        return true;
      }),
    [search, estadoFilter],
  );

  const workflowTableData = useMemo(
    () =>
      getTableData({
        rawData: workflowFiltered,
        columnsConfig: workflowTableState.columnsConfig,
        actionCell: ActionCell,
        customRenders: {
          etapa: (row) => <ProcessEtapa etapa={row.etapa} />,
          estado: (row) => <ProcessStatusTag status={row.estado} />,
          responsablePasoActual: (row) => (
            <PersonCell name={row.responsablePasoActual} />
          ),
          tiempoRestantePaso: (row) => (
            <TiempoRestanteCell value={row.tiempoRestantePaso} tipo={row.tiempoRestanteTipo} />
          ),
          vencimientoPaso: (row) => <NullableCell value={row.vencimientoPaso} />,
          plantillaWorkflow: (row) => <NullableCell value={row.plantillaWorkflow} />,
        },
      }),
    [workflowFiltered, workflowTableState.columnsConfig],
  );

  // ── Active table data/state ───────────────────────────────────────────────
  const activeData =
    activeTab === 'solicitud' ? solicitudTableData :
    activeTab === 'workflow' ? workflowTableData :
    todosTableData;

  const activeCount =
    activeTab === 'solicitud' ? solicitudFiltered.length :
    activeTab === 'workflow' ? workflowFiltered.length :
    todosFiltered.length;

  const activeTableState =
    activeTab === 'solicitud' ? solicitudTableState :
    activeTab === 'workflow' ? workflowTableState :
    todosTableState;

  const activeAllColumnsConfig =
    activeTab === 'solicitud' ? solicitudColumnsConfig :
    activeTab === 'workflow' ? workflowColumnsConfig :
    todosColumnsConfig;

  const handleTableChange = useCallback((updated: TableType) => {
    const next = {
      orderBy: updated.orderBy,
      orderDirection: updated.orderDirection,
      columnsConfig: updated.columnsConfig,
    } as const;
    if (activeTab === 'solicitud') setSolicitudTableState((prev) => ({ ...prev, ...next }));
    else if (activeTab === 'workflow') setWorkflowTableState((prev) => ({ ...prev, ...next }));
    else setTodosTableState((prev) => ({ ...prev, ...next }));
  }, [activeTab]);

  const handleRowClick = useCallback((rowIndex: number) => {
    if (_asignarClickPending) { _asignarClickPending = false; return; }
    const activeFiltered =
      activeTab === 'solicitud' ? solicitudFiltered :
      activeTab === 'workflow' ? workflowFiltered :
      todosFiltered;
    const process = activeFiltered[rowIndex];
    if (!process) return;
    if (!DEMO_ACCESSIBLE_IDS.has(process.id)) {
      setDemoModalOpen(true);
      return;
    }
    if (process.estado === 'En borrador') {
      history.push('/processes/new', {
        editStep: 5,
        process: { id: process.id, nombre: process.nombre, tipoContrato: process.tipoContrato },
        draftSavedAt: new Date('2025-02-13T10:02:00.000Z').toISOString(),
      });
      return;
    }
    history.push(`/processes/${process.id}`);
  }, [activeTab, solicitudFiltered, workflowFiltered, todosFiltered, history]);


  return (
    <>
    <SidebarProvider>
    <div style={{ display: 'flex', height: '100vh', background: '#F9FAFB' }}>
      <Sidebar>
        <SidebarHeader showTrigger={false}>
          <LogoTrigger />
        </SidebarHeader>
        <Sidebar.Content>
          <SidebarLink href="#" Icon={Home} text="Inicio" />
          <SidebarLink href="#" Icon={Folder} text="Repositorio" />
          <SidebarLink href="#" Icon={FlowData} text="Procesos" isActive />
          <SidebarLink href="#" Icon={Pen} text="Mis firmas" />
          <SidebarLink href="#" Icon={UserMultiple} text="Directorio" />
          <SidebarLink href="#" Icon={DocumentSigned} text="Generación masiva" />
        </Sidebar.Content>
        <Sidebar.Footer>
          <SidebarLink href="#" Icon={Settings} text="Configuración" />
        </Sidebar.Footer>
      </Sidebar>

      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0, overflow: 'hidden', padding: 16 }}>
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0, overflow: 'hidden', background: '#fff', borderRadius: 8 }}>
      <div style={{ padding: '24px 24px 0' }}>
      <PageHeader
        title="Gestor de procesos"
        showBorder={false}
        startEnhancer={<BackgroundIcon icon={FlowData} kind="brand" appearance="tonal" size="44px" shape="square" />}
        endEnhancer={
          <PageHeader.EndEnhancerWrapper>
            <Button
              kind="brand"
              appearance="filled"
              startEnhancer={() => <Add size={16} />}
              onClick={() => history.push('/processes/new')}
            >
              Nuevo proceso
            </Button>
          </PageHeader.EndEnhancerWrapper>
        }
        toolbar={
          <div
            style={{
              margin: '0 -24px',
              padding: '0 24px',
              borderBottom: '1px solid #E0E3EB',
              display: 'flex',
            }}
          >
            {(
              [
                { key: 'todos', label: 'Todos', icon: <List size={16} /> },
                { key: 'solicitud', label: 'En solicitud', icon: <Result size={16} /> },
                { key: 'workflow', label: 'En workflow', icon: <Schematics size={16} /> },
              ] as const
            ).map(({ key, label, icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                style={{
                  background: 'none',
                  border: 'none',
                  borderBottom: activeTab === key ? '2px solid #334199' : '2px solid transparent',
                  padding: '10px 16px',
                  height: 44,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  fontSize: 16,
                  fontWeight: activeTab === key ? 500 : 400,
                  color: activeTab === key ? '#334199' : '#69768B',
                  lineHeight: 1.5,
                  marginBottom: -1,
                }}
              >
                {icon}
                {label}
              </button>
            ))}
          </div>
        }
      />
      </div>

      <div style={{ padding: '16px 24px 0', display: 'flex', flexDirection: 'column', gap: 12, flex: 1, minWidth: 0, overflow: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ flex: 1, maxWidth: 280 }}>
            <SuggestionInput
              size="sm"
              placeholder="Buscar por nombre"
              value={search}
              onChange={(value) => setSearch(value)}
              onSelect={(value) => setSearch(value)}
              items={[]}
            />
          </div>

          <div style={{ display: 'flex', gap: 8 }}>
            {activeTab === 'todos' && (
              <Filter
                label="Etapa"
                value={etapaFilter}
                onClear={() => setEtapaFilter([])}
                content={
                  <FilterContent
                    options={ETAPA_OPTIONS}
                    selected={etapaFilter}
                    onToggle={(opt) => setEtapaFilter((prev) => toggleFilter(prev, opt))}
                  />
                }
              />
            )}
            <Filter
              label="Estado"
              value={estadoFilter}
              onClear={() => setEstadoFilter([])}
              content={
                <FilterContent
                  options={ESTADO_OPTIONS}
                  selected={estadoFilter}
                  onToggle={(opt) => setEstadoFilter((prev) => toggleFilter(prev, opt))}
                />
              }
            />
          </div>

          <div style={{ marginLeft: 'auto', fontSize: 13, color: '#6B7280' }}>
            {activeCount} Items
          </div>
        </div>

        <ErrorBoundary>
          <DataTable
            orderBy={activeTableState.orderBy}
            orderDirection={activeTableState.orderDirection}
            columnsConfig={activeTableState.columnsConfig}
            allColumnsConfig={activeAllColumnsConfig}
            data={activeData}
            isRowClickable
            showActionsColumn
            showHeaderActionButton
            onChange={handleTableChange}
            onClickRow={handleRowClick}
          />
        </ErrorBoundary>
      </div>
      </div>
      </div>
    </div>
    </SidebarProvider>

    {demoModalOpen && createPortal(
      <div
        style={{
          position: 'fixed', inset: 0, zIndex: 1000,
          background: 'rgba(23, 26, 28, 0.48)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
        onClick={() => setDemoModalOpen(false)}
      >
        <div
          style={{
            background: '#FFFFFF', borderRadius: 8,
            boxShadow: '0px 8px 24px -4px rgba(82, 97, 122, 0.24)',
            width: 420, maxWidth: '90vw',
            display: 'flex', flexDirection: 'column', overflow: 'hidden',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{ padding: '20px 24px 16px', borderBottom: '1px solid #E0E3EB' }}>
            <span style={{ fontSize: 18, fontWeight: 700, color: '#171A1C', lineHeight: 1.3 }}>
              Vista restringida
            </span>
          </div>
          <div style={{ padding: '20px 24px' }}>
            <p style={{ margin: 0, fontSize: 16, color: '#171A1C', lineHeight: 1.6 }}>
              Accede a las primeras 3 filas del prototipo para ver el detalle de la gestión.
            </p>
          </div>
          <div style={{ padding: '16px 24px', borderTop: '1px solid #E0E3EB', display: 'flex', justifyContent: 'flex-end' }}>
            <button
              onClick={() => setDemoModalOpen(false)}
              style={{
                padding: '0 20px', height: 40, borderRadius: 6, border: 'none',
                background: '#334199', fontSize: 14, fontWeight: 500,
                color: '#FFFFFF', cursor: 'pointer',
              }}
            >
              Entendido
            </button>
          </div>
        </div>
      </div>,
      document.body
    )}
    </>
  );
};
