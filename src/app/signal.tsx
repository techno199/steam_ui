import {signal} from "signals-react-safe";
import {GAMES_CONFIG, GamesConfigItem} from "../../games.config";
import {makeObservable, observable} from "mobx";

class GameLibrary {
  selectedGame: GamesConfigItem;

  constructor() {
    this.selectedGame = GAMES_CONFIG[0];
    makeObservable(this, {
      selectedGame: observable
    });
  }
}

export const GameLibraryStore = new GameLibrary();

export const LibrarySignal = signal({
  selectedGame: GAMES_CONFIG[0],
  search: ''
});