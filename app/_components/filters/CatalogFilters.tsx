import FilterActions from './FilterActions';
import PriceInput from './PriceInput';
import SearchInput from './SearchInput';
import SortSelect from './SortSelect';
import TagSelect from './TagSelect';
import type { SortKey } from '@/lib/sort';

type Props = {
  q?: string;
  tag?: string;
  minPrice?: string;
  maxPrice?: string;
  sort: SortKey;
  tags: string[];
};

export default function CatalogFilters({
  q,
  tag,
  minPrice,
  maxPrice,
  sort,
  tags,
}: Props) {
  return (
    <form method="get" className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-12">
      <div className="sm:col-span-5">
        <SearchInput value={q} />
      </div>

      <div className="sm:col-span-3">
        <TagSelect value={tag} options={tags} />
      </div>

      <div className="sm:col-span-2">
        <PriceInput id="filter-min" name="minPrice" label="Min price" value={minPrice} />
      </div>

      <div className="sm:col-span-2">
        <PriceInput id="filter-max" name="maxPrice" label="Max price" value={maxPrice} />
      </div>

      <div className="sm:col-span-4">
        <SortSelect value={sort} />
      </div>

      <FilterActions />
    </form>
  );
}
