import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Head, Profile, UserRepo, Error } from '../components';

const User = props => {
  const username = props.query.id;
  const [userData, setUserData] = useState(null);
  const [repoData, setRepoData] = useState(null);
  const [error, setError] = useState({ active: false, type: 200 });

  const getUserData = () => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => {
        if (response.status === 404) {
          return setError({ active: true, type: 404 });
        }
        return response.json();
      })
      .then(json => setUserData(json))
      .catch(error => {
        setError({ active: true, type: 400 });
        console.error('Error:', error);
      });
  };

  const getRepoData = () => {
    fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
      .then(response => {
        if (response.status === 404) {
          return setError({ active: true, type: 404 });
        }
        return response.json();
      })
      .then(json => setRepoData(json))
      .catch(error => {
        setError({ active: true, type: 200 });
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    getUserData();
    getRepoData();
  }, []);

  return (
    <main>
      {error && error.active ? (
        <Error error={error} />
      ) : (
        <>
          <Head title={`${username ? `ReGitProfile | ${username}` : 'ReGitProfile'}`} />

          {userData && <Profile userData={userData} />}

          {repoData && <UserRepo repoData={repoData} />}
        </>
      )}
    </main>
  );
};

User.propTypes = {
  query: PropTypes.object,
};

export default User;
