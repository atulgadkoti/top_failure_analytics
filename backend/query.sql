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