"use client";
import styled from "styled-components";
import { Saira_Stencil_One } from "next/font/google";
import { PrimaryInputWSearchIcon } from "./primary-input";
import { CartControl } from "./cart-control";
import { useFilter } from "@/hooks/useFilter";
import Link from "next/link";
import { DefaultHeaderLayout } from "./default-header-layout";

const sairaStencil = Saira_Stencil_One({ subsets: ["latin"], weight: "400" });

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  margin: auto;
`;

const Logo = styled(Link)`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 20px;
  line-height: 60px;
  text-decoration: none;
`;

export default function Header() {
  const { setSearch, search } = useFilter();
  return (
    <DefaultHeaderLayout>
      <TagHeader>
        <Logo href="/" className={sairaStencil.className}>
          Capputeeno
        </Logo>

        <PrimaryInputWSearchIcon
          value={search}
          handleChange={setSearch}
          placeholder="Procurando por algo específico?"
        />

        <CartControl />
      </TagHeader>
    </DefaultHeaderLayout>
  );
}
