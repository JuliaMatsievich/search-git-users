import styled from 'styled-components';
import { $mainColor } from '../../styles/variables';
import { centralContainer } from '../../styles/commonStyles.styles';

export const HeaderHeader = styled.header`
  background-color: ${$mainColor};
  width: 100%;
`;

export const HeaderContainer = styled.div`
  ${centralContainer}
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  color: #fff;
`;
