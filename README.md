<div align="center">
  <img src="https://raw.githubusercontent.com/ziur-vela/nova-analytics/master/public/logo.svg" alt="Nova Analytics" width="120" />
</div>

# Nova Analytics

**Privacy-First Data Intelligence**

Nova Analytics is a source-level rebrand of [umami-software/umami](https://github.com/umami-software/umami) v3.1.0, built as a trial assignment for DCM Ops. It demonstrates forking an open-source project, applying a full rebrand at the source level, building custom auth flows on top of a single-admin backend, and deploying to self-hosted infrastructure via Docker and Cloudflare Tunnel.

🔗 **Live:** [novaanalyrics.com](https://novaanalyrics.com) · **Fallback:** [nova-analytics.opcontrol.net](https://nova-analytics.opcontrol.net)

---

## What was changed from upstream

- All "Umami" strings replaced across all `public/intl/messages/` translation files
- Logo and favicon replaced with Nova Analytics SVG mark
- Brand colors applied (`#F5A623` orange / `#1B2A4A` navy) across `global.css` and component files
- App name and metadata updated in `package.json`, `next.config.ts`, `layout.tsx`
- Hardcoded "Umami" text replaced in `SideNav.tsx`, `MobileNav.tsx`, and layout files
- Logo components (`Logo.tsx`, `LogoWhite.tsx`) updated to Nova Analytics SVG
- Post-logout redirect changed from `/login` to `/` (landing page)

## What was added

- **Landing page** — `src/app/(landing)/page.tsx` — branded marketing page with hero, features grid, stats strip, and CTA
- **Signup page** — `src/app/(auth)/signup/page.tsx`
- **Login page** — `src/app/(auth)/login/page.tsx`
- **`/api/register` route** — `src/app/api/register/route.ts` — server-side proxy that creates users via Umami's admin API without exposing the admin token to the client

---

## Auth Design

Umami supports only a single admin account natively. Nova Analytics adds a public signup flow via a server-side proxy pattern:

1. Signup form POSTs to `/api/register`
2. Server holds `NOVA_ADMIN_TOKEN` (env var, never exposed to browser)
3. Proxies user creation to Umami's `POST /api/users` with admin JWT
4. On success, auto-assigns the Nova Analytics website to the new user via Prisma
5. User is redirected to `/login`

Login uses Umami's native `POST /api/auth/login`. The returned JWT is stored as `localStorage.setItem('umami.auth', JSON.stringify(token))` to match Umami's internal `getItem` JSON.parse wrapper.

---

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Database | PostgreSQL 15 + Prisma ORM |
| Auth | JWT — Umami native + custom `/api/register` proxy |
| Deployment | Docker Compose (2 containers: app + postgres) |
| Tunnel | Cloudflare Tunnel (`infosites-tunnel`) |
| Domain | `novaanalyrics.com` (Cloudflare) |

---

## Running locally

```bash
git clone https://github.com/ziur-vela/nova-analytics.git
cd nova-analytics
npm install --legacy-peer-deps
```

Create `.env.local`:
```env
DATABASE_URL=postgresql://nova:nova@localhost:5432/nova
NOVA_ADMIN_TOKEN=<admin JWT from running instance>
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

```bash
npm run build
npm start
```

## Running with Docker

```bash
docker compose up -d
```

The app boots on port `8102` mapped to container port `3000`. On first boot, Prisma runs migrations automatically. Obtain the admin JWT via:

```bash
curl -X POST http://localhost:8102/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"umami"}'
```

Set the returned token as `NOVA_ADMIN_TOKEN` in your `.env` and change the admin password immediately.

---

---

## AI Toolchain

| Tool | Role |
|------|------|
| Claude Sonnet 4.6 (claude.ai) | Planning, architecture, brand design, landing page HTML, auth system design, all phase prompts, all documentation |
| OpenCode TUI + DeepSeek V4 Pro | All terminal operations: build, deploy, debug patches, Cloudflare config, tracking injection |
| ChatGPT / DALL-E | Logo mark and wordmark PNG assets |

Tool substitution (OpenCode instead of Claude Code) was pre-approved by DCM before build work began.

---

## Upstream

Forked from [umami-software/umami](https://github.com/umami-software/umami) — MIT License.
