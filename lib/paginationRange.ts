export type PaginationItem = number | 'ellipsis-left' | 'ellipsis-right';

export function getPaginationRange(
  currentPage: number,
  totalPages: number,
  siblingCount = 1,
): PaginationItem[] {
  const totalVisible = siblingCount * 2 + 5;
  if (totalPages <= totalVisible) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const leftSibling = Math.max(currentPage - siblingCount, 1);
  const rightSibling = Math.min(currentPage + siblingCount, totalPages);
  const showLeftEllipsis = leftSibling > 2;
  const showRightEllipsis = rightSibling < totalPages - 1;

  const items: PaginationItem[] = [1];
  if (showLeftEllipsis) items.push('ellipsis-left');

  const start = showLeftEllipsis ? leftSibling : 2;
  const end = showRightEllipsis ? rightSibling : totalPages - 1;
  for (let p = start; p <= end; p++) items.push(p);

  if (showRightEllipsis) items.push('ellipsis-right');
  items.push(totalPages);

  return items;
}
