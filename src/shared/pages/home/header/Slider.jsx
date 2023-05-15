import React from 'react';

const Slider = () => {
    return (
        <div className="container mx-auto carousel w-full h-[90vh] rounded-xl">

            {
                images.map((image, index) => (
                    <div key={index} id={`slide${index}`} className="carousel-item relative w-full">
                        <img src={image} className="w-full" />
                        <div className="h-full ps-40 pt-40 space-y-8 absolute bg-gradient-to-r from-[#151515]">
                            <h3 className='text-[70px] font-bold w-[520px] text-white leading-[85px]'>Affordable Price For Car Servicing</h3>
                            <p className='text-white text-2xl w-[600px] leading-10'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className="btn border-wbtn-primary bg-wbtn-primary text-white rounded hover:bg-gray-200 hover:text-black hover:border-wbtn-primary">
                                Discover More
                            </button>
                            <button className="btn border-white ms-5 bg-transparent text-white rounded hover:bg-gray-200 hover:text-black hover:border-wbtn-primary">
                                Latest Projects
                            </button>
                        </div>
                        <div className="absolute right-24 flex justify-end gap-10 transform  left-5 bottom-20">
                            <a href={`#slide${index - 1}`} className="btn btn-circle btn-outline border-1-wbtn-primary border-2 border-wbtn-primary bg-gray-300 hover:bg-wbtn-primary hover:border-none">❮</a>
                            <a href={`#slide${index + 1}`} className="btn btn-circle btn-outline border-1-wbtn-primary border-2 border-wbtn-primary bg-gray-300 hover:bg-wbtn-primary hover:border-none">❯</a>
                        </div>
                    </div>
                ))
            }

        </div>
    );
};

const images = [
    "/public/assets/images/banner/1.jpg",
    "/public/assets/images/banner/2.jpg",
    "/public/assets/images/banner/3.jpg",
    "/public/assets/images/banner/4.jpg",
    "/public/assets/images/banner/5.jpg",
]

export default Slider;