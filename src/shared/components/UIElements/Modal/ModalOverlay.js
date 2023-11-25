import React from 'react';
import './Modal.css';
import ReactDOM from 'react-dom';

const ModalOverlay = (props) => {
	const content = (
		<div className={`modal ${props.className}`} style={props.style}>
			<header className={`modal__header ${props.header}`}>
				<h2>{props.header}</h2>
			</header>
			<form
				onSubmit={props.onSubmit ? props.onSubmit : (e) => e.preventDefault()}
			>
                <div className={`modal__content ${props.contentClass}`}>
                    {props.children}
                </div>
                <footer className={`modal__footer ${props.footerClass}`}>
                    {props.footer}
                </footer>
            </form>
		</div>
	);
	return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

export default ModalOverlay;
