"use client";
import styled from "styled-components";

export const DefaultHeaderLayout = styled.div`
  padding: 0px 24px;

  @media (min-width: ${({ theme }) => theme.desktopBreakPoint}) {
    padding: 0px 160px;
  }
`;
