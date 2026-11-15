
import { useState } from "react";
import { createRoot } from "react-dom/client";

function Admin() {
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [enquiries, setEnquiries] = useState([]);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

const filteredEnquiries = enquiries.filter((item) => {
  const matchesType =
    filter === "All" || item.enquiry_type === filter;

  const search = searchTerm.toLowerCase();

  const matchesSearch =
    item.full_name.toLowerCase().includes(search) ||
    item.email.toLowerCase().includes(search) ||
    (item.company || "").toLowerCase().includes(search);

  return matchesType && matchesSearch;
});
  const totalEnquiries = enquiries.length;

const employerCount = enquiries.filter(
  (item) => item.enquiry_type === "Employer"
).length;

const jobSeekerCount = enquiries.filter(
  (item) => item.enquiry_type === "Job Seeker"
).length;
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ password })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      setToken(data.token);
      await loadEnquiries(data.token);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function loadEnquiries(authToken) {
    const response = await fetch(
      "http://localhost:5000/api/admin/enquiries",
      {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Could not load enquiries");
    }

    setEnquiries(data);
  }

  function logout() {
    setToken("");
    setPassword("");
    setEnquiries([]);
    setError("");
  }

  if (!token) {
    return (
      <main style={styles.page}>
        <form onSubmit={handleLogin} style={styles.login}>
          <h1>Tekvito Admin</h1>
          <p>Administrator Login</p>

          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />

          <button type="submit" disabled={loading} style={styles.button}>
            {loading ? "Logging in..." : "Login"}
          </button>

          {error && <p style={styles.error}>{error}</p>}
        </form>
      </main>
    );
  }

  return (
    <main style={styles.dashboard}>
      <header style={styles.header}>
        <div>
          <h1>Tekvito Dashboard</h1>
          <p>Manage employer and job seeker enquiries</p>
        </div>

        <button onClick={logout} style={styles.button}>
          Logout
        </button>
      
</header>

<div style={{
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  marginBottom: "30px"
}}>
  <div style={styles.card}>
    <h3>Total Enquiries</h3>
    <h1>{totalEnquiries}</h1>
  </div>

  <div style={styles.card}>
    <h3>Employers</h3>
    <h1>{employerCount}</h1>
  </div>

  <div style={styles.card}>
    <h3>Job Seekers</h3>
    <h1>{jobSeekerCount}</h1>
  </div>
</div>


<h2>Enquiries</h2>

<div style={{
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  marginBottom: "20px"
}}>
  {["All", "Employer", "Job Seeker"].map((option) => (
    <button
      key={option}
      onClick={() => setFilter(option)}
      style={{
        padding: "10px 18px",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        background: filter === option ? "#102b4e" : "#e2e8f0",
        color: filter === option ? "white" : "#102b4e"
      }}
    >
      {option}
    </button>
  ))}
</div>

<p>Showing {filteredEnquiries.length} enquiries</p>
<input
  type="text"
  placeholder="Search by name, email or company..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  style={{
    width: "100%",
    maxWidth: "450px",
    padding: "13px",
    marginBottom: "25px",
    border: "1px solid #dce5ec",
    borderRadius: "6px",
    fontSize: "14px"
  }}
/>



      {enquiries.length === 0 ? (
        <p>No enquiries found.</p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.cell}>Date</th>
                <th style={styles.cell}>Type</th>
                <th style={styles.cell}>Name</th>
                <th style={styles.cell}>Email</th>
                <th style={styles.cell}>Company</th>
                <th style={styles.cell}>Message</th>
              </tr>
            </thead>

            <tbody>
              {filteredEnquiries.map((item) => (
                <tr key={item.id}>
                  <td style={styles.cell}>
                    {new Date(item.created_at).toLocaleString()}
                  </td>
                  <td style={styles.cell}>{item.enquiry_type}</td>
                  <td style={styles.cell}>{item.full_name}</td>
                  <td style={styles.cell}>{item.email}</td>
                  <td style={styles.cell}>{item.company || "-"}</td>
                  <td style={styles.cell}>{item.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    background: "#f2f6fa",
    fontFamily: "Arial, sans-serif"
  },
  login: {
    width: "320px",
    maxWidth: "85%",
    padding: "35px",
    background: "white",
    borderRadius: "12px",
    boxShadow: "0 10px 35px #00000012"
  },
  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "13px",
    margin: "15px 0",
    border: "1px solid #ddd",
    borderRadius: "6px"
  },
  button: {
    padding: "12px 20px",
    background: "#102b4e",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },
  error: {
    color: "red"
  },
  dashboard: {
    minHeight: "100vh",
    padding: "30px",
    background: "#f5f7fa",
    fontFamily: "Arial, sans-serif",
    color: "#102b4e"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginBottom: "35px"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    background: "white"
  },
  cell: {
    padding: "13px",
    border: "1px solid #e2e8f0",
    textAlign: "left",
    verticalAlign: "top"
  }
};

export default Admin;
createRoot(document.getElementById("admin-root")).render(
  <Admin />
);
