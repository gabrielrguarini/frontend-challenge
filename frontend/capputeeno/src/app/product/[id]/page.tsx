"use client";

import BackIcon from "@/components/icons/back-icon";
import { useProduct } from "@/hooks/useProduct";
import styled from "styled-components";

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const BackButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  font-family: inherit;
  font-weight: 500;
  color: #617480;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Product({ params }: { params: { id: string } }) {
  const { product } = useProduct(params.id);
  console.log(product);

  return (
    <ProductContainer>
      <BackButton>
        <BackIcon />
        Voltar
      </BackButton>
      <ProductInfo>
        <img src={product?.image_url} alt="Imagem do produto" />

        <div>
          <h2>{product?.category}</h2>
          <h1>{product?.name}</h1>
          <span>R$ {product?.price_in_cents}</span>
          <p>
            *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
            R$900,00.
          </p>
          <h3>Descrição</h3>
          <p>{product?.description}</p>
          <button>Comprar</button>
        </div>
      </ProductInfo>
    </ProductContainer>
  );
}
