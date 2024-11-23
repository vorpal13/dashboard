import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

const VisitsAreaChart: React.FC<{ data: any[] }> = ({ data }) => (
  <AreaChart
    width={600}
    height={300}
    data={data}
    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
  >
    <CartesianGrid strokeDasharray='3 3' />
    <XAxis dataKey='date' />
    <YAxis />
    <Tooltip />
    <Area
      type='monotone'
      dataKey='visits'
      stroke='#8884d8'
      fill='#8884d8'
      name='Посещения'
    />
  </AreaChart>
)

export default VisitsAreaChart
