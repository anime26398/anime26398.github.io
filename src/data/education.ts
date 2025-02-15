export interface Education {
  startYear: string;
  endYear: string;
  institution: string;
  degree: string;
  advisor?: string;
  imageUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    startYear: "2022",
    endYear: "2023",
    institution: "Carnegie Mellon University",
    degree: "Master of Science in Computer Vision (MSCV)",
    advisor: "Advisor: Prof. Jun-Yan Zhu",
    imageUrl: "/images/cmu-logo-2.jpeg",
  },
  {
    startYear: "2016",
    endYear: "2020",
    institution: "Indian Institute of Technology, Roorkee (IITR)",
    degree: "B. Tech in Computer Science and Engineering",
    advisor: "Thesis Advisor: Prof. Balasubramanian Raman",
    imageUrl: "/images/iitr.jpeg",
  },
];
