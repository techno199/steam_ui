'use client'
import {signal} from "signals-react-safe";
import {AppCategories, AppCategory, LibraryApp} from "../../games.config";
import {makeAutoObservable, makeObservable, observable} from "mobx";

class SteamStore {
  loggedIn = typeof window !== 'undefined' ? +localStorage.getItem('authorized') > 0 : false;

  constructor() {
    makeAutoObservable(this);
  }
}

class GameLibraryStore {
  selectedApp?: LibraryApp | AppCategory = AppCategories[0];
  launchedApp?: LibraryApp = null;

  constructor() {
    makeAutoObservable(this);
  }
}

export const gameLibraryStore = new GameLibraryStore();
export const steamStore = new SteamStore();