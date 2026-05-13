#  Top Failure Analytics Widget

A full-stack analytics dashboard that helps SaaS companies identify the **top 3 most common customer support failure categories** for each customer. This helps account managers proactively resolve recurring issues.

---
##  Tech Stack

### Frontend
- React (Vite)
- TypeScript
- Fetch API
- Inline CSS styling

### Backend
- Node.js
- Express.js
- PostgreSQL (Supabase)

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: Supabase

---
## 📁 Project Structure

```text
top_failure_analytics/
├── frontend/          # React UI (Vercel)
└── backend/           # Express API (Render)
    ├── server.js      # Main API logic
    ├── db.js          # Database connection
    └── query.sql      # SQL Schema & Logic
├── README.md

API Endpoint

### Get Top Failure Categories

GET /api/analytics/top-failures/:customer_id

---

##  Example Response

```json
{
  "customer_id": 1,
  "data": [
    {
      "failure_category": "integration_error",
      "ticket_count": "3"
    },
    {
      "failure_category": "billing_confusion",
      "ticket_count": "2"
    },
    {
      "failure_category": "feature_misunderstanding",
      "ticket_count": "1"
    }
  ]
}

##  How It Works

Frontend (Vercel)
      ↓
Backend API (Render)
      ↓
PostgreSQL Database (Supabase)

##  Live Links

- Frontend: https://top-failure-analytics.vercel.app  
- Backend: https://top-failure-analytics.onrender.com

##  Author

Built by Atul Gadkoti  
Full-stack project demonstrating SQL + API + Frontend integration
