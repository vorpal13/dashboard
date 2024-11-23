import { useMemo } from 'react'
import { green, red } from '@ant-design/colors'

export const useInfoCard = (diff: number) => {
  const isPositive = diff > 0
  const color = useMemo(() => (isPositive ? green[6] : red[5]), [isPositive])

  return { isPositive, color }
}
