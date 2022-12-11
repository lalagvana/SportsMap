export type CardType = {
    title: string;
    description?: JSX.Element | string;
    imageSrc?: StaticImageData;
    url?: string;
};

export type FeaturePropWithCards = {
    subheading?: string;
    heading?: JSX.Element | string;
    description?: JSX.Element | string;
    cards?: CardType[];
};

export type StatisticType = {
    key: string;
    value: string;
};
