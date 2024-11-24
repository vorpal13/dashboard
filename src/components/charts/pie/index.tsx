import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'

const COLORS = [
  '#8884d8', // Фиолетовый
  '#82ca9d', // Зеленый
  '#ffc658', // Желтый
  '#ff6b6b', // Красный
  '#6b5b95', // Темно-фиолетовый
  '#4d4dff', // Синий
  '#ffcccb', // Светло-розовый
  '#f7b733', // Оранжевый
  '#20b2aa', // Бирюзовый
  '#ff85a1', // Розовый
  '#005f73', // Темно-бирюзовый
  '#f8961e', // Теплый оранжевый
  '#06d6a0', // Лаймово-зеленый
  '#118ab2', // Ярко-синий
  '#073b4c', // Темно-синий
]

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
