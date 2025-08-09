import Image from "next/image"

export default function InfoBox({img='',title="Title",desc="placeholder description"}){
    return(
    <>
        <div className="inline-block w-[500px] h-[200px] border-2 border-gray-200 rounded-xl hover:scale-103 transition-all duration-300 ease-in-out">
            <Image src={img} alt="IMG" width={35} height={35} className="mt-3 ml-3"/>
            <h1 className="mt-3 ml-3 text-2xl font-roboto font-medium">{title}</h1>
            <p className="mt-3 ml-3 text-lg font-roboto font-light">{desc}</p>
        </div>
    </>)
}