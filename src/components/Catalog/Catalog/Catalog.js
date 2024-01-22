import { useDispatch, useSelector } from 'react-redux';
import { incrementPage, reductionPage } from 'redux/Cars/cars';
import { selectPage } from 'redux/selectors';
import { CatalogItem } from '../CatalogItem/CatalogItem';
import {
  CatalogContainer,
  LeadMoreButton,
  MainContainer,
} from './Catalog.styled';

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
      {page > 1 && <LeadMoreButton onClick={handleBack}>Back</LeadMoreButton>}
      {cars.length >= 12 && (
        <LeadMoreButton onClick={handleLoadMore}>Load More</LeadMoreButton>
      )}
    </MainContainer>
  );
};
