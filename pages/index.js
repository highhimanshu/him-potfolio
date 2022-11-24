import HomePage from "../components/HomePage";
import Portfolio from "../components/Portfolio";
import TeckStack from "../components/TechStack";
import Me from "../components/Me";
import Contact from "../components/Contact";
import YoutubeVideo from "../components/YoutubeVideo";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";
import PortfolioDemo from "../components/PortfolioDemo";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Himanshu Shekhar Portfolio</title>
        <meta
          name="description"
          content="This website will help you in knowing all my professional details at a single place.Thanks for visiting."
        />
      </Head>
      <HomePage />
      <WorkExperience />
      {/* <Portfolio /> */}
      <PortfolioDemo />
      <TeckStack />
      <Education />
      <Me />
      <YoutubeVideo />
      <Contact />
    </>
  );
}
