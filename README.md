# AquaVeris-AI-Powered-Water-Quality-Risk-Assessment

AquaVeris ActionIQ is an AI-assisted water-quality risk communication project.
Its goal is to transform technical water sample measurements into understandable
risk explanations and practical follow-up guidance for everyday users.

## Safety and responsibility

This project is educational and informational. It does **not** replace:

- Certified laboratory testing
- Official water authority advisories
- Professional medical advice

## Current status: Phase 1 (layout and navigation)

This repository currently includes:

- Next.js (App Router) + TypeScript + Tailwind CSS foundation
- Accessible, responsive landing page (`/`)
- Authenticated-style application workspace shell (`/app`) without auth enforcement yet
- Responsive desktop/mobile navigation for:
  - Dashboard
  - Analyze Water
  - Water Sources
  - History
  - Settings
  - Safety & Methodology
- Placeholder section pages with project-specific empty states for iterative delivery
- Route-level loading, not-found, and error states for the application workspace

Out of scope in this phase:

- Authentication and user management
- Supabase schema and migrations
- Water analysis/rule-engine implementation
- Treatment compatibility logic
- AI model/service integration
- Report generation workflows

## Incremental development approach

The product is intentionally being built one component/module at a time.

- **Phase 0**: foundation and architecture
- **Phase 1**: application layout and navigation (current)
- **Phase 2**: authentication and protected-route workflow (recommended next)
- **Phase 3**: sample intake, validation, and rule-based risk baseline
- **Phase 4**: AI-assisted explanation layer with safety guardrails
- **Phase 5**: history/reporting and operational hardening

## Project structure

```text
src/
  app/                  # App Router pages and layouts
  components/
    layout/             # Landing shell + application shell
    ui/                 # Reusable presentational building blocks
  features/
    analysis/           # Future water analysis module
    recommendations/    # Future prevention/treatment guidance module
    reports/            # Future report assembly module
  lib/                  # Shared utilities and route metadata
  types/                # Shared TypeScript types (future)
```

## How to navigate the placeholder app

1. Start at the landing page (`/`).
2. Select **Open ActionIQ workspace** to enter the app shell.
3. Use desktop sidebar or mobile menu to switch between planned sections.
4. Open **Safety & Methodology** for project guardrails and implementation intent.

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
