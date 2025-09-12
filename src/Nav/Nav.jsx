import React from 'react'

const Nav = () => {
  return (
    <nav className='py-5 sticky top-0 z-10 text-xl px-[10%] border-b-[1px] border-b-black bg-white'>
      <ul className="flex items-center gap-10">
            <li className=" whitespace-nowrap">
              <a href="" className="hover:text-orange-400">الرئيسية</a>
            </li>
          <li className="hover:text-orange-400">
            <a href="/#brief">نبذة</a>
          </li>
          <li className="hover:text-orange-400">
            <a href="/#products">منتجاتنا</a>
          </li>
        </ul>
    </nav>
  )
}

export default Nav
