# HostingSpell Frontend

## Configuration Instruction
* For pricing update `/lib/constants.ts` and `/lib/constants-premium.ts` files
* For SEO update `/config/seoConfig.ts` file

## Environment Variables
Create a `.env` file in the root of the project.  

```env
# WordPress API endpoint
NEXT_PUBLIC_WORDPRESS_API_URL=https://blog.2hs.in/wp-json/wp/v2

# API Token (replace with actual secret)
HOSTINGSPELL_API_TOKEN=
````

* `NEXT_PUBLIC_*` variables are **exposed to the client** (browser).
* Non-prefixed variables (`HOSTINGSPELL_API_TOKEN`) are **only available on the server**.

Make sure you configure them properly for each environment:

### Local Development

`.env.local`

```env
NEXT_PUBLIC_WORDPRESS_API_URL=http://localhost:3000/blog/wp-json/wp/v2
HOSTINGSPELL_API_TOKEN=your-local-token
```

### Staging

Staging site: [https://staging.2hs.in/](https://staging.2hs.in/)

`.env.staging`

```env
NEXT_PUBLIC_WORDPRESS_API_URL=https://blog.2hs.in/wp-json/wp/v2
HOSTINGSPELL_API_TOKEN=your-staging-token
```

### Testing (Vercel Preview)

Testing site: [https://hostingspell-frontend.vercel.app/](https://hostingspell-frontend.vercel.app/)

On Vercel → configure these in **Project Settings → Environment Variables**.

### Production

`.env.production`

```env
NEXT_PUBLIC_WORDPRESS_API_URL=https://blog.2hs.in/wp-json/wp/v2
HOSTINGSPELL_API_TOKEN=your-production-token
```

---

## Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

## Production

```bash
# Install dependencies
npm install
npm install -g pm2
# Build optimized production bundle
npm run build

# Start app with PM2
pm2 start npm --name "hostingspell-frontend" -- start
```

---

## PM2 Commands

```bash
# List all processes
pm2 list

# Stop process
pm2 stop hostingspell-frontend

# Restart process
pm2 restart hostingspell-frontend

# Delete process
pm2 delete hostingspell-frontend

# Show logs
pm2 logs hostingspell-frontend
```