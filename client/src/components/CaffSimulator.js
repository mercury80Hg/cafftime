import { useState, useEffect } from 'react';

function CaffSimulator({logs}) {
  const [remaining, setRemaining] = useState('');
  const halfLife = 5;

  function calculateCaffeineRemaining(amount, time, halfLife) {
    const currentTime = new Date();
    const timePassed = (currentTime - time) / (60 * 60 * 1000);
    const halfLivesPassed = timePassed / halfLife;
    const caffeineRemaining = amount * Math.pow(0.5, halfLivesPassed);
    return caffeineRemaining;
  }

  useEffect(() => {
    const flattenedLogs = [];
    logs.map((log) => flattenedLogs.push(log.logs));
    const remainingCaffeine = flattenedLogs.flat().reduce((acc, item) => {
      acc = acc + calculateCaffeineRemaining(item.caffeine, new Date(item.timestamp), halfLife);
      return acc;
    }, 0);
    setRemaining(remainingCaffeine);
  }, []);


  return (
    <div>
      Hello! now You have {Math.round(remaining)} milligrams of caffeine remaining in your body.
    </div>
  );
}


export default CaffSimulator;