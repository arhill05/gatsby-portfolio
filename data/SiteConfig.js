module.exports = {
  blogPostDir: 'sample-posts', // The name of directory that contains your posts.
  siteTitle: 'Andrew Hill', // Site title.
  siteTitleAlt: 'Andrew Hill', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://andrewhill.io', // Domain of your website without pathPrefix.
  siteDescription: 'A GatsbyJS stater with Advanced design in mind.', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '1825356251115265', // FB Application ID for using app insights
  googleAnalyticsID: 'UA-47311644-5', // GA tracking ID.
  disqusShortname: 'https-vagr9k-github-io-gatsby-advanced-starter', // Disqus shortname.
  postDefaultCategoryID: 'Tech', // Default category for posts.
  userName: 'Andrew Hill', // Username to display in the author segment.
  userTwitter: '', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'North Pole, Earth', // User location to display in the author segment.
  userAvatar: 'https://api.adorable.io/avatars/150/test.png', // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/Vagr9K/gatsby-advanced-starter',
      iconClassName: 'fab fa-github'
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/Vagr9K',
      iconClassName: 'fab fa-twitter'
    },
    {
      label: 'Email',
      url: 'mailto:vagr9k@gmail.com',
      iconClassName: 'fa fa-envelope'
    }
  ],
  portfolioItems: [
    {
      title: 'Socrates',
      siteLink: 'https://socratesapp.co',
      githubLink: 'https://github.com/arhill05/socrates',
      imageUrl: 'socrates.png',
      description:
        "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different",
      technologies: ['AngularJS', 'Firebase']
    },
    {
      title: 'Clash Royale Tournament Finder',
      githubLink: 'https://github.com/arhill05/clash-royale-tournament-finder',
      imageUrl: 'cr.png',
      description:
        "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different",
      technologies: ['ReactJS']
    },
    {
      title: 'MoviePass Zipcode Search',
      githubLink: 'https://github.com/arhill05/moviepass-zipcode-search',
      imageUrl: 'moviepass.png',
      description:
        "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different",
      technologies: ['jQuery', 'NodeJS']
    },
    {
      title: 'mdudebot',
      githubLink: 'https://github.com/arhill05/mdudebot',
      imageUrl: 'tm.png',
      description:
        "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different",
      technologies: ['jQuery', 'NodeJS']
    },
    {
      title: 'GetHelpLou',
      siteLink: 'https://gethelplou.andrehill.io',
      githubLink: 'https://github.com/arhill05/gethelplou',
      imageUrl: 'louisville.png',
      description:
        "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different",
      technologies: ['Angular', 'NodeJS']
    },
    {
      title: 'Elementum Manager',
      githubLink: 'https://github.com/paronity/elementummanager',
      imageUrl: 'egn.png',
      description:
        "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different",
      technologies: ['Angular', 'NodeJS', 'Express', 'MySQL']
    }
  ],
  copyright: 'Copyright © 2018. Andrew Hill', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#9827BD', // Used for setting manifest and progress theme colors.
  backgroundColor: '#212332' // Used for setting manifest background color.
};
