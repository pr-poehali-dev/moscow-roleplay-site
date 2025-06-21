import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная", icon: "Home" },
    { path: "/about", label: "О проекте", icon: "Info" },
    { path: "/rules", label: "Правила", icon: "BookOpen" },
    { path: "/online", label: "Онлайн", icon: "Users" },
    { path: "/faq", label: "FAQ", icon: "HelpCircle" },
  ];

  return (
    <nav className="bg-black/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Icon name="Gamepad2" size={20} className="text-white" />
            </div>
            <span className="font-montserrat font-bold text-xl bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Moscow RP
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  location.pathname === item.path
                    ? "bg-green-500/20 text-green-400"
                    : "text-gray-300 hover:text-green-400 hover:bg-green-500/10"
                }`}
              >
                <Icon name={item.icon as any} size={18} />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button className="p-2 rounded-lg text-gray-300 hover:text-green-400 hover:bg-green-500/10">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
