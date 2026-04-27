import type { CSSProperties } from 'react';
import { StatefulTooltipNext } from '@webdoxclm/design-system/tooltip-next/stateful-tooltip-next';
import type { ProcessStage } from '../../types/process.types';

type StepState = 'completed' | 'current' | 'pending';

type StepConfig = {
  title: string;
  state: StepState;
};

const STAGES: { key: ProcessStage; label: string }[] = [
  { key: 'FORMULARIO', label: 'Formulario' },
  { key: 'EN_SOLICITUD', label: 'En solicitud' },
  { key: 'EN_WORKFLOW', label: 'En workflow' },
  { key: 'FINALIZADO', label: 'Finalizado' },
];

function getSteps(etapa: ProcessStage): StepConfig[] {
  const currentIndex = STAGES.findIndex((s) => s.key === etapa);
  return STAGES.map((stage, i) => ({
    title: stage.label,
    state: i < currentIndex ? 'completed' : i === currentIndex ? 'current' : 'pending',
  }));
}

const DOT_SIZE = 12;
const LINE_HEIGHT = 2;

const dotStyle = (state: StepState): CSSProperties => {
  if (state === 'completed') {
    return {
      width: DOT_SIZE,
      height: DOT_SIZE,
      borderRadius: '50%',
      backgroundColor: '#2D6A4F',
      flexShrink: 0,
    };
  }
  if (state === 'current') {
    return {
      width: DOT_SIZE,
      height: DOT_SIZE,
      borderRadius: '50%',
      backgroundColor: 'transparent',
      border: '2px solid #2D6A4F',
      boxSizing: 'border-box',
      flexShrink: 0,
    };
  }
  return {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: '50%',
    backgroundColor: '#D1D5DB',
    flexShrink: 0,
  };
};

const lineStyle: CSSProperties = {
  flex: 1,
  height: LINE_HEIGHT,
  backgroundColor: '#D1D5DB',
};

type Props = {
  etapa: ProcessStage;
};

export const ProcessEtapa = ({ etapa }: Props) => {
  const steps = getSteps(etapa);
  const currentLabel = STAGES.find((s) => s.key === etapa)?.label ?? '';

  const tooltipContent = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {steps.map((s) => (
        <span key={s.title} style={{ opacity: s.state === 'pending' ? 0.5 : 1 }}>
          {s.state === 'completed' ? '● ' : s.state === 'current' ? '◉ ' : '○ '}
          {s.title}
        </span>
      ))}
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <StatefulTooltipNext content={() => tooltipContent} placement="top" size="sm" showArrow>
        <div style={{ display: 'flex', alignItems: 'center', gap: 0, width: 100 }}>
          {steps.map((step, i) => (
            <div key={step.title} style={{ display: 'contents' }}>
              <div style={dotStyle(step.state)} />
              {i < steps.length - 1 && <div style={lineStyle} />}
            </div>
          ))}
        </div>
      </StatefulTooltipNext>
      <span style={{ fontSize: 10, fontWeight: 600, color: '#6B7280', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
        {currentLabel}
      </span>
    </div>
  );
};
