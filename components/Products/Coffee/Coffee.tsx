
import Image from "next/image";

export default function Coffee() {
    return (
        <section className="py-4.5 md:py-8 flex flex-col">
            <div className="relative rounded-xl overflow-hidden h-[199px] md:h-[318px]">
                {/* Background image (use fill to cover container) */}
                <Image
                    src="/images/categories/Coffee.jpg"
                    alt="Crafted with care. Infused with calm."
                    fill
                    className="object-cover w-full h-full"
                    priority
                />

                {/* Overlayed text - LEFT aligned stack only */}
                <div className="absolute inset-0 flex  px-4 md:px-12 py-14 flex-col text-white">
                    <div className=" max-w-[50%] sm:max-w-[15%] ">
                        <h3 className="text-lg md:text-[30px] sm:font-medium text-6 sm:leading-9 tracking-[-0.5px]">
                            Buy Coffee Pods Now at
                        </h3>
                    </div>
                    <div className="sm:mt-[21px] mt-[7px]   ">
                        <div className="text-[28px]  md:text-[70px] sm:leading-15 sm:font-medium font-semibold ">30% Off!</div>

                    </div>
                </div>
            </div>
        </section>
    );
}
