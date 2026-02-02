import { useState, useEffect } from 'react';
import './Countdown.css';

interface CountdownProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function Countdown({ targetDate }: CountdownProps) {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className="countdown-container">
      <div className="countdown-grid">
        <div className="countdown-item">
          <div className="countdown-value">{formatNumber(timeLeft.days)}</div>
          <div className="countdown-label">Days</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <div className="countdown-value">{formatNumber(timeLeft.hours)}</div>
          <div className="countdown-label">Hours</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <div className="countdown-value">{formatNumber(timeLeft.minutes)}</div>
          <div className="countdown-label">Minutes</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <div className="countdown-value">{formatNumber(timeLeft.seconds)}</div>
          <div className="countdown-label">Seconds</div>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
