import { FC } from 'react'
import { Card, Space, Popconfirm } from 'antd'
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  PlusOutlined,
} from '@ant-design/icons'
import { UiTable } from '@/components'
import { SiteDrawer } from '@/components/siteDrawer'
import { useSiteTable } from './useSiteTable'
import { useNavigate } from 'react-router-dom'
import { TableProps } from 'antd/es/table'
import { ISite, IStatistics } from '@/utils/types/site'
import { createFilters } from '@/utils/createFilters'
import { UiButton } from '../ui/button'

export const SiteTable: FC = () => {
  const {
    data,
    isLoading,
    deleteSite,
    isDrawerOpen,
    setIsDrawerOpen,
    recordToEdit,
    setRecordToEdit,
  } = useSiteTable()
  const navigate = useNavigate()

  const columns: TableProps<ISite>['columns'] = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id.localeCompare(b.id),
      filters: data ? createFilters(data, 'id') : [],
      onFilter: (value, record) => record.id.includes(value as string),
    },
    {
      title: 'Название',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      filters: data ? createFilters(data, 'name') : [],
      onFilter: (value, record) => record.name === value,
    },
    {
      title: 'URL',
      dataIndex: 'url',
      key: 'url',
      sorter: (a, b) => a.url.localeCompare(b.url),
      filters: data ? createFilters(data, 'url') : [],
      onFilter: (value, record) => record.url === value,
    },
    {
      title: 'Описание',
      dataIndex: 'description',
      key: 'description',
      sorter: (a, b) => a.description.localeCompare(b.description),
    },
    {
      title: 'Действия',
      dataIndex: 'actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <UiButton
            icon={<EyeOutlined />}
            onClick={() => navigate(`/site/${record.id}`)}
          />
          <UiButton
            icon={<EditOutlined />}
            onClick={() => {
              console.log('record', record)
              setRecordToEdit(record)
              setIsDrawerOpen(true)
            }}
          />
          <Popconfirm
            title='Вы действительно хотите удалить?'
            onConfirm={() => deleteSite(record.id)}
          >
            <UiButton type='primary' danger icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ]

  return (
    <>
      <Card
        title='Управление сайтами'
        style={{ width: '100%', height: '100%' }}
        extra={
          <UiButton
            icon={<PlusOutlined />}
            onClick={() => setIsDrawerOpen(true)}
          >
            Добавить
          </UiButton>
        }
      >
        <UiTable<ISite>
          loading={isLoading}
          dataSource={data || []}
          columns={columns}
          rowKey='id'
          expandable={{
            expandedRowRender: (record) => (
              <UiTable<IStatistics>
                dataSource={record.statistics}
                columns={[
                  {
                    title: 'Дата',
                    dataIndex: 'date',
                    key: 'date',
                    sorter: (a, b) =>
                      new Date(a.date).getTime() - new Date(b.date).getTime(),
                    filters: record.statistics
                      ? createFilters(record.statistics, 'date')
                      : [],
                    onFilter: (value, record) => record.date === value,
                  },
                  {
                    title: 'Визиты',
                    dataIndex: 'visits',
                    key: 'visits',
                    sorter: (a, b) => a.visits - b.visits,
                  },
                  {
                    title: 'Просмотры страниц',
                    dataIndex: 'pageviews',
                    key: 'pageviews',
                    sorter: (a, b) => a.pageviews - b.pageviews,
                  },
                ]}
                pagination={false}
                rowKey='date'
              />
            ),
            rowExpandable: (record) => record.statistics?.length > 0,
          }}
        />
      </Card>
      <SiteDrawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        recordToEdit={recordToEdit}
      />
    </>
  )
}
