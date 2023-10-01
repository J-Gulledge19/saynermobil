import { AiFillFacebook } from "react-icons/ai";
import { logo } from "../data";

export default function About() {
    return (
            <section id="about">
                <div className="container mx-auto flex px-10 pt-20 md:flex-row flex-col items-center">
                        <div className="flex-col items-center lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 px-10">
                        <h4 className="title-font sm:text-3xl text-3xl px-15 mx-16 mb-1 font-medium text-black-300 text-center">
                        Store Hours
                        </h4>
                        <h4 className="title-font sm:text-3xl text-3xl px-15 mx-8 mb-1 font-medium text-black-300 text-center">
                        7:00am - 6:00pm
                        </h4>
                            <img
                                className="object-cover object-center rounded"
                                alt="hero"
                                src="https://i.imgur.com/MeXOtxp.jpg"
                            />
                            <a href="https://www.facebook.com/profile.php?id=100088310484281&mibextid=ZbWKwL" className="inline-flex text-blue-800 text-3xl leading-relaxed ml-14 mt-5">
                              <AiFillFacebook/>  Find us on Facebook
                            </a>
                        </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:px-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="lg:inline-flex title-font sm:text-3xl text-4xl mb-4 font-medium text-black-300">
                        Welcome to <img class= "lg:w-80 h-90 object-center mx-4 my-0" alt= "Sayner Mobil" src= {logo}/>
                        </h1>
                        <p className="mb-8 leading-relaxed mt-5 mb-10 ml-5 text-black-300">
                        Located in the picturesque town of Sayner, Wisconsin, Sayner Mobil is your trusted partner for all your fuel and convenience needs. Nestled amidst the stunning Northwoods of Wisconsin, our gas station has been serving the Sayner community and travelers passing through since 1994.
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
