import React, { useState } from 'react';
import BookCover from '../../assets/th (1).jpeg'
import { IoArrowBackCircle } from "react-icons/io5";
import { IoPersonAdd } from "react-icons/io5";

import { useNavigate } from 'react-router-dom';

export default function BookRegistration() {

    const navigate = useNavigate();

      const [bookCover, setBookCover] = useState(BookCover);
    

    const handleBackIconClick = () => {
        navigate('/librarian-books');
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            setBookCover(e.target.result);
          };
          reader.readAsDataURL(file);
        }
      };

    const [authors, setAuthors] = useState([{ id: 1, name: '' }]);

    const addAuthorField = () => {
        setAuthors([...authors, { id: authors.length + 1, name: '' }]);
    };

    const handleInputChange = (id, value) => {
        const updatedAuthors = authors.map(author =>
            author.id === id ? { ...author, name: value } : author
        );
        setAuthors(updatedAuthors);
    };



    return (
        <div className='flex w-full p-3 gap-2'>
            <div className="w-2/3  flex flex-col">
                <div className="flex justify-around">
                    <div className=" ">
                        <IoArrowBackCircle className="h-14 w-14 cursor-pointer  "
                            onClick={handleBackIconClick} />
                    </div>
                    <div className="flex flex-col">
                        <h2 className='text-3xl font-bold'>Add Book</h2>
                        <p className='text-slate-500'>Book Registration Form</p>
                    </div>
                </div>
                <div className='ml-36 mt-10'>

                    <form action="">
                        <h3 className='text-slate-400'>TITLE</h3>
                        <hr />
                        <div className="flex flex-col mt-3 gap-2">
                            <label htmlFor="">Title</label>
                            <input type="text" placeholder='After Dark' className='border-2 w-2/3 pl-3 py-1 rounded-md' />
                        </div>
                        <div className="flex flex-col mt-3 gap-2">
                            <label htmlFor="">Sub Title</label>
                            <input type="text" placeholder='Arise Dawn' className='border-2 w-2/3 pl-3 py-1 rounded-md' />
                        </div>

                        <h3 className='text-slate-400 mt-6'>TYPE</h3>
                        <hr />

                        <div className="flex flex-col mt-3 gap-2">
                            <label htmlFor="">Genre</label>
                            <select id="genre" class=" w-2/3 pl-3 py-1 text-base border-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md">
                                <option value="">Select Genre</option>
                                <option value="">BSc</option>
                                <option value="">BBA</option>
                                <option value="">ACCA</option>
                            </select>
                        </div>

                        <div className="flex flex-col mt-3 gap-2">
                            <label htmlFor="">Status</label>
                            <select id="" class=" w-2/3 pl-3 py-1 text-base border-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md">
                                <option value="">New</option>
                                <option value="">Old</option>
                                <option value="">Used</option>
                            </select>
                        </div>
                        <div className="flex flex-col mt-3 gap-2">
                            <label htmlFor="">Number of Pages</label>
                            <input type="text" placeholder='1001' className='border-2 w-2/3 pl-3 py-1 rounded-md' />
                        </div>
                        <h3 className='text-slate-400 mt-6'>AUTHOR</h3>
                        <hr />
                        <div className="flex flex-col mt-3 gap-2">
                            <label htmlFor="">Author</label>
                            <div>
                                {authors.map((author, index) => (
                                    <div key={author.id} className='flex gap-3 items-center mb-3'>
                                        <input
                                            type="text"
                                            placeholder={`Author${index + 1}`} 
                                            className='border-2 w-2/3 pl-3 py-1 rounded-md'
                                            value={author.name}
                                            onChange={(e) => handleInputChange(author.id, e.target.value)}
                                        />
                                        {index === authors.length - 1 && (
                                            <IoPersonAdd className='h-6 w-6 cursor-pointer' onClick={addAuthorField} />
                                        )}
                                    </div>
                                ))}
                            </div>

                        </div>
                        <h3 className='text-slate-400 mt-6'>PUBLICATION</h3>
                        <hr />
                        <div className="flex flex-col mt-3 gap-2">
                            <label htmlFor="">Publication Date</label>
                            <input type="date" placeholder='Select date' className='border-2 w-2/3 pl-3 py-1 rounded-md' />


                        </div>
                        <div className="flex flex-col mt-3 gap-2">
                            <label htmlFor="">Edition</label>
                            <input type="text" placeholder='12th' className='border-2 w-2/3 pl-3 py-1 rounded-md' />

                        </div>
                        <div className="flex flex-col mt-3 gap-2">
                            <label htmlFor="">Publication Name</label>
                            <input type="text" placeholder='Orsana Publication' className='border-2 w-2/3 pl-3 py-1 rounded-md' />
                        </div>
                        <div className="flex flex-col mt-3 gap-2">
                            <label htmlFor="">Name of Publisher</label>
                            <input type="text" placeholder='Sudarshan Bam' className='border-2 w-2/3 pl-3 py-1 rounded-md' />
                        </div>
                        <div className="flex flex-col mt-3 gap-2">
                            <label htmlFor="">Place of Publication</label>
                            <input type="text" placeholder='Pcps' className='border-2 w-2/3 pl-3 py-1 rounded-md' />
                        </div>
                        <h3 className='text-slate-400 mt-6'>ISBN</h3>
                        <hr />
                        <div className="flex flex-col mt-3 gap-2">
                            <label htmlFor="">ISBN Number</label>
                            <input type="text" placeholder='9862480885' className='border-2 w-2/3 pl-3 py-1 rounded-md' />
                        </div>
                        <div className="flex flex-col mt-3 gap-2">
                            <label htmlFor="">Classification Number</label>
                            <input type="text" placeholder='9862480885' className='border-2 w-2/3 pl-3 py-1 rounded-md' />
                        </div>
                        <div className="flex flex-col mt-3 gap-2">
                            <label htmlFor="">Book Number</label>
                            <input type="text" placeholder='9862480885' className='border-2 w-2/3 pl-3 py-1 rounded-md' />
                        </div>
                        <div className="flex flex-col mt-3 gap-2">
                            <label htmlFor="">Scanner Type</label>
                            <select id="" class=" w-2/3 pl-3 py-1 text-base border-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md">
                                <option value="">Barcode</option>
                                <option value="">Qr</option>

                            </select>
                        </div>
                        <div className="flex flex-col mt-3 gap-2">
                            <label htmlFor="">Barcode Number</label>
                            <input type="text" placeholder='9862480885' className='border-2 w-2/3 pl-3 py-1 rounded-md' />
                        </div>
                        <h3 className='text-slate-400 mt-6'>ELECTRONIC LOCATION</h3>
                        <hr />
                        <div className="flex flex-col mt-3 gap-2">
                            <label htmlFor="">Book Location</label>
                            <input type="text" placeholder='./' className='border-2 w-2/3 pl-3 py-1 rounded-md' />
                        </div>
                        <button type="submit" className='border rounded-xl bg-black text-white mt-6 text-center h-10 w-1/2'>

                            Submit
                        </button>


                    </form>
                </div>


            </div>
            <div className="relative w-1/3 flex flex-col items-center p-3 mt-10">
        <div className="fixed text-center">
          <img
            src={bookCover}
            alt="profile"
            className="w-52 h-52 rounded-xl p-1 object-cover"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mt-2"
          />
          <h5 className="cursor-pointer mt-2">Upload Profile</h5>
        </div>
      </div>

        </div>
    )
}