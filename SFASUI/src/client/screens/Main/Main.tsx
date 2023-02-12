import tw from 'twin.macro';
import React from 'react';

import { AnimationReveal } from 'src/client/shared/components/AnimationReveal';
import { Footer } from 'src/client/shared/components/Footer';
import { Header } from 'src/client/shared/components/Header';

import { Features } from 'src/client/screens/Main/components/Features';
import { MainFeature } from 'src/client/screens/Main/components/MainFeature';
import { Hero } from 'src/client/screens/Main/components/Hero';
import { Testimonials } from 'src/client/screens/Main/components/Testimonials';

import EventIcon from 'src/client/images/events.svg';
import LikeIcon from 'src/client/images/like.svg';
import SearchIcon from 'src/client/images/search-icon-home.svg';
import StatIcon from 'src/client/images/stats.svg';

const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;

export const Main = () => {
    return (
        <AnimationReveal>
            <Header />
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
            <Testimonials />
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
                        description: 'За актуальностью информации следит Администрация Санкт-Петербурга',
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
                        description: 'Об анонсах спортивных мероприятий можно будет узнать благодаря нашей рассылке',
                    },
                ]}
                imageContainerCss={tw`p-2!`}
                imageCss={tw`w-20! h-20!`}
            />
            <MainFeature />
            <Footer />
        </AnimationReveal>
    );
};
