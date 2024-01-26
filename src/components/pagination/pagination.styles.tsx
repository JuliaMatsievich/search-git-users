import styled from 'styled-components';
import { $mainColor } from '../../styles/variables';
import { centralContainer } from '../../styles/commonStyles.styles';

export const PaginationContainer = styled.div`
  ${centralContainer}
  display: flex;
  flex-wrap: no-wrap;
  gap: 10px;
  margin-bottom: 30px;
  margin-top: 20px;
`;

export const PaginationItem = styled.div<{ $isActive: boolean }>`
  color: ${({ $isActive }) => ($isActive ? '#fff' : '#000')};
  background-color: ${({ $isActive }) => ($isActive ? '#3197ad' : '#fff')};
  border: 1px solid ${$mainColor};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  width: 35px;
  height: 35px;
  cursor: pointer;
  transition: all 0.3s ease 0s;

  &:hover {
    background-color: #3197ad;
    color: #fff;
  }
`;
