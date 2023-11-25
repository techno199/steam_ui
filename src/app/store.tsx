import {signal} from "signals-react-safe";
import {GAMES_CONFIG, GamesConfigItem} from "../../games.config";
import {makeAutoObservable, makeObservable, observable} from "mobx";

class SteamStore {
  loggedIn = false;

  constructor() {
    makeAutoObservable(this);
  }
}

class GameLibraryStore {
  selectedGame? = GAMES_CONFIG[0];
  launchedGame?: GamesConfigItem = null;

  constructor() {
    makeObservable(this, {
      selectedGame: observable,
      launchedGame: observable
    });
  }
}

export const gameLibraryStore = new GameLibraryStore();
export const steamStore = new SteamStore();