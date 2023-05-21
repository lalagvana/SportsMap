import React, { useCallback } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import { Notification } from 'src/client/shared/components/Notification';
import { prepareMessage } from 'src/client/shared/utils/notifications';
import { excelExport } from 'src/client/shared/utils/api/excel';

import { getSearchQuery } from 'src/client/screens/Catalog';

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
