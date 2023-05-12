import { useEffect, useState } from "react"


async function fetchData(setData) {
  const url = 'https://free-nba.p.rapidapi.com/players?page=0&per_page=25';
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

export default function PlayersStat() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData(setData)
  }, [])
  console.log(data);
  return (
    <div>
      {data.map((el) => {
        return <p key={el.id}>{el.first_name} {el.last_name}</p>
      })}
    </div>
  )
}
