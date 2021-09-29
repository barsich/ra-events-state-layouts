export default function ShopItem(props) {
  const { products } = props;

  const productItems = [];

  products.forEach((product) =>
    productItems.push(
      <div className="shop-item" key={product.id}>
        <img src={product.img} alt={product.name} className="shop-item_image" />
        <span className="shop-item__name">{product.name}</span>
        <span className="shop-item__color">{product.color}</span>
        <span className="shop-item__price">${product.price}</span>
        <button className="add-to-cart-button">add to cart</button>
      </div>
    )
  );

  return productItems;
}
