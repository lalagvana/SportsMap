import styles from './CatalogCardMenu.module.css';

type CatalogCardMenuProps = {
    menuItems: { text: string; onClick: () => void }[];
};

export const CatalogCardMenu = ({ menuItems }: CatalogCardMenuProps) => {
    return (
        <ul className={styles['CatalogCardMenu']}>
            {menuItems.map(({ text, onClick }) => (
                <li className={styles['CatalogCardMenu-Item']} key={text} onClick={onClick}>
                    {text}
                </li>
            ))}
        </ul>
    );
};
