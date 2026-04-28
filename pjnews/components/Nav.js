import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Nav() {
  const router = useRouter()
  const [dateStr, setDateStr] = useState('')

  useEffect(() => {
    const d = new Date()
    const jours = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi']
    const mois = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre']
    setDateStr(`${jours[d.getDay()]} ${d.getDate()} ${mois[d.getMonth()]} ${d.getFullYear()}`)
  }, [])

  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">PJ News</Link>
      <div className="nav-links">
        <Link href="/" className={`nav-link ${router.pathname === '/' ? 'active' : ''}`}>
          Accueil
        </Link>
        <Link href="/apropos" className={`nav-link ${router.pathname === '/apropos' ? 'active' : ''}`}>
          À propos
        </Link>
      </div>
      <div className="nav-date">{dateStr}</div>
    </nav>
  )
}
