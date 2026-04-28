import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  function subscribe() {
    if (email.includes('@')) {
      setDone(true)
      setEmail('')
    }
  }

  return (
    <div className="newsletter">
      <div className="nl-text">
        <strong>Veille hebdomadaire</strong> — Recevez chaque semaine les décisions qui comptent.
      </div>
      <div className="nl-form">
        <input
          className="nl-input"
          type="email"
          placeholder={done ? 'Inscription confirmée !' : 'votre@cabinet.fr'}
          value={email}
          onChange={e => setEmail(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && subscribe()}
        />
        <button className="nl-btn" onClick={subscribe}>S'abonner</button>
      </div>
    </div>
  )
}
