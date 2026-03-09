export const blogPosts = [
  {
    id: 10,
    title: 'Open to New Opportunities: My 2026 Job Search in a Rapidly Changing Tech World',
    excerpt: 'The tech market is experiencing rapid changes, and I\'m actively looking for my next Data Scientist / ML Engineer role. I\'m seeking opportunities where I can own the ML lifecycle end-to-end, drive measurable impact, and grow with a strong team. Here\'s what I bring and what I\'m looking for.',
    date: 'March 8, 2026',
    readTime: '6 min read',
    category: 'Career Insights',
  },
  {
    id: 9,
    title: 'Navigating Tech Layoffs: Why I\'m Open to New Opportunities and What I Bring to the Table',
    excerpt: 'The tech industry has seen significant layoffs recently, affecting many talented professionals. As someone who\'s been impacted or is exploring new opportunities, I want to share my perspective on resilience, continuous learning, and why I\'m excited about the next chapter. Here\'s what makes me a valuable addition to any data science team.',
    date: 'March 9, 2026',
    readTime: '7 min read',
    category: 'Career Insights',
  },
  {
    id: 8,
    title: 'Renewing Microsoft Certifications: Power BI Data Analyst & Azure Database Administrator - Why Staying Current Matters',
    excerpt: 'I\'m excited to share that I\'ve recently renewed two Microsoft certifications: Power BI Data Analyst Associate and Azure Database Administrator Associate. Here\'s why keeping certifications current is valuable for data science professionals and how they complement my work in ML lifecycle management and production systems.',
    date: 'February 12, 2026',
    readTime: '6 min read',
    category: 'Career Insights',
  },
  {
    id: 7,
    title: 'Preparing for Upcoming Interviews: Strategy, Preparation, and Mindset',
    excerpt: 'As I prepare for scheduled interviews, I\'m sharing my approach to technical preparation, behavioral questions, and maintaining the right mindset. Here\'s how I\'m getting ready to showcase my skills and experience.',
    date: 'January 16, 2026',
    readTime: '5 min read',
    category: 'Career Insights',
  },
  {
    id: 1,
    title: 'Completed Python Data Structures and Comprehensions',
    excerpt: 'Just finished mastering Python data structures and comprehensions with multiple practice assignments. Sharing my journey and key insights from working with lists, dictionaries, sets, and powerful comprehension techniques.',
    date: 'November 16, 2025',
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

