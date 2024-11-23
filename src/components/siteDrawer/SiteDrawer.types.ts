import { ISite } from '@/utils/types/site'

export interface SiteDrawerProps {
  isDrawerOpen: boolean
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
  recordToEdit: ISite | null
}
