export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f90db6cb003f5014d8d90c1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ddc8cnve',
                  apiId: '6ffae341-98b6-46bc-b327-0e3062b9dac8'
                },
                {
                  buildHookId: '5f90db6cbafaf7008376feb1',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-88j45fhf',
                  apiId: '8988adea-dd77-466d-97d0-eda9942c518b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/phaiza/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-88j45fhf.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
