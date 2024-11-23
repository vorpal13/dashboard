import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'

const COLORS = ['#8884d8', '#82ca9d', '#ffc658']

const VisitsPieChart: React.FC<{ data: any[] }> = ({ data }) => (
  <PieChart width={600} height={300}>
    <Pie
      data={data}
      dataKey='visits'
      nameKey='date'
      cx='50%'
      cy='50%'
      outerRadius={100}
      fill='#8884d8'
      label
    >
      {data.map((_, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
)

export default VisitsPieChart
