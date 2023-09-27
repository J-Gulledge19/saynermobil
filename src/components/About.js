export default function About() {
    return (
            <section id="about">
                <div className="container mx-auto flex px-10 pt-20 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 px-10">
                            <img
                                className="object-cover object-center rounded"
                                alt="hero"
                                src="https://i.imgur.com/U1EqKfb.jpg"
                            />
                        </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:px-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black-300">
                        Welcome to Sayner Mobil
                        </h1>
                        <p className="mb-8 leading-relaxed mt-10 mb-10 ml-5 text-black-300">
                        Located in the picturesque town of Sayner, Wisconsin, Sayner Mobil is your trusted partner for all your fuel and convenience needs. Nestled amidst the stunning Northwoods of Wisconsin, our gas station has been serving the Sayner community and travelers passing through for years.
                        </p>

                        <h4 className="title-font sm:text-2xl text-3xl mb-1 font-medium text-black-300">
                        A Hub of Convenience and Quality
                        </h4>
                        <p className="mb-8 leading-relaxed mt-4 mb-10 ml-5 text-black-300">
                        At Sayner Mobil, we understand that a gas station is more than just a place to refuel your vehicle. It's a hub of convenience and quality where you can find everything you need on your journey. Whether you're a local resident or a visitor exploring the beautiful Northern Wisconsin region, our station is designed to cater to your needs.
                        </p>

                        
                        <h4 className="title-font sm:text-2xl text-3xl mb-1 font-medium text-black-300">
                        Friendly Service
                        </h4>
                        <p className="mb-8 leading-relaxed mt-4 mb-10 ml-5 text-black-300">
                        Our friendly and knowledgeable staff is here to assist you every step of the way. Whether you have questions about our fuel options, need directions to local attractions, or simply want to grab a quick snack, our team is dedicated to providing exceptional service with a smile.
                        </p>

                    </div>
                </div>
            </section>
        );
    }
