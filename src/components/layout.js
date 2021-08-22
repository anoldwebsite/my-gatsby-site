//Step 1: Imports
import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { 
  container,
  heading,
  navLinks, 
  navLinkItem, 
  navLinkText, 
  siteTitle,
} from './layout.module.css';

//Step 2: Define your component
/*
This is a JavaScript technique called destructuring. It’s basically a shortcut for defining variables
based on an object’s properties. It’s like saying, “Take the object that gets passed into this function,
and unpack its pageTitle and children properties into their own variables.”
In other words, it’s a shorter way to do the following:
const Layout = (props) => {
  const pageTitle = props.pageTitle
  const children = props.children
  ...
}
*/
const Layout = ({ pageTitle, children }) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>Home</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>About</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>Blog</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
};

//Step 3: Export your component
export default Layout;