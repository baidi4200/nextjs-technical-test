import { SORT_OPTIONS, type SortKey } from '@/lib/sort';
import { inputClass, labelClass } from './filterStyles';

type Props = {
  value: SortKey;
};

export default function SortSelect({ value }: Props) {
  return (
    <>
      <label htmlFor="filter-sort" className={labelClass}>
        Sort by
      </label>
      <select
        id="filter-sort"
        name="sort"
        defaultValue={value}
        className={inputClass}
      >
        {SORT_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </>
  );
}
