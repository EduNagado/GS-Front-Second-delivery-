const DashboardNav = ({ toggleSidebar, isSidebarOpen,  handleLogout, isLoggingOut }) => {
  return (
    <div className={`w-full flex justify-between items-center p-4 sm:p-6 md:p-8 bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg fixed top-0 z-20 
      ${isSidebarOpen ? 'lg:w-[calc(100%-6rem)] xl:w-[calc(100%-6rem)]' : 'lg:w-[calc(100%-24rem)] xl:w-[calc(100%-24rem)]'}`}
    >
      {/* Botão para mobile  */}
      <button
        onClick={toggleSidebar}
        className="text-3xl lg:hidden text-white focus:outline-none transform transition-transform duration-300 hover:scale-105"
        aria-expanded={isSidebarOpen}
      >
        {isSidebarOpen ? (
          <i className="bx bx-chevron-left"></i>
        ) : (
          <i className="bx bx-menu"></i>
        )}
      </button>

      {/* Navigation Buttons */}
      <div className="flex space-x-2 sm:space-x-4 overflow-x-auto flex-wrap justify-end sm:space-x-2 md:space-x-4">
        <button
          onClick={handleLogout}
          className={`bg-accent text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow-md hover:bg-primary transition duration-200 hover:shadow-lg focus:outline-none text-xs sm:text-sm ${
            isLoggingOut ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={isLoggingOut}
        >
          {isLoggingOut ? 'Logging Out...' : 'Log Out'}
        </button>
      </div>
    </div>
  );
};

export default DashboardNav;
