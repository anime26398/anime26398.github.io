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
  description: [
    "I am a Research Scientist/Engineer at <a href='https://research.adobe.com/'>Adobe Research</a>. I completed my <a href='https://ri.cmu.edu/education/academic-programs/master-of-science-computer-vision'>Masters in Computer Vision</a> (MSCV) from <a href='https://www.cs.cmu.edu/'>Carnegie Mellon University</a>, where I was advised by Prof. <a href='https://www.cs.cmu.edu/~junyanz/'>Jun-Yan Zhu</a>. My research interest include image and video synthesis and editing using generative models. Lately, I have been mostly interested in representation learning for generation.<br><br>",
    "<img src='/images/amoungus-dance.gif' alt='Animated siren emoji' class='siren-gif' /><span class='internship-title font-serif'>Research Internships at Adobe</span><img src='/images/amoungus-dance.gif' alt='Animated siren emoji' class='siren-gif siren-gif-end' /><br>If you are interested in a research internship at Adobe Research, feel free to send me an email with your CV and research interests.<br>",
  ].join(""),
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
