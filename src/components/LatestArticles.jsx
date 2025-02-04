import React from "react";
import article1 from "../assets/images/article1.png";
import article2 from "../assets/images/article2.png";
import article3 from "../assets/images/article3.png";

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
];

const LatestArticles = () => {
    return (
        <section className="bg-[#F8F9FA] py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-8">Latest Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <div key={article.id} className="grid grid-cols-2 gap-4 items-stretch">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="h-full flex flex-col">
                                <p className="text-sm text-gray-500">{article.category.join(" ")}</p>
                                <h3 className="text-lg font-semibold text-gray-800 mt-4">{article.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default LatestArticles;
