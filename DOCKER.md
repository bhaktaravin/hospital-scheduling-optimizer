# Docker Setup Guide

## Prerequisites

1. **Install Docker Desktop**
   - Download from: https://www.docker.com/products/docker-desktop
   - Or install via Homebrew: `brew install --cask docker`

2. **Start Docker Desktop**
   - Open Docker Desktop application
   - Wait for it to fully start (whale icon in menu bar should be steady)

## Quick Start

### Option 1: Using Docker Compose (Recommended)

```bash
# Start the entire stack (backend + database)
docker-compose up --build

# Or run in detached mode (background)
docker-compose up -d

# View logs
docker-compose logs -f backend

# Stop everything
docker-compose down

# Stop and remove all data
docker-compose down -v
```

The API will be available at:
- **API**: http://localhost:8000
- **Docs**: http://localhost:8000/docs

### Option 2: Using Docker Only

```bash
# Build the image
docker build -t hospital-scheduling:latest .

# Run with external PostgreSQL
docker run -p 8000:8000 \
  -e DATABASE_URL="your_database_url" \
  hospital-scheduling:latest
```

## What's Included

### Dockerfile
- Python 3.11 base image (stable for production)
- All dependencies from requirements.txt
- FastAPI application
- Optimized for production use

### docker-compose.yml
- **PostgreSQL 15**: Database service
- **Backend**: FastAPI application
- **Networking**: Services can communicate
- **Volumes**: Database persists between restarts
- **Health checks**: Ensures DB is ready before starting backend

## Useful Commands

```bash
# View running containers
docker-compose ps

# View logs for specific service
docker-compose logs backend
docker-compose logs db

# Execute commands in container
docker-compose exec backend bash
docker-compose exec db psql -U hospital_user hospital_scheduling

# Rebuild after code changes
docker-compose up --build

# Start/stop without rebuilding
docker-compose start
docker-compose stop

# Remove everything (including volumes)
docker-compose down -v
```

## Environment Variables

Docker Compose uses these default values:
```env
DATABASE_URL=postgresql://hospital_user:hospital_pass@db:5432/hospital_scheduling
APP_NAME=Hospital Scheduling Optimization
ENV=development
DEBUG=True
```

To use custom values:
1. Create a `.env` file in the project root
2. Docker Compose will automatically load it

## Troubleshooting

### Docker daemon not running
```bash
# Start Docker Desktop application
open -a Docker
```

### Port already in use
```bash
# Check what's using port 8000
lsof -i :8000

# Kill the process or change ports in docker-compose.yml
```

### Database connection issues
```bash
# Check if database is healthy
docker-compose ps

# View database logs
docker-compose logs db

# Restart database
docker-compose restart db
```

### Changes not reflected
```bash
# Rebuild the image
docker-compose up --build

# Or force recreate
docker-compose up --force-recreate
```

## Production Deployment

For production, update:

1. **Security**:
   - Change `SECRET_KEY` to a strong random value
   - Use strong database credentials
   - Set `DEBUG=False`

2. **Environment**:
   - Use production database URL
   - Set proper `ENV=production`

3. **Dockerfile**:
   - Consider multi-stage builds
   - Add security scanning
   - Use specific version tags

Example production docker-compose:
```yaml
services:
  backend:
    image: your-registry/hospital-scheduling:v1.0.0
    environment:
      DATABASE_URL: ${PRODUCTION_DATABASE_URL}
      SECRET_KEY: ${SECRET_KEY}
      DEBUG: "False"
      ENV: production
    restart: unless-stopped
```

## Docker Hub Publishing

```bash
# Login to Docker Hub
docker login

# Tag the image
docker tag hospital-scheduling:latest yourusername/hospital-scheduling:latest

# Push to Docker Hub
docker push yourusername/hospital-scheduling:latest
```

## Benefits of Docker

✅ **Consistency**: Same environment everywhere  
✅ **Isolation**: No conflicts with system packages  
✅ **Portability**: Run anywhere Docker runs  
✅ **Easy Setup**: One command to start everything  
✅ **Clean**: Easy to remove completely  

---

**Next Steps**: After Docker is running, visit http://localhost:8000/docs to use the API!
