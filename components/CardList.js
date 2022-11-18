import React from "react";

export default function CardList({posts}) {
    
    return (
        <div className="grid gap-10">
            {posts.map((items, key) => (
                <Card items={items} key={key} />
            ))}
        </div>
    );
}

/* need to fix mobile view */ 
function Card({items, key}) {
    return (
        <div className="
        w-full rounded-lg shadow-md 
        lg:min-w-[40rem]
        flex flex-col" 
        key={key}>
            <img
                className="object-cover w-full h-48"
                src={items.img}
                alt="image"
            />
            <div className="p-4 bg-white">
                <h4 className="text-xl font-semibold text-blue-600">
                    {items.title}
                </h4>
                <p className="mb-2 leading-normal">
                {items.content}
                </p>
            </div>
        </div>
    );
}