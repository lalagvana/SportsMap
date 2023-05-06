import { TextWithIcon } from 'src/client/shared/components/TextWithIcon';

import { useContactsLinks } from './Contacts.hooks';

import styles from './Contacts.module.css';

type ContactsProps = {
    className?: string;
};

export const Contacts = ({ className }: ContactsProps) => {
    const links = useContactsLinks();

    return (
        <ul className={[styles['Contacts'], className].join(' ')}>
            {links.map(({ iconType, text }) => (
                <li key={text} className={styles['Contacts-Item']}>
                    <TextWithIcon className={styles['Contacts-Item']} iconType={iconType}>{text}</TextWithIcon>
                </li>
            ))}
        </ul>
    );
};
