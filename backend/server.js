const express = require("express");
const cors = require("cors");
const pool = require("./db");

require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/analytics/top-failures/:customer_id", async (req,res)=>{
  const custID = req.params.customer_id;
  try {
      const data = await pool.query(
        `
            SELECT 
            c.customer_name, 
            t.failure_category, 
            COUNT(*) AS ticket_count
            FROM tickets t
            JOIN customers c 
            ON t.customer_id = c.customer_id
            WHERE t.customer_id = $1
            AND t.resolved = FALSE
            AND t.failure_category IS NOT NULL
            GROUP BY c.customer_name, t.failure_category
            ORDER BY ticket_count DESC
            LIMIT 3;
        `,
      [custID]
    );

    res.json({
      customer_id: custID,
      data: data.rows,     
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error:"Internal Server Error",
    }
  );
  }
}
);

app.listen(process.env.PORT, ()=>{
  console.log(`Server running on port ${process.env.PORT}`);
}
);