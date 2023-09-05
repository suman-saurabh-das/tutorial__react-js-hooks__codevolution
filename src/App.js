import React from 'react'

/* -------------------- Section 01 -------------------- */
// import ClassCounter1 from './components/Section 01/02_ClassCounter1';
// import HookCounter1 from './components/Section 01/02_HookCounter1';
import ClassCounter2 from './components/Section 01/03_ClassCounter2';
import HookCounter2 from './components/Section 01/03_HookCounter2';

function App() {
  return (
    <div className="App">
      <h1>React JS Hooks - Codevolution</h1>

      {/* -------------------- Section 01 -------------------- */}
      <>
        {/* <ClassCounter1 /> */}
        {/* <HookCounter1 /> */}
        
        <ClassCounter2 />
        <HookCounter2 />
      </>
    </div>
  );
}

export default App;
