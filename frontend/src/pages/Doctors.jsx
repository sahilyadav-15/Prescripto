import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { dept_id } = useParams();
  const [filetDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  useEffect(() => {
    if (dept_id) {
      setFilterDoc(doctors.filter((doc) => doc.dept_id == dept_id));
    } else {
      setFilterDoc(doctors);
    }
  }, [doctors, dept_id]);

  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          <p
            onClick={() =>
              dept_id === "0" ? navigate("/doctors") : navigate("/doctors/0")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${
              dept_id === "0"
                ? "bg-indigo-100 text-black"
                : "hover:bg-indigo-50"
            }`}
          >
            General physician
          </p>
          <p
            onClick={() =>
              dept_id === "1" ? navigate("/doctors") : navigate("/doctors/1")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              dept_id === "1"
                ? "bg-indigo-100 text-black"
                : "hover:bg-indigo-50"
            }`}
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              dept_id === "2" ? navigate("/doctors") : navigate("/doctors/2")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${
              dept_id === "2"
                ? "bg-indigo-100 text-black"
                : "hover:bg-indigo-50"
            }`}
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              dept_id === "3" ? navigate("/doctors") : navigate("/doctors/3")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${
              dept_id === "3"
                ? "bg-indigo-100 text-black"
                : "hover:bg-indigo-50"
            }`}
          >
            Pediatricians
          </p>
          <p
            onClick={() =>
              dept_id === "4" ? navigate("/doctors") : navigate("/doctors/4")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${
              dept_id === "4"
                ? "bg-indigo-100 text-black"
                : "hover:bg-indigo-50"
            }`}
          >
            Neurologist
          </p>
          <p
            onClick={() =>
              dept_id === "5" ? navigate("/doctors") : navigate("/doctors/5")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${
              dept_id === "5"
                ? "bg-indigo-100 text-black"
                : "hover:bg-indigo-50"
            }`}
          >
            Gastroenterologist
          </p>
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filetDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              key={index}
            >
              <img className="bg-blue-50" src={item.image} alt="" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
