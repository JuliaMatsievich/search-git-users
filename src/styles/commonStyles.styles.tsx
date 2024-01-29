import styled, { css } from 'styled-components';
import {
  $buttonColor,
  $buttonColorHover,
  $phoneWidth,
  $tabletWidth,
} from './variables';

export const centralContainer = css`
  padding-left: 60px;
  padding-right: 60px;

  @media (max-width: ${$tabletWidth}) {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (max-width: ${$phoneWidth}) {
    padding-left: 17px;
    padding-right: 17px;
    margin-bottom: 60px;
  }
`;

export const buttonColor = css`
  border-radius: 6px;
  border: 1px solid ${$buttonColor};
  background: ${$buttonColor};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  padding: 10px 20px;
  height: 40px;
  transition: all 0.3s ease 0s;

  &:hover {
    background: ${$buttonColorHover};
  }

  &:disabled {
    background-color: #d9d9d9;
    border: 1px solid #d9d9d9;
    cursor: auto;
  }
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const img = css`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
`;
