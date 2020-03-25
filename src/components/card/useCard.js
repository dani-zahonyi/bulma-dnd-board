import { useDrag } from 'react-dnd';

export default cardId => {
  const [{ opacity }, drag] = useDrag({
    item: { type: 'card', id: cardId },
    end(item, monitor) {
      const dropResult = monitor.getDropResult();
      if (dropResult && dropResult.afterDropHandler) dropResult.afterDropHandler(item.id, dropResult.state);
    },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  });
  return { opacity, drag };
};
