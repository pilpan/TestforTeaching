import { useEffect, useState } from "react"


async function fetchData(setData) {
  const url = 'https://free-nba.p.rapidapi.com/stats?page=0&per_page=25';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '488f437511msh2d3854838388c55p13692cjsn135921cfebdf',
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    setData(result.data);
  } catch (error) {
    console.error(error);
  }
}
export default function GameStat() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData(setData);
  }, [])
  return (
    <div>
      {data.map((el) => {
        return <p style={{
          border: '1px solid black',
          backgroundColor: 'yellow',
          textAlign: 'center'
        }}>{el.team.city}</p>
      })}
    </div>
  )
}
