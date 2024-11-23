import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

const PageviewsBarChart: React.FC<{ data: any[] }> = ({ data }) => (
  <BarChart
    width={600}
    height={300}
    data={data}
    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
  >
    <CartesianGrid strokeDasharray='3 3' />
    <XAxis dataKey='date' />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey='pageviews' fill='#82ca9d' name='Просмотры страниц' />
  </BarChart>
)

export default PageviewsBarChart
