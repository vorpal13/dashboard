import { InfoCard } from '@/components'
import { ISite } from '@/utils/types/site'
import { Col, Row, Spin } from 'antd'

type Props = {
  data: ISite[]
  isLoading: boolean
}

export const Statistics = ({ data, isLoading }: Props) => {
  const calculateTotal = (key: 'visits' | 'pageviews') =>
    data?.reduce(
      (siteAcc, site) =>
        siteAcc +
        (site.statistics?.reduce(
          (statAcc, stat) => statAcc + (+stat[key] || 0),
          0
        ) || 0),
      0
    )
  const stats = [
    {
      title: 'Количество сайтов',
      value: data.length || 0,
    },
    {
      title: 'Общее количество визитов',
      value: calculateTotal('visits') || 0,
    },
    {
      title: 'Общее количество просмотров страниц',
      value: calculateTotal('pageviews') || 0,
    },
    {
      title: 'Новых сайтов за последние 7 дней',
      value: Math.floor(Math.random() * 50),
    },
  ]

  return (
    <Row gutter={16} style={{ width: '100%', marginBottom: 16 }}>
      {stats.map(({ title, value }, index) => (
        <Col key={index} span={6}>
          <Spin spinning={isLoading}>
            <InfoCard
              title={title}
              value={value}
              diff={Math.random() * 30}
              height={180}
              justify='space-between'
            />
          </Spin>
        </Col>
      ))}
    </Row>
  )
}
