interface Project {
  category: string[];
  image: string;
  title: string;
  desc: string;
  repo: string;
  demo: string;
}

export const projects: Project[] = [
  {
    category: ["Computer Vision", "Mobile App"],
    image: "/images/project-coffeeleafscanner.jpg",
    title: "Coffee Leaf Scanner",
    desc: "A mobile app for scanning coffee leaves and diagnosing diseases.",
    repo: "https://github.com/rizanurmaulana/coffee-leaf-scanner",
    demo: "#",
  },
  {
    category: ["UI/UX Design"],
    image: "/images/project-alope.jpg",
    title: "Alope - Online Learning Platform",
    desc: "A landing page UI/UX design for an online learning platform.",
    repo: "#",
    demo: "https://alope.id/",
  },
  {
    category: ["Web Design"],
    image: "/images/project-goout.jpg",
    title: "Goout - Travel Web Design",
    desc: "A modern travel website design for exploring destinations.",
    repo: "https://github.com/rizanurmaulana/goout",
    demo: "https://rizanurmaulana.github.io/goout/",
  },
  {
    category: ["Website"] ,
    image: "/images/project-selaras.jpg",
    title: "Selaras - Rental Service",
    desc: "A website for renting traditional dresses, suits, and makeup services.",
    repo: "https://github.com/rizanurmaulana/selaras-frontend",
    demo: "https://selaras-frontend.vercel.app/",
  },
  {
    category: ["Website", "Mobile App"],
    image: "/images/project-bloody-app.jpg",
    title: "Bloody App - Blood Donation Platform",
    desc: "A web and Android app for managing blood donation events and registrations.",
    repo: "https://github.com/rizanurmaulana/bloody-app-web",
    demo: "#",
  },
];
