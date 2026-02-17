## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:9000](http://localhost:9000) in your browser (configured to run on port 9000)

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

```
exfilguard/
├── app/
│   ├── about/          # About page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout with navbar and footer
│   └── page.tsx        # Home page
├── components/
│   ├── Footer.tsx      # Footer component
│   └── Navbar.tsx      # Navigation component
├── lib/
│   └── colors.ts       # Color utilities
├── public/             # Static assets
├── .gitignore          # Git ignore file
├── next.config.ts      # Next.js configuration
├── package.json        # Dependencies
├── postcss.config.mjs  # PostCSS configuration
├── README.md           # This file
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Expanding the Template

This template is designed to be easily expanded. Here are some common additions you might want to make:

### Adding New Pages

1. Create a new folder in `app/` directory:
```bash
mkdir app/your-page-name
```

2. Create a `page.tsx` file inside:
```tsx
export default function YourPageName() {
  return (
    <div className="bg-white">
      {/* Your content here */}
    </div>
  );
}
```

3. Add the page to the navigation in `components/Navbar.tsx`

### Adding New Components

Create reusable components in the `components/` directory:

```tsx
// components/YourComponent.tsx
export default function YourComponent() {
  return <div>Your component content</div>;
}
```

### Adding API Routes

1. Create an `api` folder in the `app/` directory
2. Add route handlers for your endpoints:
```tsx
// app/aApi/your-endpoint/route.ts
export async function POST(request: Request) {
  const data = await request.json();
  // Handle your logic
  return Response.json({ success: true });
}
```

### Database Integration

Add a database using Prisma or another ORM:

```bash
npm install @prisma/client
npm install -D prisma
npx prisma init
```

### Authentication

Add authentication with NextAuth.js or similar:

```bash
npm install next-auth
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables if needed
4. Deploy

### Other Platforms

This Next.js app can be deployed to:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform
- Self-hosted with PM2 or similar

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme to match your brand.

### Styling

The template uses Tailwind CSS 4. You can:
- Modify existing component styles
- Add custom utility classes
- Update the color palette in `lib/colors.ts`

### Content

- Update text content in page files
- Replace the ExfilGuard branding with your own
- Add your logo and images to the `public/` directory
- Customize the Navbar and Footer components

## Next Steps

Here are some ideas for expanding this template:

1. **Add more pages** - Services, Contact, Portfolio, Blog, etc.
2. **Add a CMS** - Integrate Contentful, Sanity, or another headless CMS
3. **Add forms** - Contact forms, newsletter signup, etc.
4. **Add analytics** - Google Analytics, Plausible, or similar
5. **Add SEO** - Meta tags, sitemap, robots.txt
6. **Add animations** - Framer Motion is already included as a dependency
7. **Add a blog** - Use MDX for markdown-based blog posts

## License

MIT License - Feel free to use this template for any project

---

Built with Next.js 16, React 19, and Tailwind CSS 4
