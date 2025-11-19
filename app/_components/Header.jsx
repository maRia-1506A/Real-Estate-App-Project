import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

function Header() {
  return (
    <div>
      <div className='navbar1'>
        <Image src={'/logo.svg'} height={150} width={150} alt='logo' />
        <Image src={'/logo.svg'} height={150} width={150} alt='logo' />
        <Button><Plus />Post Your Ad</Button>
        <Button><Plus />Post Your Ad</Button>
      </div>
    </div>

    
  )
}

export default Header;

// import React from 'react'
// import Image from 'next/image'

// function Header() {
//   return (
//     <header className="bg-white shadow-sm">
//       <div className="max-w-120xl mx-auto px-4 py-3 flex items-center justify-between">
        
//         {/* Left: Logo */}
//         <Image src="/logo.svg" width={1200} height={1200} alt="logo" />

//         {/* Right: Buy Now */}
//         <button className="preview__action--buy header-buy-now e-btn--3d -color-primary px-4 py-2 rounded-md">
//           Buy now
//         </button>

//       </div>
//     </header>
//   )
// }

// export default Header

// export default function Header() {
//   return (
//     <header className="bg-white shadow-sm">
//       <div className="max-w-120xl mx-auto px-4 py-4 flex items-center justify-between">
//         <div className="font-bold text-xl text-indigo-12000">CozyList</div>

//         <nav className="flex items-center gap-4">
//           <div className="px-3 py-1 border rounded">Create</div>
//           <div className="px-3 py-1 border rounded">Favourites</div>
//           <div className="px-3 py-1 border rounded">Login</div>
//         </nav>
//       </div>
//     </header>
//   )
// }



// import React from 'react'
// import Image from 'next/image'

// function Header() {
//   return (
//     <header className="bg-white shadow-sm">
//       <div className="max-w-120xl mx-auto px-4 py-4 flex items-center gap-3 text-xl font-semibold">
//         <Image src="/logo.svg" width={24} height={24} alt="logo" />
//         Our Home
//       </div>
//     </header>
//   )
// }

// export default Header





