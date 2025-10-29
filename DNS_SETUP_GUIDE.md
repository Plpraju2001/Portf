# DNS Setup Guide for lakshmipathirajup.com

## Step 1: Find Your Domain Provider

Go to where you registered your domain (lakshmipathirajup.com) and log in.

**Common providers:**
- GoDaddy
- Namecheap  
- Google Domains
- Cloudflare
- AWS Route 53
- Any other domain registrar

## Step 2: Access DNS Management

Once logged in to your domain provider, find:
- **DNS Settings**
- **DNS Management**  
- **Zone Editor**
- **DNS Records**

## Step 3: Add GitHub Pages A Records

Delete any existing A records, then add these 4 A records:

| Type | Name/Host | Value/Points To | TTL |
|------|-----------|-----------------|-----|
| A    | @ or lakshmipathirajup.com | 185.199.108.153 | 3600 |
| A    | @ or lakshmipathirajup.com | 185.199.109.153 | 3600 |
| A    | @ or lakshmipathirajup.com | 185.199.110.153 | 3600 |
| A    | @ or lakshmipathirajup.com | 185.199.111.153 | 3600 |

**Important:**
- Replace `@` with your root domain if needed
- Set TTL to 3600 (or default)

## Step 4: Remove Vercel Nameservers

Your nameservers are currently pointing to Vercel:
- `ns1.vercel-dns.com`
- `ns2.vercel-dns.com`

**Don't change nameservers yet.** Just add the A records above.

## Step 5: Wait for DNS Propagation

After adding A records, wait 5-10 minutes.

## Step 6: Configure GitHub Pages

1. Go to: https://github.com/Plpraju2001/raju-portfolio/settings/pages
2. Under **Custom domain**, enter: `lakshmipathirajup.com`
3. Click **Save**
4. Wait for DNS check to pass (may take a few minutes)

## Troubleshooting

If DNS check still fails:
1. Wait 15-30 minutes for DNS propagation
2. Check A records are correct
3. Try again

## Alternative: Use GitHub URL

If DNS setup is too complex:
- Your site will be at: `https://plpraju2001.github.io/raju-portfolio/`
- No DNS changes needed
- Works immediately

