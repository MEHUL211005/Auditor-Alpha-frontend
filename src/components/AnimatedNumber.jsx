import { useEffect, useMemo, useState } from 'react';

const numberPattern = /-?\d[\d,]*(?:\.\d+)?/;

function parseNumber(value) {
  const match = value.match(numberPattern);
  if (!match) return null;

  const number = Number(match[0].replaceAll(',', ''));
  if (!Number.isFinite(number)) return null;

  return {
    number,
    prefix: value.slice(0, match.index),
    suffix: value.slice(match.index + match[0].length),
    decimals: (match[0].split('.')[1] || '').length,
  };
}

export default function AnimatedNumber({ value, className = '' }) {
  const [progress, setProgress] = useState(0);
  const parsed = useMemo(() => parseNumber(value), [value]);

  useEffect(() => {
    if (!parsed) return undefined;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const startTime = performance.now();
    const duration = 1200;

    if (reducedMotion) {
      const timeoutId = window.setTimeout(() => {
        setProgress(1);
      }, 0);
      return () => window.clearTimeout(timeoutId);
    }

    const intervalId = window.setInterval(() => {
      const now = performance.now();
      const linearProgress = Math.min((now - startTime) / duration, 1);
      const easedProgress = 1 - (1 - linearProgress) ** 4;
      setProgress(easedProgress);

      if (linearProgress < 1) {
        return;
      }
      window.clearInterval(intervalId);
    }, 24);

    return () => window.clearInterval(intervalId);
  }, [parsed]);

  if (!parsed) return value;

  const currentValue = parsed.number * progress;
  const formattedValue = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: parsed.decimals,
    maximumFractionDigits: parsed.decimals,
  }).format(currentValue);

  return (
    <span className={className}>
      {parsed.prefix}
      {formattedValue}
      {parsed.suffix}
    </span>
  );
}
