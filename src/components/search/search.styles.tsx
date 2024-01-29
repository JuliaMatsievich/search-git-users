import styled from 'styled-components';
import {
  buttonColor,
  centralContainer,
} from '../../styles/commonStyles.styles';
import { $buttonColorDisabled, $mainColor } from '../../styles/variables';

export const SearchContainer = styled.div`
  ${centralContainer}
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: #fff;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 20px;

  &::placeholder {
    font-family: 'Roboto';
  }
  &:focus {
    outline: none;
    border: 2px solid ${$mainColor};
  }
`;

export const Button = styled.button`
  ${buttonColor}

  &:disabled {
    background-color: ${$buttonColorDisabled};
    cursor: none;
  }
`;
