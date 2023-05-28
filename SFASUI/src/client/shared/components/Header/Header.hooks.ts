import { useCallback } from 'react';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/router';

export const useLogoutHandler = (onSuccess?: () => void) => {
    const { reload } = useRouter();

    return useCallback(() => {
        deleteCookie('sportsmap_token');
        deleteCookie('sportsmap_expiresIn');
        deleteCookie('sportsmap_refreshToken');
        deleteCookie('sportsmap_is_admin');

        if (onSuccess) {
            onSuccess()
        }

        reload();
    }, [reload, onSuccess]);
};
