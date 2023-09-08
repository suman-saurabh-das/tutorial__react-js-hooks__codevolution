import React from 'react'

/* -------------------- Section 01 -------------------- */
// import ClassCounter1 from './components/Section 01/02_ClassCounter1';
// import HookCounter1 from './components/Section 01/02_HookCounter1';
// import ClassCounter2 from './components/Section 01/03_ClassCounter2';
// import HookCounter2 from './components/Section 01/03_HookCounter2';
// import HookCounter3 from './components/Section 01/04_HookCounter3';
// import HookCounter4 from './components/Section 01/05_HookCounter4';

/* -------------------- Section 02 -------------------- */
// import ClassCounter3 from './components/Section 02/07_ClassCounter3';
// import HookCounter5 from './components/Section 02/07_HookCounter5';
// import ClassCounter4 from './components/Section 02/08_ClassCounter4';
// import HookCounter6 from './components/Section 02/08_HookCounter6';
// import ClassMouse from './components/Section 02/09_ClassMouse';
// import HookMouse from './components/Section 02/09_HookMouse';
import MouseContainer from './components/Section 02/10_MouseContainer';

function App() {
  return (
    <div className="App">
      <h1>React JS Hooks - Codevolution</h1>

      {/* -------------------- Section 01 -------------------- */}
      <>
        {/* <ClassCounter1 /> */}
        {/* <HookCounter1 /> */}
        
        {/* <ClassCounter2 /> */}
        {/* <HookCounter2 /> */}

        {/* <HookCounter3 /> */}

        {/* <HookCounter4 /> */}
      </>

      {/* -------------------- Section 02 -------------------- */}
      <>
        {/* <ClassCounter3 /> */}
        {/* <HookCounter5 /> */}

        {/* <ClassCounter4 /> */}
        {/* <HookCounter6 /> */}

        {/* <ClassMouse /> */}
        {/* <HookMouse /> */}

        <MouseContainer />
      </>
    </div>
  );
}

export default App;
