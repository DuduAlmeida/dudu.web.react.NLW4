/* #region Imports*/

import React from 'react';

import './ExperienceBar.scss';

/* #endregion Imports*/

const ExperienceBar: React.FC = () => {
  return (
    <header className="experience-bar">
      <span>0 xp</span>
      <div>
        <div style={{ width: '50%' }}></div>

        <span className="current-experience" style={{left: '50%'}}>300xp</span>
      </div>
      <span>600 xp</span>
    </header>
  );
}

export default ExperienceBar;