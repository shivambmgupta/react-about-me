import React, { memo } from 'react';
import { BlogDetails  } from '../../constants/constants';

const Blog = () => {
    return (
        <div>
            <h2>{BlogDetails.headinng}: <a href={BlogDetails.url}>Give it a read</a>.</h2>
            <p>
                {BlogDetails.content}
                <a href={BlogDetails.url}>blog.</a>
            </p>
        </div>
    );
}

export default memo(Blog);