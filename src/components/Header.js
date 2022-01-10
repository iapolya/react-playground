import React from 'react';

export const Header = React.memo(
  () => {
    return <h1>MURRR</h1>;
  },
  () => {
    return true;
  }
);

Header.displayName = 'Header';
