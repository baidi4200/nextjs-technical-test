'use client';

type Props = {
  value: number;
  onChange: (next: number) => void;
  min?: number;
};

const buttonClass =
  'inline-flex h-8 w-8 items-center justify-center rounded-md border border-zinc-300 text-sm font-medium text-zinc-900 hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900';

export default function QuantityStepper({ value, onChange, min = 1 }: Props) {
  return (
    <div className="inline-flex items-center gap-2">
      <button
        type="button"
        className={buttonClass}
        onClick={() => onChange(value - 1)}
        disabled={value <= min}
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span
        className="min-w-8 text-center text-sm font-medium text-zinc-900 dark:text-zinc-50"
        aria-live="polite"
      >
        {value}
      </span>
      <button
        type="button"
        className={buttonClass}
        onClick={() => onChange(value + 1)}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
