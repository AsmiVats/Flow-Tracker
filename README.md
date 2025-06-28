# Flow Tracker

Flow Tracker is a full-stack application designed as a hormonal change tracker for women. The app helps users monitor their menstrual cycles, track hormonal changes, and provides information about their next cycles.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Frontend](#frontend)
- [Backend (Server)](#backend-server)
- [Development](#development)
- [Deployment](#deployment)
---

## Overview

Flow Tracker empowers women to stay in sync with their bodies by tracking hormonal changes and predicting future cycles. The project is split into a modern React frontend (in `frontend/`) and a backend server (in `server/`).

---

## Features

- **Track Hormonal Changes:** Log and monitor hormonal symptoms and phases.
- **Cycle Prediction:** Get estimates and reminders for your next cycle.
- **Personalized Insights:** Receive cycle-related tips and alerts.
- **React + TypeScript Frontend:** Fast, modern UI powered by Vite.
- **TypeScript Backend:** Scalable API, ready for deployment.
- **Cloudflare Workers Ready:** Server can be deployed as a Cloudflare Worker.

---

## Project Structure

```txt
Flow-Tracker/
│
├── frontend/      # React + TypeScript + Vite frontend app
│   └── README.md
│
├── server/        # Node/TypeScript backend (Cloudflare Worker ready)
│   └── README.md
│
└── README.md      # (You are here)
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- (For server deployment) [Cloudflare Wrangler](https://developers.cloudflare.com/workers/wrangler/)

---

## Frontend

The frontend is a React app bootstrapped with Vite and TypeScript.

### Setup & Development

```bash
cd frontend
npm install
npm run dev
```

### ESLint Configuration

The project uses recommended ESLint rules for TypeScript and React. You can expand the ESLint config as described in [`frontend/README.md`](frontend/README.md).

---

## Backend (Server)

The backend is a TypeScript project, set up to run as a Cloudflare Worker.

### Setup & Development

```bash
cd server
npm install
npm run dev
```

### Deployment

```bash
npm run deploy
```

### Type Generation

For generating or synchronizing types based on your Worker configuration, run:

```bash
npm run cf-typegen
```

> Pass the `CloudflareBindings` as generics when instantiating `Hono` (see `server/README.md` for details).

---

## Development

- Both `frontend` and `server` directories have their own `README.md` for deeper technical details.
- Use the scripts provided in each directory for development, testing, and deployment.



---

## Acknowledgements

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [Hono](https://hono.dev/)

---

## See Also

- [Frontend README](frontend/README.md)
- [Server README](server/README.md)
