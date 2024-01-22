import styled from 'styled-components';

export const CatalogForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 18px;

  p {
    color: #8a8a89;
    font-family: 'Manrope', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    margin: 0px;
    margin-bottom: 8px;
  }
  select,
  input {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    border: none;
    background-color: #f7f7fb;

    padding: 14px, 0px, 14px, 18px;
    border-radius: 14px;
    gap: 32px;
    margin: 0px;

    font-family: 'Manrope', sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: black;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;

    &:focus-visible {
      outline: none;
    }
  }

  select:first-of-type {
    height: 48px;
    width: 100%;
    padding: 14px 0px 14px 18px;

    appearance: none;
    &:hover {
      border-color: #aaa;
    }

    &:focus {
      outline: none;
      border-color: #4d90fe;
    }

    &::-ms-expand {
      display: none;
    }

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &::-webkit-dropdown-arrow {
      background-color: blue;
    }
  }

  input:first-of-type {
    color: black;
    border: none;
    border-top-right-radius: 0%;
    border-bottom-right-radius: 0%;
    border-right: 1px solid rgba(138, 138, 137, 0.2);
  }

  input:last-of-type {
    border-top-left-radius: 0%;
    border-bottom-left-radius: 0%;
  }
`;

export const CatalogBrand = styled.div`
  width: 224px;
`;

export const CatalogSelectBrand = styled.select``;

export const CatalogPrice = styled.div`
  width: 125px;
`;

export const CatalogSelectPrice = styled.select``;

export const CatalogInput = styled.input`
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 24px;
`;

export const CatalogButton = styled.button`
  width: 136px;
  height: 48px;
  padding: 14px, 44px, 14px, 44px;
  border-radius: 12px;
  align-self: flex-end;
  background-color: #3470ff;
  border: none;
  font-family: 'Manrope', sans-serif;
  color: white;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0b44cd;
  }
`;
