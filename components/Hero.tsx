import React from 'react'
import links from "@/data/pages.json"
import Link from 'next/link'
import styles from '@/styles/hero.module.css'
import Button from '@/components/Button'

const Hero = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heroText}> 
      Your Source for Design <br/>
Inspiration and Development Tools
      </h1>

      <div className={styles.btnContainer}>
        {links.map((link) => (
          <Button 
            key={link.id}
            href={link.link}
          > 
            {link.name}
          </Button>
        ))}
      </div>

      
    </div>
  )
}

export default Hero