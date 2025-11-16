# Sakshi Varkhede - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern UI/UX**: Dark theme with neon blue accents and smooth animations
- **Responsive Design**: Works seamlessly on all devices
- **Project Showcase**: Detailed project pages with descriptions and tech stacks
- **Contact Form**: Integrated with SendGrid API for email delivery
- **Smooth Animations**: Powered by Framer Motion
- **SEO Optimized**: Built with Next.js App Router for optimal performance

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email Service**: SendGrid API

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your SendGrid API credentials:
```
SENDGRID_API_KEY=your-sendgrid-api-key-here
SENDGRID_EMAIL_TO=your-email@example.com
SENDGRID_EMAIL_FROM=your-email@example.com
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard:
   - `SENDGRID_API_KEY`
   - `SENDGRID_EMAIL_TO`
   - `SENDGRID_EMAIL_FROM`
4. Deploy!

The project is configured for Vercel deployment and requires no additional setup.

## 📁 Project Structure

```
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # SendGrid API integration
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── projects/
│   │   └── [slug]/
│   │       ├── page.tsx          # Dynamic project pages
│   │       └── not-found.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── lib/
│   └── utils.ts
├── public/
│   └── resume.pdf                # Replace with actual resume
└── ...config files
```

## 📝 Notes

- Replace `public/resume.pdf` with your actual resume PDF
- Update social media links in `app/components/Footer.tsx`
- Customize project details in `app/projects/[slug]/page.tsx`
- Ensure SendGrid API credentials are properly configured for contact form functionality

## 📄 License

This project is private and proprietary.

---

Built with ❤️ by Sakshi Varkhede

