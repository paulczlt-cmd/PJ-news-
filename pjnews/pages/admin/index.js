import { useState } from 'react'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Tag from '../../components/Tag'
import articles from '../../data/articles.json'

const MOT_DE_PASSE = 'pjnews2026' // ← change ce mot de passe

export default function Admin() {
  const [auth, setAuth] = useState(false)
  const [pwd, setPwd] = useState('')
  const [error, setError] = useState(false)

  function login() {
    if (pwd === MOT_DE_PASSE) {
      setAuth(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  if (!auth) {
    return (
      <>
        <Nav />
        <div style={{maxWidth:400, margin:'80px auto', padding:'0 24px'}}>
          <div style={{fontFamily:'var(--fd)', fontSize:22, fontWeight:600, marginBottom:24}}>
            Accès administration
          </div>
          <input
            type="password"
            placeholder="Mot de passe"
            value={pwd}
            onChange={e => setPwd(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && login()}
            style={{
              width:'100%', padding:'10px 14px', border:'1px solid var(--rule)',
              background:'transparent', fontFamily:'var(--fb)', fontSize:14,
              marginBottom:12, outline:'none'
            }}
          />
          {error && <div style={{color:'#c00', fontSize:12, marginBottom:12}}>Mot de passe incorrect.</div>}
          <button
            onClick={login}
            style={{
              background:'var(--ink)', color:'#fff', border:'none',
              padding:'10px 24px', fontFamily:'var(--fd)', fontSize:11,
              letterSpacing:'1.5px', textTransform:'uppercase', fontWeight:700,
              cursor:'pointer', width:'100%'
            }}
          >
            Accéder
          </button>
        </div>
      </>
    )
  }

  const byTheme = {
    pi: articles.filter(a => a.themes.includes('pi')).length,
    num: articles.filter(a => a.themes.includes('num')).length,
    crea: articles.filter(a => a.themes.includes('crea')).length,
  }

  return (
    <>
      <Nav />
      <div className="admin-wrap">
        <div className="admin-title">Administration</div>
        <div className="admin-sub">Vue d'ensemble des articles publiés · PJ News</div>

        {/* STATS */}
        <div className="admin-stats">
          <div className="stat-box">
            <div className="stat-n">{articles.length}</div>
            <div className="stat-l">Articles publiés</div>
          </div>
          <div className="stat-box">
            <div className="stat-n">{Math.round(articles.reduce((s,a)=>s+a.mots,0)/articles.length)}</div>
            <div className="stat-l">Mots en moyenne</div>
          </div>
          <div className="stat-box">
            <div className="stat-n">{articles.reduce((s,a)=>s+a.mots,0).toLocaleString()}</div>
            <div className="stat-l">Mots au total</div>
          </div>
        </div>

        {/* RÉPARTITION */}
        <div style={{display:'flex', gap:10, marginBottom:32}}>
          {Object.entries(byTheme).map(([t,n]) => (
            <div key={t} style={{display:'flex', alignItems:'center', gap:8}}>
              <Tag theme={t} />
              <span style={{fontSize:13, color:'var(--muted)'}}>{n} articles</span>
            </div>
          ))}
        </div>

        {/* TABLEAU */}
        <table className="admin-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Titre</th>
              <th>Thème</th>
              <th>Source</th>
              <th>Date</th>
              <th>Mots</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((a, i) => (
              <tr key={a.id}>
                <td style={{color:'var(--faint)', fontFamily:'var(--fd)', fontWeight:700}}>
                  {String(i+1).padStart(2,'0')}
                </td>
                <td className="td-title">{a.titre}</td>
                <td>
                  <div style={{display:'flex', gap:4, flexWrap:'wrap'}}>
                    {a.themes.map(t => <Tag key={t} theme={t} short />)}
                  </div>
                </td>
                <td style={{color:'var(--muted)', fontSize:12}}>{a.source}</td>
                <td style={{color:'var(--muted)', fontSize:12, whiteSpace:'nowrap'}}>{a.date}</td>
                <td style={{color:'var(--muted)', fontSize:12}}>{a.mots}</td>
                <td>
                  <Link href={`/articles/${a.slug}`} target="_blank">
                    <button className="btn-read">Voir →</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{marginTop:40, padding:'20px 24px', background:'#f0efe9', border:'1px solid var(--rule)'}}>
          <div style={{fontFamily:'var(--fd)', fontSize:13, fontWeight:600, marginBottom:8}}>Prochaines étapes</div>
          <div style={{fontSize:13, color:'var(--mid)', lineHeight:1.8}}>
            Pour ajouter de nouveaux articles : relancer le script Python dans Google Colab,
            remplacer le fichier <code style={{background:'#e8e6e0', padding:'1px 5px', fontSize:12}}>data/articles.json</code> sur GitHub,
            et Vercel déploie automatiquement en moins de 30 secondes.
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-logo">PJ News</div>
        <div className="footer-copy">Administration · © 2026</div>
      </footer>
    </>
  )
}
