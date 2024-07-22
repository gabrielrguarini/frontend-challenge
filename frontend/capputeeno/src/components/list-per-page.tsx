"use client";
import { useFilter } from "@/hooks/useFilter";
import styled from "styled-components";
const ListContainer = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
  margin-left: auto;
`;
interface PageButtonProps {
  selected: boolean;
}
const PageButton = styled.button<PageButtonProps>`
  border: ${(props) => (props.selected ? `1px solid #FFA585` : "none")};
  border-radius: 8px;
  background-color: ${(props) => (props.selected ? "#F5F5FA" : "#e9e9f0")};

  width: 32px;
  height: 32px;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: ${(props) => (props.selected ? "#FFA585" : "#737380")};
`;
export default function ListPerPage() {
  const { page, setPage } = useFilter();
  return (
    <ListContainer>
      <PageButton selected={page === 1} onClick={() => setPage(1)}>
        1
      </PageButton>
      <PageButton selected={page === 2} onClick={() => setPage(2)}>
        2
      </PageButton>
      <PageButton selected={page === 3} onClick={() => setPage(3)}>
        3
      </PageButton>
      <PageButton selected={page === 4} onClick={() => setPage(4)}>
        4
      </PageButton>
      <PageButton selected={page === 5} onClick={() => setPage(5)}>
        5
      </PageButton>
      <PageButton
        selected={false}
        onClick={() => setPage(page > 1 ? page - 1 : page)}
      >
        &lt;
      </PageButton>
      <PageButton selected={false} onClick={() => setPage(page + 1)}>
        &gt;
      </PageButton>
    </ListContainer>
  );
}
