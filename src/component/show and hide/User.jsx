import React, { useState } from 'react';
import "./User.css";

export const User = () => {
  const [showFirstName, setShowFirstName] = useState(false);
  const [showLastName, setShowLastName] = useState(false);

  function handleFirstNameHover() {
    setShowFirstName(true);
    setShowLastName(false);
  }

  function handleLastNameHover() {
    setShowLastName(true);
    setShowFirstName(false);
  }

  function handleMouseLeave() {
    setShowFirstName(false);
    setShowLastName(false);
  }

  return (
    <div className='Container'>
      <h2>Hide/Show</h2>

      <div className='box' onMouseLeave={handleMouseLeave}>
        {/* First Name Column */}
        <div className='button-column'>
          <button onClick={handleFirstNameHover}>
            Show/Hide FirstName
          </button>
          {showFirstName && <div className='name'><strong>Swati</strong></div>}
        </div>

        {/* Last Name Column */}
        <div className='button-column'>
          <button onClick={handleLastNameHover}>
            Show/Hide LastName
          </button>
          {showLastName && <div className='name'><strong>Sinha</strong></div>}
        </div>
      </div>
    </div>
  );
};
