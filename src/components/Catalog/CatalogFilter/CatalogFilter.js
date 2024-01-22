import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateFilters } from 'redux/Cars/cars';
import {
  selectedMakeOptionsBrand,
  selectedMakeOptionsPrice,
} from './CatalogInfo';
import {
  CatalogBrand,
  CatalogButton,
  CatalogForm,
  CatalogInput,
  CatalogPrice,
  CatalogSelect,
  CatalogSelectBrand,
  CatalogSelectPrice,
} from './CatalogFilter.styled';

export const CatalogFilter = () => {
  const dispatch = useDispatch();

  const [filterBrand, setFilterBrand] = useState('');
  const [filterPrice, setFilterPrice] = useState('');
  const [filterFrom, setFilterFrom] = useState('');
  const [filterTo, setFilterTo] = useState('');

  const onSelectMakeBrand = e => {
    setFilterBrand(e.target.value);
  };

  const onSelectMakePrice = e => {
    setFilterPrice(e.target.value);
  };

  const handleFromChange = e => {
    setFilterFrom(e.target.value);
  };

  const handleToChange = e => {
    setFilterTo(e.target.value);
  };

  const submitForm = e => {
    e.preventDefault();
    const filters = {
      make: filterBrand,
      rentalPrice: filterPrice,
      filterFrom,
      filterTo,
    };
    dispatch(updateFilters(filters));
  };

  return (
    <CatalogForm onSubmit={submitForm}>
      <CatalogBrand>
        <p>Car brand</p>
        <CatalogSelectBrand
          value={filterBrand}
          onChange={e => onSelectMakeBrand(e)}
        >
          <option value="">Enter the text</option>
          {selectedMakeOptionsBrand.map((make, index) => (
            <option key={index} value={make}>
              {make}
            </option>
          ))}
        </CatalogSelectBrand>
      </CatalogBrand>
      <CatalogPrice>
        <p>Price / 1 hour</p>
        <CatalogSelectPrice
          value={filterPrice}
          onChange={e => onSelectMakePrice(e)}
        >
          <option value="">To $</option>
          {selectedMakeOptionsPrice.map((make, index) => (
            <option key={index} value={make}>
              {make}
            </option>
          ))}
        </CatalogSelectPrice>
      </CatalogPrice>
      <div>
        <p>Сar mileage / km</p>
        <CatalogInput
          type="number"
          placeholder="From"
          value={filterFrom}
          onChange={handleFromChange}
        />
        <CatalogInput
          type="number"
          placeholder="To"
          value={filterTo}
          onChange={handleToChange}
        />
      </div>
      <CatalogButton type="submit">Search</CatalogButton>
    </CatalogForm>
  );
};
