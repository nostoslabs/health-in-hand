# Health in Hand - Naturopathic Clinic Website

A modern, fully-responsive website for Health in Hand naturopathic clinic in Eva, Alabama. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4.

## Live Site

🌐 **Production URL:** [To be configured after domain transfer]

## Quick Start

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run type checking
npm run type-check

# Lint code
npm run lint
```

## Tech Stack

- **Framework:** Next.js 15 with App Router and Turbopack
- **UI Library:** React 19 with Server Components
- **Language:** TypeScript 5.x (strict mode)
- **Styling:** Tailwind CSS v4
- **Components:** ShadCN UI (built on Radix UI)
- **Deployment:** Vercel

## Project Structure

```
health_in_hand/
├── src/
│   ├── app/                    # Next.js pages (App Router)
│   │   ├── layout.tsx          # Root layout with Header/Footer
│   │   ├── page.tsx            # Homepage
│   │   ├── clinic-story/       # Clinic story page
│   │   ├── new-patient-form/   # Patient form page
│   │   └── blog/               # Blog pages
│   ├── components/
│   │   ├── ui/                 # ShadCN UI components
│   │   ├── layout/             # Header, Footer, Container
│   │   ├── home/               # Homepage components
│   │   └── blog/               # Blog components
│   ├── lib/
│   │   ├── blog.ts             # Blog utilities
│   │   ├── constants.ts        # Site-wide constants
│   │   └── utils.ts            # Utility functions
│   ├── types/
│   │   └── blog.ts             # TypeScript type definitions
│   └── styles/
│       └── globals.css         # Global styles & Tailwind config
├── content/
│   └── blog/                   # Markdown blog posts
├── public/
│   ├── images/                 # Optimized images
│   └── new_patient_intro_form_hih.pdf
└── package.json
```

## Site Maintenance Guide

### Updating Contact Information

Edit `src/lib/constants.ts`:

```typescript
export const PHONE = "256-482-2801";
export const LOCATION = "Eva, Alabama";
export const BUSINESS_HOURS = {
  weekdays: "Monday - Thursday: 9:00am to 5:00pm",
  weekend: "Friday - Sunday: Closed",
};
```

After editing, commit and push to trigger automatic deployment.

### Updating Practitioner Information

Edit the `PRACTITIONERS` array in `src/lib/constants.ts`:

```typescript
export const PRACTITIONERS = [
  {
    name: "Martha Whitney ND",
    title: "Naturopathic Doctor",
    specialties: ["...", "..."],
    bio: "Your bio text here...",
    image: "/images/homepage/martha.jpg",
  },
  // Add more practitioners here
];
```

**To update practitioner photos:**
1. Add new photo to `public/images/homepage/`
2. Update the `image` path in constants.ts
3. Recommended size: 400x400px or larger, square format works best

### Adding or Editing Services

Edit the `SERVICES` array in `src/lib/constants.ts`:

```typescript
export const SERVICES = [
  {
    name: "Service Name",
    description: "Brief description of the service",
  },
  // Add more services here
];
```

Services appear in a grid on the homepage.

### Managing Blog Posts

#### Adding a New Blog Post

1. Create a new markdown file in `content/blog/` with format: `YYYY-MM-DD-slug.md`

2. Add frontmatter at the top of the file:

```markdown
---
title: "Your Blog Post Title"
date: "2025-01-15"
author: "Health in Hand"
category: "Wellness"
excerpt: "A brief 1-2 sentence summary of your post"
slug: "your-post-slug"
---

Your blog post content goes here. You can use **markdown** formatting.

## Subheadings

- Bullet points
- Lists
- **Bold** and *italic* text
- Links: [link text](https://example.com)
```

3. Save the file

4. Commit and push to GitHub:
```bash
git add content/blog/your-new-post.md
git commit -m "Add new blog post: Your Title"
git push
```

5. Vercel will automatically rebuild and deploy the site with your new post

#### Editing Existing Blog Posts

1. Open the markdown file in `content/blog/`
2. Make your changes
3. Save and commit:
```bash
git add content/blog/your-post.md
git commit -m "Update blog post: Post Title"
git push
```

#### Blog Post Categories

Use consistent categories for better organization:
- "Natural Medicine"
- "Wellness"
- "Nutrition"
- "Education"

#### Removing a Blog Post

1. Delete the markdown file from `content/blog/`
2. Commit and push:
```bash
git rm content/blog/post-to-remove.md
git commit -m "Remove blog post: Post Title"
git push
```

### Updating Page Content

#### Homepage

Edit `src/app/page.tsx` and the components in `src/components/home/`:
- `Hero.tsx` - Main hero section
- `Naturopathy.tsx` - "What is Naturopathy?" section
- `PractitionerCard.tsx` - Practitioner display (uses data from constants.ts)
- `ServicesGrid.tsx` - Services display (uses data from constants.ts)

#### Clinic Story Page

Edit `src/app/clinic-story/page.tsx` to update the clinic history and story.

#### New Patient Form Page

Edit `src/app/new-patient-form/page.tsx` to update form instructions or information.

### Adding or Replacing Images

#### Homepage Images

1. Add new images to `public/images/homepage/`
2. Recommended formats: JPG or PNG
3. Next.js will automatically optimize images

#### Clinic Story Images

Replace images in `public/images/clinic-story/`:
- `clinic-before.jpg` - Before renovation photo
- `clinic-after.jpg` - After renovation photo

#### Header Background

Replace `public/images/headers/header-background.jpg` to change the header image across all pages.

### Updating the PDF Form

Replace `public/new_patient_intro_form_hih.pdf` with your updated PDF file. Keep the same filename or update the link in `src/app/new-patient-form/page.tsx`.

## Deployment Workflow

### Automatic Deployments (Recommended)

The site is configured for automatic deployment on Vercel:

1. Make your changes locally
2. Test with `npm run dev`
3. Commit your changes:
```bash
git add .
git commit -m "Description of changes"
```
4. Push to GitHub:
```bash
git push
```
5. Vercel automatically builds and deploys your changes
6. Check the deployment status at https://vercel.com

### Manual Deployment

If needed, you can manually deploy:

```bash
# Install Vercel CLI (one time only)
npm i -g vercel

# Deploy
vercel --prod
```

## Common Tasks

### Testing Changes Locally

Always test changes before deploying:

```bash
# Start development server
npm run dev

# Visit http://localhost:3000 in your browser
# Test all pages and functionality
```

### Checking for Errors

```bash
# Type check
npm run type-check

# Lint code
npm run lint

# Build (catches build errors)
npm run build
```

### Updating Dependencies

```bash
# Check for updates
npm outdated

# Update all dependencies
npm update

# Test after updating
npm run build
npm run dev
```

## Troubleshooting

### Build Errors

If you get build errors after making changes:

1. Check the error message carefully
2. Verify your markdown frontmatter format
3. Ensure all image paths are correct
4. Run `npm run type-check` to find TypeScript errors

### Images Not Displaying

- Verify image files exist in `public/` directory
- Check file paths start with `/` (e.g., `/images/...`)
- Ensure image filenames match exactly (case-sensitive)
- Clear browser cache and hard refresh (Cmd+Shift+R or Ctrl+Shift+R)

### Blog Posts Not Appearing

- Check frontmatter format matches the example exactly
- Ensure the file is in `content/blog/` directory
- Verify the file extension is `.md`
- Check the `slug` field matches the filename
- Run `npm run build` to see if there are parsing errors

### Changes Not Appearing on Live Site

- Verify changes were committed: `git status`
- Ensure changes were pushed: `git push`
- Check Vercel deployment status at https://vercel.com
- Wait 1-2 minutes for deployment to complete
- Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)

## Contact & Support

**Health in Hand**
Eva, Alabama
Phone: 256-482-2801
Hours: Monday-Thursday 9:00am-5:00pm

For technical issues with the website, contact your web developer or refer to the Next.js documentation: https://nextjs.org/docs

## Version History

- **v1.0.0** (2025-01-15) - Initial launch
  - Homepage with practitioner profiles and services
  - Clinic story page
  - New patient form page
  - Blog with 3 migrated articles
  - Full mobile responsiveness
  - SEO optimization

---

Built with Next.js 15 and React 19 | Deployed on Vercel
