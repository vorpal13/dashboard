import { Table, TableProps } from 'antd'

export const UiTable = <T extends object>(props: TableProps<T>) => {
  return <Table<T> bordered size='large' scroll={{ x: true }} {...props} />
}
