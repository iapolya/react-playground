import React from 'react';

export const Header = React.memo(
  () => {
    return (
      <header className="pa1">
        <h1>MURRR</h1>
      </header>
    );
  },
  () => {
    return true;
  }
);

Header.displayName = 'Header';
