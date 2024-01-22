import React from 'react';
import Modal from 'react-modal';
import { useSpring, animated } from 'react-spring';
import { CatalogItemDescription } from '../CatalogItem/CatalogItem.styled';
import SpriteIcons from '../../images/sprite.svg';
import {
  CatalogItemModalButton,
  CatalogItemModalConditional,
  CatalogItemModalContainer,
  CatalogItemModalDescription,
  CatalogItemModalName,
  CatalogItemModalRentalConditions,
  CatalogItemModalText,
  CatalogItemModalTitle,
  CloseButton,
} from './CatalogItemModal.styled';

Modal.setAppElement('#root'); // Убедись, что установлен корневой элемент приложения

export const CatalogItemModal = ({ car, isOpen, onRequestClose }) => {
  const animation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0%)' : 'translateY(-100%)',
  });

  const {
    id,
    year,
    make,
    model,
    img,
    type,
    rentalPrice,
    accessories,
    functionalities,
    description,
    engineSize,
    fuelConsumption,
    rentalConditions,
    mileage,
  } = car;

  const addressParts = car.address.split(', ');
  const conditionsArray = rentalConditions.split('\n');

  const city = addressParts[1];
  const country = addressParts[2];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          border: 'none',
          background: 'white',
          borderRadius: '24px',
          padding: '40px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          width: '461px',
          height: '672px',
        },
      }}
    >
      <animated.div style={animation}>
        <CatalogItemModalContainer>
          <CloseButton onClick={onRequestClose}>
            <use xlinkHref={`${SpriteIcons}#icon-x`} />
          </CloseButton>
          <div>
            {/* <CloseButton onClick={onRequestClose}>Закрыть</CloseButton> */}
            <img
              src={img ? `${img}` : 'https://svgsilh.com/svg/1889366.svg'}
              alt={`Car ${(make, model)}`}
              onError={e => {
                e.target.src = 'https://svgsilh.com/svg/1889366.svg';
              }}
            />

            <CatalogItemModalName>
              {make} <span>{model}</span>, {year}
            </CatalogItemModalName>

            <CatalogItemModalDescription>
              {city} | {country} | id: {id} | Year: {year} | Type: {type} | Fuel
              consumption: {fuelConsumption} | Engine size {engineSize}
            </CatalogItemModalDescription>

            <CatalogItemModalText>{description}</CatalogItemModalText>
          </div>

          <div>
            <CatalogItemModalTitle>
              Accessories and functionalities:
            </CatalogItemModalTitle>

            <CatalogItemDescription>
              {accessories.join(' | ')} | {functionalities.join(' | ')}
            </CatalogItemDescription>
          </div>

          <div>
            <CatalogItemModalTitle>Rental Conditions:</CatalogItemModalTitle>

            <CatalogItemModalRentalConditions>
              {conditionsArray.map((condition, index) => (
                <CatalogItemModalConditional key={index}>
                  {condition}
                </CatalogItemModalConditional>
              ))}
              <CatalogItemModalConditional>
                Mileage:{' '}
                <span>
                  {mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
              </CatalogItemModalConditional>
              <CatalogItemModalConditional>
                Price: <span>{rentalPrice}</span>
              </CatalogItemModalConditional>
            </CatalogItemModalRentalConditions>
          </div>
          <CatalogItemModalButton>Rental car</CatalogItemModalButton>
        </CatalogItemModalContainer>
      </animated.div>
    </Modal>
  );
};
