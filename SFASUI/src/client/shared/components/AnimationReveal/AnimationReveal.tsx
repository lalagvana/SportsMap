import React from 'react';
import tw from 'twin.macro';
import { motion } from 'framer-motion';

const StyledDiv = tw.div`font-display min-h-screen text-secondary-500 p-8 overflow-hidden`;

type Direction = 'left' | 'right';

type AnimationRevealProps = {
    disabled?: boolean;
    children: JSX.Element[] | JSX.Element;
};

function AnimationRevealBase({
    disabled = false,
    children,
}: AnimationRevealProps) {
    if (disabled) {
        return <>{children}</>;
    }

    if (!Array.isArray(children)) children = [children];

    const directions: Direction[] = ['left', 'right'];
    const childrenWithAnimation = children.map((child, i) => {
        return (
            <AnimatedSlideInComponent
                key={i}
                direction={directions[i % directions.length]}
            >
                {child}
            </AnimatedSlideInComponent>
        );
    });
    return <>{childrenWithAnimation}</>;
}

type AnimatedSlideInComponentProps = {
    direction?: Direction;
    children: JSX.Element[] | JSX.Element;
};
type Coordinates = {
    initial: string;
    target: string;
};

function AnimatedSlideInComponent({
    direction = 'left',
    children,
}: AnimatedSlideInComponentProps) {
    const x: Coordinates = {
        target: '0%',
        initial: direction === 'left' ? '-150%' : '150%',
    };

    return (
        <motion.section
            initial={{ x: x.initial }}
            animate={{
                x: x.target,
            }}
            transition={{ type: 'spring', damping: 19 }}
        >
            {children}
        </motion.section>
    );
}

export const AnimationReveal = (props: AnimationRevealProps) => (
    <StyledDiv className="App">
        <AnimationRevealBase {...props} />
    </StyledDiv>
);
