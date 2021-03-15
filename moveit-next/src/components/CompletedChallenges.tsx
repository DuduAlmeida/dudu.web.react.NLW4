/* #region Imports*/

import styles from '../styles/components/CompletedChallenges.module.scss';

/* #endregion Imports*/

export function CompletedChalenged(){
    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>5</span>
        </div>
    )
}