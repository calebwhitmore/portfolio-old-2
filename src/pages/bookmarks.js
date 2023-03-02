import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import "./bookmarks.scss";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class BookmarksPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "portfolios",
      bookmarks: [
        {
          id: 0,
          kind: "portfolio",
          title: "Timothy Achumba",
          url: "https://timothyachumba.com/",
          description:
            "Incredibly talented Principle Designer at Microsoft that knows craft and code."
        },
        {
          id: 1,
          kind: "portfolio",
          title: "Dom Davies",
          url: "https://www.domdavies.com/",
          description:
            "Designer/Prototyper at Apple with an eye for the details. Led the Outlook mobile redesign back in 2018."
        },
        {
          id: 2,
          kind: "portfolio",
          title: "Tim Zarki",
          url: "https://www.zarki.net/",
          description:
            "Visual Designer at Occulus that I've been following for a while. One of those dudes you kinda hate because he's so good."
        },
        {
          id: 3,
          kind: "portfolio",
          title: "Zann St Pierre",
          url: "https://zann.com.au/",
          description:
            "Design Developer who's super talented and possibly works harder than anyone else I know."
        },
        {
          id: 4,
          kind: "portfolio",
          title: "Joe Woodward",
          url: "https://joewoodward.co",
          description:
            "My previous manager at Microsoft. Crafty and uncompromising when it comes to the details. A manager that also gets shit done."
        },
        {
          id: 5,
          kind: "resource",
          title: "Atomic design",
          url: "https://atomicdesign.bradfrost.com/table-of-contents/",
          description:
            "A great book written by Brad Frost, which documents how to handle scale design systems to be extensible."
        },
        {
          id: 6,
          kind: "resource",
          title: "The Role of Animation and Motion in UX",
          url: "https://www.nngroup.com/articles/animation-purpose-ux/",
          description:
            "Nielson Norman Group published a fantastic article which communicates how we should be implementing motion in our products, in a way that is purposeful and considered."
        },
        {
          id: 7,
          kind: "resource",
          title: "Awwwards",
          url: "https://www.awwwards.com/",
          description:
            "Promoting different experiences around the web, based on design, usability, creativity and content. This is my day-to-day go to site to get inspired."
        },
        {
          id: 8,
          kind: "resource",
          title: "Bēhance",
          url: "https://www.behance.net/",
          description:
            "I've been visiting this site since I was in design school. It's a site for creatives to promote their work no matter their industry."
        },
        {
          id: 9,
          kind: "resource",
          title: "Abduzeedo",
          url: "https://abduzeedo.com/",
          description:
            "Founded by Fabio Sasso in 2006 as a personal blog, this is a collective of individual writers sharing articles about design, photography, and UX."
        },
        {
          id: 10,
          kind: "resource",
          title: "The Design of Everyday Things",
          url: "https://www.nngroup.com/books/design-everyday-things-revised/",
          description:
            "The bible of design, this exists on every design students reading list. Don Norman walks us through the normalization of patterns in order to make things more usable."
        },
        {
          id: 11,
          kind: "portfolio",
          title: "Yota Kakuda",
          url: "https://www.yotakakuda.com/",
          description:
            "An extremely refined industrial designer, ex MUJI. I own (and love) one of his clocks that he designed for Lemnos. It makes me slightly happier. "
        },
        {
          id: 12,
          kind: "portfolio",
          title: "Naoto Fukasawa",
          url: "https://naotofukasawa.com",
          description:
            "If I could have dinner with one designer in the world, it would probably be this person. The Godfather of design at MUJI. "
        },
        {
          id: 12,
          kind: "portfolio",
          title: "Brian Lovin",
          url: "https://brianlovin.com",
          description:
            "A really talented and active Software Designer at GitHub."
        },
        {
          id: 13,
          kind: "resource",
          title: "Design Details Podcast",
          url: "https://designdetails.fm",
          description:
            "A podcast ran by Brian Lovin and Marshall Block, about all things designing software."
        },
        {
          id: 14,
          kind: "resource",
          title: "Minor Details Podcast",
          url: "https://minordetailspodcast.com",
          description:
            "A podcast ran by Nicholas Baker and James Connors , about all things Industrial Design."
        },
        {
          id: 15,
          kind: "portfolio",
          title: "Donna Seo",
          url: "http://donnaseo.com",
          description:
            "An amazingly talented Colleague and friends that I used to work with at Microsoft."
        },
        {
          id: 17,
          kind: "portfolio",
          title: "Colin Moll",
          url: "https://www.colinmoll.net",
          description:
            "Puts the motion in emotion. One of the incredible motion designers that I work with at Outlook."
        },
        {
          id: 18,
          kind: "resource",
          title: "Lovers Magazine",
          url: "https://www.loversmagazine.com",
          description:
            "Lovers Magazine is a diverse and inclusive online community for creative professionals. "
        },
        {
          id: 19,
          kind: "other",
          title: "The Guardian",
          url: "https://www.theguardian.com",
          description:
            "My go to for most general news updates. I also love their design system on web and mobile - it's super robust."
        },
        {
          id: 20,
          kind: "other",
          title: "Monocle",
          url: "https://www.monocle.com",
          description:
            "Pretty much the only magazine that I purchase nowadays. Tying together global affairs, business, culture and design."
        },
        {
          id: 21,
          kind: "other",
          title: "Muji",
          url: "https://www.muji.com",
          description:
            "Did I mention I love Muji? I can spend hours browsing their well refined, minimalistic products. I was extremely happy to visit their 7 floor superstore in Ginza, Tokyo, when I visited a couple of years ago."
        }
      ]
    };
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(tab) {
    this.setState({
      selectedTab: tab
    });
  }

  render() {
    return (
      <Layout id={1}>
        <SEO title="bookmarks" />
        <div className="body-text">
          <h1 className="title">Bookmarks</h1>
          <p className="description">
            It's important to stay inspired. For design I do so by looking at the work happening around me, and through visiting resources and sites that I naturally discover across the industry. I get excited when I see someone who's perfected their craft, because it gives me a new challenge, a new learning opportunity, and a new goal to aspire towards. 
            <br/> <br/> 
            I've collected this list for two reasons. For myself as a reminder to revisit these sites, but also to share with you. Maybe you're looking for inspiration - or (more likely) you're a recruiter looking for candidates. And if I don't seem like a good fit for your team, here's a list of other talented designers for you to reach out to. 
          </p>
        </div>
        <div className="bookmarks-container">
          <div className="bookmarks-header">
            <button
              className={
                "tab link " +
                (this.state.selectedTab === "portfolios" ? "active " : "")
              }
              onClick={() => this.selectTab("portfolios")}
            >
              <p>Portfolios</p>
            </button>
            <button
              className={
                "tab link " +
                (this.state.selectedTab === "resources" ? "active " : "")
              }
              onClick={() => this.selectTab("resources")}
            >
              <p>Resources</p>
            </button>
            <button
              className={
                "tab link " + (this.state.selectedTab === "other" ? "active " : "")
              }
              onClick={() => this.selectTab("other")}
            >
              <p>Other</p>
            </button>
          </div>
          <TransitionGroup timeout={200} className="bookmarks">
            {this.state.selectedTab === "portfolios" ? (
              <CSSTransition id={2} timeout={300}>
                <div>
                  {this.state.bookmarks
                    .filter((item) => item.kind === "portfolio")
                    .map((item) => (
                      <a id={item.id} className="bookmark link " href={item.url}>
                        <div className="left">
                          <p>{item.title}</p>
                          <p>{item.description}</p>
                          <p className="url">{item.url}</p>
                        </div>
                      </a>
                    ))}
                </div>
              </CSSTransition>
            ) : null}
            {this.state.selectedTab === "resources" ? (
              <CSSTransition id={2} timeout={300}>
                <div>
                  {this.state.bookmarks
                    .filter((item) => item.kind === "resource")
                    .map((item) => (
                      <a id={item.id} className="bookmark link " href={item.url}>
                        <div className="left">
                          <p>{item.title}</p>
                          <p>{item.description}</p>
                          <p className="url">{item.url}</p>
                        </div>
                      </a>
                    ))}
                </div>
              </CSSTransition>
            ) : null}
            {this.state.selectedTab === "other" ? (
              <CSSTransition id={3} timeout={300}>
                <div>
                  {this.state.bookmarks
                    .filter((item) => item.kind === "other")
                    .map((item) => (
                      <a id={item.id} className="bookmark link " href={item.url}>
                        <div className="left">
                          <p>{item.title}</p>
                          <p>{item.description}</p>
                          <p className="url">{item.url}</p>
                        </div>
                      </a>
                    ))}
                </div>
              </CSSTransition>
            ) : null}
          </TransitionGroup>
        </div>
      </Layout>
    );
  }
}

export default BookmarksPage;
