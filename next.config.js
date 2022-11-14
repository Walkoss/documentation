/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line function-paren-newline
const withMarkdoc = require('@markdoc/next.js')(
  /* config: https://markdoc.io/docs/nextjs#options */ {
    schemaPath: './src/markdoc',
  })
const withTM = require('next-transpile-modules')(['pluralsh-design-system', 'honorable', 'honorable-theme-default'],
  {
    debug: false,
  })

module.exports = () => {
  const plugins = [withMarkdoc, withTM]

  return plugins.reduce((acc, next) => next(acc), {
    reactStrictMode: true,
    compiler: {
      // https://nextjs.org/docs/advanced-features/compiler#styled-components
      styledComponents: true,
      emotion: true,
    },
    i18n: {
      locales: ['en-US'],
      defaultLocale: 'en-US',
    },
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdoc'],
    async redirects() {
      return [
        {
          source: '/getting-started/readme',
          destination: '/',
          permanent: true,
        },
        {
          source: '/getting-started/getting-started',
          destination: '/getting-started/quickstart',
          permanent: true,
        },
        {
          source: '/reference/architecture-1',
          destination: '/reference/architecture',
          permanent: true,
        },
        {
          source: '/reference/workspaces/workspace-structure',
          destination: '/reference/workspaces',
          permanent: true,
        },
        {
          source: '/getting-started/getting-started-with-runbooks/runbook-yaml',
          destination: '/adding-new-application/getting-started-with-runbooks/runbook-yaml',
          permanent: true,
        },
        {
          source: '/basic-setup-and-deployment/setting-up-gitops',
          destination: '/getting-started/setting-up-gitops',
          permanent: true,
        },
        {
          source: '/basic-setup-and-deployment/openid-connect',
          destination: '/getting-started/openid-connect',
          permanent: true,
        },
        {
          source: '/basic-setup-and-deployment/admin-console',
          destination: '/getting-started/admin-console',
          permanent: true,
        },
        {
          source: '/basic-setup-and-deployment/cloud-shell-quickstart',
          destination: '/getting-started/cloud-shell-quickstart',
          permanent: true,
        },
        {
          source: '/basic-setup-and-deployment/uninstall',
          destination: '/getting-started/quickstart',
          permanent: true,
        },
        {
          source: '/reference/operator-guides',
          destination: '/repositories',
          permanent: true,
        },
        {
          source: '/reference/operator-guides/adding-kubecost-for-cost-analysis',
          destination: '/repositories/kubecost',
          permanent: true,
        },
        {
          source: '/reference/architecture',
          destination: '/',
          permanent: true,
        },
        {
          source: '/repositories',
          destination: '/applications',
          permanent: true,
        },
        {
          source: '/repositories/airbyte',
          destination: '/applications/airbyte',
          permanent: true,
        },
        {
          source: '/repositories/airflow',
          destination: '/applications/airflow',
          permanent: true,
        },
        {
          source: '/repositories/console',
          destination: '/applications/console',
          permanent: true,
        },
        {
          source: '/advanced-topics',
          destination: '/operations',
          permanent: true,
        },
        {
          source: '/advanced-topics/network-configuration',
          destination: '/operations/network-configuration',
          permanent: true,
        },
        {
          source: '/advanced-topics/dns-setup',
          destination: '/operations/dns-setup',
          permanent: true,
        },
        {
          source: '/advanced-topics/dns-setup/creating-dns-zone-in-your-cloud-provider-console',
          destination: '/operations/dns-setup/creating-dns-zone-in-your-cloud-provider-console',
          permanent: true,
        },
        {
          source: '/advanced-topics/security',
          destination: '/operations/security',
          permanent: true,
        },
        {
          source: '/advanced-topics/security/secret-management',
          destination: '/operations/security/secret-management',
          permanent: true,
        },
      ]
    },
    // webpack: (config) => {
    //   config.module.rules.push({
    //     test: /\.md$/,
    //     use: 'raw-loader',
    //   });
    //   return config;
    // },
  })
}
