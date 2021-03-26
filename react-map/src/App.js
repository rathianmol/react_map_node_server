import { useState, useEffect } from 'react'; 
import Map from './components/Map'; 


function App() {

  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false); 

  useEffect(() => {

    const fetchEvents = async () => {
      console.log('fetch events being called'); 
      setLoading(true); 
      const res = await fetch('http://localhost:5000/usersLocations');
     
      const events = await res.json(); 
      setEventData(events);
      setLoading(false); 
    }
    fetchEvents();

  }, []);

  return (
    <div className="App">
      { !loading ? <Map eventData={eventData} /> : <h1>Fetching Data</h1>}
    </div>
  );
}

export default App;
