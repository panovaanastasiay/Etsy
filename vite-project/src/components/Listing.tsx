
import React from "react";

interface ListingItem {
  listing_id: number;
  url: string;
  MainImage: {
    url_570xN: string;
  };
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
}

interface ListingProps {
  items: ListingItem[];
}

const Listing: React.FC<ListingProps> = ({ items }) => {
  console.log(items);
  return(
  <div className="item-list">
    {items.map (item => (
        <div className="item" key={item.listing_id}>
        <div className="item-image">
          {item.MainImage && item.MainImage.url_570xN && (
            <a href={item.url}>
              <img src={item.MainImage.url_570xN} alt={item.title} />
            </a>
          )}
        </div>
        <div className="item-details">
          <p className="item-title">
          {item.title && item.title.length > 50 ? item.title.slice(0, 50) + '...' : item.title}
          </p>
          <p className="item-price">
            {formatPrice(item.currency_code, item.price)}
          </p>
          <p className={`item-quantity ${getQuantityLevel(item.quantity)}`}>
            {item.quantity} left
          </p>
        </div>
      </div>
    ))}
  </div>
  )
}

const formatPrice = (currencyCode: string, price: string) => {
    if (currencyCode === 'USD') {
      return `$${price}`;
    } else if (currencyCode === 'EUR') {
      return `€${price}`;
    } else {
      return `${price} ${currencyCode}`;
    }
};

const getQuantityLevel = (quantity: number) => {
    if (quantity <= 10) {
      return 'level-low';
    } else if (quantity <= 20) {
      return 'level-medium';
    } else {
      return 'level-high';
    }
  };
  
  export default Listing;