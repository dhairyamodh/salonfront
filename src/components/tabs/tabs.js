import React, { useState } from 'react'
import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get';

const TabContainer = styled.ul`
margin: 0; 
padding: 0;
@media only screen and (max-width: 990px) {
    padding:0 20px;
  }
li {
    display: inline-block;
    padding: 0.5em 1em;
  margin: 1.4em 3em 0 0;
  cursor:pointer;
  border: 1px solid transparent;
  text-transform: capitalize;
  &.active {
      border-color: ${themeGet('colors.secondary.regular')};
      border-radius:${themeGet('radii.bigger')};
      color:${themeGet('colors.secondary.regular')};
      background:${themeGet('colors.secondaryLight.regular')};
  }
  @media only screen and (max-width: 990px) {
    margin: 1em 1em 0 0;
    
  }
}
`;

function Tabs({ data, active, onclick }) {

    return (
        <TabContainer>
            {data.map((tab) =>
                <li className={tab.title === active && "active"} onClick={() => onclick(tab.title)}><h5>{tab.title}</h5></li>
            )}
        </TabContainer>
    )
}

export default Tabs
