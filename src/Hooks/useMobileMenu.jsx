import React, {useState} from 'react'

const useMobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navToggle = () => {
        setIsOpen((prev) => !prev)
    }
   return{
    isOpen,
    navToggle
   };
}

export default useMobileMenu