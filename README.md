# Black Skyport — Private Transportation Lima

Premium bilingual website for private transportation services in Lima, Peru.

## Deploy to Render (Static Site)

1. Push this folder to a GitHub repository
2. In Render: New → Static Site
3. Build command: `npm install && npx vite build --config vite.config.render.ts`
4. Publish directory: `dist`
5. Done — your site will be live on a `.onrender.com` URL

## Deploy to Render (Web Service with preview server)

1. Push to GitHub
2. In Render: New → Web Service
3. Build command: `npm install && npx vite build --config vite.config.render.ts`
4. Start command: `npx vite preview --config vite.config.render.ts --port $PORT --host 0.0.0.0`
5. Environment variable: `NODE_ENV=production`

## Local development

```bash
npm install
npx vite --config vite.config.render.ts
```

## Contact

WhatsApp: +51 922 024 645  
Email: info@blackskyport.com  
Lima, Peru
