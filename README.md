# HRMS Portal (NestJS)

> 🍴 This is a fork of [Harsh-Patel-05/HRMS-Portal-using-nestjs](https://github.com/Harsh-Patel-05/HRMS-Portal-using-nestjs), kept as a personal reference/exploration of another HRMS implementation in NestJS + Prisma.

A Human Resource Management System backend covering organizations, departments, employees, attendance, and leave requests.

## Features

- **Auth** — JWT-based authentication with Passport strategies
- **Organization** — top-level organization records
- **Department** — departments within an organization
- **Employee** — employee records with associated `Address` and `Employee_document` uploads
- **Attendance** — attendance tracking per employee
- **Leave Requests** — leave request submission/management (`Leave_request`)
- **Swagger** — interactive API docs generated from decorators

## Tech Stack

- [NestJS 10](https://nestjs.com/) (TypeScript)
- [Prisma](https://www.prisma.io/) ORM
- Passport + JWT authentication
- Jest for unit/e2e testing

## Data Model

Defined in `prisma/schema.prisma`:

- `User`, `UserSession` — accounts & sessions
- `Organization`, `Department` — org structure
- `Employee`, `Address`, `Employee_document` — employee records
- `Attendance` — attendance tracking
- `Leave_request` — leave management

## Project Structure

```
src/
├── auth/               # JWT auth, Passport strategy
├── organization/       # organization CRUD
├── department/         # department CRUD
├── employee/           # employee CRUD
├── employee_document/  # employee document uploads
├── leave_request/       # leave requests
├── attendance/          # attendance tracking
├── validator/           # custom DTO validators
├── config/              # app configuration
└── prisma/              # Prisma service/module
```

## Getting Started

### Prerequisites
- Node.js 18+
- A database reachable via `DATABASE_URL` (Prisma)

### Setup

```bash
git clone https://github.com/vsmm-world/HRMS-Portal.git
cd HRMS-Portal
npm install
```

Create a `.env` file in the project root (**do not commit this file** — it's gitignored):

```bash
DATABASE_URL="<your-database-connection-string>"
```

Generate the Prisma client and sync the schema:

```bash
npx prisma generate && npx prisma db push
```

Run the app:

```bash
npm run start:dev
```

### Tests

```bash
npm run test        # unit tests
npm run test:e2e     # e2e tests
npm run test:cov     # coverage report
```

> ⚠️ **Note**: An earlier commit in this fork accidentally included a `.env` file with live database/API credentials. History has been rewritten to remove it and `.env` is now gitignored — if you're pulling an old clone, re-clone fresh and never commit real secrets to this repo.

## Attribution

Original project by [Harsh Patel](https://github.com/Harsh-Patel-05) at [HRMS-Portal-using-nestjs](https://github.com/Harsh-Patel-05/HRMS-Portal-using-nestjs). This fork is kept for personal reference.

## License

UNLICENSED — personal reference fork, not intended for production use.
