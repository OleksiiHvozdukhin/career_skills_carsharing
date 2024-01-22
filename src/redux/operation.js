import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65ad1474adbd5aa31be00d4c.mockapi.io/';

export const fetchCars = createAsyncThunk(
  'adverts/fetchCars',
  async ({ page = 1, limit = 12, filters }, { rejectWithValue }) => {
    try {
      const { make } = filters;
      const response = await axios.get('/adverts', {
        params: {
          page,
          limit,
          make,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const filterData = (data, filters) => {
  return data.filter(car => {
    if (filters.make && car.make !== filters.make) {
      return false;
    }
    if (
      filters.rentalPrice &&
      parseFloat(car.rentalPrice.slice(1)) > parseFloat(filters.rentalPrice)
    ) {
      return false;
    }
    if (filters.from && car.mileage < parseInt(filters.from)) {
      return false;
    }
    if (filters.to && car.mileage > parseInt(filters.to)) {
      return false;
    }
    return true;
  });
};

const paginateData = (filteredResponse, page, limitOnPage) => {
  const startIndex = (page - 1) * limitOnPage;
  const endIndex = startIndex + limitOnPage;
  return filteredResponse.slice(startIndex, endIndex);
};

export const getAllCars = createAsyncThunk(
  'adverts/getAllCars',
  async (data, { rejectWithValue }) => {
    try {
      const { filters, page, limitOnPage } = data;
      const response = await axios.get('/adverts');
      const filteredResponse = filterData(response.data, filters);
      if (filteredResponse.length > 12)
        return paginateData(filteredResponse, page, limitOnPage);
      else return filteredResponse;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
