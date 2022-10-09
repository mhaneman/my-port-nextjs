import React from "react";

export default function CardList({posts}) {
    
    return (
        <>
            <div className="grid gap-10">
                {posts.map((items, key) => (
                   <Card items={items} key={key} />
                ))}
            </div>
        </>
    );
}

function Card({items, key}) {
    return (
        <div className="w-full rounded-lg shadow-md lg:max-w-lg" key={key}>
            <img
                className="object-cover w-full h-48"
                src={items.img}
                alt="image"
            />
            <div className="p-4">
                <h4 className="text-xl font-semibold text-blue-600">
                    
                    {items.title}
                </h4>
                <p className="mb-2 leading-normal">
                {items.content}
                </p>
                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                    More
                </button>
            </div>
        </div>
    );
}