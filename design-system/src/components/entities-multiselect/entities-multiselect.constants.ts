import type { EntityOption } from './entities-multiselect.types';

export const MOCK_ENTITIES: EntityOption[] = [
  // People Entities (15)
  { id: '1', label: ' Carolina Maria Rodriguez', email: 'carolina@mail.com', type: 'people' },
  { id: '2', label: 'Andres Perez', email: 'andres@mail.com', type: 'people', isValidated: false },
  { id: '3', label: ' John Dow', email: 'john@mail.com', type: 'people' },
  { id: '4', label: 'Pablo Rodriguez', email: 'pablo@mail.com', type: 'people' },
  { id: '5', label: ' Pedro Perez', email: 'pedro@mail.com', type: 'people', isValidated: false },
  { id: '6', label: 'Carlos Dow', email: 'carlos@mail.com', type: 'people' },
  { id: '7', label: ' Lucía Fernández', email: 'lucia@mail.com', type: 'people' },
  { id: '8', label: 'Miguel Torres', email: 'miguel@mail.com', type: 'people' },
  { id: '9', label: ' Isabel Soto', email: 'isabel@mail.com', type: 'people' },
  { id: '10', label: 'Diego Morales', email: 'diego@mail.com', type: 'people' },
  { id: '11', label: ' Valentina López', email: 'valentina@mail.com', type: 'people' },
  { id: '12', label: 'Javier Herrera', email: 'javier@mail.com', type: 'people' },
  { id: '13', label: ' María Silva', email: 'maria@mail.com', type: 'people' },
  { id: '14', label: 'Felipe González', email: 'felipe@mail.com', type: 'people' },
  { id: '15', label: 'Sofía Fernández', email: 'sofia@mail.com', type: 'people' },

  // Companies Entities (15) — some with "ABC" prefix
  { id: '16', label: 'ABC - LumenPath Energy', email: 'contact@lumenpath.com', type: 'company' },
  { id: '17', label: 'Skyline Technologies', email: 'info@skyline.com', type: 'company' },
  { id: '18', label: 'ABC - GreenWave Solutions', email: 'hello@greenwave.com', type: 'company' },
  { id: '19', label: 'Solaris Industries', email: 'contact@solaris.com', type: 'company' },
  { id: '20', label: 'ABC - AquaMarine Corp', email: 'info@aquamaringlobal.com', type: 'company' },
  { id: '21', label: 'Quantum Systems', email: 'support@quantumsys.com', type: 'company' },
  { id: '22', label: 'ABC - NextGen Enterprises', email: 'hello@nextgen.com', type: 'company' },
  { id: '23', label: 'Nova Labs', email: 'info@technova.com', type: 'company', isValidated: false },
  { id: '24', label: 'ABC - Vertex Solutions', email: 'contact@vertex.com', type: 'company' },
  { id: '25', label: 'BluePeak Industries', email: 'support@bluepeak.com', type: 'company' },
  { id: '26', label: 'ABC - DataForge Analytics', email: 'info@dataforge.com', type: 'company' },
  { id: '27', label: 'BrightEdge Consulting', email: 'contact@brightedge.com', type: 'company' },
  { id: '28', label: 'ABC - PulseTech Systems', email: 'support@pulsetech.com', type: 'company' },
  { id: '29', label: 'NovaEdge Solutions', email: 'hello@novaedge.com', type: 'company' },
  { id: '30', label: 'ABC - CoreBridge Tech', email: 'info@corebridge.com', type: 'company' },
];
