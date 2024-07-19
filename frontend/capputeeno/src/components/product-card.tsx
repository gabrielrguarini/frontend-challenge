"use client";
import { useRouter } from "next/navigation";
import styled from "styled-components";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  id: string;
}

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 8px 8px 4px 4px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  width: 256px;

  img {
    width: 256px;
    height: 300px;
    border-radius: 8px 8px 0px 0px;
  }

  h3 {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark2);
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: var(--shapes-dark);
  }

  div {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding: 8px 8px;
    > div {
      width: 228px;
      height: 1px;
      margin: 8px 0px;
      padding: 0px;
      background-color: var(--shapes);
    }
  }
`;

export function ProductCard(props: ProductCardProps) {
  const router = useRouter();
  return (
    <Card
      onClick={() => {
        router.push(`/product/${props.id}`);
      }}
    >
      <img src={props.image} />
      <div>
        <h3>{props.title}</h3>
        <div></div>
        <p>R$ {props.price}</p>
      </div>
    </Card>
  );
}
