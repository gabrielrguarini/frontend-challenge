"use client";
import styled from "styled-components";
import { Saira_Stencil_One } from "next/font/google";
import { PrimaryInputWSearchIcon } from "./primary-input";
import { CartControl } from "./cart-control";

const sairaStencil = Saira_Stencil_One({ subsets: ["latin"], weight: "400" });

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 160px;
`;

const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 40px;
  line-height: 60px;
`;

export default function Header() {
  return (
    <TagHeader>
      <Logo className={sairaStencil.className}>Capputeeno</Logo>

      <PrimaryInputWSearchIcon placeholder="Procurando por algo específico?" />

      <CartControl />
    </TagHeader>
  );
}
