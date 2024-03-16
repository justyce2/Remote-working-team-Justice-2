import { Dropdown, Navbar } from "flowbite-react";
import { useNavigate, Link } from "react-router-dom";
import { NavLinkAction, navLinks } from "./nav.config";

const Header = () => {
  const navigate = useNavigate();

  const handleAction = (action: NavLinkAction | (() => any)) => {
    if (typeof action === "function") {
      action();
    } else {
      switch (action.type) {
        case "internal":
          navigate(action.url);
          break;
        case "external":
          window.open(action.url, "_blank");
          break;
        case "anchor": {
          const anchorTarget = document.querySelector(action.url);
          if (anchorTarget) {
            anchorTarget.scrollIntoView({ behavior: "smooth", block: "start" });
          }
          break;
        }
      }
    }
  };

  return (
    <header className="sm:h-[50px] lg:h-[95px] w-full relative">
      <Navbar
        style={{ backgroundColor: "var(--your-color-variable-or-white)" }}
        className="sticky top-0 h-full flex justify-center"
      >
        <Navbar.Brand href="/">
          <img
            alt="logo"
            className="h-[33px] w-[212px]"
            src="https://res.cloudinary.com/deuhrgf1w/image/upload/v1710064587/sybl0rmrbez71ptylde0.png"
          />
        </Navbar.Brand>

        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>

        <Navbar.Collapse>
          {navLinks.map(({ variant, action, dropDownOptions, title }) => {
            switch (variant) {
              case "dropdown":
                return (
                  <div key={title} className="text-base">
                    <Dropdown label={title} dismissOnClick={false} inline>
                      {dropDownOptions.map(({ action, text }) => (
                        <Dropdown.Item
                          key={text}
                          onClick={() => handleAction(action)}
                        >
                          {text}
                        </Dropdown.Item>
                      ))}
                    </Dropdown>
                  </div>
                );
              case "text":
                return (
                  <Navbar.Link
                    className="text-black"
                    key={title}
                    onClick={() => handleAction(action)}
                  >
                    {title}
                  </Navbar.Link>
                );
              default:
                return null;
            }
          })}
        </Navbar.Collapse>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse justify-center items-center gap-10">
          <a className="cursor-pointer">Help</a>
          <a className="cursor-pointer">Log in</a>
          <Link to={"/signup"}>
            <button className="w-[136px] h-[44px] rounded-[25px] navbar-btn font-semibold text-white">
              Sign up
            </button>
          </Link>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
