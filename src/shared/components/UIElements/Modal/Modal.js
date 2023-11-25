import React from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import { CSSTransition } from 'react-transition-group';
import ModalOverlay from './ModalOverlay';
import { useRef } from 'react';

const Modal = (props) => {
	const nodeRef = useRef(null);
	return (
		<>
			{props.show && <Backdrop onClick={props.onCancel} />}
			<CSSTransition
				in={props.show}
				mountOnEnter
				unmountOnExit
				timeout={200}
				classNames="modal"
				nodeRef={nodeRef}
			>
				<ModalOverlay  {...props} />
			</CSSTransition>
		</>
	);
};

export default Modal;
