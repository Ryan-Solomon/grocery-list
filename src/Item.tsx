import React, { FC } from 'react';
import { Item as ItemType } from './types';

type Props = {
  key: number;
  item: ItemType;
  deleteItem: (id: number) => void;
};

const Item: FC<Props> = ({ item, deleteItem }) => {
  return (
    <div className='item-container'>
      <h2>{item.name}</h2>
      <button onClick={() => deleteItem(item.id)}>Delete Item</button>
    </div>
  );
};

export default Item;
