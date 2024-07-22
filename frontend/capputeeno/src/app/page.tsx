"use client";
import { FilterBar } from "@/components/filter-bar";
import ListPerPage from "@/components/list-per-page";
import { ProductsList } from "@/components/products-list";
import styled from "styled-components";

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
`;
export default function Home() {
  return (
    <PageWrapper>
      <FilterBar />
      <ListPerPage />
      <ProductsList />
    </PageWrapper>
  );
}
