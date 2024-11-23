import React, { useEffect } from 'react'
import { Card, Descriptions, Typography, Row, Col, message, Result } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetSiteQuery } from '@/services/site/api'
import { UiButton } from '@/components/ui/button'
import { IStatistics } from '@/utils/types/site'
import VisitsLineChart from '@/components/charts/line'
import PageviewsBarChart from '@/components/charts/bar'
import VisitsPieChart from '@/components/charts/pie'
import StatisticsTable from './SiteTable'
import VisitsAreaChart from '@/components/charts/area'

const prepareChartData = (statistics: IStatistics[]) =>
  statistics.map((stat) => ({
    date: stat.date,
    visits: +stat.visits,
    pageviews: +stat.pageviews,
  }))

export const SiteInformation: React.FC = () => {
  const { id } = useParams()
  const { data, isLoading, isError } = useGetSiteQuery(id ?? '')

  const navigate = useNavigate()

  useEffect(() => {
    if (isError) {
      message.error('Произошла ошибка при получении списка сайтов')
    }
  }, [isError])

  if (isLoading) {
    return <Typography.Text>Загрузка...</Typography.Text>
  }

  if (!data) {
    return (
      <Result
        status='error'
        title='Произошла ошибка'
        subTitle='Извините, что-то пошло не так. Попробуйте выполнить одно из действий ниже.'
        extra={[
          <UiButton key='home' onClick={() => navigate(-1)}>
            На главную
          </UiButton>,
          <UiButton
            type='default'
            key='reload'
            onClick={() => window.location.reload()}
          >
            Обновить страницу
          </UiButton>,
        ]}
      />
    )
  }

  const { name, url, description, statistics } = data
  const chartData = prepareChartData(statistics)

  return (
    <Row gutter={16} style={{ width: '100%', marginBottom: 16 }}>
      <Col span={24}>
        <Card title='Информация о сайте' style={{ marginBottom: '20px' }}>
          <Descriptions bordered>
            <Descriptions.Item label='Название'>{name}</Descriptions.Item>
            <Descriptions.Item label='URL'>
              <a href={url} target='_blank' rel='noopener noreferrer'>
                {url}
              </a>
            </Descriptions.Item>
            <Descriptions.Item label='Описание'>
              {description}
            </Descriptions.Item>
          </Descriptions>
        </Card>
      </Col>
      <Col span={12}>
        <Card title='Посещения за время' style={{ marginBottom: '20px' }}>
          <VisitsLineChart data={chartData} />
        </Card>
      </Col>
      <Col span={12}>
        <Card
          title='Просмотры страниц за время'
          style={{ marginBottom: '20px' }}
        >
          <PageviewsBarChart data={chartData} />
        </Card>
      </Col>
      <Col span={12}>
        <Card
          title='Динамика посещений (Область)'
          style={{ marginBottom: '20px' }}
        >
          <VisitsAreaChart data={chartData} />
        </Card>
      </Col>
      <Col span={12}>
        <Card title='Распределение посещений' style={{ marginBottom: '20px' }}>
          <VisitsPieChart data={chartData} />
        </Card>
      </Col>
      <Col span={24}>
        <Card title='Статистика по датам'>
          <StatisticsTable statistics={statistics} />
        </Card>
      </Col>
    </Row>
  )
}

export default SiteInformation
