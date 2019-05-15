module.exports = {
  siteTitle: 'Skanda Muralidhar | Data Scientist',
  siteDescription:
    'I am a data scientist based in Martigny, Switzerland.  I have a PhD from EPFL and specialize in analyzing various modalities of data including audio, video and text from different sources including social media sites.',
  siteKeywords:
    'Skanda Muralidhar, Data Scientist, PhD, Audio Processing, NLP, Natural Language Prcocessing, Video Processing, Wearbale Devices, C',
  siteUrl: 'https://smuralidhar.github.io/',
  siteLanguage: 'en_US',

  name: 'Skanda Muralidhar',
  location: 'Martigny, Switzerland',
  email: 'skandashastry@gmail.com',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/smuralidhar13/',
    },
    {
      name: 'Linkedin',
      url: 'https://ch.linkedin.com/in/skandamuralidhar',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  navHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
