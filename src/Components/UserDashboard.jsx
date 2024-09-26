import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import { myContext } from "../App";
import { useContext } from "react";

const UserDashboard = () => {
  const { loggedIn , setLoggedIn } = useContext(myContext);
  const navigate = useNavigate();

  async function userLogout() {
    try {
      await auth.signOut();
      toast.success("Logged Out");
      setLoggedIn(false);
      navigate("/");
    } catch (error) {
      toast.error(error);
    }
  }

  return (
    <>
      {loggedIn ? (
        <div className="background flex justify-center items-center">
          <div className="text-white drop-in bg-[url(https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsX29mZmljZV8zOF9hYnN0cmFjdF9hcnRfb2Zfd2F2eV9saWdodF9saW5lc193aXRoX2FfZGFya18yYTNmMTUzMS04ODFjLTQxOTgtODM0YS1kYTc4MzQ3MDRmN2FfMi5qcGc.jpg)] mb-28 w-auto lg:w-2/5 bg-slate-300 p-4 sm:p-8 rounded-2xl flex flex-col justify-center gap-4 border-double border-4 border-gray-700 ">
            <div className="bg-[url(https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg)] rounded-full size-16 bg-white bg-cover bg-center border-solid border-2 border-gray-500"></div>
            <h1>Username : {auth.currentUser.displayName}</h1>
            <p className="overflow-hidden">Email : {auth.currentUser.email}</p>
            <button className="p-1 px-2 bg-blue-700 rounded-xl text-white hover:bg-white hover:text-black" onClick={userLogout}>Logout</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default UserDashboard;

