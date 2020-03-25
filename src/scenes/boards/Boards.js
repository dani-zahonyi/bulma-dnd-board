import React from 'react';
import Board from '../../components/board';

const starterCards = [
  {
    id: 1,
    msg: 'PCI software',
    author: 'Miss Albin Bernier',
    state: 0
  },
  {
    id: 2,
    msg: 'payment Nevada Pants',
    author: 'Dannie Pfeffer PhD',
    state: 2
  },
  {
    id: 3,
    msg: 'Cheese collaboration Berkshire',
    author: 'Edd Tromp',
    state: 9
  },
  {
    id: 4,
    msg: 'e-tailers Soap',
    author: 'Jovany Jerde',
    state: 3
  },
  {
    id: 5,
    msg: 'Health deposit',
    author: 'Genoveva Ryan',
    state: 1
  },
  {
    id: 6,
    msg: 'Balanced Forward',
    author: 'Shany Bergnaum',
    state: 0
  },
  {
    id: 7,
    msg: 'Frozen',
    author: 'Florine Bergnaum',
    state: 5
  },
  {
    id: 8,
    msg: 'Czech Koruna',
    author: 'Abdiel Hauck',
    state: 0
  },
  {
    id: 9,
    msg: 'Mississippi',
    author: 'Glen Orn I',
    state: 2
  }
];

const boards = [
  {
    state: 0,
    color: 'primary',
    title: 'Primary'
  },
  {
    state: 1,
    color: 'warning',
    title: 'Warning'
  },
  {
    state: 2,
    title: 'Danger',
    color: 'danger'
  },
  {
    state: 3,
    title: 'Danger II',
    color: 'danger'
  }
];

export default () => {
  const [cards, setCards] = React.useState(starterCards);

  const setState = (id, state) => {
    const droppedCard = cards.find(rec => rec.id === id);
    setCards([...cards.filter(rec => rec.id !== id), { ...droppedCard, state }]);
  };

  return (
    <div>
      <h1 className="title">Board</h1>
      <div className="tile is-horizontal">
        {boards.map(board => (
          <Board
            key={board.state}
            {...board}
            cards={cards.filter(card => card.state === board.state)}
            afterDropHandler={setState}
          />
        ))}
      </div>
    </div>
  );
};
