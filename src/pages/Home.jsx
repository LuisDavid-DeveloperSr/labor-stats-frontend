import { useState } from "react";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import ResultCard from "../components/ResultCard";
import TimeSeriesChart from "../components/TimeSeriesChart";
import { getUnemployment, getTimeSeries } from "../services/api";

export default function Home() {
  const [result, setResult] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (country, year) => {
    try {
      setLoading(true);
      setError(null);
      setResult(null);
      setChartData([]);

      // 1️⃣ Dato puntual
      const unemployment = await getUnemployment(country, year);

      if (!unemployment || unemployment.tasa_paro == null) {
        setError("No hay datos para ese año.");
        setLoading(false);
        return;
      }

      setResult(unemployment);

      // 2️⃣ Serie temporal
      const series = await getTimeSeries(country);

      if (
        !series ||
        !series.value ||
        !series.dimension?.time?.category?.index
      ) {
        setError("No hay datos temporales disponibles.");
        setLoading(false);
        return;
      }

      const values = series.value;
      const timeIndex = series.dimension.time.category.index;

      const formattedData = Object.entries(timeIndex)
        .map(([periodo, index]) => ({
          periodo,
          tasa: values[index],
        }))
        .filter(item => item.tasa !== undefined);

      if (formattedData.length === 0) {
        setError("No hay datos para mostrar.");
        setLoading(false);
        return;
      }

      setChartData(formattedData);

    } catch (err) {
      console.error(err);
      setError("Error obteniendo los datos.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <Header />

      <SearchForm onSearch={handleSearch} loading={loading} />

      {loading && <p className="section">Cargando datos…</p>}

      {error && <p className="error">{error}</p>}

      {result && <ResultCard data={result} />}

      {chartData.length > 0 && (
        <TimeSeriesChart data={chartData} />
      )}
    </div>
  );
}
