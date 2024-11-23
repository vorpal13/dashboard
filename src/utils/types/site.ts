export interface IStatistics {
  date: string
  visits: number
  pageviews: number
}

export interface ISite {
  id: string
  name: string
  url: string
  description: string
  statistics: IStatistics[]
}
