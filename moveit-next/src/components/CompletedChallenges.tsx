/* #region Imports*/

import { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/CompletedChallenges.module.scss';

/* #endregion Imports*/

export function CompletedChalenged() {
    // #region Contexts

    const { challengesCompleted } = useContext(ChallengesContext);

    // #endregion Contexts
    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}