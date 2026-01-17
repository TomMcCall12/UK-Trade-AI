# ZA Electrical Ltd - Business Website

## Overview

This is a production-ready business website for ZA Electrical Ltd, a professional electrician service based in Burgess Hill, West Sussex, UK. The site is designed to convert visitors into customers through easy contact options (phone, WhatsApp, quote requests) and establish trust through NICEIC credentials and professional presentation.

The website serves real business data and must maintain strict accuracy - no placeholder content, fake testimonials, or invented statistics are permitted.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Shadcn/ui component library (New York style variant)
- **State Management**: TanStack React Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript (ESM modules)
- **API Pattern**: RESTful endpoints under `/api/*`
- **Development**: Vite dev server with HMR proxied through Express
- **Production**: Static file serving from built assets

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between client/server)
- **Validation**: Zod schemas with drizzle-zod integration
- **Current Storage**: In-memory storage (MemStorage class) - ready for PostgreSQL migration
- **Database Config**: Drizzle Kit configured for PostgreSQL when DATABASE_URL is provided

### Project Structure
```
├── client/           # React frontend application
│   ├── src/
│   │   ├── components/  # UI components (layout, shadcn/ui)
│   │   ├── pages/       # Route page components
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utilities and business data
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data storage abstraction
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared code between client/server
│   └── schema.ts     # Database schema and Zod types
└── migrations/       # Drizzle database migrations
```

### Key Design Decisions

1. **Monorepo Structure**: Client and server share TypeScript types through the `shared/` directory, ensuring type safety across the stack.

2. **Path Aliases**: Configured `@/` for client code, `@shared/` for shared code, simplifying imports.

3. **Business Data Centralization**: All business information stored in `client/src/lib/business-data.ts` as the single source of truth.

4. **Component Architecture**: Shadcn/ui components in `client/src/components/ui/` with custom layout components in `client/src/components/layout/`.

## External Dependencies

### Database
- **PostgreSQL**: Required when DATABASE_URL environment variable is set
- **Drizzle Kit**: Database migrations via `npm run db:push`

### Third-Party Services
- **WhatsApp Business**: Direct messaging integration via wa.me links
- **Trustpilot/Google/Checkatrade**: External review platform links (display only)

### Key NPM Packages
- `express` - Web server framework
- `drizzle-orm` / `drizzle-zod` - Database ORM and validation
- `@tanstack/react-query` - Server state management
- `wouter` - Client-side routing
- `react-hook-form` - Form state management
- `zod` - Runtime type validation
- `tailwindcss` - Utility-first CSS
- Radix UI primitives - Accessible component foundations

### Build & Development
- `vite` - Frontend build tool with HMR
- `tsx` - TypeScript execution for Node.js
- `esbuild` - Production server bundling