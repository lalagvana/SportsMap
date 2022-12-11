import tw from 'twin.macro';
import React from 'react';

import Features from 'client/components/features/ThreeColSimple';
import MainFeature from 'client/components/features/TwoColWithButton';
import Footer from 'client/components/footers/FiveColumnWithInputForm';
import HeaderLight from 'client/components/headers/HeaderLight';
import { default as Hero } from 'client/components/hero/TwoColumnWithVideo';
import { default as Testimonial } from 'client/components/testimonials/ThreeColumnWithProfileImage';
import AnimationRevealPage from 'client/helpers/AnimationRevealPage';
import EventIcon from 'client/images/events.svg';
import LikeIcon from 'client/images/like.svg';
import SearchIcon from 'client/images/search-icon-home.svg';
import StatIcon from 'src/client/images/stats.svg';

const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;

export const Main = () => {
    return (
        <AnimationRevealPage>
            <HeaderLight />
            <Hero
                heading={
                    <>
                        Заниматься <br /> спортом легко!
                    </>
                }
                description="Администрация Санкт-Петербурга представляет интерактивную карту, где каждый может найти для себя и своих близких идеальное место для занятий спортом"
                imageDecoratorBlob={true}
                primaryButtonText="На карту"
                watchVideoButtonText="Поиск"
            />
            <Testimonial />
            <Features
                heading={
                    <>
                        Чем хорош <HighlightedText>SportsMap?</HighlightedText>
                    </>
                }
                cards={[
                    {
                        imageSrc: SearchIcon,
                        title: 'Удобный поиск',
                        description:
                            'Теперь найти удобное место для занятий спортом еще проще, ведь все объекты собраны в одном месте',
                    },
                    {
                        imageSrc: LikeIcon,
                        title: 'Актуальность',
                        description:
                            'За актуальностью информации следит Администрация Санкт-Петербурга',
                    },
                    {
                        imageSrc: StatIcon,
                        title: 'Статистика',
                        description:
                            'Скоро вы сможете узнать, в какое время суток объект наиболее загружен, а в какое - свободен',
                    },
                    {
                        imageSrc: EventIcon,
                        title: 'Мероприятия',
                        description:
                            'Об анонсах спортивных мероприятий можно будет узнать благодаря нашей рассылке',
                    },
                ]}
                imageContainerCss={tw`p-2!`}
                imageCss={tw`w-20! h-20!`}
            />
            <MainFeature />
            <Footer />
        </AnimationRevealPage>
    );
};
