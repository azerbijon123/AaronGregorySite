import React from 'react';
import Header from '../main/Header';
import BlogTimeline from '../blog/BlogTimeline';

const Blog = (props) => {
    return(
            <div className="fragment-default-style">
                <Header />
                <BlogTimeline />
            </div>        
    );
};

export default Blog