export interface Experience {
  startYear: string;
  endYear: string;
  company: string;
  title: string;
  description?: string;
  manager?: string;
  imageUrl?: string;
}

export const experienceData: Experience[] = [
  {
    startYear: "2024",
    endYear: "Present",
    company: "Adobe Research",
    title: "Research Engineer",
    description: "Developing high quality video generative models. Currenlty working on efficient and compact latent space for video generation and adding more controllable features to the model.",
    manager: "Feng Liu",
    imageUrl: "/images/Adobe-icon.png",
  },
  {
    startYear: "Summer",
    endYear: "2023",
    company: "Snap Research",
    title: "Research Scientist Intern",
    description: "Worked on trajectory controlled video generation.",
    manager: "Aliaksandr Siarohin",
    imageUrl: "/images/snap_logo.png",
  },
  {
    startYear: "2020",
    endYear: "2022",
    company: "Adobe Research",
    title: "Research Associate",
    description: "Worked on controllable cinemagraph generation and named entity extraction.",
    manager: "Balaji Srinivasan",
    imageUrl: "/images/Adobe-icon.png",
  },
  {
    startYear: "Summer",
    endYear: "2019",
    company: "Adobe Research",
    title: "Research Intern",
    description: "Worked on action recognition and action localization in videos on edge devices.",
    manager: "Subrata Mitra",
    imageUrl: "/images/Adobe-icon.png",
  }
];
