//Step 1 : Import React
import * as React from 'react';
//import { Link } from 'gatsby';
import Layout from '../components/layout';
import {StaticImage} from 'gatsby-plugin-image';

//Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>This blog contains posts about different books that I read.</p>
      <StaticImage 
        src="https://i.imgur.com/FpnMQL1.jpg"
        alt="Image of the founder of Shadsoft"
      />
      <p>Here is an image of his first grand child.</p>
      <StaticImage
        src="../images/Russell fatty.jpg"
        alt="Dilshad Rana's grand son"
      />
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
