import Link from "next/link";
import Card from "../../components/Card";
import { myPortfolioData } from "../../config/portfolioData";

export async function getStaticProps(context) {
  const res = myPortfolioData;
  console.log(res);

  return {
    props: { res },
  };
}

const PortfolioList = ({ res }) => {
  console.log(res);
  // if (router.isFallback) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div id="portfolio" className="w-full">
      <div className="h-max">
        <div className="flex bg1 h-96 justify-center items-center py-50 shadow-xl shadow-gray-400 relative">
          <h1 className="text-4xl text-white">Portfolio List</h1>
          <span className="absolute left-4 bottom-4 text-white bg-black text-xs sm:text-sm px-5 rounded-xl">
            /portfolio-list
          </span>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-5 gap-8 justify-items-center">
          {res.map(({ id, title, snap, description, url, techStack }) => (
            <Link key={id} href={`/portfolio-list/${url}`}>
              <div>
                <Card
                  id={id}
                  title={title}
                  snap={snap}
                  url={url}
                  techStack={techStack}
                  description={description}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioList;
