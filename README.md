# Raju's Data Science Portfolio

A professional, responsive portfolio website built with Next.js and TailwindCSS, showcasing data science projects, experience, and skills.

## Features

- **Modern Design**: Clean, professional layout with subtle data science visuals
- **Responsive**: Fully responsive design that works on all devices
- **Animations**: Smooth animations and transitions using Framer Motion
- **Sections**:
  - Hero section with introduction and call-to-action
  - About Me with skills and expertise
  - Featured Projects with GitHub links
  - Professional Experience timeline
  - Contact section with social links
- **Interactive Elements**: Hover effects, smooth scrolling, and animated components
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TailwindCSS v4** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **TypeScript** - Type-safe JavaScript
- **Geist Font** - Modern, clean typography

## Getting Started

1. Clone the repository:
```bash
git clone <your-repo-url>
cd raju-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

To personalize this portfolio for your own use:

1. **Update Personal Information**:
   - Replace "Raju" with your name in `src/app/page.tsx`
   - Update the hero section tagline and description
   - Modify the About Me section with your background

2. **Add Your Projects**:
   - Update the `projects` array in the Projects component
   - Replace GitHub URLs with your actual project repositories
   - Add or remove projects as needed

3. **Update Experience**:
   - Modify the `experiences` array with your work history
   - Update company names, positions, and descriptions

4. **Social Links**:
   - Replace GitHub and LinkedIn URLs with your profiles
   - Update email address in the contact section

5. **Styling**:
   - Modify colors in `src/app/globals.css`
   - Adjust animations and transitions as desired
   - Customize the data science visual elements

## Deployment

The easiest way to deploy is using Vercel:

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

Alternatively, you can build and deploy to any static hosting service:

```bash
npm run build
npm start
```

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Last updated:** October 30, 2025