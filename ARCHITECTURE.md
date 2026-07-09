/**
 * Architecture Documentation
 * 
 * This document outlines the project structure and architecture.
 */

# MENVOTI AI Platform - Architecture

## Project Structure

```
src/
├── lib/                    # Core libraries
│   ├── ai/                # OpenAI integration
│   ├── database/          # Supabase integration
│   ├── calendar/          # Appointment scheduling
│   ├── email/             # Email service
│   ├── automation/        # Workflow automation
│   ├── utils/             # Utility functions
│   ├── openai.ts          # OpenAI client
│   ├── supabase.ts        # Supabase client
│   └── resend.ts          # Email client
├── types/                 # TypeScript type definitions
│   ├── chat.ts
│   ├── customer.ts
│   ├── appointment.ts
│   └── common.ts
├── hooks/                 # React custom hooks
├── services/              # Business logic services
│   ├── appointmentService.ts
│   ├── customerService.ts
│   └── chatService.ts
├── actions/               # Next.js server actions
├── config/                # Configuration
│   └── site.ts
├── prompts/               # AI prompts
│   └── systemPrompt.ts
├── data/                  # Static data and constants
├── dashboard/             # Dashboard components
├── components/            # React components (existing)
├── app/                   # Next.js App Router (existing)
└── public/                # Static assets (existing)
```

## Clean Architecture Principles

### Separation of Concerns
- **Presentation Layer**: React components in `/components` and `/dashboard`
- **Business Logic Layer**: Services in `/services` and libraries in `/lib`
- **Data Access Layer**: Database operations in `/lib/database`
- **Infrastructure Layer**: External integrations (`openai.ts`, `supabase.ts`, `resend.ts`)

### Dependency Direction
Outer layers → Inner layers (dependencies point inward)
```
Components → Hooks → Services → Libraries → External APIs
```

### Type Safety
- All TypeScript types centralized in `/types`
- Strong typing throughout the application
- Type definitions before implementation

## Key Components

### 1. External Integrations (`lib/`)
- **OpenAI**: AI chat and completion functionality
- **Supabase**: Database and authentication
- **Resend**: Email sending service

### 2. Services (`services/`)
Business logic layer that combines multiple libraries
- Appointment management
- Customer management
- Chat interactions

### 3. Type System (`types/`)
- Chat types for conversations
- Customer types for user management
- Appointment types for scheduling
- Common types for shared functionality

### 4. Configuration (`config/`)
- Centralized application settings
- Environment-based configuration
- Feature flags

### 5. AI Integration (`lib/ai` + `prompts/`)
- System prompts for consistent AI behavior
- Conversation management
- Message handling

## Development Workflow

### To Add New Feature:
1. Define types in `types/`
2. Create service in `services/`
3. Create hooks in `hooks/` for React integration
4. Create components in `components/` or `dashboard/`
5. Create server actions in `actions/` if needed

### Database Operations:
1. Query through `services/`
2. Services use `lib/supabase.ts`
3. Always validate and authorize

### Email Operations:
1. Define notification in `lib/email/`
2. Send through email service
3. Track delivery status

## Best Practices

1. **No circular dependencies**: Inner layers don't know about outer layers
2. **Error handling**: All async operations should have proper error handling
3. **Type safety**: Always use strict TypeScript types
4. **Documentation**: Comment complex logic
5. **Constants**: Use `data/index.ts` for static values
6. **Configuration**: Use `config/site.ts` for settings
7. **Logging**: Implement audit trails for important operations
8. **Security**: Validate all user input, use server actions for mutations

## Future Enhancements

- [ ] Implement caching strategy
- [ ] Add monitoring and observability
- [ ] Setup CI/CD pipeline
- [ ] Add test suite (unit, integration, e2e)
- [ ] Implement API rate limiting
- [ ] Add webhook support
- [ ] Setup database migrations
- [ ] Add real-time notifications
