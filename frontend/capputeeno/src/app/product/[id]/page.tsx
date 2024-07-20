"use client";

import { BackButton } from "@/components/back-button";
import BackIcon from "@/components/icons/back-icon";
import BagIcon from "@/components/icons/bag-icon";
import { useProduct } from "@/hooks/useProduct";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  min-height: 87.95vh;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 100vw;
  margin-top: 22px;
  @media (min-width: ${(props) => props.theme.desktopBreakPoint}) {
    flex-direction: row;
  }

  img {
    max-width: 640px;
    width: 50%;
    border-radius: 4px;
    margin: auto;
  }
`;
const SectionProduct = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 32px;
  font-family: inherit;
  text-align: left;
  color: var(--text-dark2);
  h2 {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }

  h1 {
    font-size: 32px;
    font-weight: 300;
    line-height: 48px;
    margin-top: 12px;
  }
  h3 {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-transform: uppercase;
    margin-top: 58px;
  }
  span {
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    margin-top: 4px;
  }
  p {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    margin-top: 24px;
  }
  p:nth-of-type(2) {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    margin-top: 8px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    border-radius: 4px;
    border: none;
    background-color: var(--button-primary);
    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-transform: uppercase;
    color: var(--text-button);
    padding: 10px;
    cursor: pointer;
  }
`;

export default function Product({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { product } = useProduct(params.id);
  if (!product) return <h1>Carregando...</h1>;

  const handleAddToCart = () => {
    let cartItems = localStorage.getItem("cart-items");
    if (cartItems) {
      let cartItemsArray = JSON.parse(cartItems);

      let existingProductIndex = cartItemsArray.findIndex(
        (item: { id: string }) => item.id === params.id
      );

      if (existingProductIndex != -1) {
        cartItemsArray[existingProductIndex].quantity += 1;
      } else {
        cartItemsArray.push({ ...product, quantity: 1, id: product.id });
      }

      localStorage.setItem("cart-items", JSON.stringify(cartItemsArray));
    } else {
      const newCart = [{ ...product, quantity: 1, id: params.id }];
      localStorage.setItem("cart-items", JSON.stringify(newCart));
    }
  };

  return (
    <ProductContainer>
      <BackButton
        onClick={() => {
          router.push("/");
        }}
      >
        <BackIcon />
        Voltar
      </BackButton>
      <ProductInfo>
        <img src={product?.image_url} alt="Imagem do produto" />
        <SectionProduct>
          <div>
            <h2>{product?.category}</h2>
            <h1>{product?.name}</h1>
            <span>
              {`R$ ${
                product?.price_in_cents ? product.price_in_cents / 100 : 0
              }`.replace(".", ",")}
            </span>
            <p>
              *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
              R$900,00.
            </p>
            <h3>Descrição</h3>
            <p>{product?.description}</p>
          </div>
          <button onClick={handleAddToCart}>
            <BagIcon /> Adicionar ao carrinho
          </button>
        </SectionProduct>
      </ProductInfo>
    </ProductContainer>
  );
}
