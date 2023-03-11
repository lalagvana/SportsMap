import { memo, PropsWithChildren } from 'react';

import styles from './NoWrapText.module.css';

type NowrapTextProps = PropsWithChildren<{
    text: string;
    tagName?: keyof JSX.IntrinsicElements;
    className?: string;
}>;

export const NowrapText = memo(({ text, tagName = 'span', className }: NowrapTextProps) => {
    const TextTag = tagName;

    return (
        <TextTag title={text} className={[styles['NowrapText'], className].join(' ')}>
            {text}
        </TextTag>
    );
});
