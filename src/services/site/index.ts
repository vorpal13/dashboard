import axiosInstance from '@/utils/axios/axiosInstance'
import { ISite } from '@/utils/types/site'
import dayjs from 'dayjs'

export async function getSiteList() {
  const res = await axiosInstance.get<ISite[]>('sites')
  return res.data
}

export async function getSite(id: string) {
  const res = await axiosInstance.get<ISite>(`sites/${id}`)
  return res.data
}

export async function createSite(site: Omit<ISite, 'id'>) {
  const res = await axiosInstance.post('sites', {
    ...site,
    url: site.url.startsWith('https') ? site.url : `https://${site.url}`,
    statistics: site.statistics
      ? site.statistics
      : [
          {
            date: dayjs().format('YYYY-MM-DD'),
            pageviews: 0,
            visits: 0,
          },
        ],
  })
  return res.data
}

export async function deleteSite(id: string) {
  const res = await axiosInstance.delete(`sites/${id}`)
  return res.data
}

export async function updateSite(site: ISite) {
  const { id, ...body } = site
  const res = await axiosInstance.put(`sites/${id}`, body)
  return res.data
}
