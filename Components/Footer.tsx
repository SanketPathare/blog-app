import Link from 'next/link';

export const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
  
  <div className="flex flex-col-reverse justify-between pt-5 pb-10  border-t-2 lg:flex-row border-gray-600 ">
    <p className="text-sm text-white">
      © Copyright 2020 Lorem Inc. All rights reserved.
    </p>
    <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
    <li>
  <Link href="/" legacyBehavior>
    <a className="text-sm text-white transition-colors duration-300 hover:text-gray-400">F.A.Q</a>
  </Link>
</li>
<li>
  <Link href="/" legacyBehavior>
    <a className="text-sm text-white transition-colors duration-300 hover:text-gray-400">Privacy Policy</a>
  </Link>
</li>
<li>
  <Link href="/" legacyBehavior>
    <a className="text-sm text-white transition-colors duration-300 hover:text-gray-400">Terms & Conditions</a>
  </Link>
</li>
</ul>
  </div>
</div>
  )
}
