const Header = () => {
  return (
    <header className="fixed z-10 top-0 px-6 sm:px-8 py-2 w-full flex justify-between items-center shadow-md sm:static sm:shadow-none bg-white">
      <img
        className="w-40 sm:w-auto"
        src="/logo.svg"
        alt="Logo Quality Health"
      />
      <a
        href="#"
        className="text-primary text-sm border border-primary px-2 py-1 rounded-md "
      >
        How it works
      </a>
    </header>
  )
}

export default Header
