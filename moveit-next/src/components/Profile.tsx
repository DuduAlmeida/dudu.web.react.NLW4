/* #region Imports*/

import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.scss';

/* #endregion Imports*/

export function Profile() {
    // #region Contexts

    const { level } = useContext(ChallengesContext);

    // #endregion Contexts

    return (
        <div className={styles.profileContainer}>
            <img src="http://github.com/DuduALmeida.png" alt="Eduardo Almeida" />

            <div className="">
                <strong>Eduardo Almeida</strong>

                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}