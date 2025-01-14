import { HiMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
    return (
      <>
      <nav className="sticky top-0 z-50 bg-base-200 shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="dropdown dropdown-bottom lg:dropdown-left">
                <label tabIndex={0} className="btn btn-ghost rounded-btn">
                    <HiMenuAlt2 className='text-2xl lg:text-3xl' />
                </label>

                <ul 
                tabIndex={0} 
                className="menu dropdown-content p-2 shadow bg-base-200 rounded-box w-52 mt-4"
                >
                    <li className='btn btn-ghost text-left w-full'>Home</li>
                    <li className='btn btn-ghost text-left w-full'>About</li>
                    <li className='btn btn-ghost text-left w-full'>Contact</li>
                </ul>
            </div>

            <button
            className='btn btn-primary btn-sm w-[70px] rounded-xl'
            >Log in</button>
          </div>
        </div>
      </nav>
      </>
    );
  };
  
  export default Navbar;