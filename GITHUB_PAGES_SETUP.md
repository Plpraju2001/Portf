# GitHub Pages Configuration Steps

## ✅ DNS Complete!
Your Namecheap DNS is correctly configured with all 8 A records.

## Now Configure GitHub Pages

### Step 1: Set GitHub Pages Source to GitHub Actions

1. **Go to**: https://github.com/Plpraju2001/Portf/settings/pages

2. **Find "Build and deployment" section**

3. **Look for "Source" dropdown**

4. **Select "GitHub Actions"** from the dropdown
   - If it's already set to "Deploy from a branch", change it to "GitHub Actions"
   - Click "Save"

### Step 2: Wait for Build to Complete

1. **Go to**: https://github.com/Plpraju2001/Portf/actions

2. **Look for the latest workflow run** (should be triggered by our recent commit)

3. **Wait until you see a green checkmark ✅**
   - This usually takes 2-5 minutes

### Step 3: Add Custom Domain

1. **Go back to**: https://github.com/Plpraju2001/Portf/settings/pages

2. **Scroll down to "Custom domain" section**

3. **Enter**: `lakshmipathirajup.com`

4. **Click "Save"**

5. **Wait 2-3 minutes** for GitHub to verify DNS

### Step 4: Enable HTTPS

1. **Check the "Enforce HTTPS" checkbox**

2. **Click "Save"**

---

## Step 5: Test Your Site

1. Wait 10-15 minutes after completing all steps
2. Open an incognito/private window
3. Visit: **https://lakshmipathirajup.com**
4. Your portfolio should load!

---

## Troubleshooting

If you see errors in GitHub Actions:
- Check the workflow run details
- Look for any red X ❌ 
- Share the error message with me

If DNS verification fails:
- Wait 30 minutes and try again
- DNS propagation can take time globally

