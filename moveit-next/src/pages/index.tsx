/* #region Imports*/

import { Profile } from '../components/Profile/Profile';
import ExperienceBar from '../components/ExperienceBar/ExperienceBar';

import styles from '../styles/pages/Home.module.scss';

/* #endregion Imports*/

export default function Home() {
  return (
    <div className={styles.container}>

      <ExperienceBar></ExperienceBar>

      <section>
        <div className="">
          <Profile></Profile>
        </div>
        <div className="">

        </div>
      </section>
    </div>
  )
}
