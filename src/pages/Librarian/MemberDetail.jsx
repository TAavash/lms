import React, { useState, useEffect } from 'react';
import { IoArrowBackCircle } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

import ProfileImage from '../../assets/gojo.jpg';
import BookCover from '../../assets/th.jpeg';
import BookCover2 from '../../assets/th (1).jpeg';
import BookCover3 from '../../assets/OIP.jpeg';

const books = [
    {
        title: "Kafka on the Shore",
        author: "Murakami",
        cover: BookCover,
        checkOutDate: "2 June, 2025",
        overdue: "1 day",
        renewalDate: "No renewal",
    },
    {
        title: "Rich Dad Poor Dad",
        author: "Robert T. Kiyosaki",
        cover: BookCover2,
        checkOutDate: "3 June, 2025",
        overdue: "2 days",
        renewalDate: "No renewal",
    },
    {
        title: "How to Talk to Anyone",
        author: "Leil Lowndes",
        cover: BookCover3,
        checkOutDate: "4 June, 2025",
        overdue: "3 days",
        renewalDate: "No renewal",
    }
];

export const MemberDetail = () => {
    const navigate = useNavigate();
    const [selectedBook, setSelectedBook] = useState(null);
    const [isDefaultVisible, setIsDefaultVisible] = useState(true);
    const [key, setKey] = useState(0);

    const handleBackIconClick = () => {
        navigate('/LibraryDash');
    };

    const handleDivClick = () => {
        setIsDefaultVisible(false);
    };

    const handleBookClick = (book) => {
        setSelectedBook(book);
        setIsDefaultVisible(false);
    };

    useEffect(() => {
        setKey((prevKey) => prevKey + 1);
    }, [selectedBook]);

    return (
        <div className='flex w-full p-3 gap-2'>
            <div className="w-[70%] flex flex-col">
                <div className="flex justify-around">
                    <div>
                        <IoArrowBackCircle className="h-14 w-14 cursor-pointer" onClick={handleBackIconClick} />
                    </div>
                    <h2 className='text-3xl font-bold'>Sudarshan Bam</h2>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-5 ml-48">
                    <div className="flex flex-col">
                        <label htmlFor="Number">Roll Number</label>
                        <label htmlFor="id">2148338</label>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="Joined">Joined Date</label>
                        <label htmlFor="jDate">22 August, 2024</label>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="Expiration">Expiration Date</label>
                        <label htmlFor="eDate">22 June, 2025</label>
                    </div>
                </div>
                <h3 className='mt-14 mb-2 ml-36 text-2xl font-bold'>Books Taken</h3>
                <div className="ml-36 rounded-lg shadow-md bg-slate-100 p-3">
                    <div className="flex justify-evenly">
                        {books.map((book, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-lg shadow-md w-56 overflow-hidden"
                                onClick={() => handleBookClick(book)}
                            >
                                <img src={book.cover} alt={book.title} className="w-full object-cover" />
                                <div className="p-4">
                                    <h3 className="text-lg font-bold">{book.title}</h3>
                                    <p className="text-sm text-gray-600">{book.author}</p>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full h-12 bg-yellow-500 flex items-center justify-center cursor-pointer transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out">
                                    <button className="text-white font-bold">View Details</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <h3 className='mt-14 mb-2 ml-36 text-2xl font-bold'>Fine</h3>
                <div className="flex gap-3 ml-32 mt-2">
                    <label htmlFor="Fine" className='border-2 p-2 w-72'>RS 0</label>
                    <button className='border rounded-md bg-black text-center text-white h-10 mx-2 w-32'>Payment</button>
                </div>
            </div>
            <div className="w-[30%] flex flex-col justify-center items-center p-3 bg-slate-200">
                <img src={ProfileImage} alt="profile" className="h-52 w-52 rounded-xl p-1 object-cover" />
                <h5>Add Profile</h5>
                {isDefaultVisible ? (
                    <div
                        className="flex flex-col bg-blue-400 text-white p-2 mt-3 w-full rounded-xl justify-center items-center"
                        onClick={handleDivClick}
                    >
                        <h4 className="text-center">Details</h4>
                        <div className="flex flex-col items-center p-4 text-center">
                            <div className="flex flex-col mt-3">
                                <label htmlFor="Check Out date">Check Out Date</label>
                                <label htmlFor="coDate">852</label>
                            </div>
                            <div className="flex flex-col mt-3">
                                <label htmlFor="Overdue">Overdue</label>
                                <label htmlFor="oDay">753</label>
                            </div>
                            <div className="flex flex-col mt-3">
                                <label htmlFor="Renewal Date">Renewal Date</label>
                                <label htmlFor="rDate">951</label>
                            </div>
                        </div>
                        <button className="border rounded-xl bg-black text-center h-10 w-1/2">Edit</button>
                        <button className="border rounded-xl bg-black text-center h-10 w-1/2 my-3">Save</button>
                    </div>
                ) : (
                    selectedBook && (
                        <div key={key} className="flex flex-col bg-customColor text-white p-2 mt-3 w-full rounded-xl justify-center items-center slide-in">
                            <h4 className="text-center text-xl">Details</h4>
                            <div className="flex flex-col items-center p-4 text-center">
                                <img src={selectedBook.cover} alt="Book Cover" className="w-[90%] rounded-md" />
                                <div className="flex flex-col mt-2">
                                    <label htmlFor="Book Name" className="text-lg font-bold">{selectedBook.title}</label>
                                    <label htmlFor="author">{selectedBook.author}</label>
                                </div>
                                <div className="flex mt-3">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className="h-6 w-6 text-yellow-400" />
                                    ))}
                                </div>
                                <div className="flex flex-col mt-3">
                                    <label htmlFor="Check Out date">Check Out Date</label>
                                    <label htmlFor="coDate">{selectedBook.checkOutDate}</label>
                                </div>
                                <div className="flex flex-col mt-3">
                                    <label htmlFor="Overdue">Overdue</label>
                                    <label htmlFor="oDay">{selectedBook.overdue}</label>
                                </div>
                                <div className="flex flex-col mt-3">
                                    <label htmlFor="Renewal Date">Renewal Date</label>
                                    <label htmlFor="rDate">{selectedBook.renewalDate}</label>
                                </div>
                            </div>
                            <button className="border rounded-xl bg-black text-center h-10 w-1/2">Renew</button>
                            <button className="border rounded-xl bg-black text-center h-10 w-1/2 my-3">Check In</button>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default MemberDetail;