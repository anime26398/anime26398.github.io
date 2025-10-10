export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  videoUrl?: string;
  award?: string;
  websiteUrl?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2025",
    conference: "arXiv",
    title: "DynamicEval: Rethinking Evaluation for Dynamic Text-to-Video Synthesis",
    authors: "Nithin C. Babu, <u>Aniruddha Mahapatra</u>, Harsh Rangwani, Rajiv Soundararajan, Kuldeep Kulkarni",
    paperUrl: "https://arxiv.org/abs/2510.07441",
    websiteUrl: "https://nithincbabu7.github.io/DynamicEval/",
    // codeUrl: "https://github.com/text2cinemagraph/text2cinemagraph",
    // tldr: "We propose a method to train video tokenizers with highly compressed latent spaces like 8 x and 16 x temporal compression.",
    videoUrl: "/images/dynamiceval-crop.mp4",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2025",
    conference: "ICCV",
    title: "Progressive Growing of Video Tokenizers for Highly Compressed Latent Spaces",
    authors: "<u>Aniruddha Mahapatra</u>, Long Mai, Yitian Zhang, David Bourgin, Feng Liu",
    paperUrl: "https://arxiv.org/abs/2501.05442",
    websiteUrl: "https://progressive-video-tokenizer.github.io/Pro-MAG/",
    // codeUrl: "https://github.com/text2cinemagraph/text2cinemagraph",
    // tldr: "We propose a method to train video tokenizers with highly compressed latent spaces like 8 x and 16 x temporal compression.",
    videoUrl: "/images/promag.mp4",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2025",
    conference: "ICCV",
    title: "REGEN: Learning Compact Video Embedding with (Re-)Generative Decoder",
    authors: "Yitian Zhang, Long Mai, <u>Aniruddha Mahapatra</u>, David Bourgin, Yicong Hong, Jonah Casebeer, Feng Liu, Yun Fu",
    paperUrl: "https://arxiv.org/abs/2503.08665",
    websiteUrl: "https://bespontaneous.github.io/REGEN/",
    // codeUrl: "https://github.com/text2cinemagraph/text2cinemagraph",
    // tldr: "We propose a method to train video tokenizers with highly compressed latent spaces like 8 x and 16 x temporal compression.",
    videoUrl: "/images/REGEN.mp4",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2025",
    conference: "SIGGRAPH",
    title: "MotionCanvas: Cinematic Shot Design with Controllable Image-to-Video Generation",
    authors: "Jinbo Xing, Long Mai, Cusuh Ham, Jiahui Huang, <u>Aniruddha Mahapatra</u>, Chi-Wing Fu, Tien-Tsin Wong, Feng Liu",
    paperUrl: "https://arxiv.org/abs/2502.04299",
    websiteUrl: "https://motion-canvas25.github.io/",
    // codeUrl: "https://github.com/text2cinemagraph/text2cinemagraph",
    // tldr: "We propose a method to train video tokenizers with highly compressed latent spaces like 8 x and 16 x temporal compression.",
    videoUrl: "/images/shot_2_modified.mp4",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2024",
    conference: "ECCV",
    title: "Co-speech Gesture Video Generation with 3D Human Meshess",
    authors: "<u>Aniruddha Mahapatra</u>*, Richa Mishra*, Renda Li, Ziyi Chen, Boyang Ding, Shoulei Wang, Jun-Yan Zhu, Peng Chang, Mei Han, Jing Xiao",
    paperUrl: "https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/12483.pdf",
    websiteUrl: "https://cospeech-gesture-3d.github.io/website/index.html",
    // codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    // bibtex: "https://arxiv.org/abs/2409.15476.bib",
    // tldr: "We introduce a co-speech video generation framework to synthesize human speech videos leveraging human mesh-based representations.",
    videoUrl: "/images/co-speech-cropped.mp4",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2024",
    conference: "CVPR",
    title: "On the Content Bias in Fréchet Video Distance",
    authors: "Songwei Ge, <u>Aniruddha Mahapatra</u>, Gaurav Parmar, Jun-Yan Zhu, Jia-Bin Huang",
    paperUrl: "https://arxiv.org/pdf/2404.12391",
    websiteUrl: "https://content-debiased-fvd.github.io/",
    codeUrl: "https://github.com/songweige/content-debiased-fvd",
    // tldr: "We develop code and provide pre-computed features for computing FVD with different feature extractors.",
    videoUrl: "/images/content-debiased-fvd.mp4",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2023",
    conference: "SIGGRAPH Asia (ACM Transactions on Graphics)",
    title: "Text-Guided Synthesis of Eulerian Cinemagraphs",
    authors: "<u>Aniruddha Mahapatra</u>, Aliaksandr Siarohin, Hsin-Ying Lee,Sergey Tulyakov, Jun-Yan Zhu",
    paperUrl: "https://arxiv.org/abs/2307.03190",
    websiteUrl: "https://text2cinemagraph.github.io/website/",
    codeUrl: "https://github.com/text2cinemagraph/text2cinemagraph",
    // tldr: "We introduce a fully automated method, Text2Cinemagraph, for creating cinemagraphs from text descriptions.",
    videoUrl: "/images/video.mp4",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2022",
    conference: "CVPR",
    title: "Controllable Animation of Fluid Elements in Still Images",
    authors: "<u>Aniruddha Mahapatra</u>, Kuldeep Kulkarni",
    paperUrl: "https://arxiv.org/abs/2112.03051",
    websiteUrl: "https://controllable-cinemagraphs.github.io/",
    // codeUrl: "https://github.com/text2cinemagraph/text2cinemagraph",
    // tldr: "We propose a method to interactively control the animation of fluid elements (like water, fire, clouds, etc.) to generate cinemagraphs from the single image.",
    videoUrl: "/images/MovingElements.mp4",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2023",
    conference: "WACV",
    title: "GEMS: Scene Expansion using Generative Models of Graphs",
    authors: "<u>Aniruddha Mahapatra*</u>, Rishi Agarwal*, Tirupati Saketh Chandra*, Vaidehi Patil*, Kuldeep Kulkarni, Vishwa Vinay",
    paperUrl: "https://arxiv.org/abs/2207.03729",
    // websiteUrl: "https://controllable-cinemagraphs.github.io/",
    // codeUrl: "https://github.com/text2cinemagraph/text2cinemagraph",
    // tldr: "We propose a method to interactively control the animation of fluid elements (like water, fire, clouds, etc.) to generate cinemagraphs from the single image.",
    imageUrl: "/images/gems-square.png",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2022",
    conference: "EMNLP",
    title: "Entity Extraction in Low Resource Domains with Selective Pre-training of Large Language Models",
    authors: "<u>Aniruddha Mahapatra</u>, Snarmila Nangi, Aparna Garimella, Anandhavelu Natarajan",
    paperUrl: "https://aclanthology.org/2022.emnlp-main.61.pdf",
    // websiteUrl: "https://controllable-cinemagraphs.github.io/",
    // codeUrl: "https://github.com/text2cinemagraph/text2cinemagraph",
    // tldr: "We propose a method to interactively control the animation of fluid elements (like water, fire, clouds, etc.) to generate cinemagraphs from the single image.",
    imageUrl: "/images/emnlp-2022.png",
    award: "⭐ Oral",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2019",
    conference: "ICCV",
    title: "SemIE: Semantically-aware Image Extrapolation",
    authors: "Bholeshwar Khurana, Soumya Ranjan Dash, Abhishek Bhatia, <u>Aniruddha Mahapatra</u>, Hrituraj Singh, Kuldeep Kulkarni",
    paperUrl: "https://arxiv.org/abs/2108.13702",
    websiteUrl: "https://semie-iccv.github.io/",
    // codeUrl: "https://github.com/text2cinemagraph/text2cinemagraph",
    // tldr: "We propose a method to interactively control the animation of fluid elements (like water, fire, clouds, etc.) to generate cinemagraphs from the single image.",
    imageUrl: "/images/semie2.png",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  // {
  //   year: "2023",
  //   conference: "ICML",
  //   title: "Robust Causal Discovery Under Distribution Shift",
  //   authors: "Jane Smith, Xue Chen, Sarah Johnson",
  //   paperUrl: "https://arxiv.org/abs/2302.13095",
  //   codeUrl: "https://github.com/jsmith/robust-causal-discovery",
  // },
];
