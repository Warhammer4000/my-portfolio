# Workspace

## Overview

Personal portfolio website for Tanimul Haque Khan — AI Empowered Engineer. A dark-themed, single-page React + Vite portfolio focused on showcasing AI products shipped to production.

## Artifacts

- **portfolio** (`artifacts/portfolio/`) — The main portfolio site, served at `/`. Static frontend, no backend needed.
- **api-server** (`artifacts/api-server/`) — Express API server (not used by portfolio currently).

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React + Vite, TailwindCSS, framer-motion, Radix UI / shadcn
- **API framework**: Express 5 (api-server, not used by portfolio)
- **Database**: PostgreSQL + Drizzle ORM (not used by portfolio)
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Portfolio Sections

1. Hero — Name, title "AI Empowered Engineer", value prop, CTAs
2. Featured AI Products — 4-5 AI product cards (placeholder, to be replaced with real content)
3. AI Tech Stack — Visual showcase of tools (OpenAI, LangChain, etc.)
4. About — Short bio
5. Career History — Timeline of past roles
6. Impact / Testimonials — Quotes and metrics
7. Contact — LinkedIn + email

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
