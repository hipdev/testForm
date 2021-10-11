import 'lazysizes'
import HeadPage from './Head'

import Header from './Header'

const Layout = ({ children }) => {
  return (
    <>
      <HeadPage />
      <div className="grid grid-cols-1 sm:grid-cols-2 ">
        <section className="mt-10 sm:mt-auto sm:h-full">
          <img
            data-src="/background.jpg"
            className="h-64 w-full sm:h-full sm:w-auto sm:min-h-screen lazyload object-cover"
            alt="Background medicines"
            src="/bg-optimized.jpg"
          />
        </section>
        <section>
          <Header />
          <main className="container mx-auto px-1">{children}</main>
        </section>
      </div>
    </>
  )
}

export default Layout
