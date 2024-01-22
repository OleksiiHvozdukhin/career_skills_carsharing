import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CatalogContainer = styled.div`
  margin: 50px 0px 100px 0px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 29px;
  row-gap: 50px;
  justify-content: center;
  align-items: center;
`;
