import { Collapse } from 'antd';
import Image from 'next/image';
import { useCallback } from 'react';

import { Divider } from 'src/client/shared/components/Divider';
import { ItemInfo } from 'src/client/shared/components/ItemInfo/ItemInfo';
import { FacilityType } from 'src/client/shared/types/facilities';

import { ItemField } from '../ItemField';

import './Accordeon.css';

type AccordeonProps = {
    item: FacilityType;
    className?: string;
};

const { Panel } = Collapse;

export const Accordeon = ({ item, className }: AccordeonProps) => {
    const {
        area,
        width,
        length,
        height,
        depth,
        type,
        covering_type,
        note,
        annual_capacity,
        actual_workload,
        owning_type,
        eps,
    } = item;

    const renderExpandIcon = useCallback(
        () => <Image width={30} height={30} src="/icons/accordeon_collapse.png" layout="fixed" />,
        []
    );

    return (
        <Collapse
            className={['Accordeon', className].join(' ')}
            accordion
            bordered={false}
            defaultActiveKey={1}
            ghost
            expandIcon={renderExpandIcon}
        >
            <Panel header={<span className="Accordeon-PanelHeader">Основная информация</span>} key="1">
                <ItemInfo {...item} />
            </Panel>
            <Divider />
            <Panel header={<span className="Accordeon-PanelHeader">Физические характерстики</span>} key="2">
                <section className="Accordeon-Panel">
                    <ItemField label="Площадь" value={area} units={'м²'} className="Accordeon-MaxField" />
                    {width && <ItemField label="Ширина" value={width} units={'м'} />}
                    {length && <ItemField label="Длина" value={length} units={'м'} />}
                    {height && <ItemField label="Высота" value={height} units={'м'} />}
                    {depth && type === 'Бассеин' && <ItemField label="Глубина" value={depth} units={'м'} />}
                    {covering_type && (
                        <ItemField label="Тип покрытия" value={covering_type} className="Accordeon-MaxField" />
                    )}
                </section>
            </Panel>
            <Divider />
            <Panel header={<span className="Accordeon-PanelHeader">Другое</span>} key="3">
                <section className="Accordeon-Panel">
                    {owning_type && (
                        <ItemField label="Форма собственности" value={owning_type} className="Accordeon-HalfField" />
                    )}
                    {eps && <ItemField label="ЕПС" value={eps} units={'чел.'} className="Accordeon-HalfField" />}
                    {actual_workload && (
                        <ItemField
                            label="Фактическая загруженность"
                            value={actual_workload}
                            units={'чел./час'}
                            className="Accordeon-HalfField"
                        />
                    )}
                    {annual_capacity && (
                        <ItemField
                            label="Годовая мощность"
                            value={annual_capacity}
                            units={'чел./год'}
                            className="Accordeon-HalfField"
                        />
                    )}
                    {note && <ItemField label="Примечания" className="Accordeon-MaxField" value={note} />}
                </section>
            </Panel>
        </Collapse>
    );
};
