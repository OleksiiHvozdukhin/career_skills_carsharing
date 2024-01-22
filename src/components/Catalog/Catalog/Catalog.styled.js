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

export const LeadMoreButton = styled.button`
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #3470ff;
  background-color: transparent;
  border: none;
`;
