import { GameList } from "./components/game-list/GameList";
import { Header } from "./components/header/Header";


function App() {
  return (
    <div id="box">
      <Header />
      <main id="main-content">
        <GameList />
      </main>
    </div>
  );
}

export default App;
