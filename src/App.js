import React from 'react';
import Navigation from './Layout/Navigarion/index';
// import Button from './Components/Sandbox'
// import Sandbox from './Components/ButtonGroup/ButtonGroup'
// import Sandbox from './Components/ButtonGroup/Sandbox';
// import Sandbox from './Components/Icon/Sandbox';
const App = ({children}) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  )
}

export default App;