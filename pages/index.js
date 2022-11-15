import HomePage from "../components/HomePage";
import Portfolio from "../components/Portfolio";
import TeckStack from "../components/TechStack";
import Me from "../components/Me";
import Contact from "../components/Contact";
import YoutubeVideo from "../components/YoutubeVideo";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";

export default function Home() {
  return (
    <>
      <HomePage />
      <WorkExperience />
      <Portfolio />
      <TeckStack />
      <Education />
      <Me />
      <YoutubeVideo />
      <Contact />
    </>
  );
}
