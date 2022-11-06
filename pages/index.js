import Experience from "../components/Experience";
import HomePage from "../components/HomePage";
import Portfolio from "../components/Portfolio";
import TeckStack from "../components/TechStack";
import Me from "../components/Me";
import Contact from "../components/Contact";
import YoutubeVideo from "../components/YoutubeVideo";
import WorkExperience from "../components/WorkExperience";

export default function Home() {
  return (
    <>
      <HomePage />
      <WorkExperience />
      <Portfolio />
      <TeckStack />
      <Experience />
      <Me />
      <YoutubeVideo />
      <Contact />
    </>
  );
}
