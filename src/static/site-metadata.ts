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
  siteUrl: 'https://app.follow.is/share/lists/71885160939929600',
  logo:  'https://i.ibb.co/fzsXrXhS/40d52256ac657f9fd91d31b245d09d5.jpg',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Strava',
      url: 'https://www.strava.com/athletes/135469581',
    },
    {
      name: 'Follow',
      url: 'https://app.follow.is/share/lists/71885160939929600',
    },
  ],
};

export default data;
