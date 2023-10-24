import MainNav from "./MainNav"

export interface MobileMenuProps {
  handleOpen: (value: boolean) => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ handleOpen }) => {

  return (
    <menu className="block sm:hidden p-8 top-[100%] h-[90vh] absolute bg-secondary-color w-full z-50">
      <MainNav handleOpen={handleOpen} routes={[{ href: "/register", title: "Register" }, { href: "/signin", title: "Sign in" }]} />
    </menu>
  )
}

export default MobileMenu