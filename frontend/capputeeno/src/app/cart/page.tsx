"use client";
import { BackButton } from "@/components/back-button";
import BackIcon from "@/components/icons/back-icon";
import { Product } from "@/types/product";
import styled from "styled-components";
const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
`;
const CartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CartContainer = styled.div`
  h1 {
    text-transform: uppercase;
    color: var(--text-dark2);
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
  }
  p {
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--text-dark2);
  }
  span {
    font-weight: 500;
  }
`;
const ListCard = styled.li`
  display: flex;
  background-color: #fff;
  list-style: none;
  max-width: 736px;
  margin-top: 16px;

  img {
    max-width: 256px;
    border-radius: 8px 0px 0px 8px;
  }
  select {
    background-color: #f3f5f6;
    border: 1px solid #a8a8b3;
    color: #737380;
    padding: 12px 8px;
    border-radius: 8px;
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
    div {
      display: flex;
      justify-content: space-between;
    }
  }
`;
const FinishContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  text-align: left;
  padding: 16px 24px;
  gap: 8px;
  max-height: 80vh;
  h3 {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
  }
  div {
    display: flex;
    justify-content: space-between;
    gap: 70px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
  }
  #line {
    border: 1px solid var(--shapes);
    margin: 16px 0px;
  }
  #total {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
  }
  button {
    border: none;
    text-transform: uppercase;
    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    padding: 8px;
    border-radius: 4px;
    color: #f5f5fa;
    background-color: #51b853;
    margin-top: 40px;
  }
`;
interface cartItemInterface extends Product {
  quantity: number;
}
export default function Cart() {
  const products = localStorage.getItem("cart-items");
  if (!products) {
    return <p>Carrinho vazio</p>;
  }
  const cartItems: cartItemInterface[] = JSON.parse(products);
  console.log(products);
  return (
    <PageWrapper>
      <BackButton>
        <BackIcon />
        Voltar
      </BackButton>
      <CartWrapper>
        <CartContainer>
          <h1>Seu Carrinho</h1>
          <p>
            Total (3 produtos) <span>R$161,00</span>
          </p>
          <ul>
            {cartItems.map((item) => (
              <ListCard key={item.id}>
                <img src={item.image_url} />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div>
                    <select name="quantidade">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <span>R$ {item.price_in_cents / 100}</span>
                  </div>
                </div>
              </ListCard>
            ))}
          </ul>
        </CartContainer>
        <FinishContainer>
          <h3>Resumo do pedido </h3>
          <div>
            <p>Subtotal de produtos</p>
            <span>R$ 161,00</span>
          </div>
          <div>
            <p>Entrega</p>
            <span>R$ 40,00</span>
          </div>
          <div id="line"></div>
          <div id="total">
            <p>Total</p>
            <span>R$ 201,00</span>
          </div>
          <button>Finalizar a compra</button>
        </FinishContainer>
        <div></div>
      </CartWrapper>
    </PageWrapper>
  );
}
