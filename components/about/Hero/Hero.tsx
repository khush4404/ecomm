export const Hero = () => {
    return (
        <section className="flex lg:gap-35 gap-5 lg:flex-row flex-col justify-around">
            <div className="flex flex-col gap-15 lg:max-w-[441px]">
                <div className="flex flex-col gap-10">
                    <h1 className="text-text-dark font-semibold text-[42px]">The Network That Powers Cannabis Commerce</h1>
                    <p className="text-black">We Passion Farms is the fastest growing all-in-one ecosystem. Where verified suppliers, elite operators, and ambitious entrepreneurs scale through trust, compliance, and real business connections.</p>
                </div>
                <button>Book a Call</button>
            </div>
            <div>
                <div>
                    <img src="" alt="" />
                    <div>
                        <div>
                            <p>Sales</p>
                            <div>
                                <p>$20,560.00</p>
                                <p>Oct - Feb</p>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>5,400+</h3>
                        <p>Clients</p>
                    </div>
                    <div>
                        <h3>50K+</h3>
                        <p>Contribution in the last year</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
