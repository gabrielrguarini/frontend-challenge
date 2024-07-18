"use client";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import CartIcon from "./icons/cart-icon";
import styled from "styled-components";

const CartCount = styled.span`
  border-radius: 100%;
  padding: 0px 5px;
  font-size: 10px;
  background-color: var(--delete-color);
  color: white;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const Container = styled.div`
  position: relative;
  width: 28px;
  height: 31px;
`;

export function CartControl() {
  const { value } = useLocalStorage("cart-items", []);

  return (
    <Container>
      <CartIcon />
      {value.length > 0 && <CartCount>{value.length}</CartCount>}
    </Container>
  );
}
