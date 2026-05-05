import React from 'react'
const informations = [
  {
    id: 1,
    title: "ANXIETY AND STRESS​",
    info: "Stress and anxiety are common emotional responses to challenging situations. Stress usually arises when there’s a perceived threat, and it can motivate action. However, if stress becomes chronic, it may lead to adverse health effects. Anxiety, on the other hand, involves excessive worry and fear about potential future events.",
  },
  {
    id: 2,
    title: "Couples Therapy",
    info: "Our couples therapy programs offer partners a safe and constructive environment to improve their relationship dynamics and communication. Guided by a skilled marriage and Family Therapist, couples can address conflicts, enhance understanding, and foster healthier interactions.",
  },
  {
    id: 3,
    title: "Anger Managemen",
    info: "Anger management therapy offers individuals practical tools to understand, express, and manage their anger healthily. Through this therapeutic process, individuals can explore the underlying causes of their anger, develop self-awareness, and learn strategies to regulate their emotions.",
  },
  {
    id: 4,
    title: "Grief & Loss",
    info: "Have you lost your loved one? Are you going through a difficult time? Grief and loss therapy provides compassionate support to individuals navigating the complex emotions of losing a loved one or experiencing other significant losses.",
  },
  {
    id: 5,
    title: "Tele Therapy",
    info: "Not in town? No worries, we have got your back! Our virtual therapy offers the convenience of receiving therapeutic support from the comfort of your space. You can connect with our licensed therapists regardless of location through secure video conferencing or messaging platforms.",
  },
  {
    id: 6,
    title: "Depression",
    info: "Depression is a mood disorder that can impact thoughts, emotions, and daily functioning. While it can feel overwhelming, the good news is that effective treatments are available.",
  },
];
const Serviceinfo = () => {
  return (
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
    
      {informations.map((info) => {
        return(
         <div className="flex flex-col items-center text-center gap-4 p-2  rounded-md bg-white border border-black" key={info.id}>
          <h1 className="text-3xl font-body font-semibold">{info.title}</h1>
          <p className="text-base font-normal">{info.info}</p>
         </div>
        )
      })}
    </div>
  )
}

export default Serviceinfo