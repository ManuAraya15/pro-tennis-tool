import Image from "next/image";

interface BannerProps {
    
}

const Banner = (props: BannerProps) => {
    
    return (
        <div className="container mx-auto md:p-6 p-3">
            <div className="relative">
                <Image  className="rounded-2xl max-sm:aspect-square object-cover" src={"/banner.jpg"} alt="Banner con final Winbledom 2019" width={1920} height={960}/>
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-2xl"></div>
                <div className="absolute left-0 top-0 flex flex-col justify-center h-full p-6 md:gap-3 max-sm:gap-3 text-white">
                    <h2 className="md:text-4xl sm:text-lg text-3xl font-bold">Encuentra tu partido ideal</h2>
                    <p className="md:text-xl sm:text-base text-lg">Unete a nuestra comunidad y mejora tu juego</p>
                    <button className=" w-max d:text-xl sm:text-base text-lg cursor-pointer bg-on-primary text-primary  hover:text-secondary-container hover:bg-on-secondary-container px-2 py-1 rounded-xl">
                        Ver partido
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Banner;