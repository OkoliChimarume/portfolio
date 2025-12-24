import { createContext, useContext, useState } from "react";

const navbarContext = createContext();

export const useNavbarContext = () => {
  const context = useContext(navbarContext);
  if (!context) throw new Error("Navbar context is undefined");

  return context;
};

const navLinks = ["About", "Projects", "Contacts"];
const socials = [
  { title: "LinkedIn", link: "https://www.linkedin.com/in/okoli-chimarume/" },
  { title: "gitHub", link: "https://github.com/okolichimarume" },
  { title: "Twitter(X)", link: "https://x.com/loverofpastry?s=21" },
];

const NavbarContextProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sectionRefs, setSectionRefs] = useState({});
  const [navbarHidden, setNavbarHidden] = useState(false);
  const [navlinksLeft, setNavlinksLeft] = useState(0);


  return (
    <navbarContext.Provider
      value={{
        menuOpen,
        setMenuOpen,
        navLinks,
        socials,
        sectionRefs,
        setSectionRefs,
        navbarHidden, 
        setNavbarHidden,
        navlinksLeft, 
        setNavlinksLeft
      }}
    >
      {children}
    </navbarContext.Provider>
  );
};

export default NavbarContextProvider;
