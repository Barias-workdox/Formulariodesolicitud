import { ChartHistogram } from '@carbon/icons-react';
import { ArrowRight } from 'baseui/icon';

import { Card } from '../card';

import type { CalendarProps } from 'baseui/datepicker';

export default {
  title: 'Components/Content/Card',
  component: Card,
  args: {
    disabled: false,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Vg0tnNQrtCYjRtTInXTcTD/Nuclear-Design-System?node-id=12746-42762&embed-host=design-system&page-selector=false',
    },
  },
};

export const Default = (args: CalendarProps): JSX.Element => (
  <Card {...args}>
    <Card.Header>
      <Card.Icon Icon={ChartHistogram} />
      <Card.Title>Indicadores generales</Card.Title>
    </Card.Header>
    <Card.Body>
      <Card.Text>
        Detalla el <b>rendimiento operativo en workflows</b>, presenta el total de flujos por estado
        y el promedio de días de cierre por área y por plantilla.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Card.Action
        kind="secondary"
        size="32px"
        fullWidth
        endEnhancer={<ArrowRight size="16px" />}
      >
        Ver Reporte
      </Card.Action>
    </Card.Footer>
  </Card>
);
