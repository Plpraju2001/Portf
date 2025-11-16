export const blogPosts = [
  {
    id: 1,
    title: 'Completed Python Data Structures and Comprehensions',
    excerpt: 'Just finished mastering Python data structures and comprehensions with multiple practice assignments. Sharing my journey and key insights from working with lists, dictionaries, sets, and powerful comprehension techniques.',
    date: 'October 31, 2025',
    readTime: '3 min read',
    category: 'Learning Journey',
  },
  {
    id: 2,
    title: 'Starting My Data Science Bootcamp',
    excerpt: 'I\'ve just started a bootcamp to strengthen my foundational skills in data science, machine learning, and deep learning.',
    date: 'October 29, 2025',
    readTime: '2 min read',
    category: 'Learning Journey',
  },
  {
    id: 3,
    title: 'Completed Data Science Basics',
    excerpt: 'I\'ve finished the basics of data science, machine learning, and deep learning. The field is booming with opportunities.',
    date: 'October 30, 2025',
    readTime: '3 min read',
    category: 'Career Insights',
  },
  {
    id: 4,
    title: 'Advanced Causal Inference: Beyond Traditional A/B Testing',
    excerpt: 'Deep dive into sophisticated causal inference methods I\'m exploring to solve complex business problems. Sharing insights from my latest research on uplift modeling and heterogeneous treatment effects.',
    date: 'October 25, 2025',
    readTime: '12 min read',
    category: 'Advanced Analytics',
  },
];

export function getLatestBlogPost() {
  // Sort by date, most recent first
  const sorted = [...blogPosts].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });
  return sorted[0];
}

