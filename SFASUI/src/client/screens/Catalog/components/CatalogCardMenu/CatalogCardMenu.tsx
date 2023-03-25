
import styles from './CatalogCardMenu.module.css';

const MENU_ITEMS = [
    { text: 'Скрыть', onClick: () => {} },
    { text: 'Редактировать', onClick: () => {} },
    { text: 'Удалить', onClick: () => {} },
    { text: 'Подробнее', onClick: () => {} },
    { text: 'Открыть на карте', onClick: () => {} },
];

export const CatalogCardMenu = () => {
    return (
        <ul className={styles['CatalogCardMenu']}>
            {MENU_ITEMS.map(({ text, onClick }, index) => (
                <li className={styles['CatalogCardMenu-Item']} key={index} onClick={onClick}>
                    {text}
                </li>
            ))}
        </ul>
    );
};
