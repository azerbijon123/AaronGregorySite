import React from 'react';

const FeatureDetail = (props) => {
    return(
        <div>
            Version Number: {props.version}
            Features: {props.features.map(feature => feature.FeatureName)}
        </div>
    );
};

export default FeatureDetail;