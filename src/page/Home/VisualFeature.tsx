import dashImage from '../../assets/dashImage.jpg'
import { Carousel } from "@material-tailwind/react";

export default function VisualFeature() {

    const features = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>,
            title: "Analytics",
            desc: "Gain insights into your financial patterns and trends through intuitive data analysis, enabling you to make informed decisions and take control of your money."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>,
            title: "Track your spending",
            desc: "Effortlessly monitor your expenditures, categorize transactions, and stay mindful of your financial habits to achieve better budgeting and savings."
        }
    ]

    return (

        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-16 justify-between md:px-8 lg:flex">
                <div>
                    <div className="max-w-xl space-y-3">
                        <h3 className="text-blue-400 font-semibold">
                            Features
                        </h3>
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Effortlessly manadge your finances
                        </p>
                        <p>
                        Simplify Your Finances. Keep track of your spending, gain insights through analytics, and take charge of your financial future for better budgeting, smarter saving, and stress-free decision-making.
                        </p>
                    </div>
                    <div className="mt-12 max-w-lg lg:max-w-none">
                        <ul className="space-y-8">
                            {
                                features.map((item, idx) => (
                                    <li key={idx} className="flex gap-x-4">
                                        <div className="block py-2 px-4 text-gray-700 hover:bg-gray-50 font-medium duration-150 active:bg-gray-100 border rounded-lg">
                                            <h4 className="text-lg text-gray-800 font-semibold">
                                                {item.title}
                                            </h4>
                                            <p className="mt-3">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <Carousel className="rounded-xl mt-12 lg:mt-0">
                    <img
                        src={dashImage}
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                    <img
                        src={dashImage}
                        alt="image 2"
                        className="h-full w-full object-cover"
                    />
                    <img
                        src={dashImage}
                        alt="image 3"
                        className="h-full w-full object-cover"
                    />
                </Carousel>
            </div>
        </section>
    )
}