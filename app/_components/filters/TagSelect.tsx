import { inputClass, labelClass } from './filterStyles';

type Props = {
  value?: string;
  options: string[];
};

export default function TagSelect({ value, options }: Props) {
  return (
    <>
      <label htmlFor="filter-tag" className={labelClass}>
        Tag
      </label>
      <select
        id="filter-tag"
        name="tag"
        defaultValue={value ?? ''}
        className={inputClass}
      >
        <option value="">All tags</option>
        {options.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
    </>
  );
}
