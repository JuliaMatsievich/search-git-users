import styled from 'styled-components';
import { $greyColor, $mediumWidth, $tabletWidth } from '../../styles/variables';

export const userItemLi = styled.li`
  border: 1px solid ${$greyColor};
  border-radius: 10px;
  width: 50%;
  margin-bottom: 10px;
  padding: 10px 10px;
  cursor: pointer;
  position: relative;
  &:hover {
    box-shadow: 0px 1px 10px 2px rgba(49, 151, 173, 0.32) inset;
  }
  &:hover span {
    visibility: visible;
    opacity: 1;
  }

  @media (max-width: ${$mediumWidth}) {
    width: 75%;
  }

  @media (max-width: ${$tabletWidth}) {
    width: 100%;
  }
`;
