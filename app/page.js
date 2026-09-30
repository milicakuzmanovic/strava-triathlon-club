const disciplines = [
  { icon: "🏊", title: "PLIVANJE", text: "Tehnika, izdržljivost i sigurnost u vodi." },
  { icon: "🚴", title: "BICIKL", text: "Snaga, taktika i timski duh na drumu." },
  { icon: "🏃", title: "TRČANJE", text: "Od prvih kilometara do velikih trka." },
];

const races = [
  ["12", "APR", "Belgrade Triathlon", "Beograd, Srbija"],
  ["18", "MAJ", "Ada Sprint Triathlon", "Beograd, Srbija"],
  ["22", "JUN", "Ohrid Triathlon", "Ohrid, Severna Makedonija"],
  ["14", "SEP", "Zagreb Triathlon", "Zagreb, Hrvatska"],
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a href="#" className="brand">
          <img src="/logo.jpg" alt="STRAVA Triathlon Club" />
        </a>
        <nav>
          <a className="active" href="#pocetna">Početna</a>
          <a href="#onama">O nama</a>
          <a href="#treninzi">Treninzi</a>
          <a href="#clanstvo">Članstvo</a>
          <a href="#takmicenja">Takmičenja</a>
          <a href="#vesti">Vesti</a>
          <a href="#galerija">Galerija</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <a className="join small" href="#clanstvo">POSTANI ČLAN</a>
      </header>

      <section id="pocetna" className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="eyebrow">STRAVA TRIATHLON CLUB</div>
          <h1><span>SWIM.</span> <span>BIKE.</span> <span>RUN.</span></h1>
          <p className="tagline">ONE TEAM. ONE GOAL.</p>
          <p className="lead">
            Triathlon klub koji spaja ljude, sport i avanturu.
            Treniramo zajedno, takmičimo se zajedno i pomeramo granice.
          </p>
          <div className="actions">
            <a className="join" href="#clanstvo">POSTANI ČLAN <b>→</b></a>
            <a className="outline" href="#onama">SAZNAJ VIŠE</a>
          </div>
        </div>
        <div className="discipline-word swim">SWIM</div>
        <div className="discipline-word bike">BIKE</div>
        <div className="discipline-word run">RUN</div>
      </section>

      <section className="discipline-bar">
        {disciplines.map((d) => (
          <article key={d.title}>
            <div className="disc-icon">{d.icon}</div>
            <div><h3>{d.title}</h3><p>{d.text}</p></div>
          </article>
        ))}
        <article>
          <div className="disc-icon">👥</div>
          <div><h3>ZAJEDNICA</h3><p>Podrška, motivacija i nova prijateljstva.</p></div>
        </article>
      </section>

      <section id="onama" className="about section">
        <div className="section-copy">
          <div className="eyebrow pink">O NAMA</div>
          <h2>VIŠE OD<br /><span>SPORTA.</span></h2>
          <p>
            STRAVA Triathlon Club je zajednica ljudi koji spajaju ljubav prema
            plivanju, biciklu i trčanju. Verujemo u kontinuitet, dobar trening
            i ljude koji jedni druge guraju napred.
          </p>
          <a className="join" href="#kontakt">SAZNAJ VIŠE O KLUBU</a>
        </div>
        <div className="about-grid">
          <div className="visual swim-card"><span>PLIVANJE</span></div>
          <div className="visual bike-card"><span>BICIKL</span></div>
          <div className="visual run-card"><span>TRČANJE</span></div>
        </div>
      </section>

      <section id="treninzi" className="dark-section">
        <div className="section-heading">
          <div><div className="eyebrow">TRENINZI</div><h2>SPREMNI ZA<br /><span>NOVI IZAZOV?</span></h2></div>
          <p>Planirani treninzi za sve nivoe — od početnika do iskusnih triatlonaca.</p>
        </div>
        <div className="training-grid">
          <div><b>🏊 PLIVANJE</b><span>Tehnika · baza · intervali</span></div>
          <div><b>🚴 BICIKL</b><span>Drum · intervali · dužine</span></div>
          <div><b>🏃 TRČANJE</b><span>Tempo · intervali · dužine</span></div>
        </div>
      </section>

      <section id="takmicenja" className="races section">
        <div className="section-heading light">
          <div><div className="eyebrow">PREDSTOJEĆA TAKMIČENJA</div><h2>KALENDAR <span>TRKA</span></h2></div>
          <a href="#">SVE TRKE →</a>
        </div>
        <div className="race-list">
          {races.map(([day, month, name, place]) => (
            <a className="race" href="#" key={name}>
              <div className="date"><strong>{day}</strong><span>{month}</span></div>
              <div><b>{name}</b><small>{place}</small></div>
              <strong className="arrow">→</strong>
            </a>
          ))}
        </div>
      </section>

      <section id="clanstvo" className="membership">
        <div>
          <div className="eyebrow">PRIDRUŽI NAM SE</div>
          <h2>POSTANI DEO<br /><span>STRAVA TIMA.</span></h2>
          <p>Trening, takmičenje, druženje i zajednica na jednom mestu.</p>
        </div>
        <a className="join white" href="#kontakt">POŠALJI PRIJAVU →</a>
      </section>

      <footer id="kontakt">
        <div className="footer-brand"><img src="/logo.jpg" alt="" /><p>SWIM. BIKE. RUN.</p></div>
        <div><b>KLUB</b><a href="#onama">O nama</a><a href="#treninzi">Treninzi</a><a href="#clanstvo">Članstvo</a></div>
        <div><b>PRATITE NAS</b><a href="#">Instagram</a><a href="#">Facebook</a><a href="#">Strava</a></div>
        <div><b>KONTAKT</b><p>Beograd, Srbija</p><p>hello@stravatriathlon.rs</p></div>
      </footer>
    </main>
  );
}
