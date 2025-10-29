# Namecheap DNS Setup - Quick Guide

## The Problem
Your DNS is managed by Vercel through cPanel. We need to switch it back to Namecheap so we can add GitHub Pages records.

## Solution: Switch DNS to Namecheap

### Step 1: Log into Namecheap
1. Go to https://www.namecheap.com/
2. Log into your account
3. Click "Domain List" at the top
4. Find `lakshmipathirajup.com`

### Step 2: Change DNS Type
On your domain page, look for:
- "Nameservers" section
- Find "Change DNS Type" button or dropdown

**Change from: "cPanel" or "Custom"**
**Change to: "Namecheap BasicDNS"**

### Step 3: Wait 5-10 minutes
DNS changes need time to propagate

### Step 4: Add A Records
After DNS type is changed to BasicDNS:
1. Go back to domain page
2. Click "Advanced DNS" tab
3. Delete any existing A records (if present)
4. Add these 4 A records:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | Automatic |
| A | @ | 185.199.109.153 | Automatic |
| A | @ | 185.199.110.153 | Automatic |
| A | @ | 185.199.111.153 | Automatic |

Click "Add New Record" 4 times, enter one IP each time.

### Step 5: Save and Wait
1. Click "Save All Changes" (green checkmark)
2. Wait 10-15 minutes for DNS to propagate

### Step 6: Configure GitHub Pages
1. Go to: https://github.com/Plpraju2001/raju-portfolio/settings/pages
2. Source: **GitHub Actions** (select from dropdown)
3. Custom domain: Enter `lakshmipathirajup.com`
4. Click "Save"
5. Wait for DNS check to pass (may take a few minutes)

## Your site will be live at: lakshmipathirajup.com

