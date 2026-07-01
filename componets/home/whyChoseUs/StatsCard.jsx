import Card from "./Card";

function StatsCard({ label, value, description, img }) {
  console.log(value.split(""));

  return (
    <Card className=" flex flex-col ">
      <div className="flex flex-col justify-between gap-10">
        <div className="flex justify-between items-center">
          <p className="uppercase text-xs text-gray-500">{label}</p>
          {img && <img src={img} alt="icon" loading="lazy" />}
        </div>
        <div className="w-full h-px bg-gray-500"></div>
        <div className="flex flex-col gap-4">
          <h2 className="flex text-7xl font-semibold">{value.split("").map((dig, index) =>
            <div 
            className="text-[120px]"
            key={index}
            >
              {dig}
            </div>)}
          </h2>
          <p className=" text-gray-500">{description}</p>
        </div>
      </div>


    </Card>
  );
}

export default StatsCard;