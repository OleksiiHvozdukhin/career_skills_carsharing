import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from 'redux/Favorite/favorite';
import { selectFavoriteCars } from 'redux/selectors';
import SpriteIcons from '../../images/sprite.svg';
import {
  CatalogItemButton,
  CatalogItemContainer,
  CatalogItemDescription,
  CatalogItemImg,
  CatalogItemName,
  СatalogItemFavoriteIcon,
} from './CatalogItem.styled';
import { CatalogItemModal } from '../CatalogModal/CatalogItemModal';

export const CatalogItem = ({ car }) => {
  const { id, year, make, img, type, rentalPrice, rentalCompany, accessories } =
    car;
  const addressParts = car.address.split(', ');

  const city = addressParts[1];
  const country = addressParts[2];

  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavoriteCars);
  const isFavoriteCars = favoriteCars.some(item => item.id === id);
  const [isToggled, setIsToggled] = useState(isFavoriteCars);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);

    if (!isToggled) dispatch(addFavorite(car));
    if (isToggled) dispatch(removeFavorite(car));
  };

  return (
    <CatalogItemContainer>
      <СatalogItemFavoriteIcon onClick={handleToggle} $isToggled={isToggled}>
        <use xlinkHref={`${SpriteIcons}#icon-heart`} />
      </СatalogItemFavoriteIcon>

      <CatalogItemImg
        src={img ? `${img}` : 'https://svgsilh.com/svg/1889366.svg'}
        alt="Car Image"
        onError={e => {
          e.target.src = 'https://svgsilh.com/svg/1889366.svg';
        }}
      />

      <CatalogItemName>
        <h3>
          {make}, {year}
        </h3>
        <p>{rentalPrice}</p>
      </CatalogItemName>

      <CatalogItemDescription>
        {city} | {country} | {rentalCompany} | {type} | {make} | {id} |{' '}
        {accessories[1]}
      </CatalogItemDescription>

      <CatalogItemButton type="button" onClick={openModal}>
        Learn more
      </CatalogItemButton>
      <CatalogItemModal
        car={car}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      />
    </CatalogItemContainer>
  );
};
