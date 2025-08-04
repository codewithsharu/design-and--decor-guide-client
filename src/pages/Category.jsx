import React from "react";
import { category } from "../Data/data";

const Category = () => {
  return (
    <div className="w-full md:w-10/12 p-2 m-auto">
      {/* 
        On mobile: flex-col (vertical), images big and stacked.
        On desktop: flex-row (horizontal), as before.
      */}
      <div className="flex flex-col md:flex-row gap-4">
        {category.map((cat, key) => (
          <div className="w-full md:w-1/3" key={key}>
            <div className="m-2">
              {cat.img && (
                <div className="relative overflow-hidden rounded-3xl mb-4">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-56 md:h-80 object-cover rounded-3xl hover:scale-110 transition-all ease-in-out duration-700"
                  />
                  <p className="absolute text-base md:text-xl p-2 left-0 rounded-3xl rounded-s-none bg-white bottom-0 capitalize">
                    {cat.name}
                  </p>
                </div>
              )}
              {cat.imgs && cat.imgs.length > 0 && (
                <div className="flex flex-col gap-4">
                  {cat.imgs.map((image, index) => (
                    <div
                      key={index}
                      className="relative mb-2 overflow-hidden rounded-3xl"
                    >
                      <img
                        src={image.img}
                        alt={image.name}
                        className="w-full h-56 md:h-80 object-cover rounded-3xl hover:scale-110 transition-all ease-in-out duration-700"
                      />
                      <p className="absolute text-base md:text-xl p-2 left-0 rounded-3xl rounded-s-none bg-white bottom-0 capitalize">
                        {image.name}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
