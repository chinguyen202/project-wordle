import React from 'react';

function GuessResult({ results }) {
  return (
    <div className="guess-results">
      {results &&
        results.map((item) => (
          <p className="guess" key={item.id}>
            {item.guess}
          </p>
        ))}
    </div>
  );
}

export default GuessResult;
