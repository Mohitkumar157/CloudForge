import PrimaryButton from "@/componets/ui/PrimaryButton";
import Card from "./Card";

function ChartCard() {
  return (
    <Card className=" md:col-span-2">
      <div className="flex flex-col md:flex-row justify-between md:gap-4  w-full">
        <div className="left w-full md:w-[50%] flex flex-col justify-between items-center mb-6">
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-medium">
              Operational efficiency <br /> Streamlined workflow systems
            </h3>
            <p>
              We identify hidden bottlenecks in your organization to
              improve output, reduce your overhead, and maximize your
              team’s internal productivity.
            </p>
          </div>

          <div className="w-full text-start mt-5">
            <PrimaryButton
              ctaText={"get a quote"}
              className={"border! border-[#20324f]! group-hover:bg-[#20324f] group-hover:text-[#f1f1f1]"}
              circelClass={"group-hover:text-[#20324f] bg-[#20324f]"}
            />
          </div>
        </div>

        <div className="right w-full md:w-[50%] flex flex-col gap-3">
          <div className="flex justify-between mb-6">
            <h3>Client project growth</h3>
            <img src="/tripple-dot.svg" alt="tripple dot" loading="lazy" />
          </div>
          <div className="relative">
            <img src="/Graph-image.avif" alt="graph-image" loading="lazy" />
            <img src="/Graph-bar.svg" alt="graph-bar" loading="lazy" className="absolute bottom-5" />
          </div>
        </div>
      </div>


    </Card>
  );
}

export default ChartCard;