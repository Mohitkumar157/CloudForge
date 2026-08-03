import PrimaryButton from "@/componets/ui/PrimaryButton";
import Card from "./Card";

function InfoCard({ title, subtitle, description }) {
    return (
        <Card className="flex flex-col gap-10 justify-between">
            <div className="">
                <h3 className="text-xl font-medium">{title}</h3>
                <h4 className="text-lg mb-4">{subtitle}</h4>
                <p className="text-(--paragraph-secondary) leading-relaxed">
                    {description}
                </p>
            </div>

           <PrimaryButton 
           ctaText={"Get a quote"}
           className={"border! border-[#20324f]! group-hover:bg-[#20324f] group-hover:text-[#f1f1f1]"}
           circelClass={"group-hover:text-[#20324f] bg-[#20324f]"}
           />
        </Card>
    );
}

export default InfoCard;