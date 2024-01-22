import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 8px 20px 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 320px;

  text-align: center;

  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    padding: 16px 32px 44px;
    max-width: 786px;
  }

  @media screen and (min-width: 1440px) {
    padding: 12px 112px 40px;
    max-width: 1440px;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
  margin-right: 5px;
  margin-bottom: 20px;

  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #3470ff;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  letter-spacing: 4px;

  &:nth-child(1) {
    color: #3470ff;
    font-weight: 500;
  }

  &:hover {
    background: #3470ff;
    color: white;
    border-radius: 5px;
    box-shadow: 0 0 5px #3470ff, 0 0 25px #3470ff, 0 0 50px #3470ff,
      0 0 100px #3470ff;
  }

  &:nth-child(1):hover {
    background: #3470ff;
    box-shadow: 0 0 5px #3470ff, 0 0 25px #3470ff, 0 0 50px #3470ff,
      0 0 100px #3470ff;
  }

  & span {
    position: absolute;
    display: block;
  }
  & span:nth-child(1) {
    top: 0px;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #3470ff);
    animation: btn-anim1 4s linear infinite;
    animation-delay: 2s;

    @keyframes btn-anim1 {
      0% {
        left: -100%;
      }
      50%,
      100% {
        left: 100%;
      }
    }
  }
  &:nth-child(1) span:nth-child(1) {
    background: linear-gradient(90deg, transparent, #3470ff);
  }

  & span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #3470ff);
    animation: btn-anim2 4s linear infinite;
    animation-delay: 3.5s;

    @keyframes btn-anim2 {
      0% {
        top: -100%;
      }
      50%,
      100% {
        top: 100%;
      }
    }
  }
  &:nth-child(1) span:nth-child(2) {
    background: linear-gradient(180deg, transparent, #3470ff);
  }
  & span:nth-child(3) {
    bottom: 0px;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #3470ff);
    animation: btn-anim3 4s linear infinite;
    animation-delay: 2s;

    @keyframes btn-anim3 {
      0% {
        right: -100%;
      }
      50%,
      100% {
        right: 100%;
      }
    }
  }

  &:nth-child(1) span:nth-child(3) {
    background: linear-gradient(270deg, transparent, #3470ff);
  }
  & span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #3470ff);
    animation: btn-anim4 4s linear infinite;
    animation-delay: 3.5s;

    @keyframes btn-anim4 {
      0% {
        bottom: -100%;
      }
      50%,
      100% {
        bottom: 100%;
      }
    }
  }

  &:nth-child(1) span:nth-child(4) {
    background: linear-gradient(360deg, transparent, #3470ff);
  }
`;
