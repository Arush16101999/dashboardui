import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function Pie() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: "High" },
            { id: 1, value: 15, label: "Medium" },
            { id: 2, value: 20, label: "Low" },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}
