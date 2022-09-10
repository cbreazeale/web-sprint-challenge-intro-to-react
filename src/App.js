import React, {useState , useEffect} from 'react';
import dummy from './dummy';
import Character from './components/Character'
import axios from 'axios';

const url = 'https://swapi.dev/api/people/'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState(null);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  //dummy grabs 10
  useEffect(()=>{
    setData(dummy.results)
    const res = dummy.results
    setData(res)
  },[])

  //fetch only grabs 6?
  // useEffect(()=>{
  //   axios.get(url)
  //   .then(res => {
  //     setData(res.data)
  //   })
  // })


  if(data === null) {
    return <p>This is not the page your looking for</p>
  }


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
      data.map(function(el) {
        return  <Character name={el.name}/>
      })
    }

    </div>
  );
}



export default App;
