import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Dropdown = ({name, children}) => {


    const [open, setOpen] = useState(false)

    const dropdownTriggerRef = useRef()
    const dropdownContentRef = useRef()

    useEffect(() => {

        let handleDropdown = e => {
            if(e.target === dropdownTriggerRef.current) return false
            if(!dropdownContentRef.current.contains(e.target)) setOpen(false)
        }

        document.addEventListener('mousedown', handleDropdown)

        return () => document.removeEventListener('mousedown', handleDropdown)
    })


    return (
        <div className="dropdown">
            <div ref={dropdownTriggerRef} className="dropdown__trigger" onClick={() => setOpen(!open)} style={{opacity: open ? '1' : '.65'}}>
                <span>{name}</span>
                <span className="material-symbols-outlined" style={{transform: open ? 'rotate(-180deg)' : ''}}>
                    expand_more
                </span>
            </div>
            <div ref={dropdownContentRef} className={`dropdown__content ${open ? 'openDropdown' : 'hideDropdown'}`}>
                {children}
            </div>
        </div>
    )
}

export default Dropdown