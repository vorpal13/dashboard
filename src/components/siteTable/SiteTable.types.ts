import { ISite } from '@/utils/types/site';

export interface UseSitesLogic {
  isDrawerOpen: boolean;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  recordToEdit: ISite | null;
  setRecordToEdit: React.Dispatch<React.SetStateAction<ISite | null>>;
}
