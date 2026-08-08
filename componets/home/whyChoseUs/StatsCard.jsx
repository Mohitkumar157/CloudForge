import Card from "./Card";

function StatsCard({ label, description, img , children }) {
 

  return (
    <Card className=" flex flex-col h-full">
      <div className="flex flex-col justify-between gap-10">
        <div className="flex justify-between items-center">
          <p className="uppercase text-xs font-semibold text-(--subheading-primary)">{label}</p>
          {img && <img src={img} alt="icon" loading="lazy" />}
        </div>
        <div className="w-full h-px bg-gray-500"></div>
        <div className="flex flex-col gap-4">
          
           {children}
          
         
          <p className=" text-(--subheading-primary)">{description}</p>
        </div>
      </div>


    </Card>
  );
}

export default StatsCard;