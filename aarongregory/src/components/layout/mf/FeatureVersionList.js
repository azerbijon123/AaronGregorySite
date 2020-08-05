import React from 'react';
import Release from './Release';

const FeatureVersionList = (props) => {
    return(
        <div>
            {props.features.map(feature => <Release key={feature.Version} version={feature.Version} features={feature.Features} />)}
        </div>
    );
}

export default FeatureVersionList;