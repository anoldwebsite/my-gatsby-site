//Step 1: Imports
import * as React from 'react';
import { Link } from 'gatsby';

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
const Layout = ({pageTitle, children}) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
};

//Step 3: Export your component
export default Layout;