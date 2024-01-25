import styled from 'styled-components';
import { $phoneWidth, $tabletWidth } from '../../styles/variables';
import { img } from '../../styles/commonStyles.styles';

export const DetailsUserContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-column-gap: 20px;

  @media (max-width: ${$tabletWidth}) {
  }

  @media (max-width: ${$phoneWidth}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
  }
`;

export const DetailsUserContent = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  @media (max-width: ${$phoneWidth}) {
    grid-area: 1 / 1;
    justify-self: flex-start;
  }
`;

export const DetailsUserFoto = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #f0f0f0;
  margin-bottom: 10px;
  grid-area: 1 / 1 / 3 / 2;
  position: relative;

  @media (max-width: ${$phoneWidth}) {
    grid-area: 2 / 1;
    margin-bottom: 30px;
  }
`;
export const DetailsUserImg = styled.img`
  ${img}
  border-radius: 50%;
`;

export const DetailsUserTitle = styled.h3`
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: 200%;
  color: #636262;
`;

export const DetailsUserTitleSpan = styled.span`
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 200%;
`;

export const DetailsUserName = styled(DetailsUserTitle)``;

export const DetailsUserNameSpan = styled(DetailsUserTitleSpan)``;

export const DetailsUserGitAccount = styled(DetailsUserTitle)``;

export const DetailsUserGitAccountLink = styled.a`
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 200%;
  color: #636262;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// export const SellerInfoCity = styled.p`
//   color: ${$greyColor};
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 200%; /* 32px */
// `;
// export const SellerInfoSellsFrom = styled(SellerInfoCity)`
//   margin-bottom: 30px;
// `;
