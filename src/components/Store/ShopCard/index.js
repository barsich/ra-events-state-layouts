export default function ShopCard(props) {
  const { products } = props;

  const productCards = [];

  products.forEach((product) =>
  productCards.push(
      <div
        className="shop-card"
        key={product.id}
        style={{
          backgroundImage: `url(${product.img})`,
        }}
      >
        <span className="shop-card__name">{product.name}</span>
        <span className="shop-card__color">{product.color}</span>
        <span className="shop-card__price">${product.price}</span>
        <button className="add-to-cart-button">add to cart</button>
      </div>
    )
  );

  return productCards;
}
