import React, { FC } from 'react';
import Item from './Item';

type Props = {
  items: string[];
};

const Items: FC<Props> = ({ items }) => {
  const renderedItems = items.map((item, idx) => {
    return <Item key={idx} item={item} />;
  });

  return <>{renderedItems}</>;
};

export default Items;
