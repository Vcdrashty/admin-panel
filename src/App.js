import React from 'react';
import PersistentDrawerLeft from './components/drawer'
import CenteredGrid from './components/home-page'
function App() {
  return (
    <div className="App">
      <PersistentDrawerLeft/>
      <CenteredGrid/>
    </div>
  );
}

export default App;
