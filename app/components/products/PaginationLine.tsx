import { Pagination } from "@heroui/react";

interface PaginationLineProps {
  totalPages: number;
  page: number;
  onChangePage: (page: number) => void;
}

export default function PaginationLine({ totalPages, page, onChangePage }: PaginationLineProps) {
  if (totalPages <= 1) return null;

  return (
    <Pagination className="mt-auto justify-center py-4">
      <Pagination.Content>
        <Pagination.Item>
          <Pagination.Previous isDisabled={page === 1} onPress={() => onChangePage(page - 1)}>
            <Pagination.PreviousIcon />
            <span className="hidden sm:inline">Previous</span>
          </Pagination.Previous>
        </Pagination.Item>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <Pagination.Item key={p}>
            <Pagination.Link isActive={p === page} onPress={() => onChangePage(p)}>
              {p}
            </Pagination.Link>
          </Pagination.Item>
        ))}

        <Pagination.Item>
          <Pagination.Next isDisabled={page === totalPages} onPress={() => onChangePage(page + 1)}>
            <span className="hidden sm:inline">Next</span>
            <Pagination.NextIcon />
          </Pagination.Next>
        </Pagination.Item>
      </Pagination.Content>
    </Pagination>
  );
}
