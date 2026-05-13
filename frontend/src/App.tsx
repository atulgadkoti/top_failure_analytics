import { useEffect, useState } from "react";

type FailureData = {
  customer_name?: string;
  failure_category: string;
  ticket_count: string;
};
  const customers = [
  { id: 1, name: "Atul Gadkoti" },
  { id: 2, name: "Kshitiz Rai" },
  { id: 3, name: "Aniket Munjal" },
  { id: 4, name: "Shubham Kumar" },
];

function App() {
  const [selectedCustomer, setSelectedCustomer] = useState(1);
  const [data, setData] = useState<FailureData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch(
      `http://localhost:5000/api/analytics/top-failures/${selectedCustomer}`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [selectedCustomer]);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f7fb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "500px",
          background: "white",
          borderRadius: "16px",
          padding: "24px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        }}
      >
        <h2
          style={{
            marginBottom: "8px",
            fontSize: "24px",
            color: "#111827",
          }}
        >
          Top Failure Categories
        </h2>

        <p
          style={{
            marginBottom: "20px",
            color: "#6b7280",
            fontSize: "14px",
          }}
        >
          Most common unresolved support issues
        </p>
        <div style={{ marginBottom: "24px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "bold",
              color: "#374151",
            }}
          >
            Select Customer
          </label>

          <select
            value={selectedCustomer}
            onChange={(e) => setSelectedCustomer(Number(e.target.value))}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #d1d5db",
              fontSize: "14px",
            }}
          >
            {customers.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.name}
              </option>
            ))}
          </select>
        </div>
        {loading && (
          <div>
            {[1, 2, 3].map((item) => (
              <div key={item} style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    height: "16px",
                    width: "60%",
                    background: "#e5e7eb",
                    borderRadius: "6px",
                    marginBottom: "10px",
                  }}
                />

                <div
                  style={{
                    height: "14px",
                    width: `${80 - item * 15}%`,
                    background: "#d1d5db",
                    borderRadius: "6px",
                  }}
                />
              </div>
            ))}
          </div>
        )}

        {!loading && data.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "30px 10px",
            }}
          >
            <div
              style={{
                fontSize: "48px",
                marginBottom: "10px",
              }}
            >
              ✅
            </div>

            <p
              style={{
                color: "#374151",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              No failure patterns detected
            </p>

            <p
              style={{
                color: "#6b7280",
                marginTop: "8px",
                fontSize: "14px",
              }}
            >
              This customer is in great shape.
            </p>
          </div>
        )}
        {!loading &&
          data.length > 0 &&
          data.map((item) => (
            <div
              key={item.failure_category}
              style={{
                marginBottom: "22px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <span
                  style={{
                    fontWeight: "600",
                    color: "#111827",
                  }}
                >
                  {item.failure_category}
                </span>

                <span
                  style={{
                    color: "#4f46e5",
                    fontWeight: "bold",
                  }}
                >
                  {item.ticket_count}
                </span>
              </div>

              <div
                style={{
                  width: "100%",
                  height: "14px",
                  background: "#e5e7eb",
                  borderRadius: "999px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${Number(item.ticket_count) * 25}%`,
                    background: "#4f46e5",
                    borderRadius: "999px",
                    transition: "width 0.4s ease",
                  }}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;