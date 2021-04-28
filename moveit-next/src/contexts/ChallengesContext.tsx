// #region Imports

import { createContext, ReactNode, useState } from 'react';

import challenges from '../../challenges.json';

// #endregion Imports

// #region Context

export const ChallengesContext = createContext({} as ChallengesOutput);

// #endregion Context

// #region Interfaces

interface Challenge {
  type: 'body' | 'eye',
  description: string,
  amount: number,
}

interface ChallengesInput {
  children: ReactNode;
}

interface ChallengesOutput {
  level: number,
  levelUp: Function,
  resetChallenge: Function,
  currentExperience: number,
  activeChallenge: Challenge,
  challengesCompleted: number,
  startNewChallenge: Function,
  experienceToNextLevel: number,
}

// #endregion Interfaces

/***
 * O provider do contexto dos desafios da aplicação
 */
export function ChallengesProvider({ children }: ChallengesInput) {
  // #region States

  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  // #endregion States

  // #region Properties

  const experienceToNextLevel = Math.pow((level + 1) * 3, 2)

  // #endregion Properties

  // #region Functions

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  // #endregion Functions

  return (
    <ChallengesContext.Provider value={{
      level,
      levelUp,
      currentExperience,
      challengesCompleted,
      startNewChallenge,
      activeChallenge,
      resetChallenge,
      experienceToNextLevel,
    }}>
      { children}
    </ChallengesContext.Provider>
  )
}