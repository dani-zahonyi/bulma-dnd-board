import React from 'react';
import Card from '../card';
import { useBoard } from '.';
import './board.css';

export default props => {
  const { isActive, drop, collapsed, setCollapsed } = useBoard(props);

  if (collapsed) {
    return (
      <div className="tile is-1 is-parent">
        <div onDoubleClick={() => setCollapsed(!collapsed)} className="tile is-child" style={styles.collapsed.outer}>
          <p className={`title has-background-${props.color} collapsed-board-title`} style={styles.collapsed.inner}>
            {props.title}
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="tile is-3 is-parent" ref={drop} style={{ opacity: isActive ? 0.5 : 1 }}>
      <div className="tile is-child">
        <article
          className={`panel is-${props.color} ${isActive ? 'has-background-' + props.color : ''}`}
          style={styles.panel.base}>
          <div className="panel-heading" onDoubleClick={() => setCollapsed(!collapsed)}>
            {props.title}
          </div>
          {!collapsed && (
            <div style={styles.panel.content}>
              {props.cards.map(note => (
                <Card key={note.id} {...note} />
              ))}
            </div>
          )}
        </article>
      </div>
    </div>
  );
};

const styles = {
  collapsed: {
    outer: {},
    inner: { color: 'white', padding: 10 }
  },
  panel: {
    base: { height: '100%', background: '#eaeeee' },
    content: { height: 'calc(80vh - 55px)', overflow: 'auto' }
  }
};
