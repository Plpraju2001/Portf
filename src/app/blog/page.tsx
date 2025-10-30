'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'Embarking on My Data Science Bootcamp Journey: Deepening Core Skills',
    excerpt: 'I\'ve started a comprehensive bootcamp to strengthen my foundational skills in data science, machine learning, and deep learning. Sharing my journey and the topics I\'m mastering.',
    date: 'October 30, 2025',
    readTime: '6 min read',
    category: 'Learning Journey',
    content: `
      <h2>Why I Started This Bootcamp</h2>
      <p>As a Data Scientist with 3+ years of experience, I've built a strong foundation in practical applications and business impact. However, I realized that to truly excel in this rapidly evolving field, I needed to dive deeper into the fundamental concepts that power modern data science.</p>
      
      <h2>My Learning Goals</h2>
      <p>I've embarked on a comprehensive bootcamp to strengthen my skills across three critical domains:</p>
      
      <h3>1. Data Science Fundamentals</h3>
      <ul>
        <li><strong>Statistics & Probability:</strong> Deepening my understanding of statistical inference, hypothesis testing, and probability distributions</li>
        <li><strong>Exploratory Data Analysis:</strong> Mastering advanced techniques for uncovering hidden patterns in complex datasets</li>
        <li><strong>Data Wrangling:</strong> Becoming more efficient with large-scale data preprocessing and transformation</li>
        <li><strong>Causal Inference:</strong> Expanding my knowledge beyond basic A/B testing to sophisticated econometric methods</li>
      </ul>
      
      <h3>2. Machine Learning Core Concepts</h3>
      <ul>
        <li><strong>Supervised Learning:</strong> Regression and classification algorithms from scratch</li>
        <li><strong>Unsupervised Learning:</strong> Clustering, dimensionality reduction, and anomaly detection</li>
        <li><strong>Ensemble Methods:</strong> Random Forests, Gradient Boosting, and advanced ensemble techniques</li>
        <li><strong>Model Evaluation:</strong> Mastering cross-validation, hyperparameter tuning, and bias-variance tradeoff</li>
        <li><strong>Feature Engineering:</strong> Advanced techniques for creating meaningful features</li>
      </ul>
      
      <h3>3. Deep Learning Essentials</h3>
      <ul>
        <li><strong>Neural Networks Basics:</strong> Understanding forward and backpropagation in depth</li>
        <li><strong>CNNs for Computer Vision:</strong> Convolutional layers, pooling, and transfer learning</li>
        <li><strong>RNNs & LSTMs:</strong> Sequential data modeling and time-series prediction</li>
        <li><strong>Transformers & Attention:</strong> Modern architectures powering NLP breakthroughs</li>
        <li><strong>Deep Learning Frameworks:</strong> Mastering PyTorch and TensorFlow for production use</li>
      </ul>
      
      <h2>Topics I'm Currently Mastering</h2>
      <p>Right now, I'm focusing on strengthening these areas:</p>
      
      <h3>Advanced Statistics</h3>
      <p>I'm revisiting statistical concepts with fresh eyes, particularly Bayesian inference, hypothesis testing under various conditions, and understanding when different statistical tests are appropriate. This is helping me make more confident decisions in my analytical work.</p>
      
      <h3>Model Interpretability</h3>
      <p>Beyond just building models, I'm diving deep into SHAP values, LIME, partial dependence plots, and other techniques that help explain model decisions. This is crucial for building trust with business stakeholders.</p>
      
      <h3>Optimization Algorithms</h3>
      <p>Understanding the math behind gradient descent variations (SGD, Adam, RMSprop), learning rate scheduling, and convergence theory is giving me better intuition for why models behave the way they do.</p>
      
      <h2>Practical Application</h2>
      <p>What makes this bootcamp valuable is the practical component. I'm not just learning theory—I'm:</p>
      <ul>
        <li>Building projects from scratch to reinforce concepts</li>
        <li>Implementing algorithms manually to understand their internals</li>
        <li>Applying new techniques to real datasets</li>
        <li>Sharing my learnings with the data science community</li>
      </ul>
      
      <h2>Why This Matters</h2>
      <p>In the data science field, technology evolves rapidly. New algorithms, tools, and approaches emerge constantly. By strengthening my fundamentals now, I'm building a solid foundation that will help me:</p>
      <ul>
        <li>Understand new techniques faster when they emerge</li>
        <li>Make better architectural decisions in my work</li>
        <li>Debug and optimize models more effectively</li>
        <li>Communicate technical concepts more clearly</li>
        <li>Design better experiments and analysis frameworks</li>
      </ul>
      
      <h2>Join Me on This Journey</h2>
      <p>I'll be sharing my learnings, challenges, and insights throughout this bootcamp journey. Whether you're just starting out or an experienced practitioner looking to strengthen your fundamentals, I hope my reflections and practical tips will be valuable.</p>
      
      <p>Learning is a continuous journey in data science, and I'm excited to deepen my knowledge while sharing what I discover along the way. Stay tuned for more posts about specific topics, projects, and insights from this learning experience!</p>
    `
  },
  {
    id: 2,
    title: 'Completing Data Science Basics: Navigating the Current Market Boom',
    excerpt: 'I\'ve completed the fundamentals of data science, machine learning, and deep learning. Here\'s my take on the current market landscape and opportunities in this booming field.',
    date: 'November 5, 2025',
    readTime: '8 min read',
    category: 'Career Insights',
    content: `
      <h2>Completing the Foundations</h2>
      <p>After intensive learning, I've completed the core fundamentals of data science, machine learning, and deep learning. This journey has reinforced my existing experience and added new depth to my understanding of the field. Now, with both practical experience and renewed theoretical knowledge, I'm more equipped than ever to tackle complex data challenges.</p>
      
      <h2>What I've Mastered</h2>
      
      <h3>Data Science Foundations ✅</h3>
      <p>I now have a comprehensive understanding of:</p>
      <ul>
        <li>Statistical methods and probability theory</li>
        <li>Hypothesis testing and confidence intervals</li>
        <li>Advanced exploratory data analysis techniques</li>
        <li>Causal inference beyond A/B testing</li>
        <li>Time series analysis and forecasting</li>
      </ul>
      
      <h3>Machine Learning Essentials ✅</h3>
      <p>The bootcamp covered:</p>
      <ul>
        <li>All major ML algorithms and their mathematical foundations</li>
        <li>Model selection and evaluation strategies</li>
        <li>Hyperparameter tuning and optimization</li>
        <li>Ensemble methods and stacking</li>
        <li>Handling imbalanced data and feature engineering</li>
      </ul>
      
      <h3>Deep Learning Fundamentals ✅</h3>
      <p>I've strengthened my knowledge in:</p>
      <ul>
        <li>Neural network architectures and backpropagation</li>
        <li>Convolutional Neural Networks for image data</li>
        <li>Recurrent Neural Networks and LSTMs for sequences</li>
        <li>Attention mechanisms and transformers</li>
        <li>Practical implementation with PyTorch and TensorFlow</li>
      </ul>
      
      <h2>The Current Data Science Market Boom</h2>
      <p>The data science field is experiencing unprecedented growth and transformation. Here's what I'm observing:</p>
      
      <h3>Unprecedented Demand</h3>
      <p>The job market for data scientists has exploded:</p>
      <ul>
        <li><strong>Record Job Postings:</strong> Companies across all industries are hiring data scientists at unprecedented rates</li>
        <li><strong>Diverse Industries:</strong> From finance to healthcare, retail to manufacturing—every sector needs data expertise</li>
        <li><strong>Generous Compensation:</strong> Data science roles continue to command premium salaries</li>
        <li><strong>Remote Opportunities:</strong> The field has embraced remote work, opening up global opportunities</li>
      </ul>
      
      <h3>Why the Boom?</h3>
      <p>Several factors are driving this growth:</p>
      
      <h4>1. AI Revolution</h4>
      <p>Generative AI, LLMs, and recent breakthroughs have made businesses recognize data science as mission-critical. Companies are investing heavily in:</p>
      <ul>
        <li>Predictive analytics for strategic decisions</li>
        <li>Automated systems and AI integration</li>
        <li>Customer insights and personalization</li>
        <li>Risk management and fraud detection</li>
      </ul>
      
      <h4>2. Data Explosion</h4>
      <p>We're generating more data than ever before. Organizations need skilled professionals to:</p>
      <ul>
        <li>Harness this data for competitive advantage</li>
        <li>Build scalable data infrastructure</li>
        <li>Transform raw data into actionable insights</li>
        <li>Ensure data quality and governance</li>
      </ul>
      
      <h4>3. Competitive Pressure</h4>
      <p>Companies realize that data-driven decisions are the difference between success and failure. This has created:</p>
      <ul>
        <li>Urgency to adopt data science practices</li>
        <li>Investment in data science teams</li>
        <li>Focus on ROI-driven analytics</li>
        <li>Expansion of data science capabilities</li>
      </ul>
      
      <h2>Current Market Opportunities</h2>
      
      <h3>Hot Areas Right Now</h3>
      <ul>
        <li><strong>Generative AI & LLMs:</strong> Massive demand for professionals who understand transformer architectures and prompt engineering</li>
        <li><strong>MLOps:</strong> Bridging the gap between model development and production deployment</li>
        <li><strong>Causal Inference:</strong> Moving beyond correlation to establish true causation</li>
        <li><strong>Customer Analytics:</strong> Churn prediction, lifetime value, and personalization</li>
        <li><strong>Risk Analytics:</strong> Fraud detection, credit scoring, and financial modeling</li>
        <li><strong>Healthcare Analytics:</strong> Drug discovery, patient outcome prediction, and medical imaging</li>
      </ul>
      
      <h3>In-Demand Skills</h3>
      <p>The market is particularly valuing:</p>
      <ul>
        <li>End-to-end ML pipeline development (from raw data to production)</li>
        <li>Cloud platforms (AWS, GCP, Azure) and big data tools</li>
        <li>Statistical rigor and experimental design</li>
        <li>Business acumen and stakeholder management</li>
        <li>Deep learning for specific domains (NLP, computer vision)</li>
      </ul>
      
      <h2>My Take on the Market</h2>
      
      <h3>This is a Golden Era</h3>
      <p>For data scientists at any stage—from beginners to experienced professionals—we're in a golden era:</p>
      <ul>
        <li><strong>Skill Premium:</strong> Data science skills are highly valued across industries</li>
        <li><strong>Career Growth:</strong> Clear paths for advancement to senior roles and leadership</li>
        <li><strong>Learning Opportunities:</strong> Abundant resources, communities, and bootcamps</li>
        <li><strong>Innovation Velocity:</strong> Rapid progress keeps the field exciting</li>
      </ul>
      
      <h3>But It's Also Competitive</h3>
      <p>With opportunity comes competition:</p>
      <ul>
        <li><strong>Rising Standards:</strong> Employers expect more comprehensive skill sets</li>
        <li><strong>Specialization Matters:</strong> Generalists must also have deep expertise</li>
        <li><strong>Continuous Learning:</strong> The field requires staying current with developments</li>
        <li><strong>Practical Experience:</strong> Theoretical knowledge alone isn't enough</li>
      </ul>
      
      <h2>Advice for Aspiring Data Scientists</h2>
      
      <h3>For Beginners</h3>
      <ul>
        <li><strong>Build Strong Foundations:</strong> Focus on statistics, programming, and ML fundamentals</li>
        <li><strong>Create a Portfolio:</strong> Showcase projects that demonstrate your skills</li>
        <li><strong>Contribute to Open Source:</strong> Gain practical experience and visibility</li>
        <li><strong>Network Actively:</strong> Join communities, attend meetups, engage on LinkedIn</li>
      </ul>
      
      <h3>For Experienced Practitioners</h3>
      <ul>
        <li><strong>Stay Current:</strong> Keep learning new techniques and tools</li>
        <li><strong>Deepen Specialization:</strong> Become the go-to expert in a specific domain</li>
        <li><strong>Share Knowledge:</strong> Blog, teach, mentor—build your personal brand</li>
        <li><strong>Focus on Impact:</strong> Translate technical work into business value</li>
      </ul>
      
      <h2>Looking Forward</h2>
      <p>With my fundamentals now solidified and the market booming, I'm excited about the opportunities ahead. The combination of:</p>
      <ul>
        <li>Strong foundational knowledge in statistics, ML, and deep learning</li>
        <li>Practical experience delivering business impact</li>
        <li>Commitment to continuous learning</li>
        <li>Awareness of market trends and opportunities</li>
      </ul>
      
      <p>...positions me well to contribute meaningfully to the field and advance in my career.</p>
      
      <h2>Final Thoughts</h2>
      <p>The data science market boom is real, and it's creating incredible opportunities for those who invest in their skills. Whether you're just starting or have years of experience, there's never been a better time to be a data scientist.</p>
      
      <p>What's exciting to me is that this field is far from mature. New breakthroughs in AI, novel applications of ML, and evolving best practices mean there's always something new to discover. The key is maintaining curiosity, investing in continuous learning, and focusing on delivering real value.</p>
      
      <p>I'm looking forward to what the future holds and to being part of this exciting journey. Let's build the future of data science together!</p>
    `
  },
  {
    id: 3,
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
    id: 2,
    title: 'Data Science Tips & Tricks: Pro Techniques from the Field',
    excerpt: 'Essential tips and tricks I\'ve learned from years of data science practice. From debugging models to optimizing performance, these insights will save you hours and improve your results.',
    date: 'October 20, 2025',
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
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  </motion.article>
);

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
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
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Latest Posts</h2>
            
            {blogPosts.map((post) => (
              <BlogPost key={post.id} post={post} />
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

