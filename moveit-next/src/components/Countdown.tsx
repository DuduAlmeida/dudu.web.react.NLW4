/* #region Imports*/

import { useContext, useEffect, useState } from 'react';

import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/Countdown.module.scss';

/* #endregion Imports*/

export function Countdown() {

    // #region Contexts

    const {
        minutes,
        seconds,
        isActive,
        startCountdown,
        resetCountdown,
        hasFinished,
    } = useContext(CountdownContext)

    // #endregion Contexts

    // #region Properties

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    // #endregion Properties

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

            { !!hasFinished ? (
                <button
                    className={styles.countdownButton}
                    disabled
                >
                    Ciclo encerrado
                </button>
            ) : (
                <>
                    { !!isActive ? (
                        <button
                            type="button"
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                            onClick={() => resetCountdown()}
                        >
                            Abandonar ciclo
                        </button>
                    ) : (
                        <button
                            type="button"
                            className={styles.countdownButton}
                            onClick={() => startCountdown()}
                        >
                            Iniciar um ciclo
                        </button>
                    )}
                </>
            )
            }

        </div>
    )
}

