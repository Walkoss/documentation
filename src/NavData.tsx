import {
  ApiIcon,
  BookIcon,
  CloudIcon,
  DocumentIcon,
  GitHubIcon,
  GraphIcon,
  MagicWandIcon,
  PadlockIcon,
  ToolIcon,
  VideoIcon,
  WorkspaceIcon,
} from '@pluralsh/design-system'
import { ReactElement } from 'react'
import deepFreeze from 'deep-freeze'

export type NavItem = {
  title?: string
  href?: string
  icon?: ReactElement
  sections?: NavItem[]
}

export type NavData = NavItem[]

const data: NavData = [
  {
    title: 'Getting Started',
    sections: [
      {
        title: 'Introduction',
        href: '/',
        icon: <DocumentIcon />,
      },
      {
        title: 'Quickstart',
        href: '/getting-started/quickstart',
        icon: <MagicWandIcon />,
      },
      {
        href: '/getting-started/video-cli-quickstart',
        title: 'Video: CLI Quickstart',
        icon: <VideoIcon />,
      },
      {
        href: '/getting-started/cloud-shell-quickstart',
        title: 'Deploying with Cloud Shell',
        icon: <CloudIcon />,
      },
      {
        href: '/getting-started/managing-git-repository',
        title: 'Managing Your Git Repository',
        icon: <GitHubIcon />,
        sections: [
          { href: '/getting-started/managing-git-repository/setting-up-gitops', title: 'Setting Up GitOps' },
          { href: '/getting-started/managing-git-repository/your-plural-workspace', title: 'Your Plural Workspace' },
        ],
      },
      {
        href: '/getting-started/admin-console',
        title: 'Installing Plural Console',
        icon: <GraphIcon />,
      },
      {
        href: '/getting-started/openid-connect',
        title: 'Using Plural OIDC',
        icon: <PadlockIcon />,
      },
    ],
  },
  {
    title: 'Applications',
    sections: [
      {
        href: '/applications',
        title: 'Application Catalog',
        sections: [
          { href: '/applications/airbyte', title: 'Airbyte' },
          { href: '/applications/airflow', title: 'Airflow' },
          { href: '/applications/console', title: 'Console' },
        ],
      },
      {
        href: '/adding-new-application',
        title: 'Add an Application',
        sections: [
          { href: '/adding-new-application/guide', title: 'Guide' },
          {
            href: '/adding-new-application/plural-custom-resources',
            title: 'Plural Custom Resources',
          },
          {
            href: '/adding-new-application/module-library',
            title: 'Module Library',
          },
          {
            href: '/adding-new-application/getting-started-with-runbooks',
            title: 'Getting Started With Runbooks',
            sections: [
              {
                href: '/adding-new-application/getting-started-with-runbooks/runbook-xml',
                title: '  XML Runbooks',
              },
              {
                href: '/adding-new-application/getting-started-with-runbooks/runbook-yaml',
                title: '  YAML Runbooks',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Operations',
    sections: [
      {
        href: '/operations/network-configuration',
        title: 'Network Configuration',
      },
      {
        href: '/operations/uninstall',
        title: 'Destroying the Cluster Safely',
      },
      {
        href: '/operations/dns-setup',
        title: 'Setting up Third Party DNS',
        sections: [
          {
            href: '/operations/dns-setup/creating-dns-zone-in-your-cloud-provider-console',
            title: '  Creating a DNS Zone in Console',
          },
        ],
      },
      {
        href: '/operations/security',
        title: 'Security',
        sections: [
          {
            href: '/operations/security/secret-management',
            title: '  Secret Management',
          },
        ],
      },
      {
        href: '/operations/auth-access-control',
        title: 'Auth & Access Control',
        sections: [
          {
            href: '/operations/auth-access-control/openid-connect',
            title: 'OpenID Connect',
          },
          {
            href: '/operations/auth-access-control/api-tokens',
            title: 'API Tokens',
          },
          {
            href: '/operations/auth-access-control/identity-and-installations',
            title: 'Identity and Installations',
            sections: [
              {
                href: '/operations/auth-access-control/identity-and-installations/audit-logging',
                title: 'Audit Logging',
              },
              {
                href: '/operations/auth-access-control/identity-and-installations/service-accounts',
                title: 'Service Accounts',
              },
              {
                href: '/operations/auth-access-control/identity-and-installations/sharing-existing-repos',
                title: 'Sharing Existing Repos',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Debugging',
    sections: [
      {
        href: '/debugging',
        title: 'Debugging',
        icon: <BookIcon />,
        sections: [
          {
            href: '/debugging/health-checks',
            title: '  Health Checks',
          },
          {
            href: '/debugging/proxies',
            title: 'Proxies',
          },
          {
            href: '/debugging/logs',
            title: 'Logs',
          },
        ],
      },
      {
        title: 'Troubleshooting',
        href: '/reference/troubleshooting',
        icon: <ToolIcon />,
      },
    ],
  },
  {
    title: 'Reference',
    sections: [
      {
        title: 'Workspaces',
        href: '/reference/workspaces',
        icon: <WorkspaceIcon />,
      },
      {
        title: 'API / Developer Tools',
        href: '/reference/api',
        icon: <ApiIcon />,
        sections: [
          {
            href: '/reference/api/plural-api',
            title: 'Plural API',
          },
          {
            title: 'Console API',
            href: '/reference/api/console-api',
          },
        ],
      },
      {
        title: 'Cloud Provider CLI Setup',
        href: '/reference/configuring-cloud-provider',
        icon: <CloudIcon />,
      },
    ],
  },
  // {
  //   title: 'Test Pages',
  //   sections: [{ title: 'Callouts', href: '/test/callouts' }],
  //   sections: [{ title: 'Blockquotes', href: '/test/blockquotes' }],
  // },
]

export default deepFreeze(data)
