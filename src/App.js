import React, { memo } from 'react';
import Blog from './components/Blog/Blog';
import CovidAwareness from './components/CovidAwareness';
import Developer from './components/Developer';

const App = (props) => {
  return (
    <div className="parent">
      <div className="child child-one"><CovidAwareness /></div>
      <div className="child child-two"><Blog /></div>
      <div className="child child-three"><Developer /></div>
    </div>
  );
}

export default memo(App);