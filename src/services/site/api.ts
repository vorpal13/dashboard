import { ISite } from '@/utils/types/site'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { createSite, deleteSite, getSite, getSiteList, updateSite } from '.'
import { message } from 'antd'

interface IError {
  message: string
}

export const useGetSitesListQuery = () => {
  const query = useQuery<ISite[], IError>(['sites'], getSiteList, {
    retry: false,
  })

  return query
}

export const useGetSiteQuery = (id: string) => {
  return useQuery<ISite, IError>(['sites', id], () => getSite(id), {
    retry: false,
  })
}

export const useCreateSiteMutation = () => {
  const queryClient = useQueryClient()

  return useMutation<ISite, IError, Omit<ISite, 'id'>>(createSite, {
    onSuccess: () => {
      queryClient.invalidateQueries('sites')
      message.success('Сайт успешно создан')
    },
    onError: () => {
      message.error('Произошла ошибка при создании сайта')
    },
  })
}

export const useDeleteSiteMutation = () => {
  const queryClient = useQueryClient()

  return useMutation<ISite, IError, string>(deleteSite, {
    onSuccess: () => {
      queryClient.invalidateQueries('sites')
      message.success('Сайт успешно удален')
    },
    onError: () => {
      message.error('Произошла ошибка при удалении сайта')
    },
  })
}

export const useUpdateSiteMutation = () => {
  const queryClient = useQueryClient()

  return useMutation<ISite, IError, ISite>(updateSite, {
    onSuccess: () => {
      queryClient.invalidateQueries('sites')
      message.success('Сайт успешно обновлен')
    },
    onError: (error) => {
      console.error('Ошибка при обновлении сайта:', error)
      message.error('Произошла ошибка при обновлении сайта')
    },
  })
}
