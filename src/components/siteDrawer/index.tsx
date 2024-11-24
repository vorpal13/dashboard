import { FC } from 'react'
import { Col, Drawer, Form, Row, Space, DatePicker, Input } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { useSiteDrawer } from './useSiteDrawer'
import { SiteDrawerProps } from './SiteDrawer.types'
import { UiButton } from '../ui/button'
import dayjs from 'dayjs'
import { ISite } from '@/utils/types/site'

export const SiteDrawer: FC<SiteDrawerProps> = ({
  isDrawerOpen,
  setIsDrawerOpen,
  recordToEdit,
}) => {
  const [form] = Form.useForm<Omit<ISite, 'id'>>()

  const onClose = () => {
    form.resetFields()
    setIsDrawerOpen(false)
  }

  const { onSubmit } = useSiteDrawer({
    recordToEdit,
    isDrawerOpen,
    onClose,
    form,
  })

  return (
    <Drawer
      forceRender
      title={recordToEdit ? 'Редактирование сайта' : 'Добавление нового сайта'}
      width={720}
      onClose={onClose}
      open={isDrawerOpen}
      styles={{ body: { paddingBottom: 80 } }}
      extra={
        <Space>
          <UiButton type='default' onClick={onClose}>
            Отмена
          </UiButton>
          <UiButton onClick={() => form.submit()}>Подтвердить</UiButton>
        </Space>
      }
    >
      <Form layout='vertical' form={form} onFinish={onSubmit}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name='name'
              label='Название'
              rules={[
                { required: true, message: 'Пожалуйста, введите название' },
              ]}
            >
              <Input placeholder='Пожалуйста, введите название' />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name='url'
              label='Url'
              rules={[
                { required: true, message: 'Пожалуйста, введите URL сайта' },
              ]}
            >
              <Input
                style={{ width: '100%' }}
                addonBefore='https://'
                placeholder='Пожалуйста, введите URL сайта'
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name='description'
              label='Описание'
              rules={[
                { required: true, message: 'Пожалуйста, введите описание' },
              ]}
            >
              <Input.TextArea
                rows={4}
                placeholder='Пожалуйста, введите описание'
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.List name='statistics'>
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Row key={key} gutter={16} align='middle'>
                  <Col span={8}>
                    <Form.Item
                      {...restField}
                      name={[name, 'date']}
                      label='Дата'
                      rules={[
                        { required: true, message: 'Пожалуйста, укажите дату' },
                      ]}
                    >
                      <DatePicker
                        maxDate={dayjs()}
                        format='YYYY-MM-DD'
                        style={{ width: '100%' }}
                        placeholder='Выберите дату'
                      />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item
                      {...restField}
                      name={[name, 'visits']}
                      label='Посещения'
                      rules={[
                        {
                          required: true,
                          message: 'Пожалуйста, укажите посещения',
                        },
                        {
                          type: 'number',
                          transform: (value) => +value,
                          message: 'Введите число',
                        },
                      ]}
                    >
                      <Input type='number' placeholder='Количество посещений' />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item
                      {...restField}
                      name={[name, 'pageviews']}
                      label='Просмотры'
                      rules={[
                        {
                          required: true,
                          message: 'Пожалуйста, укажите просмотры',
                        },
                        {
                          type: 'number',
                          transform: (value) => +value,
                          message: 'Введите число',
                        },
                      ]}
                    >
                      <Input
                        type='number'
                        placeholder='Количество просмотров страниц'
                      />
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <UiButton
                      type='text'
                      icon={<MinusCircleOutlined />}
                      onClick={() => remove(name)}
                      danger
                    />
                  </Col>
                </Row>
              ))}
              <Form.Item>
                <UiButton
                  type='dashed'
                  onClick={() => add()}
                  icon={<PlusOutlined />}
                  block
                >
                  Добавить запись статистики
                </UiButton>
              </Form.Item>
            </>
          )}
        </Form.List>
        <UiButton className='invisible' htmlType='submit' />
      </Form>
    </Drawer>
  )
}
