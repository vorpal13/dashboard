import { Button, ButtonProps } from 'antd'
import { ReactNode } from 'react'

interface Props extends ButtonProps {
  children?: ReactNode
}

export const UiButton = ({ children, type = 'primary', ...props }: Props) => {
  return (
    <Button type={type} {...props}>
      {children}
    </Button>
  )
}
