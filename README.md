# 🎯 JobTracker - Next.js Job Application Tracker

A **modern and intuitive job application tracking system** built with **Next.js (App Router)**. Keep track of all your job applications, interviews, and follow-ups in one organized place.

## 📂 Project Structure
```
.
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Dashboard/Home page
│   ├── applications/      # Application management pages
│   ├── analytics/         # Application statistics & insights
│   └── layout.tsx         # Root layout with navigation
├── components/            # Reusable UI components
│   ├── ApplicationCard.tsx
│   ├── ApplicationForm.tsx
│   ├── StatusBadge.tsx
│   └── FilterBar.tsx
├── context/               # React context providers
│   └── ApplicationContext.tsx  # Global application state
├── lib/                   # Utility functions, helpers
│   ├── storage.ts        # Local storage utilities
│   └── types.ts          # TypeScript type definitions
├── public/                # Static assets (images, icons, etc.)
├── styles/                # Global styles
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── package.json
```

## ⚡ Features

* ✅ **Track unlimited job applications** with detailed information
* ✅ **Application status management** (Applied, Interview, Offer, Rejected, etc.)
* ✅ **Company & position details** tracking
* ✅ **Interview scheduling** and follow-up reminders
* ✅ **Analytics dashboard** with application statistics
* ✅ **Filter & search** functionality
* ✅ **Local storage persistence** - your data stays private
* ✅ **Export applications** to CSV/JSON
* ✅ **Responsive design** - works on mobile and desktop
* ✅ **Dark mode support**

## 📋 Application Tracking Fields

Each job application includes:
- Company name & logo
- Job title & position type (Full-time, Internship, etc.)
- Application date & deadline
- Current status (Applied, Phone Screen, Interview, Offer, Rejected)
- Job posting URL
- Contact person & recruiter info
- Salary range (optional)
- Notes & interview feedback
- Follow-up dates

## 🚀 Getting Started

Clone the repo:
```bash
git clone https://github.com/the-bipu/nextjs-starters.git
cd nextjs-starters
```

Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to start tracking your applications! 🎉

## 🛠️ Scripts

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server (http://localhost:3000) |
| `npm run build` | Build production version |
| `npm run start` | Run production server |
| `npm run lint` | Run ESLint checks |

## 📊 Application Statuses

The tracker supports the following application stages:

1. **Wishlist** - Companies you're interested in
2. **Applied** - Application submitted
3. **Phone Screen** - Initial phone interview scheduled
4. **Interview** - On-site/virtual interview scheduled
5. **Offer** - Job offer received
6. **Accepted** - Offer accepted
7. **Rejected** - Application declined
8. **Withdrawn** - You withdrew your application

## 💾 Data Storage

All your application data is stored **locally in your browser** using localStorage. Your information never leaves your device, ensuring complete privacy.

> **Note:** Clear your browser data carefully - this will delete your tracked applications. Consider using the export feature regularly to backup your data.

## 📦 Deployment

Deploy your job tracker to:

* **Vercel** (recommended for Next.js)
* **Netlify** 
* **Self-hosted** with Docker

### Quick Deploy to Vercel:
1. Push your repo to GitHub
2. Import into Vercel dashboard
3. Deploy and start tracking! 🎉

## 🎨 Customization

Easily customize:
- Application status categories
- Color themes and branding
- Additional tracking fields
- Analytics metrics
- Export formats

## 📌 Roadmap

- [x] Core application tracking
- [x] Status management
- [x] Basic analytics
- [ ] Email reminders for follow-ups
- [ ] Browser extension for one-click tracking
- [ ] Integration with job boards (LinkedIn, Indeed, etc.)
- [ ] Calendar sync for interviews
- [ ] AI-powered application insights
- [ ] Team/mentor sharing capabilities
- [ ] Mobile app (React Native)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📜 License

This project is licensed under the MIT License.

## 💡 Tips for Job Seekers

- Track applications immediately after submitting
- Set follow-up reminders for 1-2 weeks after applying
- Keep detailed notes from interviews
- Update status regularly to stay organized
- Use analytics to identify patterns in your job search

---

🔥 **Start organizing your job search today!** Your dream job is just one tracked application away! 💼✨