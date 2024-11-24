import { useEffect } from 'react'
import { FormInstance } from 'antd'
import {
  useCreateSiteMutation,
  useUpdateSiteMutation,
} from '@/services/site/api'
import { ISite } from '@/utils/types/site'
import dayjs from 'dayjs'

interface UseSiteDrawerProps {
  recordToEdit: ISite | null
  isDrawerOpen: boolean
  onClose: () => void
  form: FormInstance<Omit<ISite, 'id'>>
}

export const useSiteDrawer = ({
  recordToEdit,
  isDrawerOpen,
  onClose,
  form,
}: UseSiteDrawerProps) => {
  const { mutate: createSite, isSuccess: createSuccess } =
    useCreateSiteMutation()
  const { mutate: updateSite, isSuccess: updateSuccess } =
    useUpdateSiteMutation()

  const onSubmit = (data: Omit<ISite, 'id'>) => {
    const statisticsWithFormattedData = data?.statistics
      ?.map((stats) => ({
        ...stats,
        date: dayjs(stats.date).format('YYYY-MM-DD'),
      }))
      .map((stat) => ({
        ...stat,
        date: dayjs(stat.date).format('YYYY-MM-DD'),
      }))
      .sort((a, b) => (dayjs(a.date).isAfter(dayjs(b.date)) ? 1 : -1))

    if (recordToEdit) {
      updateSite({
        id: recordToEdit.id,
        ...data,
        url: data.url.startsWith('https') ? data.url : `https://${data.url}`,
        statistics: statisticsWithFormattedData,
      })
    } else {
      createSite({ ...data, statistics: statisticsWithFormattedData })
    }
  }

  useEffect(() => {
    if (createSuccess || updateSuccess) {
      onClose()
    }
  }, [createSuccess, updateSuccess])

  useEffect(() => {
    if (recordToEdit) {
      const statisticsWithFormattedData = recordToEdit?.statistics?.map(
        (stats) => ({
          ...stats,
          date: dayjs(stats.date),
        })
      )

      form.setFieldsValue({
        ...recordToEdit,
        url: recordToEdit.url.startsWith('https')
          ? recordToEdit.url.slice(8)
          : recordToEdit.url,
        statistics: statisticsWithFormattedData as any,
      })
    }
  }, [recordToEdit, isDrawerOpen])

  useEffect(() => {
    if (!isDrawerOpen) {
      onClose()
    }
  }, [isDrawerOpen])

  return { form, onSubmit }
}
