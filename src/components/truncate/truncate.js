import React, { useState } from 'react';
import styled from "styled-components";
import css from '@styled-system/css';


const MoreLess = styled.span(css({
  fontWeight: 500,
  color: 'primary.regular',
  cursor: 'pointer',
})
)
const ReadMore = ({ children, more, less, character }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleLines = event => {
    event.preventDefault();
    setExpanded(!expanded);
  };

  if (!children) return null;

  return (
    <>
      {(children && children.length < character) || expanded
        ? children
        : children.substring(0, character)}
      {children && children.length > character && !expanded && (
        <>
          <br />
          <MoreLess onClick={toggleLines}>

            {more}
          </MoreLess>
        </>
      )}
      {children && children.length > character && expanded && (
        <>
          <br />
          <MoreLess onClick={toggleLines}>
            {less}
          </MoreLess>
        </>
      )}
    </>
  );
};

ReadMore.defaultProps = {
  character: 150,
  more: 'Read more',
  less: 'less',
};

export default ReadMore;
