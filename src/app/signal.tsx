'use client'
import {signal} from "@preact/signals-react";
import {GAMES_CONFIG} from "games.config";

export const LibrarySignal = signal(GAMES_CONFIG[0]);