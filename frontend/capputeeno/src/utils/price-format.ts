export default function priceFormat(price_in_cents: number): string {
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price_in_cents / 100);
}
