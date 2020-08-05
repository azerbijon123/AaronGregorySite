import React from 'react';
import FeatureDetail from './FeatureDetail';

const FeatureList = (props) => {
    return(
        <div>
            {props.features.map(feature => <FeatureDetail key={feature.Version} version={feature.Version} features={feature.Features} />)}
        </div>
    );
};

export default FeatureList;