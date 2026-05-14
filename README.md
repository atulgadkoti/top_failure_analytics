# Top Failure Analytics

> Full-stack analytics dashboard that surfaces the top 3 most common customer support failure categories per customer so account managers can proactively resolve recurring issues.

---

## Tech Stack

- **Frontend:** React + Vite, TypeScript
- **Backend:** Node.js, Express
- **Database:** PostgreSQL (Supabase)
- **Deployment:** Frontend on Vercel, Backend on Render, Database on Supabase

---

## Project Layout

```text
top_failure_analytics/
├── frontend/          # React UI (Vercel)
└── backend/           # Express API (Render)
    ├── server.js      # Main API logic
    ├── db.js          # Database connection
    └── query.sql      # SQL schema & logic
```

---

## API

### Get Top Failure Categories

`GET /api/analytics/top-failures/:customer_id`

### Example Request

GET https://top-failure-analytics.onrender.com/api/analytics/top-failures/1

Response :

```json
{
  "customer_id": 1,
  "data": [
    { "failure_category": "integration_error", "ticket_count": "3" },
    { "failure_category": "billing_confusion", "ticket_count": "2" },
    { "failure_category": "feature_misunderstanding", "ticket_count": "1" }
  ]
}
```

---

## How it works

1. Frontend requests top failures for a customer from the backend API.
2. Backend runs an SQL query against the Supabase/Postgres instance to aggregate tickets by failure category and returns the top 3.
3. Frontend displays the results so account teams can act.

---

## Run locally

1. Start or connect a PostgreSQL database (Supabase recommended).
2. From the `backend` folder, install dependencies and start the API:

```bash
cd backend
npm install
npm start
```

3. From the `frontend` folder, install dependencies and start the app:

```bash
cd frontend
npm install
npm run dev
```

Adjust environment variables and ports as needed for your setup.

---

## Live Links

- Frontend: https://top-failure-analytics.vercel.app
- Backend: https://top-failure-analytics.onrender.com

---

## Author

Built by Atul Gadkoti
