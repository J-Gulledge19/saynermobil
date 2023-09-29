export default function Gasprice() {
    return (
        <section id="gasprices">
            <div className="container mx-auto flex px-10 py-10 pt-0 md:flex-row flex-col-reverse items-center">
                    <div className="lg:max-w-lg lg:w-full mt-10 md:w-1/2 w-5/6 mb-10 px-10 pt-10">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black-300">Gas Prices</h1>
                        <li className="mb-8 leading-relaxed mt-10 mb-10 ml-5 text-black-300">Regular: $2.99</li>
                        <li className="mb-8 leading-relaxed mt-10 mb-10 ml-5 text-black-300">Mid-Grade: $3.09</li>
                        <li className="mb-8 leading-relaxed mt-10 mb-10 ml-5 text-black-300">Premium: $3.19</li>
                        <li className="mb-8 leading-relaxed mt-10 mb-10 ml-5 text-black-300">Diesel: $3.19</li>
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:px-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h4 className="title-font sm:text-2xl text-3xl mb-1 font-medium text-black-300">
                        Convenience Store
                        </h4>
                        <p className="mb-8 leading-relaxed mt-4 mb-10 ml-5 text-black-300">
                        Our convenience store is stocked with a wide range of products to make your visit even more convenient. From snacks and beverages to automotive supplies and travel essentials, you'll find everything you need under one roof. We take pride in offering a clean and well-organized store where you can quickly find what you're looking for.
                        </p>

                        <h4 className="title-font sm:text-2xl text-3xl mb-1 font-medium text-black-300">
                        Visit Us Today
                        </h4>
                        <p className="mb-8 leading-relaxed mt-4 mb-10 ml-5 text-black-300">
                        Whether you're passing through Sayner, Wisconsin, or you call this beautiful town home, we invite you to stop by Sayner Mobil for top-quality fuels, friendly service, and a convenient shopping experience. We're open seven days a week, ensuring that we're here whenever you need us. Thank you for choosing Sayner Mobil as your trusted gas station and convenience store. We look forward to serving you soon!
                        </p>
                    </div>
            </div>
        </section>
    );
}