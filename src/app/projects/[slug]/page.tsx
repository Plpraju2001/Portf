import Link from 'next/link';
import ProjectPageClient from './ProjectPageClient';

// Generate static params for all project slugs
export async function generateStaticParams() {
  // Predefined projects
  const predefinedProjects = [
    { slug: 'causal-inference-framework' },
    { slug: 'churn-prediction-system' },
    { slug: 'marketing-mix-modeling' },
    { slug: 'ab-testing-platform' },
    { slug: 'my--data-analysis-project' },
    { slug: 'my__data_analysis_project' },
    { slug: 'my-data-analysis-project' }
  ];

  // Try to fetch GitHub repositories for static generation
  try {
    const response = await fetch('https://api.github.com/users/Plpraju2001/repos?sort=updated&per_page=100', {
      next: { revalidate: 3600 }
    });
    if (response.ok) {
      const repos = await response.json();
      // Filter out unwanted repositories
      const filteredRepos = repos.filter((repo: { name: string }) => 
        !['raju-portfolio', 'cursor', 'portf'].includes(repo.name.toLowerCase())
      );
      const githubProjects = filteredRepos.map((repo: { name: string }) => ({
        slug: repo.name.toLowerCase().replace(/[^a-z0-9]/g, '-')
      }));
      return [...predefinedProjects, ...githubProjects];
    }
  } catch (error) {
    console.error('Error fetching GitHub repos for static generation:', error);
  }

  return predefinedProjects;
}

// Project data - this would normally come from a database or API
const projectData = {
  'causal-inference-framework': {
    title: 'Advanced Causal Inference Framework',
    description: 'Developing sophisticated causal inference models for marketing attribution and campaign lift measurement.',
    overview: 'This project involves building a comprehensive causal inference framework that goes beyond traditional A/B testing to measure true incremental impact of marketing campaigns. The framework implements advanced econometric techniques including propensity score matching, instrumental variables, and regression discontinuity designs to establish causality in complex business environments.',
    technologies: ['Python', 'R', 'Causal Inference', 'Econometrics', 'Propensity Score Matching'],
    features: [
      'Advanced causal inference methods beyond A/B testing',
      'Propensity score matching for observational studies',
      'Instrumental variables for natural experiments',
      'Regression discontinuity for threshold-based analysis',
      'Heterogeneous treatment effect estimation',
      'Automated causal graph construction and validation'
    ],
    challenges: [
      'Identifying valid instruments in business contexts',
      'Handling selection bias in observational data',
      'Ensuring causal assumptions are met',
      'Scaling causal inference to large datasets',
      'Communicating causal results to stakeholders'
    ],
    solutions: [
      'Developed automated instrument validation framework',
      'Implemented robust sensitivity analysis tools',
      'Created visual causal graph representations',
      'Built scalable computation using parallel processing',
      'Designed intuitive reporting dashboards for business users'
    ],
    github: 'https://github.com/Plpraju2001',
    image: '/api/placeholder/800/400'
  },
  'churn-prediction-system': {
    title: 'Real-time Customer Churn Prediction System',
    description: 'Building end-to-end ML pipeline for real-time churn prediction using advanced time-series analysis.',
    overview: 'This project focuses on creating a comprehensive machine learning system that predicts customer churn in real-time. The system uses advanced time-series analysis, ensemble methods, and automated model retraining to provide accurate predictions that help businesses retain customers and optimize their retention strategies.',
    technologies: ['Python', 'MLOps', 'Time Series', 'Ensemble Methods', 'AWS'],
    features: [
      'Real-time churn prediction with low latency',
      'Advanced time-series feature engineering',
      'Ensemble methods combining multiple algorithms',
      'Automated model retraining and deployment',
      'A/B testing framework for model validation',
      'Comprehensive monitoring and alerting system'
    ],
    challenges: [
      'Handling imbalanced churn datasets',
      'Ensuring real-time prediction performance',
      'Managing model drift over time',
      'Integrating with existing business systems',
      'Maintaining model interpretability'
    ],
    solutions: [
      'Implemented advanced sampling techniques for imbalanced data',
      'Used feature store for efficient real-time serving',
      'Created automated retraining pipeline with drift detection',
      'Built API-first architecture for easy integration',
      'Developed SHAP-based explainability features'
    ],
    github: 'https://github.com/Plpraju2001',
    image: '/api/placeholder/800/400'
  },
  'marketing-mix-modeling': {
    title: 'Marketing Mix Modeling (MMM) Platform',
    description: 'Creating comprehensive MMM solution using Bayesian methods and hierarchical modeling.',
    overview: 'This project involves developing a sophisticated Marketing Mix Modeling platform that uses Bayesian statistics and hierarchical modeling to optimize marketing spend allocation across channels. The platform measures both short-term and long-term brand effects, providing actionable insights for marketing budget optimization.',
    technologies: ['Python', 'Bayesian Statistics', 'Hierarchical Modeling', 'Marketing Analytics'],
    features: [
      'Bayesian hierarchical modeling for robust estimates',
      'Multi-channel attribution and optimization',
      'Long-term brand effect measurement',
      'Scenario planning and budget optimization',
      'Automated report generation',
      'Interactive visualization dashboards'
    ],
    challenges: [
      'Handling multicollinearity between marketing channels',
      'Accounting for carryover and saturation effects',
      'Incorporating external factors and seasonality',
      'Ensuring model stability across different markets',
      'Scaling to large numbers of products and markets'
    ],
    solutions: [
      'Implemented ridge regression with Bayesian priors',
      'Used distributed lag models for carryover effects',
      'Created comprehensive external factor integration',
      'Developed market-specific hierarchical structures',
      'Built scalable computation using MCMC sampling'
    ],
    github: 'https://github.com/Plpraju2001',
    image: '/api/placeholder/800/400'
  },
  'ab-testing-platform': {
    title: 'Advanced A/B Testing & Experimentation Platform',
    description: 'Developing statistical testing framework with proper power analysis and sequential testing.',
    overview: 'This project focuses on creating a comprehensive A/B testing platform that goes beyond basic statistical testing. The platform includes proper power analysis, sequential testing capabilities, and causal inference methods to ensure reliable and actionable experiment results for large-scale marketing experiments.',
    technologies: ['Python', 'Statistics', 'Sequential Testing', 'Power Analysis'],
    features: [
      'Advanced statistical testing with proper power analysis',
      'Sequential testing for early stopping',
      'Multi-armed bandit optimization',
      'Causal inference integration',
      'Automated experiment design and sizing',
      'Comprehensive result interpretation and reporting'
    ],
    challenges: [
      'Ensuring statistical validity in sequential testing',
      'Handling multiple testing corrections',
      'Managing experiment interference and spillover',
      'Scaling to high-traffic applications',
      'Balancing statistical rigor with business speed'
    ],
    solutions: [
      'Implemented alpha-spending functions for sequential testing',
      'Created automated multiple comparison corrections',
      'Developed interference detection and mitigation',
      'Built high-performance experiment infrastructure',
      'Designed flexible statistical frameworks for different use cases'
    ],
    github: 'https://github.com/Plpraju2001',
    image: '/api/placeholder/800/400'
  },
  'my--data-analysis-project': {
    title: 'My Data Analysis Project',
    description: 'Build PowerBI Dashboard for Water Quality Sensor Data Analysis',
    overview: 'This project focuses on analyzing water quality sensor data using PowerBI to create comprehensive dashboards that help monitor and visualize water quality metrics. The analysis includes trend identification, anomaly detection, and predictive insights for water quality management.',
    technologies: ['PowerBI', 'Data Analysis', 'Water Quality', 'Dashboard Development', 'Sensor Data'],
    features: [
      'Interactive PowerBI dashboards for water quality monitoring',
      'Real-time sensor data visualization',
      'Trend analysis and pattern recognition',
      'Anomaly detection for water quality issues',
      'Predictive analytics for quality forecasting',
      'Automated reporting and alerting systems'
    ],
    challenges: [
      'Handling large volumes of sensor data',
      'Ensuring data quality and accuracy',
      'Creating intuitive visualizations for non-technical users',
      'Integrating multiple data sources',
      'Maintaining real-time data updates'
    ],
    solutions: [
      'Implemented efficient data processing pipelines',
      'Created data validation and cleaning procedures',
      'Designed user-friendly dashboard interfaces',
      'Built robust data integration workflows',
      'Established automated data refresh mechanisms'
    ],
    github: 'https://github.com/plpraju2001/My__Data_Analysis_Project',
    image: '/api/placeholder/800/400'
  },
  'my__data_analysis_project': {
    title: 'My Data Analysis Project',
    description: 'Build PowerBI Dashboard for Water Quality Sensor Data Analysis',
    overview: 'This project focuses on analyzing water quality sensor data using PowerBI to create comprehensive dashboards that help monitor and visualize water quality metrics. The analysis includes trend identification, anomaly detection, and predictive insights for water quality management.',
    technologies: ['PowerBI', 'Data Analysis', 'Water Quality', 'Dashboard Development', 'Sensor Data'],
    features: [
      'Interactive PowerBI dashboards for water quality monitoring',
      'Real-time sensor data visualization',
      'Trend analysis and pattern recognition',
      'Anomaly detection for water quality issues',
      'Predictive analytics for quality forecasting',
      'Automated reporting and alerting systems'
    ],
    challenges: [
      'Handling large volumes of sensor data',
      'Ensuring data quality and accuracy',
      'Creating intuitive visualizations for non-technical users',
      'Integrating multiple data sources',
      'Maintaining real-time data updates'
    ],
    solutions: [
      'Implemented efficient data processing pipelines',
      'Created data validation and cleaning procedures',
      'Designed user-friendly dashboard interfaces',
      'Built robust data integration workflows',
      'Established automated data refresh mechanisms'
    ],
    github: 'https://github.com/plpraju2001/My__Data_Analysis_Project',
    image: '/api/placeholder/800/400'
  },
  'my-data-analysis-project': {
    title: 'My Data Analysis Project',
    description: 'Build PowerBI Dashboard for Water Quality Sensor Data Analysis',
    overview: 'This project focuses on analyzing water quality sensor data using PowerBI to create comprehensive dashboards that help monitor and visualize water quality metrics. The analysis includes trend identification, anomaly detection, and predictive insights for water quality management.',
    technologies: ['PowerBI', 'Data Analysis', 'Water Quality', 'Dashboard Development', 'Sensor Data'],
    features: [
      'Interactive PowerBI dashboards for water quality monitoring',
      'Real-time sensor data visualization',
      'Trend analysis and pattern recognition',
      'Anomaly detection for water quality issues',
      'Predictive analytics for quality forecasting',
      'Automated reporting and alerting systems'
    ],
    challenges: [
      'Handling large volumes of sensor data',
      'Ensuring data quality and accuracy',
      'Creating intuitive visualizations for non-technical users',
      'Integrating multiple data sources',
      'Maintaining real-time data updates'
    ],
    solutions: [
      'Implemented efficient data processing pipelines',
      'Created data validation and cleaning procedures',
      'Designed user-friendly dashboard interfaces',
      'Built robust data integration workflows',
      'Established automated data refresh mechanisms'
    ],
    github: 'https://github.com/plpraju2001/My__Data_Analysis_Project',
    image: '/api/placeholder/800/400'
  }
};

// Function to fetch GitHub repository data
async function getGitHubRepo(repoName: string) {
  try {
    const response = await fetch(`https://api.github.com/repos/Plpraju2001/${repoName}`, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    if (!response.ok) return null;
    return await response.json();
  } catch {
    return null;
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // First check predefined projects
  let project = projectData[slug as keyof typeof projectData];
  
  // If not found, try to fetch from GitHub
  if (!project) {
    const repo = await getGitHubRepo(slug);
    if (repo) {
      project = {
        title: repo.name,
        description: repo.description || 'A data science project showcasing advanced analytics and machine learning techniques.',
        overview: `This project demonstrates practical application of data science methodologies. ${repo.description || 'Built with modern technologies and best practices in data analysis and machine learning.'}`,
        technologies: repo.language ? [repo.language, 'Data Science', 'Machine Learning'] : ['Data Science', 'Machine Learning'],
        features: [
          'Modern data science implementation',
          'Clean, well-documented code',
          'Best practices in software development',
          'Comprehensive testing and validation',
          'Scalable architecture design',
          'Performance optimization'
        ],
        challenges: [
          'Implementing complex algorithms efficiently',
          'Ensuring code quality and maintainability',
          'Optimizing performance for large datasets',
          'Creating intuitive user interfaces',
          'Handling edge cases and error scenarios'
        ],
        solutions: [
          'Applied advanced data science techniques',
          'Implemented clean code principles',
          'Used efficient data structures and algorithms',
          'Created comprehensive documentation',
          'Built robust error handling mechanisms'
        ],
        github: repo.html_url,
        image: '/api/placeholder/800/400'
      };
    }
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-semibold">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return <ProjectPageClient project={project} />;
}
