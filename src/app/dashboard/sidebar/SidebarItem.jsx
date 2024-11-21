const SidebarItem = ({ label, activeSection, setActiveSection, section }) => {
  return (
    <li>
      <button
        className={`w-full text-left p-4 hover:bg-secondary hover:text-textColor transition-all duration-300 ease-in-out ${
          activeSection === section
            ? 'font-bold text-textColor bg-secondary'
            : ''
        }`}
        onClick={() => setActiveSection(section)}
        aria-selected={activeSection === section}  // Add aria-selected for better accessibility
        role="button" // Explicitly define the button role for accessibility
      >
        {label}
      </button>
    </li>
  );
};

export default SidebarItem;
