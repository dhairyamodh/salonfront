import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Logo from 'layouts/logo/logo';
import { MenuDown } from 'assets/icons/MenuDown';
import { CATEGORY_MENU_ITEMS } from 'site-settings/site-navigation';
import * as categoryMenuIcons from 'assets/icons/category-menu-icons';
import {
  MainMenu,
  IconWrapper,
  MenuItem,
  SelectedItem,
  Icon,
  Arrow,
  LeftMenuBox,
} from './left-menu.style';

// const CategoryIcon = ({ name }) => {
//   const TagName = categoryMenuIcons[name];
//   return !!TagName ? <TagName /> : <p>Invalid icon {name}</p>;
// };

// const CategoryMenu = (props) => {
//   const { history } = props
//   const handleOnClick = (item) => {
//     if (item.dynamic) {
//       history.push('/[type]', `${item.href}`);
//       props.onClick(item);
//       return;
//     }
//     history.push(`${item.href}`);
//     props.onClick(item);
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column' }}>
//       {CATEGORY_MENU_ITEMS.map((item) => (
//         <MenuItem key={item.id} {...props} onClick={() => handleOnClick(item)}>
//           <IconWrapper>
//             <CategoryIcon name={item.icon} />
//           </IconWrapper>
//           <FormattedMessage id={item.id} defaultMessage={item.defaultMessage} />
//         </MenuItem>
//       ))}
//     </div>
//   );
// };


export const LeftMenu = ({ logo }) => {
  const router = useHistory();
  // const initialMenu = CATEGORY_MENU_ITEMS.find(
  //   (item) => item.href === router.pathname
  // );
  // const [activeMenu, setActiveMenu] = React.useState(
  //   initialMenu ?? CATEGORY_MENU_ITEMS[0]
  // );
  return (
    <LeftMenuBox>
      <Logo
        imageUrl={logo}
        alt={'Shop Logo'}
        onClick={() => router.push('/')}
      />

      <MainMenu>
        {/* <Popover
          className="right"
          handler={
            <SelectedItem>
              <span>
                <Icon>
                  <CategoryIcon name={activeMenu?.icon} />
                </Icon>
                <span>
                  <FormattedMessage
                    id={activeMenu?.id}
                    defaultMessage={activeMenu?.defaultMessage}
                  />
                </span>
              </span>
              <Arrow>
                <MenuDown />
              </Arrow>
            </SelectedItem>
          }
          content={<CategoryMenu onClick={setActiveMenu} />}
        /> */}
      </MainMenu>
    </LeftMenuBox>
  );
};
