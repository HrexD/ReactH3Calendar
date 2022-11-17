import React from 'react';

export const CalendarHeader = ({ onNext, onBack, dateDisplay }) => {
  return(
    <div id="header">
      <div id="monthDisplay">{dateDisplay}</div>
      <div>
        <button onClick={onBack} id="BtnPrecedent">Precedent</button>
        <button onClick={onNext} id="BtnSuivant">Suivant</button>
      </div>
    </div>
  );
};
