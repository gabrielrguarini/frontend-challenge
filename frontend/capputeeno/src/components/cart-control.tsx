"use client";
import CartIcon from "./icons/cart-icon";
import styled from "styled-components";
import { useEffect, useState } from "react";

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
  const [cartCount, setCartCount] = useState<number>();
  useEffect(() => {
    const cartItem = localStorage.getItem("cart-items");
    if (cartItem) {
      setCartCount(JSON.parse(cartItem).length);
    } else {
      setCartCount(0);
    }
  }, [cartCount]);

  return (
    <Container>
      <CartIcon />
      {<CartCount>{cartCount}</CartCount>}
    </Container>
  );
}
