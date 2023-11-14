import {signal} from "signals-react-safe";
import {GAMES_CONFIG, GamesConfigItem} from "../../games.config";
import {makeObservable, observable} from "mobx";

class GameLibrary {
  selectedGame: GamesConfigItem | null;
  launchedGame: GamesConfigItem | null;

  constructor() {
    this.selectedGame = GAMES_CONFIG[0];
    this.launchedGame = null;

    makeObservable(this, {
      selectedGame: observable,
      launchedGame: observable
    });
  }
}

export const GameLibraryStore = new GameLibrary();
