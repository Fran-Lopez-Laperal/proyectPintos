import { useState, useEffect } from 'react';

export function CountdownTimer({ initialCountdown, onTimeout }) {
  const [countdown, setCountdown] = useState(initialCountdown);

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown === 1) {
        clearInterval(timer);
        onTimeout();
      } else {
        setCountdown(countdown - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, onTimeout]);

  return (
    <div>
      <p className="text-center">Serás redirigido a la página de inicio en {countdown} segundos...</p>
    </div>
  );
}
