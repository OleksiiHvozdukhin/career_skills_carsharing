import styled from 'styled-components';

export const CatalogItemContainer = styled.div`
  position: relative;
  width: 274px;
  height: 426px;
`;

export const СatalogItemFavoriteIcon = styled.svg`
  width: 18px;
  height: 18px;
  position: absolute;
  right: 14px;
  top: 14px;
  fill: ${({ $isToggled }) => ($isToggled ? '#3470ff' : 'transparent')};
  stroke: ${({ $isToggled }) => ($isToggled ? '#3470ff' : '#FFFFFFCC')};

  transition: fill 0.3s ease;

  &:hover {
    fill: #3470ff;
  }
`;

export const CatalogItemImg = styled.img`
  width: 100%;
  height: 268px;
  object-fit: cover;
  user-select: none;

  border-radius: 14px;
`;

export const CatalogItemName = styled.div`
  color: #121417;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px;
  margin-top: 14px;

  span {
    color: #3470ff;
  }

  p {
    margin: 0px;
  }

  h3 {
    margin: 0px;
  }
`;

export const CatalogItemDescription = styled.p`
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  color: #12141780;

  margin-top: 8px;
  height: 40px;
`;

export const CatalogItemButton = styled.button`
  width: 274px;
  height: 44px;
  padding: 12px, 99px, 12px, 99px;
  border-radius: 12px;
  background: #3470ff;
  color: white;

  margin-top: 28px;
  border: none;
  outline: none;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0b44cd;
  }
`;
