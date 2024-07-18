"use client";
import { FilterBar } from "@/components/filter-bar";
import { ProductsList } from "@/components/products-list";
import { QueryClient } from "@tanstack/react-query";
import styled from "styled-components";

const PageWrapper = styled.main`
  background-color: var(--bg-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 34px 160px;
  min-height: 100vh;
  background-color: var(--bg-primary);
  min-height: 100vh;
`;
export default function Home() {
  const client = new QueryClient();

  return (
    <PageWrapper>
      <FilterBar />
      <ProductsList />
    </PageWrapper>
  );
}
