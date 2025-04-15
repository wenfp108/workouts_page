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
  logo:  'https://i.ibb.co/fxcj8V7/Big-Meow-cats-catsofinstagram-cat-catstagram-instagram-catlover-catlife-catlovers-instacat-kitten-pe.jpg',
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

