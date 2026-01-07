# Setting Up GitHub Actions for Portf Repository

## Current Status
- ✅ GitHub Actions workflow file exists at `.github/workflows/deploy.yml`
- ❌ This directory is not currently a git repository
- ❌ Workflow needs to be committed and pushed to GitHub

## Steps to Enable GitHub Actions

### Option 1: If "Portf" repository already exists on GitHub

1. **Initialize git in this directory:**
   ```powershell
   git init
   git branch -M main
   ```

2. **Connect to your Portf repository:**
   ```powershell
   git remote add origin https://github.com/YOUR_USERNAME/Portf.git
   # Replace YOUR_USERNAME with your GitHub username
   ```

3. **Add all files and commit:**
   ```powershell
   git add .
   git commit -m "Add portfolio with GitHub Actions workflow"
   ```

4. **Push to GitHub:**
   ```powershell
   git push -u origin main
   ```

5. **Enable GitHub Pages in repository settings:**
   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Under "Source", select "GitHub Actions"
   - Save

### Option 2: If you need to create the "Portf" repository

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Name it "Portf"
   - Don't initialize with README, .gitignore, or license
   - Click "Create repository"

2. **Then follow Option 1 steps above**

## After Setup

Once you push the code:
- GitHub Actions will automatically run on every push to `main` branch
- You can also manually trigger it from the "Actions" tab
- The workflow will build your Next.js site and deploy it to GitHub Pages

## Verify Deployment

1. Go to your repository on GitHub
2. Click the "Actions" tab
3. You should see "Deploy to GitHub Pages" workflow running
4. Once complete, your site will be available at:
   - `https://YOUR_USERNAME.github.io/Portf/`
   - Or your custom domain if you have CNAME set up

## Troubleshooting

- **Workflow not showing**: Make sure the `.github/workflows/deploy.yml` file is committed and pushed
- **Deployment failing**: Check the Actions tab for error messages
- **Pages not enabled**: Go to Settings → Pages and select "GitHub Actions" as the source

