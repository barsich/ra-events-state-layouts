import ShopCard from './ShopCard';
import ShopItem from './ShopItem';
import { v4 as uuidv4 } from 'uuid';
import './Store.css';
import IconSwitch from './IconSwitch';
import { useState } from 'react';

export default function Store(props) {
  const { products } = props;
  const productsWithKey = products.map((product) => {
    product.id = uuidv4();
    return product;
  });
  const [isList, setIsList] = useState(true);
  const handleSwitch = () => setIsList(!isList);
  return (
    <div className="store">
      <IconSwitch icon={isList ? 'view_list' : 'view_module'} onSwitch={handleSwitch} />

      <div className="products">
        {isList ? <ShopCard products={productsWithKey} /> : <ShopItem products={productsWithKey} />}
      </div>
    </div>
  );
}
