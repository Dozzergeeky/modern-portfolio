export const getPersonJsonLd = () => {
  return {
    '@context': 'https://schema.org/',
    '@type': 'Person',
    url: 'https://dozzer.tech/',
    affiliation: [
      {
        '@type': 'Organization',
        '@id': 'https://www.wikidata.org/wiki/Q123921042',
        url: 'https://resend.com/',
        name: 'Resend',
      },
      {
        '@type': 'Organization',
        '@id': 'https://www.wikidata.org/wiki/Q2616400',
        url: 'https://www.ycombinator.com/',
        name: 'Y Combinator',
      },
    ],
    description:
      "Debargha Bhattacharjee is a Indian programmer. He lives in Kolkata,India where he's a Final Year Student at NSEC. His lifelong appreciation for building software and sharing knowledge led him to persue CSE as his career.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Zeno_Rocha.png',
    name: 'Debargha Bhattacharjee',
    givenName: 'Debargha',
    familyName: 'Bhattacharjee',
    gender: 'Male',
    birthPlace: 'Kolkata, India',
    jobTitle: 'Student at NSEC',
    sameAs: [
      'https://www.wikidata.org/wiki/Q123921198',
      'https://www.linkedin.com/in/dozzergeeky',
      'https://twitter.com/dozzergeeeky',
      'https://www.crunchbase.com/person/zeno-rocha',
      'https://www.reddit.com/user/dozzergeeky',
      'https://www.instagram.com/dozzer_geeky',
      'https://github.com/dozzergeeky',
    ],
    knowsAbout: [
      {
        '@type': 'Organization',
        '@id': 'https://www.wikidata.org/wiki/Q123921042',
        name: 'Resend',
      },
      {
        '@type': 'Thing',
        '@id': 'https://www.wikidata.org/wiki/Q80993',
        name: 'Software Engineering',
      },
      {
        '@type': 'Thing',
        '@id': 'https://www.wikidata.org/wiki/Q1254596',
        name: 'Software as a Service',
      },
      {
        '@type': 'Organization',
        '@id': 'https://www.wikidata.org/wiki/Q2616400',
        name: 'Y Combinator',
      },
    ],
    knowsLanguage: [
      {
        '@type': 'Language',
        '@id': 'https://www.wikidata.org/wiki/Q750553',
        name: 'Brazilian Portuguese',
      },
      {
        '@type': 'Language',
        '@id': 'https://www.wikidata.org/wiki/Q1860',
        name: 'English',
      },
    ],
    nationality: [
      {
        '@type': 'Country',
        '@id': 'https://www.wikidata.org/wiki/Q155',
        name: 'Brazil',
      },
      {
        '@type': 'Country',
        '@id': 'https://www.wikidata.org/wiki/Q30',
        name: 'United States of America',
      },
    ],
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        '@id': 'https://www.wikidata.org/wiki/Q2616400',
        name: 'Y Combinator',
        url: 'https://www.ycombinator.com/',
        startDate: '2023',
        endDate: '2023',
      },
      {
        '@type': 'EducationalOrganization',
        '@id': 'https://www.wikidata.org/wiki/Q3011938',
        name: 'Federal University of the State of Rio de Janeiro',
        url: 'https://www.unirio.br/',
        startDate: '2009',
        endDate: '2013',
        major: [
          {
            '@type': 'DefinedTerm',
            name: 'Information Systems',
          },
        ],
      },
    ],
  }
}
