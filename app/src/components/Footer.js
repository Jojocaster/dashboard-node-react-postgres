import React from 'react';
import FilterLink from 'containers/FilterLink';

const Footer = () => (
  <div>
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
  </div>
)

export default Footer;