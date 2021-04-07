/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'furtive\'s handbook',
  tagline: 'A reference for tournament formats',
  url: 'https://morleym.github.io',
  baseUrl: '/furtive-handbook/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/shush.svg',
  organizationName: 'morleym', // Usually your GitHub org/user name.
  projectName: 'furtive-handbook', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'furtive\'s handbook',
      logo: {
        alt: 'Shush Emoji',
        src: 'img/shush.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/morleym/furtive-handbook',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.mitchellmorley.com/',
          label: 'Portfolio',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Format Concepts',
              to: 'docs/inputs-and-outputs',
            },
            {
              label: 'Format Reference Guide',
              to: 'docs/format-basics',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/4U7UWjCt7r',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/morleym/furtive-handbook',
            },
            {
              label: 'Shush emoji by Twemoji',
              href: 'https://twemoji.twitter.com/'
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mitchell Morley. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/morleym/furtive-handbook/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/morleym/furtive-handbook(1/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
