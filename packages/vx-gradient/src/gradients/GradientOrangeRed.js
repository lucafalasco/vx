import React from 'react';
import LinearGradient from './LinearGradient';

/**
 * All props pass through to `<LinearGradient {...props} />`
 */
export default function GradientOrangeRed({ from = '#FCE38A', to = '#F38181', ...restProps }) {
  return <LinearGradient from={from} to={to} {...restProps} />;
}
