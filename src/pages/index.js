//Step 1 : Import React
import * as React from 'react';
//import { Link } from 'gatsby';
import Layout from '../components/layout';
import {StaticImage} from 'gatsby-plugin-image';//If the source of the image is a hard coded URL or a hard coded source then we use StaticImage otherwise for dynamic images(if the image source gets passed in as a prop), we use GatsbyImage component.
import {homepageImages} from '../components/layout.module.css';

//Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>This blog contains posts about different books that I read. If you want to recommend some books that you have either read or heard about then please send me the ISBN of the book using my email address. If you want me to send you a digital copy of some the royalty free books, then inform me and I will send it to your email or share it with you using cloud storage.</p>
      <p>To read my book reviews, please click on the link Blog above.</p>
      <StaticImage 
        src="https://i.imgur.com/FpnMQL1.jpg"
        alt="Image of the founder of Shadsoft"
        className={homepageImages}
      />
      <p>Here is an image of his first grand child.</p>
      <StaticImage
        src="../images/Russell fatty.jpg"
        alt="Dilshad Rana's grand son"
        className={homepageImages}
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
