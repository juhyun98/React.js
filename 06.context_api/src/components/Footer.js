import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Footer = () => {

    const {isDark, setIsDark} = useContext(ThemeContext)

  return (
    <div className={`footer ${isDark ? 'header-dark' : ''}`}>
        <button className='button' onClick={() => setIsDark(!isDark)}>
            {isDark ? '라이트모드' : '다크모드'}
        </button>
    </div>
  )
}

export default Footer