import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import article1 from "../assets/images/article1.png";
import article2 from "../assets/images/article2.png";
import article3 from "../assets/images/article3.png";
import article4 from "../assets/images/article4.avif";
import article5 from "../assets/images/article5.avif";

const articles = [
    {
        id: 1,
        category: ["Creative", "Inspiration"],
        title: "Defaulting to Mindfulness: The Third Person Effect",
        image: article1,
    },
    {
        id: 2,
        category: ["Technology"],
        title: "Michael Ray and Rochelle Myers called it Zebra",
        image: article2,
    },
    {
        id: 3,
        category: ["Travel"],
        title: "Hilary Kouma is nominated for Best Actress",
        image: article3,
    },
    {
        id: 4,
        category: ["Travel", "Adventure"],
        title: "Exploring the Hidden Gems of Patagonia",
        image: article4,
    },
    {
        id: 5,
        category: ["Photography"],
        title: "The Art of Capturing Perfect Moments",
        image: article5,
    }
];

const LatestArticles = () => {
    return (
        <section className="bg-[#F8F9FA] py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">Latest Articles</h2>

                <Swiper
                    modules={[Navigation, Pagination]}
                    loop={true}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 10 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 30 },
                    }}
                    className="relative"
                >
                    {articles.map((article) => (
                        <SwiperSlide key={article.id}>
                            <div className="grid grid-cols-2 gap-4 bg-white p-6 shadow-lg items-center">
                              
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-40 object-cover "
                                />
                            
                                <div className="flex flex-col justify-center">
                                    <p className="text-sm text-gray-500">{article.category.join(", ")}</p>
                                    <h3 className="text-md sm:text-lg font-semibold text-gray-800 mt-2 leading-tight">
                                        {article.title}
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default LatestArticles;
