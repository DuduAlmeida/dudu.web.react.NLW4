/* #region Imports*/

import React, { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/ExperienceBar.module.scss';

/* #endregion Imports*/

const ExperienceBar: React.FC = () => {
  // #region Contexts

  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  // #endregion Contexts

  // #region Properties

  const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel);

  // #endregion Properties

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: percentToNextLevel + '%' }}></div>

        <span className={styles.currentExperience} style={{ left: percentToNextLevel + '%' }}>{currentExperience}xp</span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}

export default ExperienceBar;