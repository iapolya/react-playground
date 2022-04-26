import React from 'react';

interface IScrollProps {
  children: React.ReactNode;
}

const Scroll = (props: IScrollProps) => {
  return <div style={{ overflowY: 'scroll', border: '1px solid grey' }}>{props.children}</div>;
};

export default Scroll;
