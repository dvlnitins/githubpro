import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaGithubAlt } from 'react-icons/fa';
import { Head } from '../components';
import { theme, mixins } from '../style';
const { colors } = theme;

const ErrorStyles = styled.div`
  ${mixins.flexCenter};
  flex-direction: column;
  background-color: ${colors.black};
  color: ${colors.offWhite};
  height: 100vh;
  padding-bottom: 20vh;
  font-size: 1rem;
  svg {
    color: ${colors.offWhite};
    margin-bottom: 3rem;
  }
  p {
    font-size: 1rem;
  }

  .ricon {
    font-size: 3em;
  }
  a {
    color: ${colors.offWhite};
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;

const Error = ({ error }) => (
  <ErrorStyles>
    <Head title="GitHub Profile" />
    <FaGithubAlt className="ricon" />
    <h1>GitHub Profile</h1>

    {error && (
      <div>
        {error.type === 404 ? (
          <p>User not found!</p>
        ) : (
          <p>Oh no! Something went wrong. Try again later!</p>
        )}
      </div>
    )}
  </ErrorStyles>
);

Error.propTypes = {
  error: PropTypes.object.isRequired,
};

export default Error;
