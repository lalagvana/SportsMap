import { useMemo } from 'react';

import Mail from 'public/icons/mail.svg';
import Password from 'public/icons/auth/password.svg';
import User from 'public/icons/auth/user.svg';
import Address from 'public/icons/facility/address.svg';
import Accessibility from 'public/icons/facility/accessibility.svg';
import Owner from 'public/icons/facility/owner.svg';
import Link from 'public/icons/facility/link.svg';
import Phone from 'public/icons/facility/phone.svg';
import Time from 'public/icons/facility/time.svg';
import Note from 'public/icons/note.svg';
import Exclamation from 'public/icons/exclamation.svg';

type UseIconProps = {
    iconType: string;
    width: number;
    height: number;
};

export const useIcon = ({ iconType, ...rest }: UseIconProps) =>
    useMemo(() => {
        switch (iconType) {
            case 'mail':
                return <Mail {...rest} />;
            case 'password':
                return <Password {...rest} />;
            case 'user':
                return <User {...rest} />;
            case 'address':
                return <Address {...rest} />;
            case 'accessibility':
                return <Accessibility {...rest}/>;
            case 'owner':
                return <Owner {...rest} />;
            case 'link':
                return <Link {...rest} />;
            case 'phone':
                return <Phone {...rest} />;
            case 'time':
                return <Time {...rest} />;
            case 'note':
                return <Note {...rest} />;

            case 'exclamation':
                return <Exclamation {...rest} />;


        }
    }, [iconType]);
