// #region Imports

import React, { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/ChallengeBox.module.scss';

// #endregion Imports

// #region Inputs

interface Inputs {
}

// #endregion Inputs

/***
 * O componente que representa da caixa de desafios
 */
const ChallengeBox: React.FC<Inputs> = () => {
  // #region Contexts

  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);

  // #endregion Contexts

  return (
    <div className={styles.challengeBoxContainer}>

      {
        !!activeChallenge ? (
          <div className={styles.challengeActive}>
            <header>Ganhe {activeChallenge.amount} xp</header>

            <main>
              <img src={`icons/${activeChallenge.type}.svg`} alt="" />

              <strong>Novo desafio</strong>

              <p>{activeChallenge.description}</p>
            </main>

            <footer>
              <button
                type="button"
                className={styles.challengeFailedButton}
                onClick={() => resetChallenge()}
              >
                Falhei
              </button>

              <button
                type="button"
                className={styles.challengeSucceededButton}
                onClick={() => completeChallenge()}
              >
                Completei
              </button>
            </footer>
          </div>
        ) : (
          <div className={styles.challengeNotActive}>
            <strong>Finalize um ciclo para receber um desafio</strong>

            <p>
              <img src="icons/level-up.svg" alt="Level Up" />

          Avance de level completando desafios.
        </p>
          </div>
        )
      }

    </div>
  );
}

export default ChallengeBox;