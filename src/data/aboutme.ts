export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Aniruddha Mahapatra",
  title: "Research Scientist / Engineer",
  institution: "Adobe Inc.",
  // Note that links work in the description
  description:
    "I am a Research Scientist/Engineer at <a href='https://research.adobe.com/'>Adobe Research</a>. I completed my <a href='https://ri.cmu.edu/education/academic-programs/master-of-science-computer-vision'>Masters in Computer Vision</a> (MSCV) from <a href='https://www.cs.cmu.edu/'>Carnegie Mellon University</a>, where I was advised by Prof. <a href='https://www.cs.cmu.edu/~junyanz/'>Jun-Yan Zhu</a>. My research interest include image and video synthesis and editing using generative models.<br><br>I am fortunate to have worked with <a href='https://aliaksandrsiarohin.github.io/aliaksandr-siarohin-website/'>Aliaksandr Siarohin</a>, <a href='http://hsinyinglee.com/'>Hsin-Ying Lee</a> and <a href='http://www.stulyakov.com/'>Sergey Tulyakov</a> at Snap Research, <a href='https://kuldeepkulkarni.github.io/'>Kuldeep Kulkarni</a>, <a href='https://research.adobe.com/person/anandhavelu-n/'>Anandhavelu Natarajan</a> and <a href='https://research.adobe.com/person/subrata-mitra/'>Subrata Mitra</a> at Adobe Research, <a href='https://www.linkedin.com/in/jitendra-singh-41a87515/?originalSubdomain=in'>Jitendra Singh</a> at IBM Research, and, Professor <a href='https://biplab-banerjee.github.io/'>Biplab Banerjee</a> and <a href='https://www.researchgate.net/profile/Ranita-Biswas'>Ranita Biswas</a> at Indian Institute of Technology, Roorkee.",
  email: "anmahapa@adobe.com",
  imageUrl:
    "/images/avatar-new1.jpg",
  googleScholarUrl: "https://scholar.google.com/citations?user=p8Hdn7gAAAAJ&hl=en",
  githubUsername: "anime26398",
  linkedinUsername: "aniruddha98",
  twitterUsername: "aniruddha26398",
  cvUrl: "/data/cv.pdf",
  // institutionUrl: "https://www.stanford.edu",
  // altName: "",
  // secretDescription: "I like dogs.",
};
