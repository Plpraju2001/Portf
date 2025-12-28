# Switch from GitHub Pages to Vercel

## Why Vercel is Better

✅ **Supports private repos** - Your code stays private!
✅ **Better performance** - Faster loading times
✅ **Free hosting** - No cost
✅ **Easy setup** - Connect and go
✅ **Automatic HTTPS** - Built-in SSL
✅ **Works with Cursor** - Same workflow

## Migration Steps

### Step 1: Sign Up for Vercel

1. Go to **https://vercel.com**
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub

### Step 2: Import Your Repository

1. In Vercel dashboard, click **"Add New Project"**
2. Find your **Portf** repository
3. Click **"Import"**
4. Keep these settings:
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: **./** (keep default)
   - Build Command: **npm run build** (auto-detected)
   - Output Directory: **out** (this is important!)
5. Click **"Deploy"**

### Step 3: Configure Custom Domain

1. After deployment succeeds, go to **Project Settings**
2. Click **"Domains"** tab
3. Click **"Add Domain"**
4. Enter: **lakshmipathirajup.com**
5. Click **"Add"**
6. Vercel will show DNS instructions

### Step 4: Update DNS in Namecheap

You'll need to update your DNS from GitHub Pages to Vercel:

**In Namecheap Advanced DNS:**

1. **DELETE** the 4 A records (@ host) with GitHub IPs:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153

2. **ADD** these CNAME records instead:
   - Host: **@**, Value: **cname.vercel-dns.com**
   - Host: **www**, Value: **cname.vercel-dns.com**

3. Click **"Save All Changes"**
4. Wait 10-15 minutes

### Step 5: Update GitHub Pages Settings

1. Go to: https://github.com/Plpraju2001/Portf/settings/pages
2. Click **"Remove"** next to your custom domain
3. You can unpublish GitHub Pages since Vercel handles hosting now

## Important Configuration for Next.js Export

Your `next.config.ts` already has `output: 'export'` which is perfect for Vercel!

## After Migration

✅ Your repo stays **private** forever
✅ Your website works at **lakshmipathirajup.com**
✅ Every push to GitHub auto-deploys to Vercel
✅ Better performance than GitHub Pages
✅ Professional hosting

## Need Help?

If you get stuck on any step, let me know and I'll help you through it!






