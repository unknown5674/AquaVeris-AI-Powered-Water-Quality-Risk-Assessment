# AquaVeris-AI-Powered-Water-Quality-Risk-Assessment

AquaVeris ActionIQ is an AI-assisted water-quality risk communication project.
Its goal is to transform technical water sample measurements into understandable
risk explanations and practical follow-up guidance for everyday users.

## Safety and responsibility

This project is educational and informational. It does **not** replace:

- Certified laboratory testing
- Official water authority advisories
- Professional medical advice

## Current status: Phase 0 (foundation)

This repository currently contains only the foundation layer:

- Next.js (App Router) + TypeScript + Tailwind CSS setup
- Accessible, responsive landing page
- Reusable UI/layout starter components
- Scalable folder structure for future modules
- Environment variable template (`.env.example`) with placeholders only

Out of scope in this phase:

- Authentication
- Database schema and migrations
- Water analysis algorithms
- Treatment compatibility logic
- AI model/service integration
- Report generation workflows

## Incremental development approach

- **Phase 0**: foundation and architecture (this release)
- **Phase 1**: sample intake, validation, and rule-based risk baseline
- **Phase 2**: AI-assisted explanation layer with safety guardrails
- **Phase 3**: history/reporting and operational hardening

## Project structure

```text
src/
  app/                  # App Router pages and global layout
  components/
    layout/             # Site shell, header, footer
    ui/                 # Reusable presentational building blocks
  features/
    analysis/           # Future water analysis module
    recommendations/    # Future prevention/treatment guidance module
    reports/            # Future report assembly module
  lib/                  # Shared utilities and service clients (future)
  types/                # Shared TypeScript types (future)
```

## Local setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create your local env file:

   ```bash
   cp .env.example .env.local
   ```

3. Run development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000).

## Quality commands

```bash
npm run lint
npm run typecheck
npm run build
```

## Tech stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
