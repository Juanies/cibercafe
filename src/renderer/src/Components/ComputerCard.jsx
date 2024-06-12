import React from 'react'

const ComputerCard = () => {
  return (
    <main className="flex-1">
        <header className="border-b border-gray-700 p-4 text-white">Main</header>
        <div className="grid grid-cols-3 gap-4 p-4">
          {Array.from({ length: 9 }, (_, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-gray-700 rounded-lg"
            >
              <ComputerIcon className="h-16 w-16 text-gray-400" />
              <span className="mt-2 text-sm text-gray-300">PC01</span>
            </div>
          ))}
        </div>
      </main>
  )
}

function ComputerIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="14" height="8" x="5" y="2" rx="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" />
        <path d="M6 18h2" />
        <path d="M12 18h6" />
      </svg>
    )
  }

export default ComputerCard