import { useEffect, useState } from "react";
import "./styles.css";

const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Organic Turmeric Powder",
    category: "Food",
    producer: "GreenFields Pvt Ltd",
    status: "Published",
    updatedAt: "2024-12-12",
    declaredBy: "GreenFields Pvt Ltd",
    declaredOn: "2024-12-10",
    evidenceCount: 3,
    versions: [
      { version: "v1.0", date: "2024-11-01" },
      { version: "v1.1", date: "2024-12-10" }
    ]
  },
  {
    id: 2,
    name: "Ayurvedic Hair Oil",
    category: "Personal Care",
    producer: "HerbalGlow",
    status: "Submitted",
    updatedAt: "2024-12-08",
    declaredBy: "HerbalGlow",
    declaredOn: "2024-12-05",
    evidenceCount: 2,
    versions: [
      { version: "v1.0", date: "2024-10-20" },
      { version: "v1.1", date: "2024-12-05" }
    ]
  }
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="container grid">
        {[1, 2, 3].map((i) => (
          <div key={i} className="skeleton" />
        ))}
      </div>
    );
  }

  if (selected) {
    return (
      <div className="container">
        <button onClick={() => setSelected(null)}>← Back</button>

        <div className="detail">
          <h2>{selected.name}</h2>

          <div className="section">
            <h3>Disclosure Summary</h3>
            <p>Declared by: {selected.declaredBy}</p>
            <p>Declared on: {selected.declaredOn}</p>
            <p>Evidence attached: {selected.evidenceCount}</p>
            <p className="hint">Evidence provided by the producer</p>
          </div>

          <div className="section">
            <h3>Version History</h3>
            {selected.versions.map((v, i) => (
              <p key={i}>
                {v.version} — {v.date}
              </p>
            ))}
          </div>

          <div className="disclaimer">
            This information is self-declared by the producer. Hedamo does not
            independently verify or validate the accuracy of these disclosures.
          </div>
        </div>
      </div>
    );
  }

  let filtered = MOCK_PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  if (category) filtered = filtered.filter((p) => p.category === category);
  if (status) filtered = filtered.filter((p) => p.status === status);

  if (sort === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sort === "date") {
    filtered.sort(
      (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
    );
  }

  return (
    <div className="container">
      <h1>Product Disclosures</h1>

      <div className="controls">
        <input
          placeholder="Search products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Food">Food</option>
          <option value="Personal Care">Personal Care</option>
        </select>

        <select onChange={(e) => setStatus(e.target.value)}>
          <option value="">All Status</option>
          <option value="Draft">Draft</option>
          <option value="Submitted">Submitted</option>
          <option value="Published">Published</option>
        </select>

        <select onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="date">Last Updated</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <p>No products match the current filters.</p>
      ) : (
        <div className="grid">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="card"
              tabIndex={0}
              onClick={() => setSelected(p)}
            >
              <span className="badge">{p.status}</span>
              <h3>{p.name}</h3>
              <p className="meta">{p.category}</p>
              <p className="meta">{p.producer}</p>
              <p className="meta">Updated: {p.updatedAt}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
