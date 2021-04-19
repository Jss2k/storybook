import { useEffect, useState } from 'react';
import { Subject } from 'rxjs';

function useSubject<T>(subject: Subject<T>, initial?: T): T | undefined {
  const [stateValue, setStateValue] = useState<T | undefined>(initial);
  useEffect(() => {
    const listener = subject.subscribe(setStateValue);
    return () => listener.unsubscribe();
  }, [subject]);
  return stateValue;
}

export default useSubject;
