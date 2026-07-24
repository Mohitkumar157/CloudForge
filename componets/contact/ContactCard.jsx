import React from 'react'

function ContactCard({cardData : {icon , text} , active , setActive , index}) {
  return (
    <div
     onMouseEnter={() => setActive(index)}
     className={`${active === index ? "bg-(--bg-cards) text-(--text-primary)" : "bg-(--bg-primary)"} transition-all duration-300 cursor-pointer py-16 px-4 flex flex-col items-center justify-center gap-3 rounded-xl overflow-hidden`}>
      <div className={`w-10 h-auto ${active === index ? "text-(--text-primary)" : "text-(--bg-cards)"} transition-all duration-300`}>{icon}</div>
      <span className='text-xl font-semibold'>{text}</span>
    </div>
  )
}

export default ContactCard
