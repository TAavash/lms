import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import DefaultProfile from "../../assets/pcps_logo.jpg";
import BackComp from "../../components/BackComp";
import { getBooksById } from "../../utils/Api"; // Import your API function

const LibraryBookDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { uuid } = useParams(); // Extract uuid from location.state

  const [bookInfo, setBookInfo] = useState({
    books_idS: "",
    class_number: "",
    book_number: "",
    title: "",
    sub_title: "",
    edition_statement: "",
    num_of_page: "",
    language: "",
    element_select: "",
    electronic_location_and_access: "",
    description: "",
    cover_pic: "",
    book_stock_idS: "",
    publications_idS: "",
    created_at: "",
    updated_at: "",
    deleted_at: "",
    published_year: "",
    publication_name: "",
    name_of_publisher: "",
    place_of_publication: "",
    authors_idS: "",
    name: "",
    add_author: "",
    isbn_idS: "",
    isbn_number: "",
    barcode__r_f_i_d_idS: "",
    identifier_type: "",
    identifier_value: "",
    status: "Active",
  });

  const [bookHistory, setBookHistory] = useState([]);

  useEffect(() => {
    const fetchBookDetails = async () => {
      if (uuid) {
        try {
          const data = await getBooksById(uuid); // Fetch book details using the uuid
          setBookInfo(data); // Assuming the API returns the book details directly
          // setBookHistory(data.bookHistory || []); // If there's a separate book history
        } catch (error) {
          console.error("Error fetching book details:", error);
          toast.error("Failed to fetch book details.");
        }
      }
    };

    fetchBookDetails();
  }, [uuid]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookInfo({
      ...bookInfo,
      [name]: value,
    });
  };

  const handleEditClick = () => {
    navigate(`/BookRegistration`);
  };

  return (
    <div className="bg-primary w-full h-full text-white">
      <ToastContainer />
      <div className="w-full h-16 bg-secondary flex items-center justify-center text-3xl text-black font-semibold p-4 relative">
        Book Details
        <BackComp />
      </div>
      <div className="flex w-full p-4">
        <div className="bg-white text-black p-4 rounded-lg shadow-lg w-1/4">
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-3">Book Information</h3>
            <div className="flex flex-col items-center">
              <div className="relative">
                <img
                  src={bookInfo.cover_pic || DefaultProfile}
                  alt="Profile"
                  className="w-40 h-56 object-cover rounded-xl shadow-md"
                />
              </div>
              <div className="flex items-center w-auto bg-green-500 rounded-md p-1 mt-2">
                {bookInfo.status}
              </div>
              <div className="mt-5">
                <div className="mb-4">
                  <span className="text-gray-600 font-medium">ISBN:</span>{" "}
                  <span className="text-gray-800">{bookInfo.isbn_number}</span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {bookInfo.title}
                </h1>
                <p className="text-lg text-gray-700 mb-4">
                  by: <span className="text-blue-500">{bookInfo.name}</span>
                </p>
                <p className="text-gray-700 mb-4 text-justify">
                  {bookInfo.description}
                </p>
              </div>
            </div>

            <div className="flex w-full gap-4">
              <button
                className="border rounded-xl mt-3 bg-black text-white text-center h-10 w-full"
                onClick={handleEditClick}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/4 p-4">
          <div className="flex flex-col w-full p-4 bg-white text-black rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Book History</h3>
            <div className="overflow-scroll md:overflow-auto border rounded-sm">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Check Out Date
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Due Date
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Check In Date
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Fine
                    </th>
                  </tr>
                </thead>
                {bookHistory.length === 0 ? (
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td colSpan={4} className="text-center md:py-32">
                        Member have not borrowed this book
                      </td>
                    </tr>
                  </tbody>
                ) : (
                  <tbody className="bg-white divide-y divide-gray-200">
                    {bookHistory.map((book, index) => (
                      <tr key={index} className="hover:bg-gray-100">
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                          {book.fullName}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                          {book.checkoutDate}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                          {book.dueDate}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                          {book.checkIn}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                          {book.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryBookDetail;
