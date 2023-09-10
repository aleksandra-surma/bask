export function sortProductByHighlight(products) {
  const filtredHighlightedProducts = products.filter((product) => product.isHighlighted).sort((a, b) => b.price - a.price);
  const filtredNotHighlightedProducts = products.filter((product) => !product.isHighlighted);

  return [...filtredHighlightedProducts, ...filtredNotHighlightedProducts];
}

export function sortProductByOrder(products) {
  return products.sort((a, b) => Number(a.productsOrder) - Number(b.productsOrder));
}
