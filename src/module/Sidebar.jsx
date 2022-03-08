import React from 'react';

function Sidebar(props) {
  const { children } = props;
  return (
    <div>
      { children }
    </div>
  );
}

export default Sidebar;
