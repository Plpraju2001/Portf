'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const blogPosts = [
  {
    id: 6,
    title: 'Back from Holidays: Refreshed, Recharged, and Ready to Excel',
    excerpt: 'Returning from a wonderful holiday break, I\'m back with renewed energy and focus. Excited to share that I\'ve taken a DataCamp membership and am working towards earning the Data Scientist Professional certification. Here\'s to being more productive than ever!',
    date: 'January 15, 2025',
    readTime: '4 min read',
    category: 'Learning Journey',
    content: `
      <h2>Welcome Back!</h2>
      <p>I hope everyone had a fantastic holiday season! Whether you spent time with family, traveled to new places, or simply took a well-deserved break, I hope you're returning refreshed and recharged, just like I am.</p>
      
      <h2>Refreshed and Ready</h2>
      <p>After a wonderful holiday break, I'm back and feeling more energized than ever. There's something special about taking time away that helps you return with a fresh perspective and renewed motivation. I'm ready to dive back into my work with even greater focus and determination.</p>
      
      <h2>More Productive Than Before</h2>
      <p>One of my goals coming back from the holidays is to be more productive than I was before. I've used this break to reflect on my learning journey and set clear objectives for the year ahead. I'm committed to:</p>
      <ul>
        <li><strong>Structured Learning:</strong> Following a more organized approach to skill development</li>
        <li><strong>Consistent Practice:</strong> Building daily habits that compound over time</li>
        <li><strong>Goal-Oriented Progress:</strong> Focusing on measurable outcomes and certifications</li>
        <li><strong>Continuous Improvement:</strong> Pushing myself to reach new heights in data science</li>
      </ul>
      
      <h2>New Learning Journey: DataCamp Membership</h2>
      <p>I'm excited to share that I've recently taken a DataCamp membership! DataCamp has been an incredible platform for data science learning, and I'm thrilled to have access to their comprehensive curriculum and hands-on projects.</p>
      
      <p>What makes DataCamp special is their interactive learning approach - you learn by doing, which is exactly how I prefer to master new concepts. Their courses cover everything from Python and R fundamentals to advanced machine learning, deep learning, and specialized topics like MLOps and causal inference.</p>
      
      <h2>Working Towards Data Scientist Professional Certification</h2>
      <p>One of my primary goals with this DataCamp membership is to earn the <strong>Data Scientist Professional</strong> certification. This is a comprehensive certification that validates expertise across the entire data science workflow:</p>
      <ul>
        <li><strong>Data Manipulation:</strong> Advanced techniques for cleaning and transforming data</li>
        <li><strong>Statistical Analysis:</strong> Deep understanding of statistical methods and hypothesis testing</li>
        <li><strong>Machine Learning:</strong> Building, evaluating, and deploying machine learning models</li>
        <li><strong>Data Visualization:</strong> Creating compelling visualizations that tell data stories</li>
        <li><strong>Best Practices:</strong> Industry-standard approaches to data science projects</li>
      </ul>
      
      <h2>The Path Forward</h2>
      <p>I'm actively working through the DataCamp curriculum and making steady progress towards this certification. The journey involves completing multiple courses, hands-on projects, and assessments that test both theoretical knowledge and practical skills.</p>
      
      <p>I'm committed to putting in the work and staying consistent. With the structured learning path that DataCamp provides, combined with my existing experience, I'm confident that I'll be able to earn this certification soon.</p>
      
      <h2>What This Means</h2>
      <p>Earning the Data Scientist Professional certification will be a significant milestone in my career. It represents:</p>
      <ul>
        <li>A comprehensive validation of my data science skills</li>
        <li>Recognition from a respected platform in the data science community</li>
        <li>Proof of my commitment to continuous learning and professional development</li>
        <li>A stepping stone to even more advanced certifications and opportunities</li>
      </ul>
      
      <h2>Looking Ahead</h2>
      <p>I'm excited about what's ahead. The combination of being refreshed from the holidays, having a clear learning path with DataCamp, and working towards a meaningful certification has me feeling incredibly motivated.</p>
      
      <p>I'll be sharing updates on my progress as I work through the DataCamp curriculum and move closer to earning the Data Scientist Professional certification. Stay tuned for more updates on this journey!</p>
      
      <p>Here's to a productive year ahead, filled with learning, growth, and achievement. Let's make it count!</p>
    `
  },
  {
    id: 1,
    title: 'Completed Python Data Structures and Comprehensions',
    excerpt: 'Just finished mastering Python data structures and comprehensions with multiple practice assignments. Sharing my journey and key insights from working with lists, dictionaries, sets, and powerful comprehension techniques.',
    date: 'November 16, 2025',
    readTime: '3 min read',
    category: 'Learning Journey',
    content: `
      <h2>Mastering Python Fundamentals</h2>
      <p>I've just completed an intensive deep dive into Python data structures and comprehensions, working through multiple practice assignments that have significantly strengthened my programming foundation. This journey has been incredibly rewarding, and I'm excited to share what I've learned.</p>
      
      <h2>What I Covered</h2>
      <p>Over the past few days, I've thoroughly explored:</p>
      <ul>
        <li><strong>Lists:</strong> Dynamic arrays, slicing, list methods, and nested lists</li>
        <li><strong>Dictionaries:</strong> Key-value pairs, dictionary comprehensions, and advanced operations</li>
        <li><strong>Sets:</strong> Unique collections, set operations, and set comprehensions</li>
        <li><strong>Tuples:</strong> Immutable sequences and their practical applications</li>
        <li><strong>Comprehensions:</strong> List, dictionary, and set comprehensions for elegant data manipulation</li>
      </ul>
      
      <h2>Practice Through Multiple Assignments</h2>
      <p>What made this learning experience particularly effective was working through multiple assignments that progressively increased in complexity. Each assignment built upon the previous one, reinforcing concepts through hands-on practice.</p>
      
      <h3>Assignment Highlights</h3>
      <ul>
        <li><strong>Data Manipulation:</strong> Transforming and filtering datasets using comprehensions</li>
        <li><strong>Nested Structures:</strong> Working with complex nested lists and dictionaries</li>
        <li><strong>Multiple Assignment:</strong> Mastering tuple unpacking and multiple variable assignments</li>
        <li><strong>Real-world Scenarios:</strong> Solving practical problems that mirror actual data science tasks</li>
      </ul>
      
      <h2>Key Insights</h2>
      <h3>1. Comprehensions Are Powerful</h3>
      <p>Python comprehensions are not just syntactic sugar—they're incredibly efficient and readable. I've learned to write more Pythonic code that's both faster and easier to understand.</p>
      <pre><code># Example: Filtering and transforming data
squared_evens = [x**2 for x in range(10) if x % 2 == 0]
student_grades = {name: score*1.1 for name, score in grades.items() if score >= 80}</code></pre>
      
      <h3>2. Multiple Assignment is Game-Changing</h3>
      <p>Multiple assignment (tuple unpacking) has become one of my favorite Python features. It makes code cleaner and more intuitive, especially when working with data structures.</p>
      <pre><code># Swapping variables elegantly
a, b = b, a

# Unpacking nested structures
name, (age, city) = person_data

# Iterating with multiple values
for key, value in dictionary.items():
    process(key, value)</code></pre>
      
      <h3>3. Choosing the Right Data Structure Matters</h3>
      <p>Understanding when to use lists vs. dictionaries vs. sets has improved my code's efficiency. Each structure has its strengths, and choosing appropriately can make a huge difference in performance.</p>
      
      <h2>Why This Matters for Data Science</h2>
      <p>As a data scientist, these fundamentals are crucial. Data structures and comprehensions are the building blocks of:</p>
      <ul>
        <li>Data preprocessing and cleaning</li>
        <li>Feature engineering</li>
        <li>Data transformation pipelines</li>
        <li>Efficient data manipulation</li>
      </ul>
      
      <p>Having a strong grasp of these concepts makes working with pandas, NumPy, and other data science libraries much more intuitive.</p>
      
      <h2>Next Steps</h2>
      <p>With these fundamentals solid, I'm ready to dive deeper into more advanced Python topics and continue building my data science toolkit. The practice assignments have given me confidence to tackle more complex problems.</p>
      
      <p>If you're learning Python for data science, I highly recommend focusing on data structures and comprehensions early. They form the foundation for everything else you'll do. Practice with multiple assignments—it's the best way to truly internalize these concepts!</p>
    `
  },
  {
    id: 2,
    title: 'Starting My Data Science Bootcamp',
    excerpt: 'I\'ve just started a bootcamp to strengthen my foundational skills in data science, machine learning, and deep learning.',
    date: 'October 29, 2025',
    readTime: '2 min read',
    category: 'Learning Journey',
    content: `
      <h2>Just Getting Started</h2>
      <p>I've recently started a data science bootcamp to strengthen my foundational skills. This is a journey to deepen my understanding of core concepts in data science, machine learning, and deep learning.</p>
      
      <h2>What I'm Learning</h2>
      <p>The bootcamp covers three main areas:</p>
      <ul>
        <li><strong>Data Science:</strong> Statistics, probability, exploratory data analysis, and data preprocessing</li>
        <li><strong>Machine Learning:</strong> Supervised and unsupervised learning, model evaluation, and feature engineering</li>
        <li><strong>Deep Learning:</strong> Neural networks, CNNs, RNNs, and modern architectures</li>
      </ul>
      
      <h2>Why This Matters</h2>
      <p>With 3+ years of practical experience, I want to ensure I have solid fundamentals to build upon. The field moves fast, and having strong foundational knowledge will help me adapt to new technologies and techniques more effectively.</p>
      
      <p>I'll be documenting my journey as I go. Stay tuned for updates!</p>
    `
  },
  {
    id: 3,
    title: 'Completed Data Science Basics',
    excerpt: 'I\'ve finished the basics of data science, machine learning, and deep learning. The field is booming with opportunities.',
    date: 'October 30, 2025',
    readTime: '3 min read',
    category: 'Career Insights',
    content: `
      <h2>Basics Complete</h2>
      <p>I've completed the fundamentals of data science, machine learning, and deep learning. This has reinforced my existing experience and added depth to my understanding of the field.</p>
      
      <h2>What I Learned</h2>
      <ul>
        <li><strong>Data Science:</strong> Statistics, probability, EDA, and data preprocessing</li>
        <li><strong>Machine Learning:</strong> Core algorithms, model evaluation, and feature engineering</li>
        <li><strong>Deep Learning:</strong> Neural networks, CNNs, RNNs, and modern architectures</li>
      </ul>
      
      <h2>The Market Boom</h2>
      <p>The data science field is experiencing unprecedented growth. Here's what I'm seeing:</p>
      
      <h3>Unprecedented Demand</h3>
      <ul>
        <li>Record job postings across all industries</li>
        <li>Generous compensation packages</li>
        <li>Expanded remote opportunities</li>
      </ul>
      
      <h3>Why It's Booming</h3>
      <ul>
        <li><strong>AI Revolution:</strong> Generative AI and LLMs have made data science mission-critical</li>
        <li><strong>Data Explosion:</strong> Companies need skilled professionals to harness data</li>
        <li><strong>Competitive Pressure:</strong> Data-driven decisions are key to success</li>
      </ul>
      
      <h2>Hot Areas</h2>
      <ul>
        <li>Generative AI & LLMs</li>
        <li>MLOps and production deployment</li>
        <li>Causal inference and advanced analytics</li>
        <li>Customer analytics and personalization</li>
      </ul>
      
      <h2>Looking Forward</h2>
      <p>With solid fundamentals and practical experience, I'm excited about the opportunities ahead. The field is evolving rapidly, and there's never been a better time to be a data scientist.</p>
      
      <p>I'm looking forward to diving deeper into advanced topics and sharing more insights as I continue learning!</p>
    `
  },
  {
    id: 4,
    title: 'Advanced Causal Inference: Beyond Traditional A/B Testing',
    excerpt: 'Deep dive into sophisticated causal inference methods I\'m exploring to solve complex business problems. Sharing insights from my latest research on uplift modeling and heterogeneous treatment effects.',
    date: 'October 25, 2025',
    readTime: '12 min read',
    category: 'Advanced Analytics',
    content: `
      <h2>Introduction to Advanced Causal Inference</h2>
      <p>As an experienced Data Scientist, I've been diving deeper into sophisticated causal inference methods that go far beyond traditional A/B testing. In this post, I'll share insights from my latest research and practical applications of advanced causal modeling techniques.</p>
      
      <h2>Beyond Traditional A/B Testing</h2>
      <p>While A/B testing remains valuable, modern businesses face complex scenarios where traditional methods fall short:</p>
      <ul>
        <li><strong>Network Effects:</strong> When user behaviors influence each other</li>
        <li><strong>Heterogeneous Treatment Effects:</strong> Different responses across user segments</li>
        <li><strong>Time-varying Effects:</strong> Treatment impacts that change over time</li>
        <li><strong>Selection Bias:</strong> Non-random assignment in observational data</li>
      </ul>
      
      <h2>Advanced Methods I'm Exploring</h2>
      <p>Here are the sophisticated techniques I've been implementing and teaching:</p>
      <ul>
        <li><strong>Uplift Modeling:</strong> Identifying individuals most likely to respond to treatment</li>
        <li><strong>Instrumental Variables:</strong> Using natural experiments to establish causality</li>
        <li><strong>Regression Discontinuity:</strong> Exploiting arbitrary thresholds for causal identification</li>
        <li><strong>Difference-in-Differences:</strong> Comparing treatment and control groups over time</li>
      </ul>
      
      <h2>Practical Applications</h2>
      <p>In my current role, I've applied these methods to solve complex business problems:</p>
      <ul>
        <li>Marketing campaign optimization with heterogeneous customer responses</li>
        <li>Product feature impact analysis accounting for user network effects</li>
        <li>Pricing strategy evaluation using natural experiments</li>
        <li>Customer retention modeling with time-varying treatment effects</li>
      </ul>
      
      <h2>Teaching and Knowledge Sharing</h2>
      <p>One of my passions is sharing these advanced concepts with the data science community. Through this blog and my work, I aim to:</p>
      <ul>
        <li>Demystify complex causal inference concepts</li>
        <li>Provide practical implementation guidance</li>
        <li>Share real-world case studies and lessons learned</li>
        <li>Help fellow data scientists avoid common pitfalls</li>
      </ul>
      
      <h2>What's Next</h2>
      <p>I'm currently exploring Bayesian causal inference methods and their applications in high-stakes decision making. Stay tuned for more deep dives into advanced statistical methods, practical implementations, and insights from cutting-edge research!</p>
    `
  },
  {
    id: 5,
    title: 'Data Science Tips & Tricks: Pro Techniques from the Field',
    excerpt: 'Essential tips and tricks I\'ve learned from years of data science practice. From debugging models to optimizing performance, these insights will save you hours and improve your results.',
    date: 'October 28, 2025',
    readTime: '8 min read',
    category: 'Tips & Tricks',
    content: `
      <h2>Introduction</h2>
      <p>After years of working in data science, I've accumulated numerous tips and tricks that have saved me countless hours and improved my results significantly. In this post, I'll share the most valuable techniques I use daily.</p>
      
      <h2>Data Preprocessing Tricks</h2>
      <h3>1. Smart Missing Value Handling</h3>
      <p><strong>Pro Tip:</strong> Instead of just dropping missing values, create a "missing indicator" feature. This often contains valuable information about data quality and user behavior patterns.</p>
      <pre><code># Create missing indicators
df['has_missing_income'] = df['income'].isnull().astype(int)
df['income_filled'] = df['income'].fillna(df['income'].median())</code></pre>
      
      <h3>2. Feature Engineering Shortcuts</h3>
      <p><strong>Pro Tip:</strong> Use pandas' built-in datetime features more effectively:</p>
      <pre><code># Extract multiple time features in one go
df['year'] = df['date'].dt.year
df['month'] = df['date'].dt.month
df['day_of_week'] = df['date'].dt.dayofweek
df['is_weekend'] = df['date'].dt.dayofweek.isin([5, 6])</code></pre>
      
      <h2>Model Development Hacks</h2>
      <h3>3. Quick Model Comparison</h3>
      <p><strong>Pro Tip:</strong> Use sklearn's VotingClassifier for rapid model comparison:</p>
      <pre><code>from sklearn.ensemble import VotingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC

# Quick ensemble comparison
models = [
    ('lr', LogisticRegression()),
    ('rf', RandomForestClassifier()),
    ('svm', SVC(probability=True))
]
ensemble = VotingClassifier(models, voting='soft')</code></pre>
      
      <h3>4. Hyperparameter Tuning Shortcut</h3>
      <p><strong>Pro Tip:</strong> Start with a coarse grid search, then zoom in on promising regions:</p>
      <pre><code># Coarse search first
param_grid = {
    'n_estimators': [50, 100, 200],
    'max_depth': [5, 10, 20, None],
    'min_samples_split': [2, 5, 10]
}

# Then fine-tune around best parameters
param_grid_fine = {
    'n_estimators': [80, 100, 120],
    'max_depth': [8, 10, 12],
    'min_samples_split': [3, 5, 7]
}</code></pre>
      
      <h2>Performance Optimization</h2>
      <h3>5. Memory Optimization</h3>
      <p><strong>Pro Tip:</strong> Reduce memory usage by optimizing data types:</p>
      <pre><code># Convert to appropriate dtypes
df['category_col'] = df['category_col'].astype('category')
df['int_col'] = pd.to_numeric(df['int_col'], downcast='integer')
df['float_col'] = pd.to_numeric(df['float_col'], downcast='float')</code></pre>
      
      <h3>6. Parallel Processing</h3>
      <p><strong>Pro Tip:</strong> Use joblib for easy parallelization:</p>
      <pre><code>from joblib import Parallel, delayed

# Parallel feature engineering
def process_feature(data):
    return data.apply(some_function)

results = Parallel(n_jobs=-1)(
    delayed(process_feature)(df[col]) for col in feature_columns
)</code></pre>
      
      <h2>Debugging & Validation</h2>
      <h3>7. Model Debugging Checklist</h3>
      <p><strong>Pro Tip:</strong> When models perform poorly, check these in order:</p>
      <ul>
        <li>Data leakage (future information in training data)</li>
        <li>Target variable distribution (class imbalance)</li>
        <li>Feature scaling and normalization</li>
        <li>Cross-validation setup (temporal vs. random splits)</li>
        <li>Hyperparameter ranges (too narrow/wide)</li>
      </ul>
      
      <h3>8. Quick Validation Setup</h3>
      <p><strong>Pro Tip:</strong> Use sklearn's cross_val_score with custom scoring:</p>
      <pre><code>from sklearn.model_selection import cross_val_score
from sklearn.metrics import make_scorer

# Custom scoring function
def custom_metric(y_true, y_pred):
    return your_custom_calculation(y_true, y_pred)

custom_scorer = make_scorer(custom_metric, greater_is_better=True)
scores = cross_val_score(model, X, y, cv=5, scoring=custom_scorer)</code></pre>
      
      <h2>Visualization Hacks</h2>
      <h3>9. Quick EDA Template</h3>
      <p><strong>Pro Tip:</strong> Create reusable EDA functions:</p>
      <pre><code>def quick_eda(df, target_col=None):
    print(f"Shape: {df.shape}")
    print(f"Missing values: {df.isnull().sum().sum()}")
    
    if target_col:
        print(f"Target distribution: {df[target_col].value_counts()}")
    
    # Correlation heatmap
    plt.figure(figsize=(12, 8))
    sns.heatmap(df.corr(), annot=True, cmap='coolwarm')
    plt.show()</code></pre>
      
      <h3>10. Model Interpretation Shortcuts</h3>
      <p><strong>Pro Tip:</strong> Use SHAP for quick model interpretation:</p>
      <pre><code>import shap

# Quick SHAP analysis
explainer = shap.TreeExplainer(model)
shap_values = explainer.shap_values(X_test)
shap.summary_plot(shap_values, X_test)</code></pre>
      
      <h2>Production Deployment Tips</h2>
      <h3>11. Model Versioning</h3>
      <p><strong>Pro Tip:</strong> Always version your models and track performance:</p>
      <pre><code>import joblib
import datetime

# Save with timestamp
timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
model_name = f"model_v{timestamp}.joblib"
joblib.dump(model, model_name)</code></pre>
      
      <h3>12. Monitoring Setup</h3>
      <p><strong>Pro Tip:</strong> Set up basic model monitoring from day one:</p>
      <ul>
        <li>Track prediction distributions over time</li>
        <li>Monitor feature drift</li>
        <li>Set up alerts for performance degradation</li>
        <li>Log prediction confidence scores</li>
      </ul>
      
      <h2>Final Thoughts</h2>
      <p>These tips have been game-changers in my data science practice. The key is to build these techniques into your workflow gradually. Start with the ones that address your current pain points, and you'll see immediate improvements in efficiency and results.</p>
      
      <p>What tips and tricks have you discovered? I'd love to hear about your favorite techniques in the comments!</p>
    `
  }
];

const BlogPost = ({ post }: { post: typeof blogPosts[0] }) => (
  <motion.article
    className="bg-white rounded-lg shadow-lg overflow-hidden mb-8"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    whileHover={{ y: -5 }}
  >
    <div className="p-8">
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          {post.category}
        </span>
        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
          {post.readTime}
        </span>
      </div>
      
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
      
      <div className="flex items-center text-gray-500 mb-6">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        {post.date}
      </div>
      
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
      
      <div 
        className="blog-content max-w-none text-gray-700"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  </motion.article>
);

// Floating particles for blog page
const blogParticles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 12 + 8,
  delay: Math.random() * 3,
}));

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Header */}
      <motion.header 
        className="bg-white shadow-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
              Lakshmipathiraju
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link href="/#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</Link>
              <Link href="/#experience" className="text-gray-700 hover:text-blue-600 transition-colors">Experience</Link>
              <Link href="/blog" className="text-blue-600 font-semibold">Blog</Link>
              <Link href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Data Science Deep Dives</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Advanced Analytics, Research Insights, and Teaching Moments
            </p>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              Sharing advanced data science techniques, research findings, and practical applications. 
              From sophisticated causal inference to cutting-edge ML methods - learn with an experienced practitioner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 relative overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {blogParticles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-gradient-to-br from-blue-400/15 to-purple-400/15"
              style={{
                width: particle.size,
                height: particle.size,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.15, 0.4, 0.15],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: particle.delay,
              }}
            />
          ))}
          <motion.div
            className="absolute top-1/4 right-0 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, 30, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-0 w-64 h-64 bg-gradient-to-br from-pink-200/20 to-orange-200/20 rounded-full blur-3xl"
            animate={{
              x: [0, 40, 0],
              y: [0, -25, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 13,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 
              className="text-3xl font-bold text-gray-800 mb-12 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              Latest Posts
            </motion.h2>
            
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false, margin: "-50px" }}
              >
                <BlogPost post={post} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://github.com/plpraju2001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/lakshmipathirajup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
          <p className="text-gray-400">&copy; 2024 Lakshmipathiraju Pericharla. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

