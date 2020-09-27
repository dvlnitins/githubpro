import styled, { css } from 'styled-components';
import { theme, media } from '../style';
const { colors } = theme;

const Section = styled.section`
  padding: 3rem 5rem;

  ${media.bp900`
    padding: 2rem;
  `};
  ${media.bp400`
    padding: 1rem;
  `};

  ${props =>
    props.dark &&
    css`
      height: 100vh;
      background-color: ${colors.black};
      color: ${colors.lightprime};
      padding-top: 6rem;
      ${media.bp900`
        padding-top: 2rem;
      `};
    `};

  & > div {
    max-width: 1400px;
    margin: 0 auto;
  }

  header {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    h2 {
      display: inline-block;
      margin: 0;
      font-size: 1.75rem;
      padding-bottom: 6px;
      ${media.bp600`
        font-size: 1.5rem;
      `};
    }
  }
`;

export default Section;
