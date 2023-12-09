import { Times } from './components/Times';
import { Stopwatch } from './components/Timer';
import  NoSleep  from "nosleep.js";
import { useEffect, useReducer } from 'react';
import { Reducer, initialState } from './components/UseReducer';
import { Reset } from './components/Reset'
function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  window.addEventListener('beforeunload', () => localStorage.setItem('score', JSON.stringify(state)));
  useEffect(() => {
    let isEnableNoSleep = false;
    const noSleep = new NoSleep();
    document.addEventListener(
      `click`,
      function enableNoSleep() {
        document.removeEventListener(`click`, enableNoSleep, false);
        noSleep.enable();
        isEnableNoSleep = true;
      },
      false
    );
    return () => {
      if (isEnableNoSleep) {
        noSleep.disable();
      }
    };
  }, []);
  return (
    <div className="App font-mono">
      <Times state={state} dispatch={dispatch}></Times>
      <Stopwatch></Stopwatch>
      <Reset dispatch={dispatch}></Reset>
    </div>
  );
}

export default App;
