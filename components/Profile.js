import React from 'react';
import PropTypes from 'prop-types';
import { FaBriefcase, FaCalendarDay } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import ProfileStyles from './styles/ProfileStyles';
import { Section } from '../style';

const UserInfo = ({ userData }) => (
  <Section dark>
    {userData && (
      <ProfileStyles>
        {userData.avatar_url && (
          <div className="avatar">
            <img src={userData.avatar_url} alt="avatar" />
          </div>
        )}

        {userData.name && <h1>{userData.name}</h1>}

        {userData.login && (
          <h2>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
              @{userData.login}
            </a>
          </h2>
        )}

        {userData.bio && <p>{userData.bio}</p>}

        <div className="info">
          {userData.company && (
            <span className="info__item">
              <FaBriefcase />
              {userData.company}
            </span>
          )}

          {userData.location && (
            <span className="info__item">
              <HiOutlineLocationMarker />
              {userData.location}
            </span>
          )}

          {userData.created_at && (
            <span className="info__item">
              <FaCalendarDay />
              Joined{' '}
              {new Date(userData.created_at).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          )}
        </div>
      </ProfileStyles>
    )}
  </Section>
);

UserInfo.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default UserInfo;
