# GitHub Pages Deployment Guide

This guide explains how to deploy your academic portfolio to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your local machine
- Node.js and npm installed

## Repository Setup

Your repository is named `tuanmtrinh.github.io`, which is a special GitHub Pages repository format (username.github.io). This means your site will be deployed to the root domain: `https://tuanmtrinh.github.io/`

## Deployment Steps

### 1. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/tuanmtrinh/tuanmtrinh.github.io`
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under "Build and deployment":
   - **Source**: Select **GitHub Actions**
   - This is important! Do NOT use "Deploy from a branch"

### 2. Verify Configuration

The repository is already configured with the correct settings:

#### `vite.config.ts`
```typescript
base: '/',  // Root deployment for username.github.io repos
```

#### `.github/workflows/deploy.yml`
The workflow file is already in the correct location at `/.github/workflows/deploy.yml`.

### 3. Deploy Your Site

Simply push your changes to the `main` branch:

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

The GitHub Actions workflow will automatically:
1. Install dependencies (`npm install`)
2. Build your site (`npm run build`)
3. Deploy to GitHub Pages

### 5. Monitor Deployment

1. Go to the **Actions** tab in your repository
2. You'll see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually 2-3 minutes)
4. Once complete, your site will be live at: `https://tuanmtrinh.github.io/`

## Workflow Explanation

The deployment workflow (`deploy.yml`) does the following:

```yaml
# Triggers on push to main branch
on:
  push:
    branches:
      - main

# Build job
build:
  - Checkout code
  - Setup Node.js 20
  - Install dependencies with npm install (not npm ci, to avoid lock file issues)
  - Build the project
  - Upload build artifacts

# Deploy job
deploy:
  - Deploy the built files to GitHub Pages
```

## Troubleshooting

### Issue: Workflow Fails with Lock File Error

**Solution**: The workflow has been updated to use `npm install` instead of `npm ci`. This avoids the need for a `package-lock.json` file.

### Issue: 404 Error When Navigating

**Problem**: React Router routes don't work after refresh.

**Solution**: Add a `404.html` file to your `public` folder:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <script type="text/javascript">
      var pathSegmentsToKeep = 0;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
  </body>
</html>
```

Also update `index.html` to include:

```html
<script type="text/javascript">
  (function(l) {
    if (l.search[1] === '/' ) {
      var decoded = l.search.slice(1).split('&').map(function(s) { 
        return s.replace(/~and~/g, '&')
      }).join('?');
      window.history.replaceState(null, null,
          l.pathname.slice(0, -1) + decoded + l.hash
      );
    }
  }(window.location))
</script>
```

### Issue: Pages Not Loading Correctly

**Check**:
1. Verify `base: '/'` in `vite.config.ts`
2. Ensure GitHub Pages source is set to "GitHub Actions"
3. Check the Actions tab for deployment logs
4. Clear your browser cache

### Issue: CSS Not Loading

**Check**:
1. The `base` path in `vite.config.ts` is correct
2. Assets are being properly bundled in the `dist` folder
3. Check browser console for 404 errors

## Updating Your Site

To update your site after making changes:

```bash
# Make your changes to the code
# Then commit and push

git add .
git commit -m "Update content"
git push origin main
```

The site will automatically rebuild and redeploy.

## Local Testing Before Deployment

Always test your site locally before deploying:

```bash
# Development mode
npm run dev

# Production build and preview
npm run build
npm run preview
```

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain:
   ```
   yourdomain.com
   ```

2. Configure DNS records with your domain provider:
   - Add an A record pointing to GitHub's IP addresses
   - Or add a CNAME record pointing to `tuanmtrinh.github.io`

3. In GitHub repository Settings → Pages:
   - Enter your custom domain
   - Enable "Enforce HTTPS"

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Router Documentation](https://reactrouter.com/)

## Support

If you encounter issues:
1. Check the Actions tab for detailed error logs
2. Review this deployment guide
3. Check that all configuration files are correct
4. Ensure dependencies are properly installed

---

**Repository**: https://github.com/tuanmtrinh/tuanmtrinh.github.io  
**Live Site**: https://tuanmtrinh.github.io  
**Last Updated**: November 2024
