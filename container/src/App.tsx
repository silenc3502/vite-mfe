import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React, { useEffect, useRef } from 'react';

import VueSample from 'vueViteApp/Sample';

function App() {
  //const vueRef = useRef(null)
  //const solidRef = useRef(null)

  const [count, setCount] = useState(0)
  //vueComponent: () => import("vue_vite_app/Sample")

  useEffect(() => {
    //mount(vueRef.current);
    //solidCounterWrapper(solidRef.current)
  }, []);

  

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1>나는 React Container: Vue, React, Solid.js 통합!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <VueSample/>
    </div>
  )
}

export default App
