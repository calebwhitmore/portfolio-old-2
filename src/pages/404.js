import * as React from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout/layout";



// markup
const NotFoundPage = () => {
  return (
    // <main style={pageStyles}>
    //   <title>Not found</title>
    //   <h1 style={headingStyles}>Page not found</h1>
    //   <p style={paragraphStyles}>
    //     Sorry{" "}
    //     <span role="img" aria-label="Pensive emoji">
    //       😔
    //     </span>{" "}
    //     we couldn’t find what you were looking for.
    //     <br />
    //     {process.env.NODE_ENV === "development" ? (
    //       <>
    //         <br />
    //         Try creating a page in <code style={codeStyles}>src/pages/</code>.
    //         <br />
    //       </>
    //     ) : null}
    //     <br /> 
    //     <Link to="/">Go home</Link>.
    //   </p>
    // </main>
    <Layout id={1}>
      <Seo title="404: Not found" />
      <p className="name-small-screen">Caleb Whitmore</p>
      <h1 className="title">
        404: Page not found 
      </h1>

      <Link className="about" to="/">
        Click here to go home
      </Link>
    </Layout>
  )
}

export default NotFoundPage
