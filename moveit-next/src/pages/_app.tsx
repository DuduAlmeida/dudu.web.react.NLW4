// #region Imports

import React from 'react';
import '../styles/global.css';

import { ChallengesProvider } from '../contexts/ChallengesContext';

// #endregion Imports

/***
 * Semelhante ao App.module do angular
 */
function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp