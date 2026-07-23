export const blogPosts = [
  {
    id: 12,
    title: 'The Real Job Market in 2026: What Nobody Tells You (And What Actually Works)',
    excerpt: 'Layoffs, AI hype, hundreds of applicants per role — the 2026 job market is brutal on paper. But people are still getting hired every day. Here\'s an honest breakdown of what the market actually looks like, what separates candidates who land offers, and the mindset that gets you through it.',
    date: 'July 10, 2026',
    readTime: '8 min read',
    likes: 18,
    category: 'Career Insights',
  },
  {
    id: 11,
    title: 'Starting a New Chapter: Why I Joined GDIT as a Data Scientist',
    excerpt: 'I\'m excited to share that I\'ve joined General Dynamics Information Technology as a Data Scientist. After years in ML lifecycle management at Scale AI and American Express, I\'m now building scalable healthcare analytics solutions with Python, SQL, Snowflake, and Databricks. Here\'s why I made the move and what I\'m working on.',
    date: 'July 16, 2026',
    readTime: '6 min read',
    likes: 6,
    category: 'Career Insights',
  },
  {
    id: 13,
    title: 'Moving On From Scale AI — Excited for What\'s Next',
    excerpt: 'I wrapped up my time at Scale AI in May after an incredible run in ML lifecycle management. Taking a breath, staying open, and staying in touch while I figure out the next chapter. If you\'re hiring or just want to connect — I\'d love to hear from you.',
    date: 'June 15, 2026',
    readTime: '2 min read',
    likes: 17,
    category: 'Career Insights',
  },
  {
    id: 10,
    title: 'Open to New Opportunities: My 2026 Job Search in a Rapidly Changing Tech World',
    excerpt: 'The tech market is experiencing rapid changes, and I\'m actively looking for my next Data Scientist / ML Engineer role. I\'m seeking opportunities where I can own the ML lifecycle end-to-end, drive measurable impact, and grow with a strong team. Here\'s what I bring and what I\'m looking for.',
    date: 'March 8, 2026',
    readTime: '6 min read',
    likes: 19,
    category: 'Career Insights',
  },
  {
    id: 9,
    title: 'Navigating Tech Layoffs: Why I\'m Open to New Opportunities and What I Bring to the Table',
    excerpt: 'The tech industry has seen significant layoffs recently, affecting many talented professionals. As someone who\'s been impacted or is exploring new opportunities, I want to share my perspective on resilience, continuous learning, and why I\'m excited about the next chapter. Here\'s what makes me a valuable addition to any data science team.',
    date: 'March 9, 2026',
    readTime: '7 min read',
    likes: 16,
    category: 'Career Insights',
  },
  {
    id: 8,
    title: 'Renewing Microsoft Certifications: Power BI Data Analyst & Azure Database Administrator - Why Staying Current Matters',
    excerpt: 'I\'m excited to share that I\'ve recently renewed two Microsoft certifications: Power BI Data Analyst Associate and Azure Database Administrator Associate. Here\'s why keeping certifications current is valuable for data science professionals and how they complement my work in ML lifecycle management and production systems.',
    date: 'February 12, 2026',
    readTime: '6 min read',
    likes: 20,
    category: 'Career Insights',
  },
  {
    id: 7,
    title: 'Preparing for Upcoming Interviews: Strategy, Preparation, and Mindset',
    excerpt: 'As I prepare for scheduled interviews, I\'m sharing my approach to technical preparation, behavioral questions, and maintaining the right mindset. Here\'s how I\'m getting ready to showcase my skills and experience.',
    date: 'January 16, 2026',
    readTime: '5 min read',
    likes: 15,
    category: 'Career Insights',
  },
  {
    id: 1,
    title: 'Completed Python Data Structures and Comprehensions',
    excerpt: 'Just finished mastering Python data structures and comprehensions with multiple practice assignments. Sharing my journey and key insights from working with lists, dictionaries, sets, and powerful comprehension techniques.',
    date: 'November 16, 2025',
    readTime: '3 min read',
    likes: 18,
    category: 'Learning Journey',
  },
  {
    id: 2,
    title: 'Starting My Data Science Bootcamp',
    excerpt: 'I\'ve just started a bootcamp to strengthen my foundational skills in data science, machine learning, and deep learning.',
    date: 'October 29, 2025',
    readTime: '2 min read',
    likes: 17,
    category: 'Learning Journey',
  },
  {
    id: 3,
    title: 'Completed Data Science Basics',
    excerpt: 'I\'ve finished the basics of data science, machine learning, and deep learning. The field is booming with opportunities.',
    date: 'October 30, 2025',
    readTime: '3 min read',
    likes: 16,
    category: 'Career Insights',
  },
  {
    id: 4,
    title: 'Advanced Causal Inference: Beyond Traditional A/B Testing',
    excerpt: 'Deep dive into sophisticated causal inference methods I\'m exploring to solve complex business problems. Sharing insights from my latest research on uplift modeling and heterogeneous treatment effects.',
    date: 'October 25, 2025',
    readTime: '12 min read',
    likes: 19,
    category: 'Advanced Analytics',
  },
];

export function getLatestBlogPost() {
  const sorted = [...blogPosts].sort((a, b) => {
    const dateDiff = new Date(b.date).getTime() - new Date(a.date).getTime();
    if (dateDiff !== 0) return dateDiff;
    return b.id - a.id;
  });
  return sorted[0];
}
