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
        <title>Himanshu Shekhar</title>
        <meta name="description" content="Himanshu Shekhar portfolio website" />
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
