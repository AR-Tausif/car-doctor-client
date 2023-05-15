import React from 'react';

const About = () => {
    return (
        <div className='container mx-auto py-20'>
            <div className="flex justify-center gap-32">
                <div className="relative w-[721px]">
                    <img className='w-11/12' src="/public/assets/images/about_us/person.jpg" alt="" />
                    <img className='absolute top-56 -right-10 border-white border-[15px] rounded-xl w-2/3' src="/public/assets/images/about_us/parts.jpg" alt="" />
                </div>
                <div className="space-y-5">
                    <h3 className='text-wbtn-primary text-2xl font-bold'>About Us</h3>
                    <h2 className='text-5xl font-bold w-[376px] leading-[74px]'>We are qualified & of experience in this field</h2>
                    <p className='leading-[30px] text-[18px] w-[489px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <p className='leading-[30px] text-[18px] w-[489px]'>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <button className="btn border-white bg-wbtn-primary rounded text-base hover:bg-red-600 text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;