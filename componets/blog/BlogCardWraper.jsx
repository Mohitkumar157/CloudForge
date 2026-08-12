import React from 'react'
import BlogCard from '../home/blog/BlogCard'

function BlogCardWraper({ data }) {
  

    return (
        <>
            {data.map((cardData, i) =>
                <BlogCard
                    cardData={cardData}
                    key={cardData.id}
                    index={i}
                />
            )}

        </>
    )
}

export default BlogCardWraper
