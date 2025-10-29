# Blog Writing Workflow

## How to Write & Update Blog Posts

### Current Setup
Your portfolio is connected to Vercel which automatically deploys changes when you push to GitHub.

### To Add/Edit Blog Posts:

1. **Edit Blog Posts**
   - Open: `src/app/blog/page.tsx`
   - Find the `blogPosts` array (line 6)
   - Add or edit blog post objects

2. **Push Changes**
   ```bash
   git add src/app/blog/page.tsx
   git commit -m "Update blog posts"
   git push origin main
   ```

3. **Automatic Deployment**
   - Vercel detects the push
   - Builds your site automatically
   - Deploys to `lakshmipathirajup.com` in 2-3 minutes

### Blog Post Structure

Each blog post needs these fields:

```javascript
{
  id: 3,  // Unique number
  title: 'Your Blog Post Title',
  excerpt: 'Short description...',
  date: 'December 20, 2024',
  readTime: '5 min read',
  category: 'Category Name',
  content: `
    <h2>Your HTML content here</h2>
    <p>Use HTML tags for formatting</p>
  `
}
```

### Adding New Blog Posts

1. Open `src/app/blog/page.tsx`
2. Add a new object to the `blogPosts` array
3. Save and commit

### Updating Existing Posts

1. Open `src/app/blog/page.tsx`
2. Find the blog post in the array
3. Edit the content
4. Save and commit

### Deployment Time

Changes appear on your domain in 2-5 minutes after pushing to GitHub.

