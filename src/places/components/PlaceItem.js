import React from 'react';
import './PlaceItem.css';
import Card from '../../shared/components/UIElements/Card/Card';
import Button from '../../shared/FormElements/Button';
import { useState } from 'react';
import Modal from '../../shared/components/UIElements/Modal/Modal';
import Map from '../../shared/components/UIElements/Map/Map';

const PlaceItem = ({ image, title, address, description, id, coordinates }) => {
	const [showMap, setShowMap] = useState(false);
	const [showModalConfirmation, setShowModalConfirmation] = useState(false);

	const handleOpenMap = () => {
		setShowMap(true);
	};
	const handleCloseMap = () => {
		setShowMap(false);
	};

	const handleShowDeleteWarning = () => {
		setShowModalConfirmation(true);
	};

	const handleCancelDelete = () => {
		setShowModalConfirmation(false);
	};

	const handleDeleteConfirmation = () => {
		setShowModalConfirmation(false);
		console.log('DELETING....');
	};
	return (
		<>
			<Modal
				show={showMap}
				onCancel={handleCloseMap}
				header={address}
				contentClass="place-item__modal-content"
				footerClass="place-item__modal-actions"
				footer={<Button onClick={handleCloseMap}>CLOSE</Button>}
			>
				<div className="map-container">
					<Map center={coordinates} zoom={16} />
				</div>
			</Modal>
			<Modal
				show={showModalConfirmation}
				onCancel={handleCancelDelete}
				header="Are you sure?"
				footerClass="place-item__modal-actions"
				footer={
					<>
						<Button inverse onClick={handleCancelDelete}>
							CANCEL
						</Button>
						<Button danger onClick={handleDeleteConfirmation}>
							DELETE
						</Button>
					</>
				}
			>
				<p>
					Do you want to proceed and delete this place. Please know that it
					can't be undone.
				</p>
			</Modal>

			<li className="place-item">
				<Card className="place-item__content">
					<div className="place-item__image">
						<img src={image} alt={title} />
					</div>
					<div className="place-item__info">
						<h2>{title}</h2>
						<h3>{address}</h3>
						<p>{description}</p>
					</div>
					<div className="place-item__actions">
						<Button inverse onClick={handleOpenMap}>
							VIEW ON MAP
						</Button>
						<Button to={`/places/${id}`}>EDIT</Button>
						<Button danger onClick={handleShowDeleteWarning}>
							DELETE
						</Button>
					</div>
				</Card>
			</li>
		</>
	);
};

export default PlaceItem;
