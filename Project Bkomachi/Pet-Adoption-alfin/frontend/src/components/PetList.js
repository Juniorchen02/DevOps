import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const PetList = ({ pets, onPetClick, onEditPet, onDeletePet }) => {
    return (
        <div className="container">
            {pets.length === 0 ? (
                <p>No pets found.</p>
            ) : (
                pets.map((pet) => (
                    <div key={pet.uuid} className="pet-card" onClick={() => onPetClick(pet)}>
                        <img src={pet.image} alt={pet.name} style={{ width: '100%', height: 'auto' }} /> {/* Make sure image is rendered correctly */}
                        <div className="pet-info">
                            <h3>{pet.name}</h3>
                            <p>{pet.description}</p>
                        </div>
                        <div className="pet-card-buttons">
                            <button onClick={(e) => { e.stopPropagation(); onEditPet(pet); }} className="icon-button">
                                <FontAwesomeIcon icon={faEdit} />
                            </button>
                            <button onClick={(e) => { e.stopPropagation(); onDeletePet(pet.uuid); }} className="icon-button">
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default PetList;
