const Navbar = () => {
    return (
      <>
      <nav className="sticky top-0 z-50 py-2 bg-base-200 shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className='flex flex-row items-center gap-1'>
              <p className='text-lg courier-new'>Crayonbrain</p>
            </div>

            <button
            className='btn btn-primary btn-sm rounded-xl'
            >Log in</button>
          </div>
        </div>
      </nav>
      </>
    );
  };
  
  export default Navbar;