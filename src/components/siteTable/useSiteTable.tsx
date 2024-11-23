import { useState, useEffect } from 'react';
import { message } from 'antd';
import { useGetSitesListQuery, useDeleteSiteMutation } from '@/services/site/api';
import { ISite } from '@/utils/types/site';

export const useSiteTable = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [recordToEdit, setRecordToEdit] = useState<ISite | null>(null);

  const { data, isLoading, isError } = useGetSitesListQuery();
  const { mutate: deleteSite } = useDeleteSiteMutation();

  useEffect(() => {
    if (isError) {
      message.error('Произошла ошибка при получении списка сайтов');
    }
  }, [isError]);

  return {
    data,
    isLoading,
    deleteSite,
    isDrawerOpen,
    setIsDrawerOpen,
    recordToEdit,
    setRecordToEdit,
  };
};
