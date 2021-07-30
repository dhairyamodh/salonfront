import React, { Fragment } from 'react';
import { useTransition, animated } from 'react-spring';
import { CenterModal, } from 'react-spring-modal';
import { CloseIcon } from 'assets/icons/CloseIcon';
import { Scrollbar } from 'components/scrollbar/scrollbar';
import styled from 'styled-components';
import css from '@styled-system/css';
import { Button } from "components/button/button";


const Modal = styled.div(css({
    width: '35%',
    maxWidth: 'calc(100% - 30px)',
    height: 'auto',
    maxHeight: 'calc(100vh - 30px)',
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 99999,
    '@media screen and (max-width: 990px)': {
        width: '100%',
    },
}));

const buttonStyle = {
    width: 35,
    height: 35,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    color: '#0D1136',
    border: 0,
    outline: 0,
    boxShadow: 'none',
    borderRadius: '50%',
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: 100000,
    cursor: 'pointer',

    ':focus': {
        outline: 0,
        boxShadow: 'none',
    },
};


const CustomModal = ({
    isOpen,
    isClose,
    component
}) => {
    const Comp = component
    return (
        <CenterModal isOpen={isOpen} onDismiss={isClose} >
            <>
                <button
                    type='button'
                    onClick={isClose}
                    style={{ ...buttonStyle }}
                >
                    <CloseIcon style={{ width: 11, height: 11 }} />
                </button>
                <Modal>
                    <Comp />
                </Modal>
            </>

        </CenterModal>
    );
};

export default CustomModal;
