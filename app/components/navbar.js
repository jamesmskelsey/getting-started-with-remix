import { Link } from "remix";
import { useLocation } from "remix";

function NavButton({ active, target, children }) {
  return (
    <Link
      className={`${
        active ? "btn-active-nav" : "btn-inactive-nav"
      } btn-primary-nav`}
      to={target}
    >
      {children}
    </Link>
  );
}

export default function NavBar() {
  const links = [
    {
      target: "/admin",
      title: "Admin Only",
    },
    {
      target: "/posts",
      title: "Posts",
    },
    {
      target: "/people",
      title: "People",
    },
  ];
  const location = useLocation();
  const active = location.pathname;

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 font-bold">
          <div className="flex items-center">
            <div className="flex-shrink-0">Blog!</div>
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link) => (
                <NavButton key={link.target} active={active.startsWith(link.target)} target={link.target}>
                  {link.title}
                </NavButton>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
