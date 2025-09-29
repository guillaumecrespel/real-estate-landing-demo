# 🚀 Deployment Guide

This guide explains how to deploy the Real Estate Landing Demo to Vercel.

## 📋 Prerequisites

- A Vercel account
- Git repository (GitHub, GitLab, or Bitbucket)
- Node.js 18+ installed locally

## 🔧 Vercel Deployment

### Option 1: Deploy via Vercel Dashboard

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your Git repository

2. **Configure Build Settings**
   - Framework Preset: `Next.js`
   - Build Command: `pnpm build`
   - Output Directory: `.next`
   - Install Command: `pnpm install`

3. **Environment Variables** (Optional)
   - Add any environment variables in the Vercel dashboard
   - Example: `NEXT_PUBLIC_API_URL`

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Production Deploy**
   ```bash
   vercel --prod
   ```

## ⚙️ Configuration Files

The project includes the following configuration files for Vercel:

- `vercel.json` - Vercel-specific configuration
- `.vercelignore` - Files to ignore during deployment
- `next.config.js` - Next.js configuration optimized for Vercel

## 🔄 Automatic Deployments

Once connected to Vercel:

- **Push to main branch** → Automatic production deployment
- **Push to other branches** → Automatic preview deployment
- **Pull requests** → Automatic preview deployment

## 📊 Performance Optimization

The project is optimized for Vercel with:

- **Static Generation** for better performance
- **Image Optimization** with Next.js Image component
- **Bundle Optimization** with Next.js built-in optimizations
- **Edge Functions** support (if needed)

## 🛠️ Custom Domain

To add a custom domain:

1. Go to your project in Vercel dashboard
2. Navigate to "Settings" → "Domains"
3. Add your domain
4. Configure DNS records as instructed

## 📈 Analytics

Vercel provides built-in analytics:

- **Web Vitals** monitoring
- **Performance** metrics
- **Usage** statistics

## 🔍 Troubleshooting

### Build Failures

1. **Check Node.js version** - Ensure 18+ is used
2. **Verify dependencies** - Run `pnpm install` locally
3. **Check build logs** - Review Vercel build output

### Performance Issues

1. **Enable Vercel Analytics** for insights
2. **Optimize images** using Next.js Image component
3. **Check bundle size** with `pnpm build`

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Performance Best Practices](https://nextjs.org/docs/advanced-features/measuring-performance)

---

Happy deploying! 🎉
