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

This repository now contains the Phase 0 foundation plus a Phase 1 application
shell for planned product sections:

- Next.js (App Router) + TypeScript + Tailwind CSS setup
- Accessible, responsive landing page (still public-facing)
- Responsive ActionIQ application shell (desktop + mobile navigation)
- Placeholder pages for planned sections:
  - Dashboard
  - Analyze Water
  - Water Sources
  - History
  - Settings
  - Safety & Methodology
- Reusable UI/layout starter components for incremental feature delivery
- Scalable folder structure for future modules
- Environment variable template (`.env.example`) with placeholders only

Still out of scope in this phase:

- Authentication
- Database schema and migrations
- Water analysis algorithms
- Treatment compatibility logic
- AI model/service integration
- Report generation workflows

## Incremental development approach

- **Phase 0**: foundation and architecture ✅
- **Phase 1**: layout and navigation shell ✅
- **Phase 2**: authentication and protected user context (next recommended step)
- **Phase 3**: water input + rule-based evaluation baseline
- **Phase 4**: treatment compatibility, AI explanations, and saved reports

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

## Navigate the Phase 1 placeholder app

- Landing page: `/`
- Enter the app shell: click **Enter ActionIQ app shell** (or open `/dashboard`)
- Placeholder routes:
  - `/dashboard`
  - `/analyze-water`
  - `/water-sources`
  - `/history`
  - `/settings`
  - `/safety-methodology`

Implementation is intentionally incremental: components are being delivered one
phase at a time rather than all modules at once.

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
