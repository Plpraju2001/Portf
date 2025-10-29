# Quick Blog Update Script
# Usage: .\update-blog.ps1 "Your commit message"

param(
    [Parameter(Mandatory=$false)]
    [string]$Message = "Update blog content"
)

Write-Host "🚀 Starting blog update process..." -ForegroundColor Cyan

# Check git status
Write-Host "📝 Checking git status..." -ForegroundColor Yellow
git status

# Ask for confirmation
$response = Read-Host "Do you want to commit and push these changes? (y/n)"
if ($response -ne 'y') {
    Write-Host "❌ Update cancelled" -ForegroundColor Red
    exit
}

# Add all files
Write-Host "📦 Adding files..." -ForegroundColor Yellow
git add .

# Commit
Write-Host "💾 Committing changes..." -ForegroundColor Yellow
git commit -m $Message

# Push
Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Yellow
git push origin main

Write-Host "✅ Done! Your changes will be live in 2-3 minutes at https://lakshmipathirajup.com" -ForegroundColor Green
Write-Host "📊 Track deployment: https://github.com/Plpraju2001/raju-portfolio/actions" -ForegroundColor Cyan

