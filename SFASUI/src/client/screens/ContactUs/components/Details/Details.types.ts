export type CardType = {
    title: string;
    description?: string;
    imageSrc?: StaticImageData;
    url?: string;
};

export type FeaturePropWithCards = {
    subheading?: string;
    heading?: JSX.Element | string;
    description?: string;
    cards?: CardType[];
};

export type StatisticType = {
    key: string;
    value: string;
};
