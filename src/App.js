import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Generate your gradient background!</h1>
      <h2>Then Copy and Paste!</h2>
      <hr />
      <input class="color1" type="color" name="color1" value="#FFFFFF" />
      <input class="color2" type="color" name="color2" value="#FFFFFF" />
      <hr />
      <button id='radial'>Radial</button>
      <button id='linear'>Linear</button><br />
    </div>
  );
}

export default App;
