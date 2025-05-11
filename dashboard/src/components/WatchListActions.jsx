import React from 'react';
import { Tooltip } from '@mui/material';
import Grow from '@mui/material/Grow';
import { BarChartOutlined, MoreHorizOutlined } from '@mui/icons-material';
import GeneralContext from './GeneralContext';
import { useContext } from 'react';
function WatchListActions({ uid }) {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };
  return (
    <span className="actions">
      <Tooltip
        title="Buy (B)"
        placement="top"
        arrow
        TransitionComponent={Grow}
        onClick={handleBuyClick}
      >
        <button className="buy">Buy</button>
      </Tooltip>
      <Tooltip
        title="Sell (S)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="sell">Sell</button>
      </Tooltip>
      <Tooltip
        title="Analytics (A)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className='action'>   
      <BarChartOutlined className="icon"/>
        </button>
      </Tooltip>
      <Tooltip
        title="More"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="action">
          <MoreHorizOutlined className="icon"/>
        </button>
      </Tooltip>
    </span>
  );
}

export default WatchListActions;
