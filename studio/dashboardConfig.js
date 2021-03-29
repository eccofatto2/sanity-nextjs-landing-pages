export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '606215fba6c376007c1b5d11',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-e2pbewjw',
                  apiId: 'cfe9ff23-b8c1-47b3-be5e-b598c82ec823'
                },
                {
                  buildHookId: '606215fca6c37600cd1b60da',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-oxsso3vb',
                  apiId: '1abda991-7363-4cdf-aad4-15afa9a3ac03'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/eccofatto2/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-oxsso3vb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
