import React from 'react'
import BlogCard from '../home/blog/BlogCard'
import BlogCardWraper from './BlogCardWraper';


const blogCards = [
 [ 
  {
    id: 1,
    cardImage: "/blog/Blog-a1.webp",
    date: "20 March 2026",
    content:
      "Strengthening organizations with data-driven strategy and leadership.",
    authorImage: "/blog/Blog-author-4.webp",
    autherName: "Roger Levin",
  },
  {
    id: 2,
    cardImage: "/blog/Blog-a2.webp",
    date: "18 March 2026",
    content:
      "Building sustainable growth strategies for businesses in competitive markets.",
    authorImage: "/blog/Blog-author-5.webp",
    autherName: "Emma Watson",
  },
  {
    id: 3,
    cardImage: "/blog/Blog-a3.webp",
    date: "15 March 2026",
    content:
      "How digital transformation achieve long-term success.",
    authorImage: "/blog/Blog-author-6.webp",
    autherName: "Michael Carter",
  }
],
 [ 
  {
    id: 4,
    cardImage: "/blog/Blog-a4.webp",
    date: "12 March 2026",
    content:
      "Leadership frameworks that help teams adapt and innovate with confidence.",
    authorImage: "/blog/Blog-author-8.webp",
    autherName: "Sophia Miller",
  },
  {
    id: 5,
    cardImage: "/blog/Blog-a5.webp",
    date: "10 March 2026",
    content:
      "Practical business consulting techniques to improve operational efficiency.",
    authorImage: "/blog/Blog-author-8.webp",
    autherName: "Roger Levin",
  },
  {
    id: 6,
    cardImage: "/blog/Blog-a6.webp",
    date: "08 March 2026",
    content:
      "Turning market insights into strategic opportunities for business growth.",
    authorImage: "/blog/Blog-author-9.webp",
    autherName: "Olivia Bennett",
  }
],

 [ 
  {
    id: 7,
    cardImage: "/blog/Blog-b7.webp",
    date: "05 March 2026",
    content:
      "Why customer-focused innovation is the foundation of modern businesses.",
    authorImage: "/blog/Blog-author-6.webp",
    autherName: "Daniel Brooks",
  },
  {
    id: 8,
    cardImage: "/blog/Blog-a8.webp",
    date: "02 March 2026",
    content:
      "Scaling organizations with performance-driven planning and execution.",
    authorImage: "/blog/Blog-author-5.webp",
    autherName: "Michael Carter",
  },
  {
    id: 9,
    cardImage: "/blog/Blog-a9.webp",
    date: "28 February 2026",
    content:
      "Future-ready business strategies that create lasting competitive advantages.",
    authorImage: "/blog/Blog-author-9.webp",
    autherName: "Emma Watson",
  }
],
];


function BusinessGrowth() {
  return (
    <section>
        <h2 className='text-center font-semibold pt-20 pb-12'>Business growth journal</h2>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogCards.map((card , i) => 
          <div key={i} className={`flex flex-col gap-5`}>
            <BlogCardWraper data = {card}/>
          </div>
        )}
        </div>
    </section>
  )
}

export default BusinessGrowth
