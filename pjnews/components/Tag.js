const LABELS = {
  pi: 'Propriété intellectuelle',
  num: 'Numérique',
  crea: 'Industries créatives'
}

export default function Tag({ theme, short }) {
  const label = short
    ? { pi: 'PI', num: 'Numérique', crea: 'Créatif' }[theme]
    : LABELS[theme]
  return <span className={`tag tag-${theme}`}>{label}</span>
}

export { LABELS }
