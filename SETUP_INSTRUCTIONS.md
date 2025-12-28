# Complete Setup Instructions for lakshmipathirajup.com

## ✅ Step 1: Add A Records in Namecheap (YOU ARE HERE)

I can see from your screenshot that your Nameservers are already set to "Namecheap BasicDNS" - that's perfect!

Now you need to add the A records:

### How to Add A Records:

1. **Click on "Advanced DNS" tab** in your Namecheap domain panel
   - You'll see a table of DNS records

2. **Find the A Records section** (should be near the top)

3. **Add 4 A Records for the root domain (@)**:
   - Look for an "Add New Record" button
   - Click it 4 times and enter these values:

   | Click # | Type | Host | Value | TTL |
   |---------|------|------|-------|-----|
   | 1 | A Record | @ | 185.199.108.153 | Automatic |
   | 2 | A Record | @ | 185.199.109.153 | Automatic |
   | 3 | A Record | @ | 185.199.110.153 | Automatic |
   | 4 | A Record | @ | 185.199.111.153 | Automatic |

4. **Also add 4 A Records for www**:
   
   | Click # | Type | Host | Value | TTL |
   |---------|------|------|-------|-----|
   | 5 | A Record | www | 185.199.108.153 | Automatic |
   | 6 | A Record | www | 185.199.109.153 | Automatic |
   | 7 | A Record | www | 185.199.110.153 | Automatic |
   | 8 | A Record | www | 185.199.111.153 | Automatic |

5. **Click "Save All Changes"** (the green checkmark button at the top right)

6. **Wait 10-15 minutes** for DNS to propagate

---

## ✅ Step 2: Configure GitHub Pages Settings

After adding the DNS records, configure GitHub:

1. **Go to**: https://github.com/Plpraju2001/Portf/settings/pages

2. **In "Build and deployment" section**:
   - Find "Source" dropdown
   - Select **"GitHub Actions"**
   - Click "Save"

3. **Wait for build to complete**:
   - Go to: https://github.com/Plpraju2001/Portf/actions
   - Wait until you see a green checkmark ✅

4. **Add custom domain**:
   - Go back to: https://github.com/Plpraju2001/Portf/settings/pages
   - Scroll to "Custom domain"
   - Enter: `lakshmipathirajup.com`
   - Click "Save"
   - Wait 2-3 minutes

5. **Enable HTTPS**:
   - Check the "Enforce HTTPS" checkbox
   - Click "Save"

---

## ✅ Step 3: Test Your Site

1. Wait 10-15 minutes after completing all steps
2. Open an incognito/private window
3. Visit: **https://lakshmipathirajup.com**
4. Your portfolio should load!

---

## 🔍 If It's Still Not Working

### Check DNS Propagation:
```
nslookup lakshmipathirajup.com
```

You should see all 4 IP addresses:
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

### Check GitHub Actions:
Go to: https://github.com/Plpraju2001/Portf/actions
- Look for any red X ❌ errors
- Share any error messages if you see them

### Common Issues:

**Issue**: "DNS verification failed"
- **Solution**: Wait 30 minutes and check again. DNS can take time to propagate worldwide.

**Issue**: "Site shows GitHub 404"
- **Solution**: Make sure GitHub Pages source is set to "GitHub Actions", not a branch.

**Issue**: "Can't access in browser"
- **Solution**: Clear browser cache or try incognito mode.

---

## 📝 Summary

You've completed:
✅ Nameservers are set to "Namecheap BasicDNS"

You need to do:
❌ Add 8 A records (4 for @ and 4 for www) in Advanced DNS
❌ Configure GitHub Pages settings
❌ Wait for deployment

Let me know once you've added the A records, and we'll check if it's working!

