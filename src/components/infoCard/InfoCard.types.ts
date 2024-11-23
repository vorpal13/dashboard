import { CardProps } from 'antd';
import { CSSProperties } from 'react';

export interface InfoCardProps extends CardProps {
  title: string;
  value: number;
  diff: number;
  justify?: CSSProperties['justifyContent'];
  height?: number;
}
