/* #region Imports*/

import styles from '../../styles/components/Profile.module.scss';

/* #endregion Imports*/

export function Profile() {

    return (
        <div className={styles.profileContainer}>
            <img src="http://github.com/DuduALmeida.png" alt="Eduardo Almeida" />

            <div className="">
                <strong>Eduardo Almeida</strong>

                <p>
                <img src="icons/level.svg" alt="Level"/>
                Level 1
                </p>
            </div>
        </div>
    )
}