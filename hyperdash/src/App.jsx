import { useState,useEffect } from 'react'
import Homepage from './components/Homepage/Home'
import LoadingScreen from './components/Homepage/LoadingWarrper'
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Hide loading after 3 seconds
    }, 1000);
  }, []);

  return (
    <>
    {loading ? <LoadingScreen/> :<Homepage/>}
    </>
  )
}

export default App
