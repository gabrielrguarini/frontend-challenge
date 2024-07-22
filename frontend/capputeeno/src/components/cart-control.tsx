"use client";
import CartIcon from "./icons/cart-icon";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Product } from "@/types/product";

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
  cursor: pointer;
`;

export function CartControl() {
  const router = useRouter();
  const [cartCount, setCartCount] = useState<number>();
  const { value } = useLocalStorage<Product[]>("cart-items", []);
  useEffect(() => {
    setCartCount(value.length);
  }, [value]);

  return (
    <Container
      onClick={() => {
        router.push("/cart");
      }}
    >
      <CartIcon />
      {Number(cartCount) > 0 && <CartCount>{cartCount}</CartCount>}
    </Container>
  );
}
