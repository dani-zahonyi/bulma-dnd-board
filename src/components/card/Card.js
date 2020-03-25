import React from 'react';

import { useCard } from '.';

export default props => {
  const { opacity, drag, preview } = useCard(props.id);

  return (
    <div ref={drag}>
      <div
        className="card"
        ref={preview}
        style={{ opacity, cursor: 'grab', margin: 5, borderRadius: 10, marginBottom: 0 }}>
        <div className="card-content">
          <p className="subtitle">“{props.msg}”</p>
          <p className="">{props.author}</p>
        </div>
        <footer className="card-footer" />
      </div>
    </div>
  );
};
