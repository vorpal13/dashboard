import { useGetSitesListQuery } from '@/services/site/api'
import { Col, Row } from 'antd'
import { SiteTable, Statistics } from '@/components'

export const HomePage = () => {
  const { data, isLoading } = useGetSitesListQuery()

  return (
    <>
      <Statistics isLoading={isLoading} data={data ?? []} />
      <Row>
        <Col span={24}>
          <SiteTable />
        </Col>
      </Row>
    </>
  )
}
