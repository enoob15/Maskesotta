# Maskesotta

A charitable platform connecting generous donors with Minnesotans in need of Baklava masks for protection.

## 🎯 Project Overview

Maskesotta is a Next.js web application that facilitates mask donations to Minnesota residents. The platform has two main user flows:

1. **Recipients (Minnesota Residents)**: Register to receive a free Baklava mask
2. **Donors**: Purchase masks ($25 each) that are shipped to verified recipients

## 🏗️ Tech Stack

- **Frontend**: Next.js 15+ (App Router), React, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Backend**: Next.js API Routes
- **Database**: Supabase (PostgreSQL)
- **Payment Processing**: Shopify Storefront API (planned)
- **Deployment**: Vercel (planned)

## 📋 Features

### Current
- ✅ Recipient registration form with Minnesota zip code validation
- ✅ Dual-panel UI (Recipients vs Donors)
- ✅ Supabase database integration
- ✅ API endpoint for recipient registration
- ✅ Responsive design with modern aesthetics

### Planned
- ⏳ Shopify integration for donations
- ⏳ Recipient verification system
- ⏳ Order fulfillment tracking
- ⏳ Admin dashboard

## 🗄️ Database Schema

### `recipients` Table
```sql
- id (uuid, primary key)
- created_at (timestamp)
- name (text)
- address_line1 (text)
- city (text)
- zip (text) -- Minnesota zip codes only
- email (text)
- status (text) -- 'waiting' or 'fulfilled'
- donor_order_id (text) -- Links to Shopify order
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Supabase account
- Environment variables (see `.env.local.example`)

### Installation

```bash
# Clone the repository
git clone https://github.com/enoob15/Maskesotta.git
cd Maskesotta

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your Supabase credentials

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 📁 Project Structure

```
maskesotta/
├── app/
│   ├── api/register/      # Recipient registration endpoint
│   ├── globals.css        # Global styles and design tokens
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page (dual-panel UI)
├── components/
│   └── RecipientForm.tsx  # Registration form component
├── lib/
│   ├── mn-zips.ts         # Minnesota zip code validation
│   ├── supabase/          # Supabase client configuration
│   └── utils.ts           # Utility functions
├── supabase/
│   └── schema.sql         # Database schema
└── public/                # Static assets
```

## 🎨 Design System

The application uses a custom design system with CSS variables for theming:

- **Primary Color**: Amber gradient (`#f59e0b` to `#fbbf24`)
- **Background**: Dark theme with ambient blur effects
- **Typography**: System font stack
- **Components**: Glassmorphic cards with subtle borders

## 🔐 Security

- Recipient data is validated server-side
- Minnesota zip code verification prevents fraud
- Supabase Row Level Security (RLS) policies should be configured
- Email validation on registration

## 📝 API Endpoints

### `POST /api/register`
Register a new recipient for a free mask.

**Request Body:**
```json
{
  "name": "John Doe",
  "address": "123 Main St",
  "city": "Minneapolis",
  "zip": "55401",
  "email": "john@example.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Registration successful!"
}
```

## 🚧 Development Status

This project is in active development. See `.agent/task.md` for current task progress.

## 📄 License

[Add your license here]

## 🤝 Contributing

[Add contribution guidelines if applicable]

## 📧 Contact

For questions or support, please contact [your contact info].
