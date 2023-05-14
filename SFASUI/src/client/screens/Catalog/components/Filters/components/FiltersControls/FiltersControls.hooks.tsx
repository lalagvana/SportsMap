import React, { useCallback } from 'react';
import { toast } from 'react-toastify';
import { Notification } from '../../../../../../shared/components/Notification';
import { prepareMessage } from '../../../../../../shared/utils/notifications';
import { excelExport } from '../../../../../../shared/utils/api/excel';
import { useRouter } from 'next/router';
import { getSearchQuery } from '../../../../Catalog.helpers';

export const useExportHandler = () => {
    const { query } = useRouter();

    return useCallback(async () => {
        try {
            const searchQuery = getSearchQuery(query);

            const { url } = await excelExport(searchQuery);

            window.open(url, '_blank');

            toast(
                <Notification
                    type="success"
                    heading="Вы успешно сформировали отчет"
                    description="Отчет будет открыт в новом окне"
                />
            );
        } catch (error) {
            toast(<Notification type="error" imageType="cross" description={prepareMessage(error)} />);

            throw error;
        }
    }, [query]);
};
