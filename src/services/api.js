const BASE_URL = import.meta.env.VITE_API_URL;

export async function getUnemployment(country, year) {
  const res = await fetch(
    `${BASE_URL}/api/unemployment?country=${country}&year=${year}`
  );

  if (!res.ok) {
    throw new Error("Error obteniendo desempleo");
  }

  return res.json();
}

export async function getTimeSeries(country) {
  const res = await fetch(
    `${BASE_URL}/api/timeseries?country=${country}`
  );

  if (!res.ok) {
    throw new Error("Error obteniendo serie temporal");
  }

  return res.json();
}

export async function getCountries() {
  const res = await fetch(`${BASE_URL}/api/countries`);

  if (!res.ok) {
    throw new Error("Error obteniendo países");
  }

  return res.json();
}
