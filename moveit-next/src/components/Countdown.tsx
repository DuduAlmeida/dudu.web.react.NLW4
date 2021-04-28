/* #region Imports*/

import { useContext, useEffect, useState } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Countdown.module.scss';

/* #endregion Imports*/

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    // #region Contexts

    const { startNewChallenge } = useContext(ChallengesContext)

    // #endregion Contexts

    // #region States

    const [time, setTime] = useState(0.05 * 60);
    const [hasFinished, setHasFinished] = useState(false);
    const [isActive, setIsActive] = useState(false);

    // #endregion States

    // #region Properties

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    // #endregion Properties

    // #region Functions

    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        /***
         * Evitando que ele execute algo, mesmo após cancelar
         */
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(25 * 60);
    }

    // #endregion Functions

    // #region LifeCycle

    useEffect(() => {
        if (!!isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (!!isActive && time == 0) {

            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])

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

