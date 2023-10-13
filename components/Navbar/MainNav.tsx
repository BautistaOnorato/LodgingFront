import Link from "next/link"

export interface MainNavProps {
  routes: { href: string, title: string }[]
  handleOpen: (value: boolean) => void
}

const MainNav: React.FC<MainNavProps> = ({ routes, handleOpen }) => {
  const closeMenu = () => {
    handleOpen(false)
  }

  return (
    <nav >
      <ul className="flex flex-col sm:flex-row items-center gap-8">
        {
          routes.map((route, i) => (
            <li key={route.href} className="flex flex-col gap-8 sm:block w-full sm:w-auto cursor-pointer text-center sm:text-left text-xl sm:text-md">
              <Link
                className="text-white hover:scale-105 font-medium cursor-pointer"
                href={route.href}
                onClick={() => closeMenu()}
              >
                {route.title}
              </Link>
              {i !== routes.length - 1 && <hr className="block sm:hidden" />}
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default MainNav