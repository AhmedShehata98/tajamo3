# Server Directory Documentation

## Overview

The `/server` directory serves as the backend foundation for the Tajamo3 application, a comprehensive event management and ticketing platform built with Nuxt.js. This directory implements a full-featured REST API that handles user authentication, event management, ticket booking, payment processing, and real-time notifications using modern web technologies.

The server-side architecture leverages Nuxt's built-in server capabilities to provide a robust backend with TypeScript support, standardized response schemas, and seamless integration with Supabase as the primary database and real-time subscription service.

## Directory Structure

```
server/
├── api/                    # REST API endpoints
│   ├── auth/              # Authentication endpoints
│   ├── events/            # Event management
│   ├── notifications/     # Notification system
│   ├── orders/            # Order management
│   ├── otp/               # OTP verification
│   ├── payments/          # Payment processing
│   ├── registrations/     # User registration management
│   ├── server-events.ts   # SSE endpoint for real-time events
│   ├── ticket-types/      # Ticket type management
│   ├── tickets/           # Ticket management
│   └── users/             # User management
├── utils/                 # Utility functions and database operations
│   ├── auth/              # Authentication utilities
│   ├── events/            # Event-related utilities
│   ├── notifications/     # Notification utilities
│   ├── orders/            # Order-related utilities
│   ├── otps/              # OTP utilities
│   ├── payments/          # Payment utilities
│   ├── registrations/     # Registration utilities
│   ├── response-schema.ts # Standardized API responses
│   ├── supabase.ts        # Supabase client configuration
│   ├── ticket-types/      # Ticket type utilities
│   ├── tickets/           # Ticket utilities
│   └── users/             # User utilities
└── tsconfig.json          # TypeScript configuration
```

### /api Directory Responsibilities

The `/api` directory contains all REST API endpoints organized by domain:

- **Authentication & Authorization**: User registration, login, logout, token management
- **Event Management**: CRUD operations for events with pagination and filtering
- **User Management**: User profiles, contact information management
- **Order & Payment Processing**: Order creation, payment gateway integration (Paymob)
- **Ticket Management**: Ticket generation, validation, and type management
- **Notification System**: Real-time notifications with SSE support
- **OTP Verification**: Phone and email verification workflows

### /utils Directory Responsibilities

The `/utils` directory provides reusable business logic and database operations:

- **Database Abstraction**: Supabase client and query utilities
- **Response Standardization**: Consistent API response formatting
- **Authentication Logic**: JWT token management and validation
- **Business Logic**: Domain-specific operations for each module

## Core Features

### 1. REST API Architecture
- **HTTP Methods**: GET, POST, PATCH, DELETE operations
- **Error Handling**: Comprehensive error responses with proper status codes
- **Input Validation**: Request body validation for all endpoints
- **Query Parameters**: Pagination, filtering, and sorting support

### 2. Supabase Integration
- **Database Operations**: CRUD operations using Supabase client
- **Real-time Subscriptions**: PostgreSQL change listeners for notifications
- **Service Role Access**: Secure server-side database operations
- **Row Level Security**: Database-level access control

### 3. JWT Authentication
- **Token-based Authentication**: Secure JWT implementation
- **HTTP-only Cookies**: Secure token storage
- **Token Verification**: Middleware for protected routes
- **User Session Management**: Login/logout functionality

### 4. Server-Sent Events (SSE) for Notifications
- **Real-time Communication**: Live notification delivery
- **Connection Management**: Client connection tracking
- **Event Streaming**: Continuous data flow for notifications
- **Database Change Listeners**: Automatic notification triggers

### 5. Standardized Response Schema
- **Consistent Format**: Uniform API response structure
- **Success/Error Indication**: Clear success and error states
- **Pagination Support**: Built-in pagination metadata
- **Type Safety**: TypeScript interfaces for all responses

## Key API Endpoints

### Authentication Routes (`/api/auth/`)
- **POST `/auth/register`** - User registration with JWT token generation
- **POST `/auth/login`** - User authentication and session creation
- **POST `/auth/logout`** - Session termination and cookie cleanup
- **POST `/auth/gen-token`** - Token generation utilities
- **GET `/auth/verify-token`** - Token validation endpoint

### OTP Verification (`/api/otp/`)
- **POST `/otp`** - Generate and send OTP codes
- **POST `/otp/verify`** - Verify OTP codes
- **POST `/otp/verify-email`** - Email verification workflow
- **POST `/otp/verify-phone`** - Phone number verification workflow
- **GET `/otp/[otpId]`** - Retrieve specific OTP details

### Server-Sent Events (`/api/server-events`)
- **GET `/server-events`** - Establish SSE connection for real-time notifications
- **Authentication Required**: JWT token validation for secure connections
- **Real-time Updates**: Live notification streaming

### Order Management (`/api/orders/`)
- **GET `/orders`** - Retrieve user's orders with authentication
- **POST `/orders`** - Create new orders with ticket booking
- **GET `/orders/[orderId]`** - Get specific order details

### Payment Processing (`/api/payments/`)
- **POST `/payments`** - Initialize payment transactions
- **POST `/payments/confirmation`** - Handle payment gateway callbacks
- **GET `/payments/[paymentId]`** - Retrieve payment details

### Ticket Management (`/api/ticket-types/`)
- **GET `/ticket-types`** - List available ticket types
- **POST `/ticket-types`** - Create new ticket types (admin)
- **PATCH `/ticket-types`** - Update ticket type information

### User Management (`/api/users/`)
- **GET `/users`** - List users (with pagination)
- **POST `/users`** - Create new user accounts
- **GET `/users/me`** - Get current user profile
- **GET `/users/[userId]`** - Get specific user details

### Notification System (`/api/notifications/`)
- **GET `/notifications`** - Retrieve user notifications
- **DELETE `/notifications`** - Bulk delete notifications
- **PATCH `/notifications`** - Update notification status
- **GET `/notifications/sse`** - SSE endpoint for real-time notifications

### Registration Management (`/api/registrations/`)
- **GET `/registrations/user/[userId]`** - Get user event registrations

## Utilities

### Supabase Client (`/utils/supabase.ts`)
```typescript
// Centralized Supabase configuration
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);
export default supabase;
export type SupabaseClient = ReturnType<typeof createClient>;
```

**Features:**
- Service role authentication for server-side operations
- Centralized client configuration
- Type-safe database operations
- Real-time subscription capabilities

### Response Schema (`/utils/response-schema.ts`)
```typescript
export type ResponseSchemaType<T> = {
  data: T;
  success: boolean;
  message: string;
};

export class ResponseSchema<T> implements ResponseSchemaType<T> {
  constructor(
    public data: T,
    public success: boolean,
    public message: string
  ) {}
}
```

**Features:**
- Consistent API response format
- Generic type support for data payload
- Built-in pagination support with `ResponseSchemaWithPagination`
- Clear success/error indication

## Authentication Architecture

### JWT Implementation
- **Token Generation**: Secure JWT creation with configurable expiration
- **Cookie Storage**: HTTP-only cookies for enhanced security
- **Token Verification**: Middleware-based authentication checks
- **User Context**: Decoded token payload available in protected routes

### Security Features
- **HTTP-only Cookies**: Prevents XSS attacks on token storage
- **Secure Flags**: HTTPS-only cookie transmission
- **SameSite Protection**: CSRF attack prevention
- **Token Expiration**: Configurable session timeouts (8 hours default)

## Notification Architecture

### Real-time System
The notification system implements a real-time communication pattern using:

1. **Database Triggers**: PostgreSQL triggers on the notifications table
2. **Supabase Realtime**: WebSocket connections for change subscriptions
3. **SSE Implementation**: Server-Sent Events for browser compatibility
4. **Client Management**: Active connection tracking and cleanup

### Notification Flow
1. Database change occurs (INSERT on notifications table)
2. Supabase realtime subscription triggers
3. SSE clients receive formatted notification data
4. Frontend updates UI in real-time

## Example API Response Structure

### Successful Response
```json
{
  "data": {
    "id": "123",
    "name": "Event Name",
    "description": "Event description"
  },
  "success": true,
  "message": "Event created successfully"
}
```

### Paginated Response
```json
{
  "data": [...],
  "success": true,
  "message": "Events fetched successfully",
  "pagination": {
    "total": 50,
    "page": 0,
    "limit": 10
  }
}
```

### Error Response
```json
{
  "statusCode": 400,
  "statusMessage": "Required fields are missing"
}
```

## TypeScript Configuration

The server directory uses a dedicated TypeScript configuration (`tsconfig.json`) that extends the main Nuxt TypeScript setup:

```json
{
  "extends": "../.nuxt/tsconfig.server.json"
}
```

**Benefits:**
- Full type safety across all server-side code
- IntelliSense support for better developer experience
- Compile-time error detection
- Integration with Nuxt's auto-generated types

## GitHub Repository Reference

For detailed code exploration and contributions, visit the server directory on GitHub:
[https://github.com/AhmedShehata98/tajamo3/tree/main/server](https://github.com/AhmedShehata98/tajamo3/tree/main/server)

### Key Files to Explore:
- [API Routes](https://github.com/AhmedShehata98/tajamo3/tree/main/server/api) - Complete endpoint implementations
- [Utilities](https://github.com/AhmedShehata98/tajamo3/tree/main/server/utils) - Reusable business logic
- [Response Schema](https://github.com/AhmedShehata98/tajamo3/blob/main/server/utils/response-schema.ts) - API response standardization
- [Supabase Configuration](https://github.com/AhmedShehata98/tajamo3/blob/main/server/utils/supabase.ts) - Database client setup

## Coverage Limitations

**Note**: This documentation provides comprehensive coverage of the server directory based on the available codebase analysis. Some specific implementation details, environment configurations, and advanced features may require direct code examination for complete understanding. The documentation focuses on the architectural overview and key functionalities that form the backbone of the Tajamo3 event management platform.

For developers onboarding to this project, this document serves as a starting point to understand the server-side architecture, while detailed implementation specifics can be found in the individual source files within the repository.