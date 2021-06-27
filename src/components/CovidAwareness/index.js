import React, { memo } from 'react';
import { CovidCare } from '../../constants/constants';

const CovidAwareness = () => {
    return (
        <div>
            <h2>{CovidCare.heading}</h2>
            <p>{CovidCare.content}</p>
            <ul>
                <li>
                    <a href={CovidCare.who_advisory}>WHO Advisory</a>
                </li>
                <li>
                    <a href={CovidCare.government_website}>Ministry of Health and Family Welfare</a>
                </li>
            </ul>


        </div>
    );
}

export default memo(CovidAwareness);