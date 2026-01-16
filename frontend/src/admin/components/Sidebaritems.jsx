import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebaritems = ({ icon, name, className, activeItem, setActiveItem }) => {
  const isActive = activeItem === name;

  return (
    <div>
      <div
        onClick={() => setActiveItem(name)}
        className={` flex flex-row items-center gap-1 rounded-lg transition delay-100 cursor-pointer group ${
          isActive ? "bg-green-200" : "hover:bg-gray-100"
        }`}
      >
        <FontAwesomeIcon
          icon={icon}
          className={`group-hover:text-[var(--bg-color)] transition delay-100 text-2xl  p-2 ${className}`}
        />
        <h1 className="text-[var(--heading)] text-xl group-hover:text-[var(--bg-color)] transition delay-20">
          {name}
        </h1>
      </div>
    </div>
  );
};

export default Sidebaritems;
