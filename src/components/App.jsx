// import { useEffect, lazy } from 'react';
import { lazy } from 'react';
// import { lazy } from 'react';
// import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters, selectLimitOnPage, selectPage } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchCars, getAllCars } from 'redux/operation';
import { carsSlice } from 'redux/Cars/cars';
// import { Loader } from './Loader';

const MainPage = lazy(() => import('../pages/MainPage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage'));
const FavoritesPage = lazy(() => import('../pages/FavoritesPage'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));

export const App = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const limitOnPage = useSelector(selectLimitOnPage);
  const filters = useSelector(selectFilters);
  const initialState = carsSlice.reducer(undefined, {});

  useEffect(() => {
    if (
      filters.rentalPrice === initialState.filters.rentalPrice &&
      filters.from === initialState.filters.from &&
      filters.to === initialState.filters.to
    ) {
      dispatch(fetchCars({ page, limitOnPage, filters }));
    }
  }, [dispatch, page, filters]);

  useEffect(() => {
    if (
      filters.rentalPrice !== initialState.filters.rentalPrice ||
      filters.from !== initialState.filters.from ||
      filters.to !== initialState.filters.to
    ) {
      dispatch(getAllCars({ filters, page, limitOnPage }));
    }
  }, [filters, page]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};
