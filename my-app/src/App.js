import GameStat from "./components/GameStat/GameStat";
import PlayersStat from "./components/PlayersStat/PlayersStat";

function App() {
  return (
    <>
    Hello project
    <div style={{
      display:'flex',
      flexDirection: 'row'
    }}>
    <PlayersStat />
    <GameStat/>
    </div>
    </>
  );
}

export default App;
