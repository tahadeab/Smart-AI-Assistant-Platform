# Fixing TypeScript Errors

The TypeScript errors you're seeing are normal and expected. They occur because the project dependencies haven't been installed yet.

## Quick Fix

Run this command in the project root to install all dependencies:

```powershell
# Using pnpm (recommended for this project)
pnpm install

# OR using npm
npm install
```

## What This Will Fix

After running `pnpm install`, the following errors will be resolved:

- ✅ "Cannot find module 'dotenv'"
- ✅ "Cannot find module 'drizzle-kit'"
- ✅ "Cannot find name 'process'"
- ✅ "Cannot find type definition file for '@serwist/next/typings'"
- ✅ "Cannot find type definition file for 'vitest/globals'"

## Why These Errors Appear

These are **development-time** errors that don't affect:

- ✅ Docker deployment (dependencies are installed in containers)
- ✅ Python backend functionality
- ✅ Your customization work
- ✅ The platform's ability to run

## If You Don't Want to Install Dependencies

If you're not planning to develop the Next.js frontend, you can safely ignore these errors. The platform will work fine via Docker without installing Node.js dependencies locally.

## Alternative: Use Docker Only

If you only want to run the platform (not develop it), just use Docker:

```powershell
cd docker-compose/local
docker compose up -d --build
```

This will work perfectly without installing any local Node.js dependencies.

---

**Note:** These errors are **cosmetic** and don't prevent the platform from working. They're only relevant if you plan to modify the Next.js frontend code.
