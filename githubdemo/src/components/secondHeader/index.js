import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import qs from 'qs';
import { indexHeadNav } from '../../router';

import './index.css';

const SecondHeader = () => {
  const { search } = useLocation();
  console.log(qs.parse(search.substr(1)));
  const { tab = 'all' } = qs.parse(search.substr(1));
  return (
    <header>
      <div className="header">
        {
        indexHeadNav.map((item, index) => (
          <NavLink
            to={item.url}
            className="headerItem"
            key={index}
            defaultValue={0}
            activeStyle={{ color: 'red' }}
            exact
            isActive={() => tab === item.name.toLowerCase()}
          >{item.name}
          </NavLink>
        ))
    }
      </div>
    </header>
  );
};
export default SecondHeader;
