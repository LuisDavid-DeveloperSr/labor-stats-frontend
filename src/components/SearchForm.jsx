import { useEffect, useState } from "react";
import { getCountries } from "../services/api";

export default function SearchForm({ onSearch, loading }) {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("ES");
  const [year, setYear] = useState("2023");
  const [error, setError] = useState(null);

  // 🔹 Cargar países al montar
  useEffect(() => {
    async function loadCountries() {
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (err) {
        console.error(err);
        setError("No se pudieron cargar los países");
      }
    }

    loadCountries();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(country, year);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        {/* País */}
        <div className="form-group">
          <label>País</label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            disabled={loading}
          >
            {countries.map((c) => (
              <option key={c.code} value={c.code}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        {/* Año */}
        <div className="form-group">
          <label>Año</label>
          <input
            type="number"
            min="2000"
            max="2025"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            disabled={loading}
          />
        </div>

        {/* Botón */}
        <button type="submit" disabled={loading}>
          {loading ? "Buscando..." : "Buscar"}
        </button>
      </form>

      {error && <p className="error">{error}</p>}
    </>
  );
}
