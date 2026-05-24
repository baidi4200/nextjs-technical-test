import { inputClass, labelClass } from './filterStyles';

type Props = {
  id: string;
  name: string;
  label: string;
  value?: string;
};

export default function PriceInput({ id, name, label, value }: Props) {
  return (
    <>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <input
        id={id}
        type="number"
        name={name}
        min="0"
        step="1"
        defaultValue={value ?? ''}
        placeholder="$"
        className={inputClass}
      />
    </>
  );
}
