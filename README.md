# 🎯 JobTracker - Next.js Job Application Tracker

A **modern and intuitive job application tracking system** built with **Next.js (App Router)** and **MongoDB**. Keep track of all your job applications, interviews, and follow-ups in one organized place.

## 📂 Project Structure
```
jobs-tracker/
├── app/                           # Next.js App Router
│   ├── api/                       # API routes
│   │   ├── auth/[...nextauth]/    # NextAuth authentication
│   │   ├── jobs/                  # Job CRUD operations
│   │   │   ├── [id]/
│   │   │   ├── create/
│   │   │   └── get/
│   │   ├── register/
│   │   └── users/
│   │       ├── email/
│   │       └── update/
│   ├── auth/                      # Authentication pages
│   │   ├── login.tsx
│   │   └── register.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── _app.tsx
│   ├── dashboard.tsx
│   └── index.tsx
├── components/                    # Reusable UI components
│   ├── common/                    # Common components
│   │   ├── AdminDashboard.tsx
│   │   ├── ExtraTab.tsx
│   │   ├── JobsTab.tsx
│   │   ├── loader.css
│   │   ├── Loader.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProfileTab.tsx
│   │   ├── SessionExist.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Topbar.tsx
│   │   └── UserDashboard.tsx
│   └── ui/                        # UI primitives
│       ├── alert-dialog.tsx
│       ├── alert.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── checkbox.tsx
│       ├── dialog.tsx
│       ├── form.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── radio-group.tsx
│       ├── select.tsx
│       ├── separator.tsx
│       ├── sonner.tsx
│       ├── textarea.tsx
│       └── tooltip.tsx
├── context/                       # React Context
│   └── userContext.js
├── lib/                           # Utilities
│   └── utils.ts
├── models/                        # MongoDB models
│   ├── job.ts
│   └── user.ts
├── pages/                         # Additional pages
│   └── auth/
│       ├── login.tsx
│       ├── register.tsx
│       ├── _app.tsx
│       ├── dashboard.tsx
│       └── index.tsx
├── public/                        # Static assets
│   ├── job-search.jpg
│   ├── next.svg
│   ├── profile.jpg
│   ├── samsung.svg
│   └── xbox.svg
├── utils/                         # Utility functions
│   └── mongodb.js
├── .env
├── .gitignore
├── components.json
├── global.d.ts
├── LICENSE
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

## ⚡ Features

* ✅ **Track unlimited job applications** with detailed information
* ✅ **User authentication** with NextAuth.js
* ✅ **Application status management** across 11 different stages
* ✅ **Advanced search & filter** by company and position
* ✅ **Company & position details** tracking
* ✅ **Multiple application sources** (Campus, Referral, LinkedIn, etc.)
* ✅ **Job type classification** (Full-time, Internship, Part-time, Contract, Remote)
* ✅ **Resume version tracking** for different applications
* ✅ **Follow-up date reminders**
* ✅ **MongoDB database** for persistent storage

## 📋 Application Tracking Fields

Each job application includes:
- Company name
- Job title/position
- Application date (auto-generated)
- Current status (11 different stages)
- Salary range
- Job type (Full-time, Internship, Part-time, Contract, Remote)
- Job location
- Reference/referral name
- Company website
- Application source (Campus, Referral, LinkedIn, Indeed, Company Website, HR Email, Other)
- Personal notes
- Resume version used
- Follow-up date

## 🚀 Getting Started

Clone the repo:
```bash
git clone https://github.com/the-bipu/nextjs-starters.git
cd nextjs-starters/jobs-tracker
```

Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

Set up environment variables:
Create a `.env` file in the root directory:
```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
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

The tracker supports the following application stages in sequential order:

1. **Applied** - Application submitted (default status)
2. **HR Screening** - Initial HR screening/review
3. **Interview Scheduled** - Interview date confirmed
4. **Technical Round** - Technical assessment or interview
5. **Managerial Round** - Interview with hiring manager
6. **Offered** - Job offer received
7. **Accepted** - Offer accepted
8. **Joined** - Started working at the company
9. **Rejected** - Application declined
10. **Ghosted** - No response from company
11. **Withdrawn** - You withdrew your application

## 📦 Deployment

Deploy your job tracker to:

* **Vercel** (recommended for Next.js)
* **Netlify** 
* **Self-hosted** with Docker

### Quick Deploy to Vercel:
1. Push your repo to GitHub
2. Import into Vercel dashboard
3. Add environment variables (MongoDB URI, NextAuth settings)
4. Deploy and start tracking! 🎉

## 🎨 Customization

Easily customize:
- Application status categories in `models/job.ts`
- Job types and application sources
- UI components using shadcn/ui primitives
- Authentication flow with NextAuth
- Database schema in MongoDB models

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
- Keep detailed notes from interviews in the notes field
- Update status regularly to stay organized
- Tag each application with the resume version used
- Record referral names to follow up appropriately

---

🔥 **Start organizing your job search today!** Your dream job is just one tracked application away! 💼✨