import React, { useEffect, useState } from 'react';
import Items from './Items';
import { Item as ItemType } from './types';

type Items = ItemType[];

const Card = () => {
  const [input, setInput] = useState('');
  const [items, setItems] = useState<Items>(
    JSON.parse(localStorage.getItem('items') || '') || []
  );

  const deleteItem = (id: number) => {
    setItems(
      items.filter((item) => {
        return item.id !== id;
      })
    );
  };

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <div className='card'>
      <h1>Grocery Bud</h1>
      <form>
        <input
          placeholder='i/e eggs'
          className='input'
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className='btn-container'>
          <button
            onClick={(e) => {
              e.preventDefault();
              setItems((items) => [
                { name: input, id: Math.random() },
                ...items,
              ]);
              setInput('');
            }}
            className='btn'
          >
            Submit
          </button>
        </div>
      </form>
      <div className='items'>
        <Items deleteItem={deleteItem} items={items} />
      </div>
    </div>
  );
};

export default Card;
