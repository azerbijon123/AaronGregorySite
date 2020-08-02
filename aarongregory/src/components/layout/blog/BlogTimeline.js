import React from 'react';
import { findByLabelText } from '@testing-library/react';
import './BlogTimeline.css';

const BlogTimeline = (props) => {
    return(
        <React.Fragment>
            <div style={blogContainer}>
                <div style={{...standardPadding, ...timelineDefaultStyle}}>
                    <div style={timelineContainer}>
                        <div style={timelineHeader}>
                            Timeline
                        </div>
                        <div style={timelineLinks} className="timeline-links">
                            <ul>
                                <li>
                                    <div style={itemContainer}>
                                        <div style={itemTitle}>Phonsavan</div>
                                        <div style={itemDate}>10/08/2012</div>
                                    </div>
                                </li>
                                <li>
                                    <div style={itemContainer}>
                                        <div style={itemTitle}>Phonsavan</div>
                                        <div style={itemDate}>10/08/2012</div>
                                    </div>
                                </li>
                                <li>
                                    <div style={itemContainer}>
                                        <div style={itemTitle}>Phonsavan</div>
                                        <div style={itemDate}>10/08/2012</div>
                                    </div>
                                </li>
                                <li>
                                    <div style={itemContainer}>
                                        <div style={itemTitle}>Phonsavan</div>
                                        <div style={itemDate}>10/08/2012</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div style={{...standardPadding, ...blogPostDefeault}}>
                    Blog Text here
                </div>
            </div>
        </React.Fragment>
        
    );
};

const timelineDefaultStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
};
const blogPostDefeault = {
    display: 'flex',
    flex: '1 100'
};
const blogContainer = {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
};
const standardPadding = {
    padding: '15px'
}
const timelineHeader = {
    fontWeight: 'bold',
    borderBottom: '1px solid'
};
const timelineLinks = {

};
const timelineContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRight: '1px solid',
    paddingRight: '20px'
};
const itemContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
};
const itemTitle = {

};
const itemDate = {
    color: '#a9a9a9'
};

export default BlogTimeline;