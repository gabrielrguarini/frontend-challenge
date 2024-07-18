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
  padding: 12px 24px;
  min-height: 100vh;
  background-color: var(--bg-primary);
  min-height: 100vh;

  @media (min-width: ${({ theme }) => theme.desktopBreakPoint}) {
    padding: 34px 160px;
  }
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
