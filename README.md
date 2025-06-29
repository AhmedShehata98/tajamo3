# Tajamo3: Effortless Event Management

_A modern, full-stack platform for managing, hosting, and participating in events with ease._

## 🚀 Overview

Tajamo3 helps organizers and attendees streamline everything from event registration and ticketing to notifications and real-time updates. Whether you're organizing corporate events, team meetings, conferences, or social gatherings, Tajamo3 provides all the tools you need to create memorable and well-managed events.

**Key Features:**
- 📅 Complete event lifecycle management
- 🎫 Integrated ticketing and payment processing
- 👥 Team collaboration and management
- 📊 Real-time analytics and attendance tracking
- 📱 Mobile-responsive design
- 🔔 Smart notifications and reminders
- 💳 Secure payment gateway integration

## 🗂️ Main Pages

### Public Pages
- **Home (`/`):** User authentication and login portal with welcoming design
- **Registration (`/register`):** New user registration with phone verification

### Dashboard & Management
- **Dashboard (`/dashboard`):** Main overview with upcoming events, statistics, and quick actions
- **Events (`/dashboard/events`):** Browse, search, and manage all events (upcoming and past)
- **Create Event (`/dashboard/events/create`):** Step-by-step event creation wizard with advanced options
- **Tickets (`/dashboard/tickets`):** Comprehensive ticket management and purchase history
- **Orders (`/dashboard/orders`):** Payment history, transaction details, and order management
- **Teams (`/dashboard/teams`):** Team collaboration, member management, and team events

### User & Settings
- **Profile & Settings (`/dashboard/settings`):** Personal information, preferences, and notification settings
- **Company Management (`/dashboard/company`):** Organization details and company-wide settings
- **Attendance (`/dashboard/attendance`):** Event attendance tracking and analytics
- **Payment Processing (`/dashboard/payments`):** Payment gateway integration and transaction handling

_**Note for Contributors:** As the project evolves, please update these descriptions with more detailed functionality and add any new pages that are implemented._

## 📚 Backend/API Documentation

For comprehensive backend logic, authentication systems, database schemas, and detailed API endpoint documentation, see [SERVER_DOCS.md](./server/SERVER_DOCS.md).

_**Note:** If SERVER_DOCS.md doesn't exist yet, contributors are encouraged to create this documentation file to help other developers understand the backend architecture._

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm, pnpm, yarn, or bun package manager

### Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

### Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## 🤝 Contributing

We welcome contributions from the community! Whether you're fixing bugs, adding new features, improving documentation, or suggesting enhancements, your help is appreciated.

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Development Guidelines
- Follow the existing code style and conventions
- Update documentation for any new features
- Ensure all tests pass before submitting
- Add comments for complex logic

## 📋 Tech Stack

- **Frontend:** Nuxt.js 3, Vue.js 3, TypeScript
- **Styling:** Tailwind CSS, Shadcn/ui components
- **State Management:** Pinia (via useUser composables)
- **Authentication:** JWT with phone verification
- **Payments:** Integrated payment gateway
- **Icons:** Nuxt Icon with multiple icon sets
- **Development:** Hot reload, TypeScript support

---

**Built with ❤️ for seamless event management**
