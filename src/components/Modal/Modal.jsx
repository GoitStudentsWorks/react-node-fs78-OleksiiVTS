import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import {
  ModalBackdrop,
  ModalContainer,
  CloseBtnContainer,
  CloseBtn,
} from './Modal.styled';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import sprite from '../Pictures/sprite.svg';

const Modal = ({ closeModal, children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch, closeModal]);

  return createPortal(
    <ModalBackdrop onClick={closeModal}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <CloseBtnContainer onClick={closeModal}>
          <CloseBtn>
            <svg width="24" height="24">
              <use href={sprite + '#close-btn'}></use>
            </svg>
          </CloseBtn>
        </CloseBtnContainer>
        {children}
      </ModalContainer>
    </ModalBackdrop>,
    document.body
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};

export default Modal;
