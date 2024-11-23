import { FC } from 'react'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons'
import { Card, Typography, Space } from 'antd'
import CountUp from 'react-countup'
import { InfoCardProps } from './InfoCard.types'
import { useInfoCard } from './useInfoCard'

export const InfoCard: FC<InfoCardProps> = ({
  title,
  value,
  diff,
  justify,
  height,
  ...others
}) => {
  const { isPositive, color } = useInfoCard(diff)

  return (
    <Card {...others} style={{ height }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: justify || 'space-between',
          height: height ? height - 60 : 'auto',
        }}
      >
        <Typography.Text>{title}</Typography.Text>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography.Title level={2} style={{ margin: 0 }}>
            <CountUp end={value} />
          </Typography.Title>
          <Space style={{ color }}>
            {isPositive ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
            <Typography.Text
              style={{
                color,
                fontWeight: 500,
              }}
            >
              <CountUp end={diff} />%
            </Typography.Text>
          </Space>
        </div>
      </div>
    </Card>
  )
}
