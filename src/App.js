
import './App.css';
import Btnpanel from './componants/Btnpanael';
import Gallery from './componants/Gallery';
import { useState } from 'react';

function App() {

  const [pro, setpro] = useState("all")
  return (

    <div className="App container">
      <div className='max-w'>

        <Btnpanel send={(pro) => { setpro(pro) }} />
        <Gallery pro={pro} />
        
      </div>
    </div>
  );
}

export default App;
