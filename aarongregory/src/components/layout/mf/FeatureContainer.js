import React from 'react';
import FeatureVersionList from './FeatureVersionList';
import FeatureList from './FeatureList';

const FeatureContainer = (props) => {

    const features = [
        {
            Version: "1.1.1",
            Features: [{
                FeatureName: "Feature 1",
                FeatureDescription: "A new feature"
            },
            {
                FeatureName: "Feature 2",
                FeatureDescription: "Another new feature"
            }]
        },
        {
            Version: "1.1.2",
            Features: [{
                FeatureName: "Feature 4",
                FeatureDescription: "A new feature"
            },
            {
                FeatureName: "Feature 6",
                FeatureDescription: "Another new feature"
            }]
        }]

    return(
        <div className="body-main">
                <div className="whats-new-panel">
                    <FeatureVersionList features={features} />
                </div>
                <div className="whats-new-details-panel">
                    <FeatureList features={features} />
                </div>
            </div>
    );
};

export default FeatureContainer;