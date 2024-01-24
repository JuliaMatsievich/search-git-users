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
  justify-content: flex-start;
  height: 50px;
  color: #fff;
`;

export const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 20px;
`;

export const Title = styled.div`
  font-size: 24px;
`;
