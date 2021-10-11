import 'lazysizes'
import HeadPage from './Head'

import Header from './Header'

const Layout = ({ children }) => {
  return (
    <>
      <HeadPage />
      <div className="grid grid-cols-1 sm:grid-cols-2 ">
        <section className="h-64 mt-10 sm:mt-auto sm:h-full">
          <img
            data-src="/background.jpg"
            className="w-full h-full lazyload object-cover"
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
