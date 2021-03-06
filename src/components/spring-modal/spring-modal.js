import React from 'react';
import { useTransition, animated } from 'react-spring';
import { BaseModal } from 'react-spring-modal';
import 'react-spring-modal/src/styles.css';
import { CloseIcon } from 'assets/icons/CloseIcon';
import { Scrollbar } from 'components/scrollbar/scrollbar';
import styled from 'styled-components';
import css from '@styled-system/css';
const SpringModal = ({
  isOpen,
  onRequestClose,
  children,
  title,
  style = {},
}) => {
  // const transition = useTransition(isOpen, null, {
  //   from: { transform: 'translateY(100%) translateY(55px) translateX(-50%)' },
  //   enter: { transform: 'translateY(0%) translateY(0) translateX(-50%)' },
  //   leave: { transform: 'translateY(100%) translateY(55px) translateX(-50%)' },
  // });
  const transitions = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 200,
    config: { duration: 3000 },
    onRest: () => setItems([]),
  })



  const staticStyles = {
    position: 'absolute',
    bottom: 0,
    paddingTop: '20px',
    width: 'calc(100% + 1px)',
    height: '100%',
    maxHeight: '80vh',
    backgroundColor: '#ffffff',
    borderRadius: '0px',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
    zIndex: 9999,
  };

  const buttonStyle = {
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    color: '#0D1136',
    border: 0,
    outline: 0,
    boxShadow: 'none',
    borderRadius: '50%',
    position: 'absolute',
    top: -55,
    left: '50%',
    transform: 'translateX(-50%)',
    cursor: 'pointer',
    ':focus': {
      outline: 0,
      boxShadow: 'none',
    },
  };

  const scrollbarStyle = {
    height: '100%',
    maxHeight: '100%',
  };

  const ModalHeader = styled.div(css({
    width: '100%',
    padding: '0 20px',
  }))

  const Line = styled.hr(css({
    marginBottom: 10,
    borderTop: '0.01rem solid',
    borderColor: 'gray.600'
  }))

  const ModalTitle = styled.h5(css({
    color: 'text.bold',
    paddingBottom: 10,
    textAlign: 'center'
  }))
  return (
    <BaseModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <animated.div
        style={{ ...staticStyles, ...style }}
      >
        <button
          type="button"
          onClick={onRequestClose}
          style={{ ...buttonStyle }}
        >
          <CloseIcon style={{ width: 12, height: 12 }} />
        </button>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
        </ModalHeader>
        <Scrollbar style={{ ...scrollbarStyle }}>
          {children}
        </Scrollbar>
      </animated.div>
    </BaseModal >
  );
};

export default SpringModal;




// import React from 'react';
// import { useTransition, animated } from 'react-spring';
// import { BaseModal } from 'react-spring-modal';
// import { CloseIcon } from 'assets/icons/CloseIcon';
// import { Scrollbar } from 'components/scrollbar/scrollbar';

// const SpringModal = ({
//   isOpen,
//   onRequestClose,
//   children,
//   style = {},
// }) => {
//   const transition = useTransition(isOpen, null, {
//     from: { transform: 'translateY(100%) translateY(55px) translateX(-50%)' },
//     enter: { transform: 'translateY(0%) translateY(0) translateX(-50%)' },
//     leave: { transform: 'translateY(100%) translateY(55px) translateX(-50%)' },
//   });


//   const staticStyles = {
//     position: 'absolute',
//     bottom: 0,
//     left: '50%',
//     padding: '0',
//     width: 'calc(100% + 1px)',
//     height: '100%',
//     maxHeight: '70vh',
//     backgroundColor: '#ffffff',
//     borderRadius: '0px',
//     borderTopLeftRadius: '20px',
//     borderTopRightRadius: '20px',
//     zIndex: 99999,
//   };

//   const buttonStyle = {
//     width: 40,
//     height: 40,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#ffffff',
//     color: '#0D1136',
//     border: 0,
//     outline: 0,
//     boxShadow: 'none',
//     borderRadius: '50%',
//     position: 'absolute',
//     top: -55,
//     left: '50%',
//     transform: 'translateX(-50%)',
//     cursor: 'pointer',

//     ':focus': {
//       outline: 0,
//       boxShadow: 'none',
//     },
//   };

//   const scrollbarStyle = {
//     height: '100%',
//     maxHeight: '100%',
//   };
//   return (
//     <BaseModal isOpen={isOpen} onRequestClose={onRequestClose}>
//       {transition.map(
//         ({ item, key, props: transitionStyles }) =>
//           item && (
//             <animated.div
//               key={key}
//               style={{ ...transitionStyles, ...staticStyles, ...style }}
//             >
//               <button
//                 type="button"
//                 onClick={onRequestClose}
//                 style={{ ...buttonStyle }}
//               >
//                 <CloseIcon style={{ width: 12, height: 12 }} />
//               </button>
//               <Scrollbar style={{ ...scrollbarStyle }}>
//                 <div style={{ padding: '30px' }}>{children}</div>
//               </Scrollbar>
//             </animated.div>
//           )
//       )}
//     </BaseModal>
//   );
// };

// export default SpringModal;
