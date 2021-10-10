module.exports = {
    title: '',
    base: '/tldr/',
    dest: './public',
    head: [
      ['link', { rel: 'icon', href: 'images/favicon.png' }]
    ],
    theme: 'default-prefers-color-scheme',
    themeConfig: {
      logo: '/logo.png',
      overrideTheme: 'dark',
      nav: [
        { text: 'Games', link: '/games/' },
        { text: 'Game of the Year', link: '/goty/' },
        { text: 'GitHub', link: 'https://github.com/Hiccup-za/tldr' }
      ],
      sidebar: {
        '/games/': [
          '',
          '2020',
          '2019',
          '2018',
          '2017',
          '2016',
          '2015'
        ]
      },
      smoothScroll: true,
    }
}