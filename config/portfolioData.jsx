import { myImageList, portfolioImages } from "./allImages";

export const myPortfolioData = [
  {
    id: 1,
    title: "askamu - create online store",
    imgScr: portfolioImages.askamuSnapshot,
    description:
      "Askamu is an online store creation platform, where anybody can signup, create their personalize store and share it online. This platoform is made usign php in the backend , and java scripot , jquery and mdbootstrap at frontend. We have also added faceboook pixel and google analytics code for analysing traffic and for digital marketing",
    url: "askamu",
    techStack: [
      { techImg: myImageList.html, techName: "html" },
      { techImg: myImageList.css, techName: "css" },
      { techImg: myImageList.js, techName: "java script" },
      { techImg: myImageList.bootstrap, techName: "mdbootstrap" },
      { techImg: myImageList.php, techName: "php" },
    ],
    gitHubLink: "",
    websiteLink: "https://askamu.com",
  },

  {
    id: 2,
    title: "What About Coding",
    imgScr: portfolioImages.wacSnapshot,
    description:
      "What About Coding is an intiatite by Himanshu Shekhar where I bascially teach frontend web development throuch code and throught youtbe video. The websirte is made by Wordpress, Elementor and also optimized for SEO using Google Search Console , Google Analytics and Mailerite Email Marketing tool",
    url: "wac",
    techStack: [
      { techImg: myImageList.wordpress, techName: "wordpress" },
      { techImg: myImageList.elementor, techName: "elementor page builder" },
      { techImg: myImageList.hostinger, techName: "hostinger" },
      { techImg: myImageList.jquery, techName: "jquery" },
    ],
    gitHubLink: "",
    websiteLink: "https://whataboutcoding.com",
  },
  {
    id: 3,
    title: "The Beta World",
    imgScr: portfolioImages.betaWorldSnapshot,
    description:
      "The Beta World is an web3 project where property are deralth with bitcoin (Etherium to be precise). The technology used here are Next JS, Ether JS, and React Bootstrap from the frontend side. ABI and Contract form are secured and given by client.Connection wiht metamsk wallet and graph and chart display of the analytics are some challenging features applied in the project",
    url: "the_beta_world",
    techStack: [
      { techImg: myImageList.nextjs, techName: "next" },
      { techImg: myImageList.react, techName: "react" },
      { techImg: myImageList.reactBootstrap, techName: "react bootstrap" },
      { techImg: myImageList.web3, techName: "web 3" },
      { techImg: myImageList.etherjs, techName: "etherjs" },
    ],
    gitHubLink: "",
    websiteLink: "",
  },
];
