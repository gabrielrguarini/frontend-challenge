"use client";
import styled from "styled-components";

export const DefaultPageLayout = styled.div`
  background-color: var(--bg-primary);

  padding: 12px 24px;
  background-color: var(--bg-primary);
  min-height: 100vh;

  @media (min-width: ${({ theme }) => theme.desktopBreakPoint}) {
    padding: 34px 160px;
  }
`;
