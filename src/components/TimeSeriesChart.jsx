import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function TimeSeriesChart({ data }) {
  return (
    <div className="chart-container">
      <h2 className="estadic">Evolución del desempleo</h2>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <YAxis tickFormatter={(v) => `${v}%`} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="tasa"
            stroke="#2563eb"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
