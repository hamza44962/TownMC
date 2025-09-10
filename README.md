# TownMC Store (Demo)

This is a ready-to-deploy Vite + React demo store for the TownMC Minecraft server.

## Features
- Home, Store and Cart pages
- TailwindCSS for styling
- Placeholder component for payments (PayPal/Stripe/Mollie)

## How to deploy locally
1. Install dependencies:
```
npm install
```
2. Start dev server:
```
npm run dev
```
3. Build for production:
```
npm run build
```

## Deploy on Vercel
1. Create a GitHub repo and upload this project.
2. On Vercel choose **Import Git Repository**, pick this repo.
3. Framework: **Vite**
4. Install Command: `npm install`
5. Build Command: `npm run build`
6. Output Directory: `dist`

## Payments (PayPal)
This project contains a simple placeholder at `src/checkout/CheckoutPlaceholder.jsx`.

To accept real payments with PayPal you generally need a server-side integration to keep your secret keys safe.
- Create a small server (Node/Express, or serverless function) that talks to PayPal's API using your client ID & secret.
- The server will create an order and return an approval URL or order ID to the client.
- The client will redirect the user to PayPal or use the PayPal JS SDK to complete the checkout.

If you want, I can:
- Add an example serverless function for Vercel that creates a PayPal order (you'll need to add PayPal credentials as Environment Variables).
- Or implement Stripe / Mollie examples instead.
