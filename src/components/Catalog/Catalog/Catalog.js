import { useDispatch, useSelector } from 'react-redux';
import { incrementPage, reductionPage } from 'redux/Cars/cars';
import { selectPage } from 'redux/selectors';
import { CatalogItem } from '../CatalogItem/CatalogItem';
import { CatalogContainer, MainContainer } from './Catalog.styled';
import { useState } from 'react';

export const Catalog = ({ cars }) => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);

  const handleLoadMore = async () => {
    if (cars.length === 12) await dispatch(incrementPage());
    else console.log('NINE');
  };

  const handleBack = async () => {
    if (page > 1) await dispatch(reductionPage());
    else console.log('NINE');
  };

  return (
    <MainContainer>
      <CatalogContainer>
        {cars.map(car => (
          <div key={car.id}>
            <CatalogItem car={car} />
          </div>
        ))}
      </CatalogContainer>
      {page > 1 && <button onClick={handleBack}>Back</button>}
      {cars.length >= 12 && <button onClick={handleLoadMore}>Load More</button>}
    </MainContainer>
  );
};
