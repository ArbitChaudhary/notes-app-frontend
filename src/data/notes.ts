export type Note = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export const notes: Note[] = [
  {
    id: "1",
    title: "Getting Started with React",
    description:
      "Learn the fundamentals of React and build your first component.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
  },
  {
    id: "2",
    title: "Understanding TypeScript",
    description:
      "A deep dive into TypeScript's type system and best practices.",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop",
  },
  {
    id: "3",
    title: "Mastering Tailwind CSS",
    description: "Utility-first CSS framework that makes styling a breeze.",
    image:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=600&fit=crop",
  },
  {
    id: "4",
    title: "State Management Patterns",
    description: "Explore different state management solutions for React apps.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
  },
  {
    id: "5",
    title: "Building REST APIs",
    description: "Design and implement RESTful APIs with Node.js and Express.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
  },
  {
    id: "6",
    title: "Deploying to the Cloud",
    description:
      "Learn how to deploy your applications to AWS and other cloud providers.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
  },
];
