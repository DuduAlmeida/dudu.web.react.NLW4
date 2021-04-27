/* #region Imports*/

import React from 'react';

import Head from 'next/head';

import { Profile } from '../components/Profile';
import { Countdown } from '../components/Countdown';
import ChallengeBox from '../components/ChallengeBox';
import ExperienceBar from '../components/ExperienceBar';
import { CompletedChalenged } from '../components/CompletedChallenges';

import styles from '../styles/pages/Home.module.scss';

/* #endregion Imports*/

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar></ExperienceBar>

      <section>
        <div className="">
          <Profile></Profile>
          <CompletedChalenged></CompletedChalenged>
          <Countdown></Countdown>
        </div>
        <div className="">
          <ChallengeBox></ChallengeBox>
        </div>
      </section>
    </div>
  )
}
