# Personal Portfolio — Next.js + Tailwind CSS

A high-quality personal website for showcasing AI projects and job searching.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Deployment**: Vercel

## Project Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (Navbar + Footer)
│   ├── page.tsx                # Home page
│   ├── projects/
│   │   ├── page.tsx            # Projects list
│   │   └── [slug]/page.tsx     # Project detail (case study)
│   ├── blog/
│   │   ├── page.tsx            # Blog list
│   │   └── [slug]/page.tsx     # Blog post
│   └── about/page.tsx          # About page
├── components/
│   ├── layout/                 # Navbar, Footer
│   ├── home/                   # Hero, FeaturedProjects, Skills, Contact
│   ├── projects/               # ProjectCard
│   ├── blog/                   # BlogCard
│   └── ui/                     # Badge, Button, SectionTitle, AnimatedSection, PageTransition
├── data/
│   ├── projects.ts             # ← Add new projects here
│   ├── blog.ts                 # ← Add new blog posts here
│   └── personal.ts             # ← Edit your personal info here
└── lib/
    └── utils.ts                # Utility functions
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view.

## Customization

### 1. Update personal info
Edit `src/data/personal.ts` — name, title, bio, skills, experience, social links.

### 2. Add a new project
Add a new object to the `projects` array in `src/data/projects.ts`:

```typescript
{
  id: '4',
  slug: 'my-new-project',
  title: 'Project Title',
  subtitle: 'One-line description',
  description: 'Card description...',
  tags: ['Tag1', 'Tag2'],
  featured: false,        // set true to show on homepage
  date: '2024-05',
  status: 'completed',
  gradient: 'from-rose-500 to-pink-600',   // card header color
  detail: {
    background: '...',
    problemBreakdown: ['...'],
    solution: '...',
    architecture: '...',
    techStack: ['...'],
    promptDesign: '...',   // optional
    workflow: ['...'],     // optional
    challenges: [{ problem: '...', solution: '...' }],
    results: ['...'],
    reflection: '...',
  },
}
```

### 3. Add a new blog post
Add a new object to `src/data/blog.ts`:

```typescript
{
  id: '4',
  slug: 'my-new-post',
  title: 'Post Title',
  description: 'Short description for cards and SEO',
  date: '2024-05-01',
  tags: ['Tag1', 'Tag2'],
  readingTime: '5 min read',
  content: `
## Section Heading

Your markdown content here...
  `,
}
```

## Deploying to Vercel

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Next.js — click **Deploy**
4. Your site is live in ~2 minutes

No environment variables needed for the base setup.

## Future Extensions

- **CMS Integration**: Replace `src/data/*.ts` files with Contentful, Sanity, or Notion API calls
- **MDX Blog**: Replace string content with `.mdx` files in `src/content/blog/`
- **Search**: Add Algolia or simple client-side search for blog/projects
- **Analytics**: Add Vercel Analytics or Plausible with one import
- **Comments**: Add Giscus (GitHub Discussions) to blog posts
