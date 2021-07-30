// import React from 'react'
// import { Scrollbars } from 'react-custom-scrollbars';

// export const Scrollbar = ({ children, }, props) => {
//   return (
//     <Scrollbars style={{ width: '100%', }} autoHide autoHeight>
//       {children}
//     </Scrollbars>
//   )
// }


import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import 'overlayscrollbars/css/OverlayScrollbars.css';

export const Scrollbar = ({
  children,
  className,
  options,
  style,
  ...props
}) => {
  return (
    <OverlayScrollbarsComponent
      options={{
        className: `${className} os-theme-thin`,
        scrollbars: {
          autoHide: 'leave',
        },
        ...options,
      }}
      style={style}
      {...props}
    >
      {children}
    </OverlayScrollbarsComponent>
  );
};
