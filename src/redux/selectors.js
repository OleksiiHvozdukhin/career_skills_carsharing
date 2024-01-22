const selectCars = state => state.cars.cars;
const selectPage = state => state.cars.page;
const selectLimitOnPage = state => state.cars.limitOnPage;
const selectError = state => state.cars.error;
const selectIsLoading = state => state.cars.isLoading;
const selectFilters = state => state.cars.filters;

const selectFavoriteCars = state => state.favorites.favorites;

export {
  selectCars,
  selectPage,
  selectLimitOnPage,
  selectError,
  selectIsLoading,
  selectFilters,
  selectFavoriteCars,
};
