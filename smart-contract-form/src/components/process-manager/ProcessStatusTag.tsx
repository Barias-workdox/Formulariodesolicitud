import { Tag } from '@webdoxclm/design-system/tag/next';

import type { ProcessStatus } from '../../types/process.types';
import type { TagKind } from '@webdoxclm/design-system/tag/next';

const STATUS_KIND: Record<ProcessStatus, TagKind> = {
  'En borrador': 'peace',
  'Por asignar': 'warning',
  'Por gestionar': 'warning',
  'En corrección': 'warning',
  'En consulta': 'warning',
  'En curso': 'positive',
  'Por aprobar': 'brand',
  'Por firmar': 'brand',
  'Finalizado': 'neutral',
  'Rechazado': 'negative',
  'Cancelada': 'negative',
  'Pausado': 'neutral',
};

type Props = {
  status: ProcessStatus;
};

export const ProcessStatusTag = ({ status }: Props) => (
  <Tag kind={STATUS_KIND[status]} variant="light">
    {status}
  </Tag>
);
