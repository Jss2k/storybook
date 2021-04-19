import CloseButton from './../CloseButton/CloseButton';
import React, { CSSProperties, ReactElement } from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.scss';
import classNames from './../utils/classNames'
export type ModalProps = {
  title?: string;
  children: ReactElement;
  closeModal: () => void;
  visible: boolean;
  headerButton?: JSX.Element;
  style?: CSSProperties;
  headerStyle?: CSSProperties;
  bodyStyle?: CSSProperties;
  footerStyle?: CSSProperties;
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
  outsideClickClose?: boolean;
  footer?: JSX.Element;
};

function Modal(props: ModalProps) {
  return ReactDOM.createPortal(
    <>
      <div
        className={classNames(
          styles.modal,
          props.className,
          props.visible ? styles.modal_visible : ''
        )}
        style={props.style}
      >
        <header>
          <span>{props.headerButton}</span>
          <h2>{props.title || ''}</h2>
          {/* <span><CloseButton onClick={props.closeModal} /></span> */}
        </header>
        <main className={props.bodyClassName}>{props.children}</main>
        {props.footer && <footer className={props.footerClassName} style={props.footerStyle}>{props.footer}</footer>}
      </div>
      <div
        className={classNames(styles.overlay, props.visible ? styles.overlay_visible : '')}
        onClick={() => props.outsideClickClose && props.closeModal()}
      />
    </>,
    document.body
  );
}
export default Modal;
