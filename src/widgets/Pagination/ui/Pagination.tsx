import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import cls from "./Pagination.module.scss";
import { Icon } from "@/shared/ui/Icon/Icon";
import ArrowBtn from "@/shared/assets/arrow_btn.svg";
import { useCallback, useMemo } from "react";

interface PaginationProps {
  page: number;
  total: number;
  onPageChange: (p: number) => void;
}

export const Pagination = (props: PaginationProps) => {
  const { page, total, onPageChange } = props;

  const getVisiblePages = () => {
    const pages = [];
    const start = Math.max(2, page - 2);
    const end = Math.min(total - 1, page + 2);

    pages.push(1);

    if (start > 2) {
      pages.push("...");
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < total - 1) {
      pages.push("...");
    }

    if (total > 1) {
      pages.push(total);
    }

    return pages;
  };

  const handlePageClick = (p: number) => {
    if (p !== page) {
      onPageChange(p);
    }
  };

  return (
    <div className={cls.Pagination}>
      <Button
        theme={ButtonTheme.CLEAR}
        disabled={page === 1}
        onClick={() => handlePageClick(page - 1)}
      >
        <Icon Svg={ArrowBtn} altText="Предыдущая страница" />
      </Button>
      {getVisiblePages().map((p, i) => {
        return p === "..." ? (
          <span key={`dots-${i}`} className={cls.Dots}>
            ...
          </span>
        ) : (
          <Button
            theme={ButtonTheme.CLEAR}
            key={p}
            onClick={() => handlePageClick(p)}
            className={p === page ? cls.ActivePage : ""}
          >
            {p}
          </Button>
        );
      })}
      <Button
        disabled={page === total}
        theme={ButtonTheme.CLEAR}
        onClick={() => handlePageClick(page + 1)}
      >
        <Icon
          Svg={ArrowBtn}
          className={cls.ArrowRight}
          altText="Следующая страница"
        />
      </Button>
    </div>
  );
};
