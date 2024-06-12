import React from 'react'

const SideBar = () => {
  return (
    <aside className="w-48 bg-gray-800 text-white">
      <nav className="flex flex-col py-4 space-y-4">
        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">
          Opcion1
        </a>
        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">
          Opcion2
        </a>
        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">
          Opcion3
        </a>
      </nav>
    </aside>
  )
}

export default SideBar
