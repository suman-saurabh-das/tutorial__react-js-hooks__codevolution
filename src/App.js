import React from 'react'

/* -------------------- Section 01 -------------------- */
import ClassCounter1 from './components/Section 01/02_ClassCounter1';
import HookCounter1 from './components/Section 01/02_HookCounter1';

function App() {
  return (
    <div className="App">
      <h1>React JS Hooks - Codevolution</h1>

      {/* -------------------- Section 01 -------------------- */}
      <>
        <ClassCounter1 />
        <HookCounter1 />
      </>
    </div>
  );
}

export default App;
