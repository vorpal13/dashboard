import React from 'react'
import { Table, TableProps } from 'antd'
import { IStatistics } from '@/utils/types/site'

const StatisticsTable: React.FC<{ statistics: IStatistics[] }> = ({
  statistics,
}) => {
  const columns: TableProps<IStatistics>['columns'] = [
    {
      title: 'Дата',
      dataIndex: 'date',
      key: 'date',
      sorter: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    },
    {
      title: 'Посещения',
      dataIndex: 'visits',
      key: 'visits',
      sorter: (a, b) => a.visits - b.visits,
      filters: [
        { text: 'Больше 100', value: 100 },
        { text: 'Меньше 100', value: 0 },
      ],
      onFilter: (value, record) =>
        value === 100 ? record.visits > 100 : record.visits <= 100,
    },
    {
      title: 'Просмотры страниц',
      dataIndex: 'pageviews',
      key: 'pageviews',
      sorter: (a, b) => a.pageviews - b.pageviews,
      filters: [
        { text: 'Больше 200', value: 200 },
        { text: 'Меньше 200', value: 0 },
      ],
      onFilter: (value, record) =>
        value === 200 ? record.pageviews > 200 : record.pageviews <= 200,
    },
  ]

  return (
    <Table
      dataSource={statistics}
      columns={columns}
      rowKey='date'
      pagination={{ pageSize: 5 }}
    />
  )
}

export default StatisticsTable
