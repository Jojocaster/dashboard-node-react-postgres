import React from 'react';

const Link = ({active, children, onClick}) => (
  <div onClick={onClick}>{children}</div>
)

export default Link;