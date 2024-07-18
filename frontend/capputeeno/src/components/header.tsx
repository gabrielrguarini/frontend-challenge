"use client";
import styled from "styled-components";
import { Saira_Stencil_One } from "next/font/google";
import { PrimaryInputWSearchIcon } from "./primary-input";
import { CartControl } from "./cart-control";
import { useFilter } from "@/hooks/useFilter";

const sairaStencil = Saira_Stencil_One({ subsets: ["latin"], weight: "400" });

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;

  @media (min-width: ${({ theme }) => theme.desktopBreakPoint}) {
    padding: 20px 160px;
  }
`;

const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 20px;
  line-height: 60px;
  text-decoration: none;

  @media (min-width: ${({ theme }) => theme.tabletBreakPoint}) {
    font-size: 24px;
  }
  @media (min-width: ${({ theme }) => theme.desktopBreakPoint}) {
    font-size: 40px;
  }
`;

export default function Header() {
  const { setSearch, search } = useFilter();
  return (
    <TagHeader>
      <Logo href="#" className={sairaStencil.className}>
        Capputeeno
      </Logo>

      <PrimaryInputWSearchIcon
        value={search}
        handleChange={setSearch}
        placeholder="Procurando por algo específico?"
      />

      <CartControl />
    </TagHeader>
  );
}
