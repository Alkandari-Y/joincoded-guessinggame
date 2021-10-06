import { useState } from 'react'
import Home from './components/Home'
import Interface from './components/Interface'
import './App.css';

function App() {
  const [initiate, setInitiate] = useState(null)

  return (
    <section className="App">
      <h1 className="main-title">Weclome to your Initiation!</h1>
      <Home initiate={ initiate }/>
      <Interface setInitiate={ setInitiate }/>
    </section>
  );
}

export default App;
