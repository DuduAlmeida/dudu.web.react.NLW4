/* #region Imports*/

import { useEffect, useState } from 'react';
import styles from '../styles/components/Countdown.module.scss';

/* #endregion Imports*/

export function Countdown() {

    // #region States

    const [time, setTime] = useState(25 * 60);
    const [active, setActive] = useState(false);

    // #endregion States

    // #region Properties

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    // #endregion Properties

    // #region Functions

    function startCountdown() {
        setActive(true);
    }

    // #endregion Functions

    // #region LifeCycle

    useEffect(() => {
        if (!!active && time > 0) {
            setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        }
    }, [active, time])

    // #endregion LifeCycle

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span></span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            <button
                type="button"
                className={styles.countdownButton}
                onClick={() => startCountdown()}
            >
                Iniciar um ciclo
            </button>
        </div>
    )
}

