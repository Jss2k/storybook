import { useEffect, useState } from 'react';
import { BehaviorSubject } from 'rxjs';

function useBehaviorSubject<T>(behaviorSubject: BehaviorSubject<T>): T {
  const [stateValue, setStateValue] = useState<T>(behaviorSubject.value);
  useEffect(() => {
    const listener = behaviorSubject.subscribe(setStateValue);
    return () => listener.unsubscribe();
  }, [behaviorSubject]);
  return stateValue;
}

export default useBehaviorSubject;
