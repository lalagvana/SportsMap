import React from 'react';

import { AnimationReveal } from 'src/client/shared/components/AnimationReveal';

import { useLoginHandler, useRegisterHandler } from '.';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';

export const Login = () => {
    const handleSubmitLogin = useLoginHandler();
    const handleSubmitRegister = useRegisterHandler();

    return (
        <AnimationReveal>
            <div>
                <LoginForm handleSubmit={handleSubmitLogin} />
                <RegisterForm handleSubmit={handleSubmitRegister} />
            </div>
        </AnimationReveal>
    );
};
