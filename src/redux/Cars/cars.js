import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, getAllCars } from '../operation';

const handleLoading = state => {
  state.isLoading = true;
};

const handleError = (state, { payload }) => {
  state.error = payload;
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    page: 1,
    filters: {
      make: '',
      rentalPrice: '',
      from: '',
      to: '',
    },
    limitOnPage: 12,
    isLoading: false,
    error: null,
  },
  reducers: {
    incrementPage: state => {
      state.page += 1;
    },
    reductionPage: state => {
      state.page -= 1;
    },
    updateFilters: (state, action) => {
      const { make, rentalPrice, filterFrom, filterTo } = action.payload;

      if (make !== undefined) {
        state.filters.make = make;
      }

      if (rentalPrice !== undefined) {
        state.filters.rentalPrice = rentalPrice;
      }

      if (filterFrom !== undefined) {
        state.filters.from = filterFrom;
      }

      if (filterTo !== undefined) {
        state.filters.to = filterTo;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, handleLoading)
      .addCase(fetchCars.rejected, handleError)
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.cars = payload;
      })

      .addCase(getAllCars.pending, handleLoading)
      .addCase(getAllCars.rejected, handleError)
      .addCase(getAllCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.cars = payload;
      });
  },
});

export const { incrementPage, reductionPage, updateFilters } =
  carsSlice.actions;
export const carsReducer = carsSlice.reducer;
