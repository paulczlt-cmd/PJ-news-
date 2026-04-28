import { useState } from 'react'
import Link from 'next/link'
import Nav from '../components/Nav'
import Newsletter from '../components/Newsletter'
import Tag, { LABELS } from '../components/Tag'
import articles from '../data/articles.json'

export default function Home() {
  const [filter, setFilter] = useState('tous')

  const visible = (a) => filter === 'tous' || a.themes.includes(filter)

  // Article à la une : le plus récent ou le plus intéressant
  const une = articles[8] // blockchain
  const sidebar = [articles[1], articles[2], articles[5], articles[0]]
  const cards = [articles[1], articles[2], articles[5]]
  const featMain = articles[7]
  const featSide = [articles[0], articles[3], articles[4], articles[6]]

  return (
    <>
      <Nav />

      {/* HERO */}
      <div className="hero">
        <Link href={`/articles/${une.slug}`} className="hero-main">
          <div className="hero-eyebrow">À la une · {une.themes.map(t => LABELS[t]).join(' & ')}</div>
          <h1 className="hero-title">{une.titre}</h1>
          <div className="hero-meta">
            {une.themes.map(t => <Tag key={t} theme={t} />)}
            <span className="hero-date">{une.source} · {une.date}</span>
          </div>
          <p className="hero-excerpt">{une.excerpt}</p>
          <span className="hero-cta">Lire l'article complet →</span>
        </Link>

        <div className="hero-sidebar">
          <div className="sidebar-label">Autres décisions</div>
          {sidebar.map(a => (
            <Link key={a.id} href={`/articles/${a.slug}`} className="sidebar-item">
              <span className="sidebar-tag"><Tag theme={a.themes[0]} short /></span>
              <div className="sidebar-title">{a.titre}</div>
              <div className="sidebar-meta">{a.source} · {a.date}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* RUBRIQUES */}
      <div style={{borderBottom:'1px solid var(--rule)'}}>
        <div className="rubriques">
          {['tous','pi','num','crea'].map(f => (
            <button
              key={f}
              className={`rub ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f === 'tous' ? 'Toutes' : LABELS[f]}
            </button>
          ))}
        </div>
      </div>

      {/* DÉCISIONS RÉCENTES */}
      <div className="section">
        <div className="section-header">
          <span className="section-title">Décisions récentes</span>
        </div>

        <div className="grid3">
          {cards.filter(visible).map((a, i) => (
            <Link key={a.id} href={`/articles/${a.slug}`} className="card">
              <span className="card-tag"><Tag theme={a.themes[0]} /></span>
              <div className="card-title">{a.titre}</div>
              <div className="card-excerpt">{a.excerpt}</div>
              <div className="card-meta">{a.source} · {a.date}</div>
            </Link>
          ))}
        </div>

        {visible(featMain) && (
          <div className="featured2">
            <Link href={`/articles/${featMain.slug}`} className="feat-main">
              <span className="feat-tag"><Tag theme={featMain.themes[0]} /></span>
              <div className="feat-title">{featMain.titre}</div>
              <div className="feat-excerpt">{featMain.excerpt}</div>
              <div className="feat-meta">{featMain.source} · {featMain.date} · {featMain.mots} mots</div>
            </Link>
            <div className="feat-side">
              {featSide.filter(visible).map(a => (
                <Link key={a.id} href={`/articles/${a.slug}`} className="feat-item">
                  <div className="feat-item-title">{a.titre}</div>
                  <div className="feat-item-meta">{a.source} · {a.date}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ARTICLES */}
      <div className="section">
        <div className="section-header">
          <span className="section-title">Articles</span>
        </div>
        {articles.filter(visible).map((a, i) => (
          <Link key={a.id} href={`/articles/${a.slug}`} className="article-row">
            <div className="article-num">{String(i + 1).padStart(2, '0')}</div>
            <div>
              <div className="article-title">{a.titre}</div>
              <div className="article-excerpt">{a.excerpt}</div>
              <div className="article-tags">
                {a.themes.map(t => <Tag key={t} theme={t} />)}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Newsletter />

      <footer className="footer">
        <div className="footer-logo">PJ News</div>
        <div className="footer-links">
          <Link href="/apropos" className="footer-link">À propos</Link>
          <Link href="/mentions-legales" className="footer-link">Mentions légales</Link>
          <Link href="/contact" className="footer-link">Contact</Link>
        </div>
        <div className="footer-copy">© 2026 PJ News · Veille juridique</div>
      </footer>
    </>
  )
}
