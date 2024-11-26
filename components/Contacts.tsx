import Link from 'next/link'
import React, { useState } from 'react'
import { FaTwitter } from 'react-icons/fa'

const Contacts = () => {
    const [ open, setOpen] = useState(false)
  return (
    <div>
        <button 
        className=''
        onClick={() => setOpen((prev) => !prev)}>Contacts</button>
        {open && (
          <div>
            <h1>contact me on this platforms</h1>
            <div>
              <Link href="https://twitter.com/mubaraq_olalekan">
                <a>Twitter</a>
                <FaTwitter />
              </Link>
            </div>
          </div>
        )}

      
    </div>
  )
}

export default Contacts