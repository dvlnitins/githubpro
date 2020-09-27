import styled from 'styled-components';
import { theme, mixins, media } from '../../style';
const { colors, fonts } = theme;

const ProfileStyles = styled.div`
  ${mixins.flexCenter};
  flex-direction: column;
  text-align: center;

  ${media.bp600`
    padding-top: 5rem;
  `};

  .avatar {
    ${mixins.flexStart};
    margin-bottom: 1.5rem;
    width: 200px;
    img {
      border-radius: 100%;
      box-shadow: 17px 17px 26px #141417, -17px -17px 26px #1a1a1f;
    }
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    letter-spacing: 0.3rem;
    color: ${colors.offWhite};
    ${media.bp400`
      font-size: 2rem;
    `};
  }
  h2 {
    font-family: ${fonts.mono};
    font-size: 1.5rem;
    margin-bottom: 1rem;
    letter-spacing: 0.3rem;
    a {
      color: ${colors.prime};
    }
  }
  h3 {
    color: ${colors.prime};
  }
  p {
    font-size: 1rem;
    margin-bottom: 1.4rem;
    max-width: 700px;
    letter-spacing: 0.1rem;
    line-height: 2;
    color: ${colors.offWhite};
    opacity: 0.8;
    ${media.bp400`
      font-size: .6rem;
      padding: 0 0;
    `};
  }
  span {
    color: ${colors.offWhite};
  }
  a {
    color: ${colors.prime};
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  .info {
    ${mixins.flexCenter};
    ${media.bp600`
      display: block;
    `};

    &__item {
      ${mixins.flexCenter};
      margin: 0 1rem 0.5rem;
      white-space: nowrap;

      svg {
        margin-right: 10px;
      }
    }
  }
`;

export default ProfileStyles;
