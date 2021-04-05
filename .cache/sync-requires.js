const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/calebwhitmore/Documents/GitHub/portfolio/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/calebwhitmore/Documents/GitHub/portfolio/src/pages/about.js"))),
  "component---src-pages-bookmarks-js": hot(preferDefault(require("/Users/calebwhitmore/Documents/GitHub/portfolio/src/pages/bookmarks.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/calebwhitmore/Documents/GitHub/portfolio/src/pages/index.js"))),
  "component---src-templates-project-page-js": hot(preferDefault(require("/Users/calebwhitmore/Documents/GitHub/portfolio/src/templates/project-page.js")))
}

