export interface Software {
  title: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
  githubUrl?: string;
  websiteUrl?: string;
  demoUrl?: string;
  tldr?: string;
}

export const softwareData: Software[] = [
  {
    title: "Firefly Video [Adobe]",
    description: "Key contributor to the design of the video tokenizer and decoder architecture for Adobe's Firefly Video foundation model.",
    websiteUrl: "https://www.adobe.com/products/firefly/features/ai-video-generator.html",
    // tldr: "Install using: `pip install cd-fvd`",
    videoUrl: "/images/firefly-v1.mp4",
  },
  {
    title: "Generative Extend [Adobe]",
    description: "Key contributor to the specialized decoder architecture and optimizations that enables fast and High-Resolution decoding.",
    websiteUrl: "https://www.adobe.com/products/premiere/ai-video-editing.html",
    // tldr: "Install using: `pip install cd-fvd`",
    imageUrl: "/images/genextend.png",
  },
  {
    title: "Moving Elements [Adobe]",
    description: "Adobe's Photoshop Elements 2023 new feature 'Moving Elements' lets users generate aesthetic cinemagraphs from their photos.",
    websiteUrl: "https://helpx.adobe.com/photoshop-elements/using/moving-elements.html",
    // tldr: "Install using: `pip install cd-fvd`",
    videoUrl: "/images/moving_elements.mp4",
  },
  // Add more software projects here
]; 