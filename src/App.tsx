import "./App.css";
import { Header } from "./componets/Header/Header";
import { useAppSelector } from "./hooks";
import { GameOver } from "./page/GameOver/GameOver";
import { Level1 } from "./page/Level1/Level1";
import { WinPage } from "./page/WinPage/WinPage";

function App() {
  const lifes = useAppSelector((store) => store.lifes);
  const points = useAppSelector((store) => store.points);
  return (
    <div className="App">
      <Header />
      <div className="levelContent">
        {(() => {
          if (lifes > 0 && points < 1000) {
            return <Level1 />;
          }
          if (lifes <= 0) {
            return <GameOver />;
          }
          if (points >= 1000) {
            return <WinPage />;
          }
        })()}
      </div>
    </div>
  );
}

export default App;
