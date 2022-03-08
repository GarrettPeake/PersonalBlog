import * as Navi from 'navi'

export default Navi.route({
  title: "About/Components",
  getView: () => import('./document.mdx'),
})