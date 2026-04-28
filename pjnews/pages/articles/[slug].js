import Link from 'next/link'
import Nav from '../../components/Nav'
import Newsletter from '../../components/Newsletter'
import Tag, { LABELS } from '../../components/Tag'
import articles from '../../data/articles.json'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export async function getStaticPaths() {
  return {
    paths: articles.map(a => ({ params: { slug: a.slug } })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const article = articles.find(a => a.slug === params.slug)
  const idx = articles.findIndex(a => a.slug === params.slug)
  return {
    props: {
      article,
      prev: idx > 0 ? articles[idx - 1] : null,
      next: idx < articles.length - 1 ? articles[idx + 1] : null
    }
  }
}

export default function ArticlePage({ article, prev, next }) {
  if (!article) return null

  return (
    <>
      <Nav />
      <div className="article-wrap">
        <Link href="/" className="article-back">← Retour à l'accueil</Link>

        <div className="article-eyebrow">
          {article.themes.map(t => LABELS[t]).join(' · ')}
        </div>

        <h1 className="article-h1">{article.titre}</h1>

        <div className="article-meta">
          {article.themes.map(t => <Tag key={t} theme={t} />)}
        </div>

        <div className="article-info">
          {article.mots} mots &nbsp;·&nbsp; {article.source} &nbsp;·&nbsp; {article.date}
          &nbsp;·&nbsp;{' '}
          <a href={article.lien} target="_blank" rel="noopener noreferrer">
            Lire la source originale →
          </a>
        </div>

        <div className="prose">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {article.contenu}
          </ReactMarkdown>
        </div>

        <div className="article-nav">
          {prev ? (
            <Link href={`/articles/${prev.slug}`} className="article-nav-btn">
              ← {prev.titre.substring(0, 40)}…
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/articles/${next.slug}`} className="article-nav-btn">
              {next.titre.substring(0, 40)}… →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>

      <Newsletter />

      <footer className="footer">
        <div className="footer-logo">PJ News</div>
        <div className="footer-links">
          <Link href="/apropos" className="footer-link">À propos</Link>
          <Link href="/" className="footer-link">Accueil</Link>
        </div>
        <div className="footer-copy">© 2026 PJ News</div>
      </footer>
    </>
  )
}
