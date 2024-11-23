import { useEffect } from 'react'
import { Form } from 'antd'
import {
  useCreateSiteMutation,
  useUpdateSiteMutation,
} from '@/services/site/api'
import { ISite } from '@/utils/types/site'

interface UseSiteDrawerProps {
  recordToEdit: ISite | null
  isDrawerOpen: boolean
  onClose: () => void
}

export const useSiteDrawer = ({
  recordToEdit,
  isDrawerOpen,
  onClose,
}: UseSiteDrawerProps) => {
  const [form] = Form.useForm<Omit<ISite, 'id'>>()
  const { mutate: createSite, isSuccess: createSuccess } =
    useCreateSiteMutation()
  const { mutate: updateSite, isSuccess: updateSuccess } =
    useUpdateSiteMutation()

  const onSubmit = (data: Omit<ISite, 'id'>) => {
    if (recordToEdit) {
      updateSite({ id: recordToEdit.id, ...data })
    } else {
      createSite(data)
    }
  }

  useEffect(() => {
    if (createSuccess || updateSuccess) onClose()
  }, [createSuccess, updateSuccess, onClose])

  useEffect(() => {
    if (recordToEdit) form.setFieldsValue(recordToEdit)
    else form.resetFields()
  }, [recordToEdit, form])

  useEffect(() => {
    if (!isDrawerOpen) onClose()
  }, [isDrawerOpen, onClose])

  return { form, onSubmit }
}
