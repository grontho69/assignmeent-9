import axios from "axios";
import { useEffect, useState } from "react";

const useGameData = () => {
  const [gameData, setGameData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    
    axios('../gameData.json').then(data=>setGameData(data.data)).catch(err => setError(err)).finally(()=> setLoading(false))
   },[])

  
  return { gameData, loading ,error}
}

export default useGameData