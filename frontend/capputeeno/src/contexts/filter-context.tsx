"use client";
import { FilterType } from "@/types/filter-types";
import { createContext, useState } from "react";

export const FilterContext = createContext({
  search: "",
  page: 0,
  type: FilterType.ALL,
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: FilterType) => {},
});

export function FilterContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [type, setType] = useState(FilterType.ALL);

  return (
    <FilterContext.Provider
      value={{ search, setSearch, page, setPage, type, setType }}
    >
      {children}
    </FilterContext.Provider>
  );
}
