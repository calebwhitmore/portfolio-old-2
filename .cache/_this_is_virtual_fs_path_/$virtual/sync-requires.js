
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/calebwhitmore/git/portfolio/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/calebwhitmore/git/portfolio/src/pages/about.js")),
  "component---src-pages-bookmarks-js": preferDefault(require("/Users/calebwhitmore/git/portfolio/src/pages/bookmarks.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/calebwhitmore/git/portfolio/src/pages/index.js")),
  "component---src-templates-project-page-js": preferDefault(require("/Users/calebwhitmore/git/portfolio/src/templates/project-page.js"))
}

