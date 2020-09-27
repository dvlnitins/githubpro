import React, { useState } from 'react';
import Router from 'next/router';
import { FaGithubAlt } from 'react-icons/fa';
import { Head } from '../components';
import styled from 'styled-components';
import { theme, mixins } from '../style';
const { colors } = theme;

const StyledContainer = styled.div`
  ${mixins.flexCenter};
  background-color: ${colors.black};
  color: ${colors.offWhite};
  height: 100vh;

  .ricon {
    font-size: 3em;
  }
  form {
    background-color: transparent;
    border-radius: 5px;
    padding: 2rem;
    margin-bottom: 10vh;
    max-width: 900px;
    text-align: center;
    svg {
      color: ${colors.offWhite};
    }
    label {
      display: block;
      font-size: 3rem;
      font-weight: 600;
      margin: 2rem;

      @media (max-width: 480px) {
        font-size: 1.6rem;
      }
    }
    input {
      background-color: ${colors.darkGrey};
      outline: 0;
      border: 0;
      border-radius: 0.25rem;
      width: 100%;
      max-width: 550px;
      margin: 0 auto;
      padding: 0.8rem;
      color: ${colors.offWhite};
      font-size: 2rem;
      font-weight: 400;
      text-align: center;
    }

    .submit {
      ${mixins.blueButton};
      margin-top: 3rem;
      filter: none;
    }
  }
`;

const Home = () => {
  const [username, setUsername] = useState('');
  const handleChange = e => setUsername(e.target.value);

  return (
    <main>
      <Head title="OctoProfile" />

      <StyledContainer>
        <form
          onSubmit={e => {
            e.preventDefault();
            Router.push({
              pathname: '/user',
              query: { id: username },
            });
          }}>
          <FaGithubAlt className="ricon" />
          <label htmlFor="username">Find Your Github Profile</label>
          <input name="username" type="text" onChange={handleChange} />
        </form>
      </StyledContainer>
    </main>
  );
};

export default Home;
