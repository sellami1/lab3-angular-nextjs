# Lab3 - Angular & NextJS

# Table of contents

* [Demo](#demo)
* [Project overview](#project-overview)
* [Architecture & ports](#architecture--ports)
* [Quickstart (run entire stack)](#quickstart-run-entire-stack)
* [Folder structure (high level)](#folder-structure-high-level)
* [What to compare — checklist & code pointers](#what-to-compare----checklist--code-pointers)
* [API (Express) — contract & examples](#api-express----contract--examples)

---

# Demo


# Project overview

Goal: provide two implementations of the same small app so you can compare how Angular and Next.js works:

* Routing (declarative vs file-based)
* Route parameters
* Parent → Child data sharing (component communication)
* [API consumption (Express + MongoDB backend)](https://github.com/sellami1/smart-home-backend)

---

# Architecture & ports

```
[Browser] --> [Angular (4200)]            \
                 |                         \
                 +--> [Express API (3001)] --> [MongoDB (27017)]
                 |                         /
[Browser] --> [Next.js (3000)]            /
```

Default ports used in this project (configurable via env):

* Angular frontend: `http://localhost:4200`
* Next.js frontend: `http://localhost:3000`
* Express API server: `http://localhost:3001` (prefix `/api`)
* MongoDB: `27017` (internal for compose; data persisted in named volume)

---

# Quickstart — run the whole stack

> Requirements: Docker & Docker Compose installed.

1. Clone the repo:

```bash
git clone https://github.com/sellami1/lab3-angular-nextjs
cd lab3-angular-nextjs
```

2. Start everything:

```bash
docker-compose up --build
```

3. Open in your browser:

* Angular: `http://localhost:4200`
* NextJS: `http://localhost:3000`
* API: `http://localhost:3001` (or `http://localhost:3001/api`)

4. Stop and remove containers:

```bash
docker-compose down
```

If you only want to rebuild one service:

```bash
docker-compose up --build <service-name>        # only rebuild & run API
```

---

# Folder structure (high level)

```
/ (repo-root)
  README.md
  docker-compose.yml
  mongo-data
  ng-front
      Dockerfile
      README.md
      angular.json
      nginx.conf
      package-lock.json
      package.json
      public
          favicon.ico
      src
          app
              app-module.ts
              app-routing-module.ts
              app.css
              app.html
              app.spec.ts
              app.ts
              components
                  appareil-detail
                      appareil-detail.css
                      appareil-detail.html
                      appareil-detail.spec.ts
                      appareil-detail.ts
                  appareil-item
                      appareil-item.css
                      appareil-item.html
                      appareil-item.spec.ts
                      appareil-item.ts
                  appareil-list
                      appareil-list.css
                      appareil-list.html
                      appareil-list.spec.ts
                      appareil-list.ts
                  header
                      header.css
                      header.html
                      header.spec.ts
                      header.ts
              core
                  appareil.service.ts
                  core-module.ts
                  models
                      appareil.model.ts
                      appareil.spec.ts
              pages
                  contact
                      contact.css
                      contact.html
                      contact.spec.ts
                      contact.ts
                  home
                      home.css
                      home.html
                      home.spec.ts
                      home.ts
                  login
                      login.css
                      login.html
                      login.spec.ts
                      login.ts
          index.html
          main.ts
          styles.css
      tsconfig.app.json
      tsconfig.json
      tsconfig.spec.json
  nxjs-front
      Dockerfile
      README.md
      eslint.config.mjs
      next-env.d.ts
      next.config.ts
      package-lock.json
      package.json
      public
          favicon.ico
      src
          app
              appareil
                  [id]
                      page.tsx
              child.tsx
              contact
                  page.tsx
              global.css
              header.tsx
              layout.tsx
              login
                  page.tsx
              page.tsx
      tsconfig.json
```

**Key files to inspect**

* `apps/angular-app/src/app/app-routing.module.ts`
* `apps/angular-app/src/app/components/...` (Parent/Child examples)
* `apps/angular-app/src/app/services/device.service.ts` (HttpClient usage)
* `apps/nextjs-app/pages/` or `apps/nextjs-app/app/` (file-based routes)
* `apps/nextjs-app/pages/devices/[id].tsx` (route params example)
* `api/routes/devices.js` (REST endpoints)
* `api/models/Device.js` (Mongoose schema — `Appareil` collection)

---

# What to compare — checklist & code pointers

Below are focused items to inspect and compare while working through the apps. Each item includes where to look and what to notice.

## 1) Routing

* **Angular**: centralized router config (`app-routing.module.ts`) — routes declared as objects; lazy-loading examples if present.

  * Notice: navigation via `routerLink`, programmatic navigation via `Router.navigate`.
* **Next.js**: file-system routing — route files/dirs map to URLs automatically.

  * Notice: `pages/devices/[id].js` or `app/devices/[id]/page.tsx` for dynamic routes; linking via `<Link href="/devices/1">`.

## 2) Route parameters

* **Angular**: `ActivatedRoute` (`paramMap` or `params` observable) in component to read `:id`.

  * Example: `this.route.snapshot.paramMap.get('id')` or `this.route.paramMap.subscribe(...)`.
* **Next.js**: `useRouter()` client-side or `getServerSideProps/getStaticProps` / route segment parameters on server.

  * Example: `const { query } = useRouter(); const id = query.id;`

## 3) Parent → Child data sharing

* **Angular**:

  * `@Input()` for parent → child props.
  * `@Output()` + `EventEmitter` for child → parent events.
  * Observables / Services for sibling communication.
* **Next.js / React**:

  * Parent passes props to child components (`<Child someProp={value} />`).
  * Callback props for child → parent.
  * Context API or lifting state for deeper flows.

## 4) API calls (GET and GET/:id)

* **Angular**:

  * `HttpClient` service (RxJS `Observable`) — check `device.service.ts`.
  * Observables, `subscribe()` in components or `async` pipe in templates.
* **Next.js / React**:

  * `fetch()` / `axios` in `useEffect` for client-side, or server-side via `getServerSideProps` / `getStaticProps` / `app` server components (Next 13).
  * Promises, `async/await`.

**Compare**: request lifecycle, where network code lives (service layer vs in-component), SSR vs CSR implications for data fetching.

---

# API (Express) — contract & examples

The API is a simple REST server with endpoints to manage `devices` (collection name in MongoDB: `Appareil`, DB `test-devices`).

## Endpoints (base: `/api`)

* `GET  /api/devices` — list all devices
* `GET  /api/devices/:id` — get device by id
* `POST /api/devices` — create device
* `PUT  /api/devices/:id` — update device
* `DELETE /api/devices/:id` — delete device
