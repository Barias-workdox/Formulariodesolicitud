import * as React from 'react';

import { CheckmarkFilled } from '@carbon/icons-react';

import { useCss } from '@components/utils/hooks/use-css';

interface IProgressCircle {
  stroke?: string;
  fill?: string;
  progressStroke?: string;
  progress?: number;
  shadowed?: boolean;
  completedColor?: string;
}

/** Styled ProgressCircle component */
export function ProgressCircle({
  stroke,
  fill,
  progressStroke,
  progress = 0,
  shadowed = true,
  completedColor,
}: IProgressCircle): React.ReactElement {
  const { css, theme } = useCss();

  const backPosition = Math.max(1 - 0.9999999, 0);
  const position = Math.max(1 - progress, 0);
  const complete = position < 0.01;

  const DIAMETER = 50;
  const STROKE_WIDTH = 8;
  const RADIUS = DIAMETER / 2 - STROKE_WIDTH / 2;
  const CIRCUMFERENCE = Math.PI * RADIUS * 2;

  const _stroke = stroke || theme.colors.neutralSubtle;
  const _fill = fill || theme.colors.bgBase;
  const _progressStroke = progressStroke || theme.colors.brand;
  const _completedColor = completedColor || theme.colors.positive;

  return (
    <div
      className={css({
        width: '20px',
        height: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      })}
    >
      {complete && (
        <CheckmarkFilled
          size={20}
          color={_completedColor}
          className={css({ color: _completedColor, background: 'white', borderRadius: '50%' })}
        />
      )}
      {!complete && (
        <div
          className={css({
            position: 'relative',
            width: '20px',
            height: '20px',
            borderRadius: '50px',
            transition: 'all 0.3s ease',
            boxShadow: shadowed ? '0 2px 4px 0 rgba(0, 0, 0, 0.2)' : 'none',
            outline: 'none',
            border: '0',
            backgroundColor: complete ? _completedColor : '#FFF',
          })}
        >
          <svg
            viewBox="0 0 50 50"
            width="20px"
            height="20px"
            className={css({
              position: 'absolute',
              left: '0',
              top: '0',
            })}
          >
            <circle
              cx={25}
              cy={25}
              r={RADIUS}
              stroke={_stroke}
              fill={_fill}
              strokeWidth={STROKE_WIDTH}
              style={{
                strokeDasharray: CIRCUMFERENCE * backPosition,
                strokeDashoffset: CIRCUMFERENCE * backPosition,
              }}
            />
            <circle
              cx={DIAMETER / 2}
              cy={DIAMETER / 2}
              r={RADIUS}
              stroke={_progressStroke}
              fill="transparent"
              strokeWidth={STROKE_WIDTH}
              style={{
                strokeDasharray: CIRCUMFERENCE,
                strokeDashoffset: CIRCUMFERENCE * position,
              }}
            />
          </svg>
        </div>
      )}
    </div>
  );
}
