/* #region Imports*/

import React from 'react';
import ExperienceBar from '../components/ExperienceBar';

import { Profile } from '../components/Profile';
import { CompletedChalenged } from '../components/CompletedChallenges';

import styles from '../styles/pages/Home.module.scss';

/* #endregion Imports*/

export default function Home() {
  return (
    <div className={styles.container}>

      <ExperienceBar></ExperienceBar>

      <section>
        <div className="">
          <Profile></Profile>
          <CompletedChalenged></CompletedChalenged>
        </div>
        <div className="">

        </div>
      </section>
    </div>
  )
}
