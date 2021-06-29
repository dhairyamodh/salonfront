import React, { useState, useEffect } from 'react';
import { usePrevious, useMeasure } from 'utils/hooks';
import { useSpring, animated } from 'react-spring';
import { Frame, Title, Content, Header, IconWrapper } from './tree-menu.style';
import { Button } from 'components/button/button';
import { ArrowNext } from 'assets/icons/ArrowNext';
import { ServerUrl } from '../../constants';
import Icon from '../../layouts/icon/icon'

const Tree = React.memo(
  ({
    children,
    name,
    icon,
    activeClass,
    // isOpen,
    onClick,
    dropdown,
    onToggleBtnClick,
    depth,
    defaultOpen = false,
  }) => {
    const [isOpen, setOpen] = useState(defaultOpen);
    useEffect(() => {
      setOpen(defaultOpen);
    }, [defaultOpen]);
    const previous = usePrevious(isOpen);
    const [bind, { height: viewHeight }] = useMeasure();
    const { height, opacity, transform } = useSpring({
      from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
      to: {
        height: isOpen ? viewHeight : 0,
        opacity: isOpen ? 1 : 0,
        transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`,
      },
    });
    // const Icon = icon ? Icons[icon] : depth === 'child' ? Icons['Minus'] : null;
    // const Icon = icon ? Icons[icon] : null;

    return (
      <Frame>
        <Header open={activeClass} className={depth} onClick={onClick}>
          {icon && (
            <IconWrapper className="iconImage">
              <Icon iconName={icon} />
            </IconWrapper>
          )}
          <Title >{name}</Title>


        </Header>
      </Frame>
    );
  }
);

export const TreeMenu = ({
  data,
  className,
  onClick,
  activeClass,
}) => {

  const handler = (children) => {
    return children.map((subOption) => {
      if (!subOption.children) {
        return (
          <Tree
            key={subOption.categoryName}
            name={subOption.categoryName}
            icon={ServerUrl + subOption.categoryImage}
            depth="child"
            onClick={() => onClick(subOption)}
            activeClass={activeClass == subOption.id && true}
          />
        );
      }
      return (
        <Tree
          key={subOption.categoryName}
          name={subOption.categoryName}
          icon={ServerUrl + subOption.categoryImage}
          dropdown={!subOption.children.length ? false : true}
          depth="parent"
          onClick={() => onClick(subOption)}
          activeClass={activeClass == subOption.id && true}
        >
          {handler(subOption.children)}
        </Tree>
      );
    });
  };
  return <>{handler(data)}</>;
};
