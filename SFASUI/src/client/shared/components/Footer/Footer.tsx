import React from 'react';
import Image from 'next/image';
import { FormikProvider, useFormik } from 'formik';

import { TextInputField } from 'src/client/shared/components/TextInput/formik/TextInputField';
import { Button } from 'src/client/shared/components/Button';
import { Contacts } from 'src/client/shared/components/Contacts';

import VkIcon from 'src/client/images/vk-logo.svg';
import TelegramIcon from 'src/client/images/telegram-logo.svg'

import { useSubscribeHandler, FOOTER_INITIAL_FIELDS, FooterFields } from '.';
import { useSchema } from './Footer.schema';

import styles from './Footer.module.css';

export const Footer = () => {
    const handleSubmit = useSubscribeHandler();

    const formikStateAndHelpers = useFormik<FooterFields>({
        initialValues: FOOTER_INITIAL_FIELDS,
        onSubmit: handleSubmit,
        validationSchema: useSchema(),
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
                        <VkIcon width={31} height={26}/>
                        <TelegramIcon width={26} height={21}/>
                    </div>
                    <span className={styles['Footer-Header_mini']}>Создано при поддержке</span>
                    <Image width={160} height={47} src="/images/contacts/SPBu.png" layout="fixed" />
                </section>

                <section className={styles['Footer-Section']}>
                    <h2 className={styles['Footer-Header']}>Подписывайтесь на наши обновления</h2>
                    <div className={styles['Footer-EmailForm']}>
                        <p className={styles['Footer-Caption']}>Так Вы первыми узнаете о новых спортивных объектах</p>
                        <FormikProvider value={formikStateAndHelpers}>
                            <TextInputField
                                label="Электронная почта"
                                hiddenLabel
                                fieldName="email"
                                type="email"
                                placeholder="Ваша электронная почта"
                            />
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
