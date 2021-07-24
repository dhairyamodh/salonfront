import React, { Fragment } from 'react';
import { useTransition, animated } from 'react-spring';
import { CenterModal, } from 'react-spring-modal';
import { CloseIcon } from 'assets/icons/CloseIcon';
import { Scrollbar } from 'components/scrollbar/scrollbar';
import styled from 'styled-components';
import css from '@styled-system/css';
import { Button } from "components/button/button";


const Modal = styled.div(css({
    width: '30%',
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


const ModalHeader = styled.div(css({
    width: '100%',
    padding: 20,
}))

const Line = styled.hr(css({
    borderTop: '0.01rem solid',
    borderColor: 'gray.600'
}))

const ModalTitle = styled.h5(css({
    color: 'text.bold',
    paddingBottom: 10,
    textAlign: 'center'
}))

const ModalBody = styled.div(css({
    width: '100%',
    marginTop: '20px',
    padding: '0 20px 20px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    gridGap: 20,
    gridTemplateColumns: 'repeat(2, minmax(180px, 1fr))',
}))


const ModalContainer = ({
    isOpen,
    isClose,
    title,
    onSuccess,
}) => {

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
                    <ModalHeader>
                        <ModalTitle>{title}</ModalTitle>
                    </ModalHeader>
                    <Line />
                    <ModalBody>
                        <Button type='button' size='big' variant="success" style={{ flex: 1 }} onClick={onSuccess}>
                            YES
                        </Button>
                        <Button onClick={isClose} size='big' variant="danger" style={{ flex: 1 }}>
                            NO
                        </Button>
                    </ModalBody>
                </Modal>
            </>

        </CenterModal>
    );
};

export default ModalContainer;
