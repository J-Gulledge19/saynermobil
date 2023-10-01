import { liquors } from '../data';

export default function Liquors() {
    return (
        <section id="liquors">
            <div className="container px-5 py-10 mx-auto mb-20 text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black-300">
            New Liquor Arrivals 
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-black-300">
          At Sayner Mobil, we are excited to introduce our latest arrivals in the liquor section. We take pride in offering a carefully curated selection of alcohols to cater to your preferences, whether you're a connoisseur or simply looking to try something new. Explore our newest additions and discover the perfect drink for your next celebration or relaxing evening.
          </p>
        </div>
        <div className="flex flex-wrap justify-center -m-4">
          {liquors.map((liquor) => (
            <div className="sm:w-1/4 w-80 h-80 p-4 mb-10 text-center">
                <h1 className="title-font text-lg font-medium text-black mb-4">
                    {liquor.name}
                </h1>
                <img
                  alt="gallery"
                  className="w-full h-full object-center m-auto"
                  src={liquor.image}
                />
                <h2 className="title-font text-md font-medium text-black mb-3">
                    Price: {liquor.price}
                </h2>
            </div>
          ))}
        </div>
        <div className="flex flex-col mt-10 pt-10 w-full mb-15">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black-300">
          Disclaimer: Prices Subject to Change Without Notice 
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-black-300">
          While every effort is made to maintain accurate and up-to-date pricing information, please be aware that prices for our products may change without prior notice.
          </p>
        </div>
      </div>
        </section>
    );
}