//Step 1 : Import React
import * as React from 'react';
//import { Link } from 'gatsby';
import Layout from '../components/layout';

//Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>This blog contains posts about different books that I read.</p>
    </Layout>
    // <main>
    //   <title>Home Page</title>
    //   <h1>Welcome to my Book Review Blog!</h1>
    //   <Link to="/about">About</Link>
    //   <p>This blog contains posts about different books that I read.</p>
    // </main>
  )
};

//Step 3: Export your component
export default IndexPage;
