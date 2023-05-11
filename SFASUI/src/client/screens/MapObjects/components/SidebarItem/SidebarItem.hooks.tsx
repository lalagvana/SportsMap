import { FacilityType } from '../../../../shared/types/facilities';

import PoolImage from 'public/images/by_type/pool.svg';
import GroundImage from 'public/images/by_type/ground.svg';
import GymImage from 'public/images/by_type/gym.svg';
import IceRingImage from 'public/images/by_type/ice_ring.svg';
import RecreationalImage from 'public/images/by_type/recreational.svg';
import OtherImage from 'public/images/by_type/other.svg';
import ShootingImage from 'public/images/by_type/shooting.svg';
import { useMemo } from 'react';

export const useDefaultImage = (type: FacilityType['type'], width: number, height: number) =>
    useMemo(() => {
        switch (type) {
            case 'бассейны':
                return <PoolImage width={width} height={height} />;
            case 'крытые катки':
                return <IceRingImage width={width} height={height} />;
            case 'стрелковые объекты':
                return <ShootingImage width={width} height={height} />;
            case 'рекреационные':
                return <RecreationalImage width={width} height={height} />;
            case 'спортивные залы':
                return <GymImage width={width} height={height} />;
            case 'плоскостные':
                return <GroundImage width={width} height={height} />;
            case 'другие':
                return <OtherImage width={width} height={height} />;
        }
    }, [type]);
