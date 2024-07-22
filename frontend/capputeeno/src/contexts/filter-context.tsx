"use client";
import { FilterType } from "@/types/filter-types";
import { PriorityTypes } from "@/types/priority-types";
import { createContext, useState } from "react";

export const FilterContext = createContext({
  search: "",
  page: 0,
  type: FilterType.ALL,
  priority: PriorityTypes.NEWS,
  setPriority: (value: PriorityTypes) => {},
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
  const [priority, setPriority] = useState(PriorityTypes.POPULARITY);

  return (
    <FilterContext.Provider
      value={{
        search,
        setSearch,
        page,
        setPage,
        type,
        setType,
        priority,
        setPriority,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
