import React from 'react';
import './styles.css';
import Boards from './scenes/boards';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
export default function App() {
  return (
    <DndProvider backend={Backend}>
      <div className="App container">
        <Boards />
      </div>
    </DndProvider>
  );
}
