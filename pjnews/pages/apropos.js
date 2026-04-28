import Link from 'next/link'
import Nav from '../components/Nav'
import Newsletter from '../components/Newsletter'

export default function Apropos() {
  return (
    <>
      <Nav />
      <div style={{maxWidth:680, margin:'0 auto', padding:'52px 40px 80px'}}>
        <div style={{fontFamily:'var(--fd)', fontSize:10, letterSpacing:'2.5px', textTransform:'uppercase', color:'var(--muted)', marginBottom:16}}>
          À propos
        </div>
        <h1 style={{fontFamily:'var(--fd)', fontSize:34, fontWeight:600, lineHeight:1.1, letterSpacing:'-.7px', marginBottom:32, paddingBottom:20, borderBottom:'1.5px solid var(--ink)'}}>
          PJ News — Veille juridique indépendante
        </h1>
        <p style={{fontSize:15, lineHeight:1.85, color:'#333', fontWeight:300, marginBottom:20}}>
          PJ News est une revue de veille juridique indépendante dédiée aux professionnels du droit
          et aux directions juridiques d'entreprise.
        </p>
        <p style={{fontSize:15, lineHeight:1.85, color:'#333', fontWeight:300, marginBottom:20}}>
          Chaque semaine, nous sélectionnons, analysons et contextualisons les décisions et évolutions
          législatives les plus significatives en matière de <strong>propriété intellectuelle</strong>,
          de <strong>droit du numérique</strong> et d'<strong>industries créatives</strong>.
        </p>
        <p style={{fontSize:15, lineHeight:1.85, color:'#333', fontWeight:300, marginBottom:20}}>
          Nos articles combinent rigueur jurisprudentielle et accessibilité éditoriale, pour permettre
          à chacun — avocat, juriste d'entreprise ou dirigeant — de comprendre les enjeux et
          d'anticiper les risques.
        </p>
        <p style={{fontSize:15, lineHeight:1.85, color:'#333', fontWeight:300}}>
          <strong>Contact :</strong>{' '}
          <a href="mailto:contact@pjnews.fr" style={{color:'var(--ink)', borderBottom:'1px solid var(--rule)'}}>
            contact@pjnews.fr
          </a>
        </p>
      </div>
      <Newsletter />
      <footer className="footer">
        <div className="footer-logo">PJ News</div>
        <div className="footer-links">
          <Link href="/" className="footer-link">Accueil</Link>
        </div>
        <div className="footer-copy">© 2026 PJ News</div>
      </footer>
    </>
  )
}
