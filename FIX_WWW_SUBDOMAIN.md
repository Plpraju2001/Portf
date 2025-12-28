# Fix www Subdomain Configuration

## The Problem
GitHub shows a warning: "www.lakshmipathirajup.com is improperly configured"

This is because:
- ✅ Root domain (@) uses A records - CORRECT
- ❌ www subdomain uses A records - WRONG (should be CNAME)

## The Fix

### In Namecheap Advanced DNS:

1. **Delete the 4 A records for `www`**:
   - Find the 4 A records with Host = `www`
   - Click the trash can icon 🗑️ for each one
   - Delete all 4 of them

2. **Add 1 CNAME record for `www`**:
   - Click "ADD NEW RECORD"
   - Select Type: **CNAME Record** (NOT A Record!)
   - Host: `www`
   - Value: `plpraju2001.github.io`
   - TTL: Automatic
   - Click Save

3. **Click "Save All Changes"** (green checkmark)

4. **Wait 10-15 minutes**

### Back in GitHub:

1. Go back to: https://github.com/Plpraju2001/Portf/settings/pages
2. Click the **"Check again"** button
3. The warning should disappear
4. Your site will be available at both:
   - https://lakshmipathirajup.com ✅
   - https://www.lakshmipathirajup.com ✅

---

## After Fixing

Your final DNS should look like this:

| Type | Host | Value | Use Case |
|------|------|-------|----------|
| A Record | @ | 185.199.108.153 | Root domain |
| A Record | @ | 185.199.109.153 | Root domain |
| A Record | @ | 185.199.110.153 | Root domain |
| A Record | @ | 185.199.111.153 | Root domain |
| CNAME | www | plpraju2001.github.io | www subdomain |

This will make your site accessible at both lakshmipathirajup.com AND www.lakshmipathirajup.com!






