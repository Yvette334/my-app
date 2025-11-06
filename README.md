# 🌐 Next.js Assignment (App Router + Rendering Techniques)

## 📘 Overview
This project was built as part of the **Next.js Assignment** covering key Next.js fundamentals such as:
- App Router structure  
- Layouts and nested layouts  
- Client-Side Rendering (CSR), Server-Side Rendering (SSR), Static Site Generation (SSG), and Incremental Static Regeneration (ISR)  
- Basic styling using Tailwind CSS  


---

## 🏗️ Project Structure



app/
├── layout.tsx # Main layout (header, footer)
├── page.tsx # Home page (CSR)
├── about/
│ └── page.tsx # About page (SSR)
└── blog/
├── layout.tsx # Blog layout with sidebar
├── page.tsx # Blog list page (SSG)
└── [id]/
└── page.tsx # Blog details page (ISR)


---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Yvette334/my-app.git
cd my-app

2. Install Dependencies
npm install

3. Run the Project Locally
npm run dev


Then open your browser and go to:

http://localhost:3000

🎨 Technologies Used

Next.js

React

Tailwind CSS

TypeScript (default with Next.js)

JSONPlaceholder API (for mock data)

⚡ Rendering Techniques Used
Page	Description	Rendering Type
/ (Home)	Displays a welcome message and live updating time using useEffect.	CSR (Client-Side Rendering)
/about	Fetches author info using an API with cache: "no-store" and error handling.	SSR (Server-Side Rendering)
/blog	Fetches list of posts at build time and regenerates every 60s.	SSG (Static Site Generation)
/blog/[id]	Fetches single post by ID and regenerates every 30s.	ISR (Incremental Static Regeneration)
🧭 Layouts
Main Layout (layout.tsx)

Includes:

Header navigation links → Home, About, Blog

<main> section for rendering child pages

Footer section

Blog Layout (blog/layout.tsx)

Includes:

Sidebar with categories (Tech, Lifestyle, Education)

Displays only inside the /blog section