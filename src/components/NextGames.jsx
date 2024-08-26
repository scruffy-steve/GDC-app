import { useState, useEffect } from "react";

export default function NextGames() {
  const [longplays, setLongplays] = useState([]);

  useEffect(() => {
    async function fetchLongplays() {
      const response = await fetch('http://localhost:4005/api/longplays');
      const json = await response.json();
      console.log('Fetch response:', json);
      if (response.ok) {
        setLongplays(json);
      }
    }
    fetchLongplays();
  }, []);

  return (
    <div>
      <h1>Next Games</h1>
      <ul>
        {longplays.map((longplay, index) => (
          <li key={index} style={{paddingBottom: '20px'}}>
            <div> {longplay.name} </div>
            <div> {longplay.console} </div>
            <div> {longplay.poster} </div>
          </li>
        ))}
      </ul>
    </div>
  );
}