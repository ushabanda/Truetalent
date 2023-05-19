import React, { useState } from 'react';
import ViewDayIcon from '@mui/icons-material/ViewDay';
import CardList from '../cards/CardList';
import ViewListIcon from '@mui/icons-material/ViewList';
import "./styles.css"
import Table from './Table';

function Tablecomponent() {
  const [showBoxes, setShowBoxes] = useState(true);
  const [displayText, setDisplayText] = useState(false);

  const handleFirstButtonClick = () => {
    setShowBoxes(true);
    setDisplayText(false);
  };

  const handleSecondButtonClick = () => {
    setShowBoxes(false);
    setDisplayText(true);
  };

  return (
    <>
      <ViewListIcon onClick={handleFirstButtonClick} className="listicon" />
      <ViewDayIcon onClick={handleSecondButtonClick} className="gridicon" />

      {/* {showBoxes && (
        <div>
          <p>Box 1</p>
          <p>Box 2</p>
          <p>Box 3</p>
        </div>
      )} */}
      {showBoxes && <div className="job-card-container"><CardList /></div>}
      {displayText && <div className="table-container"><Table /></div>}

      {/* {displayText && <p>This is the text to be displayed.</p>} */}
    </>
  );
}

export default Tablecomponent;
