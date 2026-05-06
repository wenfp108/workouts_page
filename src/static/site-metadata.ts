interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: 'Workouts Map',
  siteUrl: 'https://woon-workouts.pages.dev',
  logo:  'https://i.ibb.co/LXPy8SbJ/unnamed.jpg',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    {
      name: 'Strava',
      url: 'https://www.strava.com/athletes/135469581'
    },
    {
      name: 'Folo',
      url: 'https://app.follow.is/share/lists/71885160939929600'
    },
  ],
};

export default data;
