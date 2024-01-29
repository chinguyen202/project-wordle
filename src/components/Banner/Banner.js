import React from 'react';

function Banner({ status, numOfGuess, answer }) {
  return (
    <>
      {status === 'win' && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{numOfGuess} guesses</strong>.
          </p>
        </div>
      )}
      {status === 'lose' && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Banner;
