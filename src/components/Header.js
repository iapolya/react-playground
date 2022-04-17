import React from 'react';
import CounterButton from './CounterButton';

export const Header = React.memo(
  () => {
    return (
      <header className="pa1">
        <h1>MURRR</h1>
        <CounterButton />
      </header>
    );
  },
  () => {
    return true;
  }
);

Header.displayName = 'Header';
