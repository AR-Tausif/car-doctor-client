import React from 'react';
import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-black py-28'>
            <div className=" container mx-auto footer justify-between p-10 text-gray-50 text-base">
                <div className='space-y-7'>
                    <img src="/public/assets/logo.svg" alt="" />
                    <p className="text-lg w-72">Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                    <div className='flex gap-8 text-xl'>
                        <FaGoogle />
                        <FaTwitter />
                        <FaInstagram />
                        <FaLinkedin />
                    </div>
                </div>
                <div>
                    <span className="footer-title">About</span>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Services</a>
                    <a className="link link-hover">Contact</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">Why car doctor</a>
                    <a className="link link-hover">About</a>
                </div>
                <div>
                    <span className="footer-title">Support</span>
                    <a className="link link-hover">Support Center</a>
                    <a className="link link-hover">Feedback</a>
                    <a className="link link-hover">Accesbility</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;