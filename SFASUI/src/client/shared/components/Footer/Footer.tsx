import React from 'react';
import Image from 'next/image';
import { FormikProvider, useFormik } from 'formik';

import { TextInput } from 'src/client/shared/components/TextInput';

import { Button } from 'src/client/shared/components/Button';
import { Contacts } from 'src/client/shared/components/Contacts';

import { useSubscribeHandler, FOOTER_INITIAL_FIELDS, FooterFields } from '.';

import styles from './Footer.module.css';

export const Footer = () => {
    const handleSubmit = useSubscribeHandler();

    const formikStateAndHelpers = useFormik<FooterFields>({
        initialValues: FOOTER_INITIAL_FIELDS,
        onSubmit: handleSubmit,
    });

    return (
        <footer className={styles['Footer']}>
            <div className={styles['Footer-Content']}>
                <section className={styles['Footer-Section']}>
                    <h2 className={styles['Footer-Header']}>Контактная информация</h2>
                    <Contacts className={styles['Footer-Contacts']} />
                </section>

                <section className={styles['Footer-Section']}>
                    <h2 className={styles['Footer-Header']}>Мы в социальных сетях</h2>
                    <div className={styles['Footer-ImageContainer']}>
                        <Image width={44} height={26} src="/images/contacts/VKLogo.png" layout="fixed" />
                        <Image width={32} height={26} src="/images/contacts/TGLogo.png" layout="fixed" />
                    </div>
                    <span className={styles['Footer-Header_mini']}>Создано при поддержке</span>
                    <Image width={160} height={47} src="/images/contacts/SPBu.png" layout="fixed" />
                </section>

                <section className={styles['Footer-Section']}>
                    <h2 className={styles['Footer-Header']}>Подписывайтесь на наши обновления</h2>
                    <div className={styles['Footer-EmailForm']}>
                        <p className={styles['Footer-Caption']}>Так Вы первыми узнаете о новых спортивных объектах</p>
                        <FormikProvider value={formikStateAndHelpers}>
                            <TextInput name="email" type="email" placeholder="Ваша электронная почта" />
                            <Button
                                className={styles['Footer-Button']}
                                text="Подписаться"
                                onClick={formikStateAndHelpers.submitForm}
                            />
                        </FormikProvider>
                    </div>
                </section>
            </div>
        </footer>
    );
};
