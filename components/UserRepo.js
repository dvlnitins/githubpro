import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GoRepo, GoStar, GoRepoForked } from 'react-icons/go';
import { langColors } from '../style';
import ReposStyles from './styles/UserRepoStyles';
import { Section } from '../style';

const Repos = ({ repoData }) => {
  const [topRepos, setTopRepos] = useState([]);
  const [sortType] = useState('stars');

  const getTopRepos = type => {
    const LIMIT = 8;
    const map = {
      stars: 'stargazers_count',
      forks: 'forks_count',
      size: 'size',
    };
    const sortProperty = map[type];
    const sorted = repoData
      .filter(repo => !repo.fork)
      .sort((a, b) => b[sortProperty] - a[sortProperty])
      .slice(0, LIMIT);

    setTopRepos(sorted);
  };

  useEffect(() => {
    if (repoData.length) {
      getTopRepos();
    }
  }, []);

  useEffect(() => getTopRepos(sortType), [sortType]);

  return (
    <Section>
      <ReposStyles>
        <header>
          <h2>REPOSITORIES</h2>
        </header>

        <div className="repo-list">
          {topRepos.length > 0 ? (
            <ul>
              {topRepos.map(repo => (
                <li key={repo.id}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="repo">
                    <div className="repo__top">
                      <div className="repo__name">
                        <GoRepo />
                        <h3>{repo.name}</h3>
                      </div>
                      <p>{repo.description}</p>
                    </div>
                    <div className="repo__stats">
                      <div className="repo__stats--left">
                        <span>
                          <div
                            className="language"
                            style={{ backgroundColor: langColors[repo.language] }}
                          />
                          {repo.language}
                        </span>
                        <span>
                          <GoStar />
                          {repo.stargazers_count.toLocaleString()}
                        </span>
                        <span>
                          <GoRepoForked />
                          {repo.forks.toLocaleString()}
                        </span>
                      </div>
                      <div className="repo__stats--right">
                        <span>{repo.size.toLocaleString()} KB</span>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p>No available repositories!</p>
          )}
        </div>
      </ReposStyles>
    </Section>
  );
};

Repos.propTypes = {
  repoData: PropTypes.array.isRequired,
};

export default Repos;
