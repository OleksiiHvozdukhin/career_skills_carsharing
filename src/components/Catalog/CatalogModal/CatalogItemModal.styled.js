import styled from 'styled-components';

export const CatalogItemModalContainer = styled.div`
  width: 461px;
  height: 672px;
  display: flex;
  gap: 24px;
  flex-direction: column;

  h3,
  p,
  div {
    margin: 0px;
  }

  & img {
    object-fit: cover;
    width: 461px;
    height: 248px;
    border-radius: 14px;
    margin-bottom: 14px;
  }
`;

export const CatalogItemModalName = styled.h3`
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;

  & span {
    color: #3470ff;
  }
`;

export const CatalogItemModalDescription = styled.p`
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  width: 277px;
  padding-top: 8px;
  color: #12141780;
`;

export const CatalogItemModalText = styled.p`
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #121417;

  padding-top: 14px;
`;

export const CatalogItemModalTitle = styled.h3`
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #121417;
`;

export const CatalogItemModalRentalConditions = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const CatalogItemModalConditional = styled.p`
  height: 32px;
  margin-top: 8px;
  padding: 7px, 14px, 7px, 14px;
  border-radius: 35px;
  background-color: #f9f9f9;
  padding: 7px 14px;
  display: flex;
  align-items: center;

  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: left;

  span {
    color: #3470ff;
    font-weight: 600;
  }
`;

export const CatalogItemModalButton = styled.button`
  width: 168px;
  height: 44px;
  padding: 12px 50px 12px 50px;
  border-radius: 12px;
  background-color: #3470ff;
  outline: none;
  border: 1px solid transparent;

  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  color: white;
  white-space: nowrap;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0b44cd;
  }
`;

export const CloseButton = styled.svg`
  width: 24px;
  height: 24px;
  position: absolute;
  right: -25px;
  top: -25px;
  fill: #121417;
  stroke: #121417;

  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2) rotate(90deg);
  }
`;
