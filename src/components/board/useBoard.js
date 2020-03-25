import { useDrop } from 'react-dnd';
import { useState } from 'react';

export default ({ state, afterDropHandler }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'card',
    drop: () => ({
      name: 'Board',
      state: state,
      afterDropHandler: afterDropHandler
    }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });
  console.log(isOver, state);
  const isActive = canDrop && isOver;

  return { isActive, drop, collapsed, setCollapsed };
};
