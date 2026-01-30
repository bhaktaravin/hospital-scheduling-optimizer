# GitHub Actions - Docker Hub Setup Guide

## Overview
This repository includes a GitHub Action that automatically builds and pushes Docker images to Docker Hub whenever you push to the `main` branch or create a version tag.

## 🔧 Setup Instructions

### 1. Create Docker Hub Account
If you don't have one already:
- Go to https://hub.docker.com
- Sign up for a free account
- Note your username (you'll need this)

### 2. Create Docker Hub Access Token
1. Log in to Docker Hub
2. Go to **Account Settings** → **Security** → **Access Tokens**
3. Click **New Access Token**
4. Name it: `github-actions`
5. Set permissions: **Read, Write, Delete**
6. Click **Generate**
7. **Copy the token** (you won't see it again!)

### 3. Add Secrets to GitHub Repository
1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add two secrets:

   **Secret 1:**
   - Name: `DOCKER_USERNAME`
   - Value: Your Docker Hub username (e.g., `bhaktaravin`)

   **Secret 2:**
   - Name: `DOCKER_PASSWORD`
   - Value: The access token you copied from Docker Hub

### 4. Update Docker Image Name (Optional)
If your Docker Hub username is different from `bhaktaravin`:

1. Open `.github/workflows/docker-publish.yml`
2. Change line 13:
   ```yaml
   DOCKER_IMAGE: YOUR_DOCKERHUB_USERNAME/hospital-scheduling-optimizer
   ```

## 🚀 How It Works

### Automatic Triggers
The workflow runs when you:
- **Push to main branch**: Builds and tags as `latest`
- **Create a tag** (e.g., `v1.0.0`): Creates version-specific tags
- **Open a PR**: Builds but doesn't push (testing only)

### Tags Created
For each build, multiple tags are created:
- `latest` - Most recent main branch build
- `main` - From main branch
- `v1.0.0` - Semantic version (if you tag)
- `1.0` - Major.minor version
- `main-abc1234` - Branch name + short commit SHA

### Example Usage

**Push to main:**
```bash
git add .
git commit -m "Update API endpoints"
git push
```
Result: `bhaktaravin/hospital-scheduling-optimizer:latest`

**Create a release:**
```bash
git tag v1.0.0
git push origin v1.0.0
```
Result:
- `bhaktaravin/hospital-scheduling-optimizer:v1.0.0`
- `bhaktaravin/hospital-scheduling-optimizer:1.0`
- `bhaktaravin/hospital-scheduling-optimizer:latest`

## 📦 Using Your Docker Image

Once published, anyone can pull and run your image:

```bash
# Pull the latest version
docker pull bhaktaravin/hospital-scheduling-optimizer:latest

# Run the container
docker run -p 8000:8000 \
  -e DATABASE_URL="your_database_url" \
  bhaktaravin/hospital-scheduling-optimizer:latest
```

## 🔍 Monitoring Builds

### View Workflow Status
1. Go to your GitHub repository
2. Click **Actions** tab
3. See all workflow runs and their status

### Check Docker Hub
1. Go to https://hub.docker.com
2. Navigate to your repository
3. See all published tags and pull statistics

## 🛠 Workflow Features

### Build Caching
- Uses GitHub Actions cache to speed up builds
- Subsequent builds are much faster

### Multi-platform Support
- Configured for `linux/amd64` (can be extended for ARM)
- Works on most cloud platforms

### Security
- Credentials stored as encrypted secrets
- Never exposed in logs or code

### Metadata
- Automatic labeling with Git commit info
- Easy to trace which commit built which image

## 📝 Common Tasks

### Update Docker Image
Just push your code changes to main:
```bash
git add .
git commit -m "Your changes"
git push
```
GitHub Actions will automatically build and push the new image.

### Release a New Version
```bash
git tag -a v1.1.0 -m "Release version 1.1.0"
git push origin v1.1.0
```

### Test Without Publishing
Open a Pull Request - the workflow will build but not push to Docker Hub.

### Disable Workflow Temporarily
In `.github/workflows/docker-publish.yml`, comment out the triggers:
```yaml
# on:
#   push:
#     branches:
#       - main
```

## 🚨 Troubleshooting

### "Invalid username/password"
- Check that `DOCKER_USERNAME` is your Docker Hub username (not email)
- Regenerate your Docker Hub access token
- Update the `DOCKER_PASSWORD` secret in GitHub

### "No space left on device"
- GitHub Actions runners have limited space
- The workflow includes cache management to prevent this

### Build fails but pushes work locally
- Check that all required files are committed
- Ensure `.dockerignore` isn't excluding necessary files
- Review workflow logs in GitHub Actions

### Tags not appearing on Docker Hub
- Verify the workflow completed successfully
- Check that `push: true` condition is met
- Ensure you're logged into Docker Hub

## 🎯 Best Practices

1. **Use Semantic Versioning**
   - `v1.0.0` for releases
   - `v1.0.1` for patches
   - `v1.1.0` for minor updates

2. **Tag Important Releases**
   - Don't rely only on `latest`
   - Pin specific versions in production

3. **Keep Secrets Secure**
   - Never commit Docker Hub credentials
   - Rotate tokens periodically
   - Use separate tokens for different projects

4. **Monitor Your Quota**
   - Docker Hub free tier has pull limits
   - Consider upgrading for production use

## 📚 Additional Resources

- [Docker Hub Documentation](https://docs.docker.com/docker-hub/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)

---

**Need help?** Check the Actions tab in your repository for detailed build logs!
