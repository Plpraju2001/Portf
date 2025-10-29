# Fix GitHub Pages Custom Domain Issue

## The Problem
GitHub is showing DNS verification error even though DNS is correct.

## Solution Steps (Follow Exactly)

### Step 1: Configure GitHub Actions Source
1. Go to: https://github.com/Plpraju2001/raju-portfolio/settings/pages
2. In "Build and deployment" section:
   - Click "Source" dropdown
   - Select "GitHub Actions"
   - Click "Save"

### Step 2: Wait for Build to Complete
1. Go to: https://github.com/Plpraju2001/raju-portfolio/actions
2. Wait until the latest workflow run shows "✅ Completed" with green checkmark
3. This takes 2-5 minutes

### Step 3: Add Custom Domain (After Build Completes)
1. Go back to: https://github.com/Plpraju2001/raju-portfolio/settings/pages
2. Scroll to "Custom domain" section
3. Enter: `lakshmipathirajup.com`
4. Do NOT check "Enforce HTTPS" yet
5. Click "Save"
6. Wait 2-3 minutes for GitHub to verify

### Step 4: Enable HTTPS
After domain is verified:
1. Check "Enforce HTTPS" checkbox
2. Click "Save"

## If DNS Error Persists

Try clearing DNS cache:
1. Close ALL browser tabs with your domain
2. Wait 5 minutes
3. Open new incognito window
4. Try again

## Verify It's Working
Visit: https://lakshmipathirajup.com

Your portfolio should load within 5-10 minutes after completing all steps.

