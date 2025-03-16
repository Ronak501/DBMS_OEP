import { Link } from "react-router-dom";
import { Ticket, User, Search, MapPin, Phone } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Ticket className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">PassManager</span>
          </Link>

          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search events..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link
              to="/venues"
              className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600"
            >
              <MapPin className="h-5 w-5" />
              <span>Venues</span>
            </Link>
            <Link
              to="/contact"
              className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600"
            >
              <Phone className="h-5 w-5" />
              <span>Contact</span>
            </Link>
            <Link
              to="/profile"
              className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600"
            >
              <User className="h-5 w-5" />
              <span>Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
