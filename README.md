# Health Vault - Personal Health Management System

A comprehensive health management application built with Next.js 14, TypeScript, Firebase, and Tailwind CSS.

## Features

- 🔐 **Secure Authentication** - Firebase Auth with email/password
- 📊 **Health Dashboard** - Overview of medications, appointments, and health readings
- 💊 **Medication Management** - Track medications with real-time progress
- 📅 **Appointment Scheduling** - Manage doctor appointments
- 📈 **Health Analytics** - Monitor health trends and readings
- 🔄 **Real-time Sync** - Firebase Firestore for live data updates
- 📱 **Responsive Design** - Works on all devices
- 🎨 **Modern UI** - Built with shadcn/ui components

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Backend**: Firebase (Auth + Firestore)
- **UI Components**: shadcn/ui, Radix UI
- **Icons**: Lucide React
- **Deployment**: Vercel

## Quick Start

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/your-username/health-vault.git
   cd health-vault
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**
   \`\`\`
   http://localhost:3000
   \`\`\`

## Firebase Configuration

The project is pre-configured with Firebase. Your Firebase config is already integrated:

- **Project ID**: health--vault
- **Authentication**: Email/Password enabled
- **Database**: Firestore with real-time updates
- **Analytics**: Google Analytics integrated

## Project Structure

\`\`\`
health-vault/
├── app/                    # Next.js 14 App Router
│   ├── dashboard/         # Protected dashboard page
│   ├── login/            # Login page
│   ├── signup/           # Signup page
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles
├── components/           # Reusable components
│   ├── ui/              # shadcn/ui components
│   └── protected-route.tsx
├── contexts/            # React contexts
│   └── auth-context.tsx # Authentication context
├── hooks/               # Custom hooks
│   ├── use-firestore.ts # Firestore data management
│   └── use-toast.ts     # Toast notifications
├── lib/                 # Utilities
│   ├── firebase.ts      # Firebase configuration
│   └── utils.ts         # Utility functions
└── package.json
\`\`\`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Features Overview

### Authentication
- Secure user registration and login
- Protected routes with authentication guards
- User profile management

### Health Dashboard
- Real-time medication tracking
- Appointment management
- Health readings overview
- Progress visualization

### Data Management
- Real-time Firestore integration
- Automatic data synchronization
- Secure user data isolation

## Deployment

The project is ready for deployment on Vercel:

1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For support, email support@healthvault.com or create an issue on GitHub.

---

**Health Vault** - Take control of your health journey! 🏥💙
