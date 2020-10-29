import React, { useState } from 'react';
import Items from './Items';

type Items = string[];

const Card = () => {
  const [input, setInput] = useState('');
  const [items, setItems] = useState<Items>([]);

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
          <button onSubmit={() => setItems([...items, input])} className='btn'>
            Submit
          </button>
        </div>
      </form>
      <div className='items'>
        <Items items={items} />
      </div>
    </div>
  );
};

export default Card;
