// #region Imports

import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ChallengesContext } from './ChallengesContext';

// #endregion Imports

// #region Interfaces

interface CountdownInputs {
  children: ReactNode;
}

interface CountdownOutputs {
  minutes: number,
  seconds: number,
  isActive: boolean,
  hasFinished: boolean,
  startCountdown: () => void,
  resetCountdown: () => void,
}

// #endregion Interfaces

// #region Context

export const CountdownContext = createContext({} as CountdownOutputs);

let countdownTimeout: NodeJS.Timeout;

// #endregion Context

/***
 * O Provider que representa o contexto do Countdown
 */
export const CountdownProvider: React.FC<CountdownInputs> = ({ children }) => {

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
    setTime(0.05 * 60);
    setHasFinished(false);
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
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown,
    }}>
      { children}
    </CountdownContext.Provider>
  );
}