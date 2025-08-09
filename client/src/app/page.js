import InfoBox from "@/components/InfoBox";
import magGlass from "/public/magnifying-glass.svg";
import clock from "/public/clock.svg";
import shield from "/public/shield.svg";

export default function Home() {
  return ( 
    <>
      <main className="flex flex-col items-center justify-center mt-10 ">
        <div className="w-[1300px] h-[500px] rounded-xl shadow-2xl bg-black animate-fade-in">
          <h1 className="text-[60px] text-extrabold font-roboto text-white justify-self-start text-left mt-[150px] ml-8">Precise Liver Segmentation For Enhanced <br/> Diagnostics</h1>
          <p className="font-roboto text-left text-white justify-self-start ml-8 text-lg">HepatoSeg offers a solution for accurate liver segmentation in medical imaging. Our model provides detailed insights, aiding in diagnosis and treatment planning</p>
          <button className="w-[110px] h-[52px] bg-white justify-self-start mt-5 ml-8 rounded-4xl text-black text-md text-bold font-roboto hover:bg-zinc-200 cursor-pointer active:bg-gray-300 hover:scale-102 transition-all duration-300 ease-in-out">Get Started</button>
        </div>
        <div className="mt-7 w-[1300px] animate-fade-in">
          <h1 className="text-2xl font-bold font-roboto">About HepatoSeg</h1>
          <p className="text-xl mt-5 font-roboto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nulla nunc, elementum at tincidunt sit amet, interdum quis est. Pellentesque faucibus ex vitae orci ultricies, eget ultricies neque egestas. Praesent pellentesque odio non quam viverra varius. Nunc est ex, aliquet nec dignissim quis, convallis in eros. Praesent in accumsan sem. Curabitur tincidunt, enim et vehicula semper, leo nisi ullamcorper nunc, venenatis commodo justo tellus non enim. Vestibulum consequat nibh in justo dignissim gravida. Nulla facilisis lacus vitae elit sagittis, sed scelerisque risus tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Pellentesque nibh.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nulla nunc, elementum at tincidunt sit amet, interdum quis est. Pellentesque faucibus ex vitae orci ultricies, eget ultricies neque egestas. Praesent pellentesque odio non quam viverra varius. Nunc est ex, aliquet nec dignissim quis, convallis in eros. Praesent in accumsan sem. Curabitur tincidunt, enim et vehicula semper, leo nisi ullamcorper nunc, venenatis commodo justo tellus non enim. Vestibulum consequat nibh in justo dignissim gravida. Nulla facilisis lacus vitae elit sagittis, sed scelerisque risus tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Pellentesque nibh.</p>
        </div>
        <div className="mt-7 w-[1300px] animate-fade-in">
          <h1 className="text-2xl font-bold font-roboto">Key Features</h1>
          <div className="flex flex-row gap-4 w-[1300px] mt-3">
            <InfoBox img={magGlass} title="High Accuracy" desc="Achieve precise segmentation with our advanced algorithms, ensuring reliable results."/>
            <InfoBox img={clock} title="Fast Processing" desc="Get rapid results with our optimized processing pipeline, saving valuable time in clinical workflows."/>
            <InfoBox img={shield} title="Secure Data Handling" desc="Your data is protected with our robust security measures, ensuring confidentiality and compliance."/>
          </div>
        </div>
      </main>
    </>
  );
}
