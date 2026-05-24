import { inputClass, labelClass } from './filterStyles';

type Props = {
  value?: string;
};

export default function SearchInput({ value }: Props) {
  return (
    <>
      <label htmlFor="filter-q" className={labelClass}>
        Search
      </label>
      <input
        id="filter-q"
        type="search"
        name="q"
        defaultValue={value ?? ''}
        placeholder="Search name, brand, or tag"
        className={inputClass}
      />
    </>
  );
}
