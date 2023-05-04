import { useContactsLinks } from './Contacts.hooks';
import { TextWithIcon } from '../TextWithIcon';

import styles from './Contacts.module.css';

type ContactsProps = {
    className?: string;
};

export const Contacts = ({ className }: ContactsProps) => {
    const links = useContactsLinks();

    return (
        <ul className={[styles['Contacts'], className].join(' ')}>
            {links.map(({ iconUrl, text }) => (
                <li key={text} className={styles['Contacts-Item']}>
                    <TextWithIcon className={styles['Contacts-Item']} iconUrl={iconUrl}>{text}</TextWithIcon>
                </li>
            ))}
        </ul>
    );
};
