//Step 1: Import React
import * as React from 'react';
//import { Link } from 'gatsby';
import Layout from '../components/layout';

//Step 2: Define your component.
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! This is Dilshad Rana using Gatsby to make this website.</p>
    </Layout>
    // <main>
    //   <title>About Me</title>
    //   <h1>About Me</h1>
    //   <Link to="/">Back to Home</Link>
    //   <p>Hi there! This is Dilshad Rana using Gatsby to make this website.</p>
    // </main>
  )
};

//Step 3: Export your component.
export default AboutPage;