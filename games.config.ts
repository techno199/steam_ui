export type AppCategory = {
  isCategory: boolean;
  name: string;
  apps: LibraryApp[];
  isCollapsed?: boolean;
}

export type LibraryApp = {
  name: string;
  description?: string;
  parentName?: string;
  logoUrl?: string;
  backgroundUrl?: string;
  gameUrl?: string;
  playTime?: number;
  installed?: boolean;
}

export const AppCategories: AppCategory[] = [
  {
    isCategory: true,
    name: 'Favorite',
    isCollapsed: false,
    apps: [
      {
        parentName: 'Favorites',
        name: 'Call of Duty: Modern Warfare® (2019)',
        description: 'This little ui was created using noting but  ̶r̶a̶w̶ ̶m̶e̶t̶a̶l̶s̶  vanilla.',
        installed: true,
        logoUrl: '/steam/games/cod_logo.png',
        backgroundUrl: '/steam/games/cod_bg.jpg',
        gameUrl: 'https://techno199.github.io/modern_warfare2019/',
        playTime: 633,
      },
      {
        parentName: 'Favorites',
        name: 'Battlefield V',
        description: 'Battlefield demo interface with fake loading screen.',
        installed: true,
        logoUrl: '/steam/games/bf_logo.jpg',
        backgroundUrl: '/steam/games/bf_bg.jpg',
        gameUrl: 'https://techno199.github.io/bfv_markup/',
        playTime: 225.4
      },
      {
        parentName: 'Favorites',
        name: 'Dota 2 Test Server',
        description: 'Peek at this project source code to view some Next.js use cases. Loading process serves necessary static assets, and game menu offers fun transitions and animations!\nGithub: https://github.com/techno199/dota_ui ',
        installed: true,
        logoUrl: '/steam/games/dota_logo.jfif',
        backgroundUrl: '/steam/games/dota_bg.png',
        gameUrl: 'https://dota-ui.vercel.app/',
        playTime: 12289
      }
    ]
  }
]