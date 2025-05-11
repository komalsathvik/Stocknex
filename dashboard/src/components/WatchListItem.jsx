import React, { useState } from 'react';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import WatchListActions from './WatchListActions';
function WatchListItem({ stock } ) {
  const [showWatch, setShowWatch] = useState(false);

  function handleMouseEnter() {
    setShowWatch(true);
  }

  function handleMouseLeave() {
    setShowWatch(false);
  }

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
        {showWatch && <WatchListActions uid={stock.name}></WatchListActions>}

      </div>
    </li>
  );
}

export default WatchListItem;
