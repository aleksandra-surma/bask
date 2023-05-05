function sortProductByHighlight(products) {
  const filtredHighlightedProducts = products.filter((product) => product.isHighlighted).sort((a, b) => b.price - a.price);
  const filtredNotHighlightedProducts = products.filter((product) => !product.isHighlighted);

  return [...filtredHighlightedProducts, ...filtredNotHighlightedProducts];
}

export default sortProductByHighlight;
