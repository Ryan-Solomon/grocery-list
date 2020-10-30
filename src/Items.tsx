import React, { FC } from 'react';
import Item from './Item';
import { Item as ItemType } from './types';

type Props = {
  items: ItemType[];
  deleteItem: (id: number) => void;
};

const Items: FC<Props> = ({ items, deleteItem }) => {
  const renderedItems = items.map((item, idx) => {
    return <Item key={idx} item={item} deleteItem={deleteItem} />;
  });

  return <>{renderedItems}</>;
};

export default Items;
