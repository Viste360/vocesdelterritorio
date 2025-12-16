export default function Home() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 24px', fontFamily: 'Inter, sans-serif', lineHeight: 1.6 }}>
      <img src="/logo.svg" alt="Voces del Territorio" style={{ marginBottom: '48px', maxWidth: '520px' }} />

      <p style={{ fontSize: '20px', marginBottom: '64px' }}>
        Creación de himnos cívicos contemporáneos para municipios de España.
      </p>

      <section style={{ marginBottom: '48px' }}>
        <h2>Proyecto</h2>
        <p>
          Voces del Territorio es una iniciativa cultural dedicada a la creación de himnos municipales
          inspirados en la historia, la geografía y la identidad de pueblos y ciudades.
        </p>
        <p>
          Cada obra se desarrolla de forma individual, con un enfoque respetuoso y colaborativo,
          pensada para su uso institucional, educativo y cultural a largo plazo.
        </p>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h2>Proceso</h2>
        <ul>
          <li>Investigación histórica, geográfica y cultural</li>
          <li>Composición musical y lírica en formato cívico</li>
          <li>Revisión institucional y ajustes</li>
          <li>Versión final con artistas o coros locales (opcional)</li>
        </ul>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h2>Para Ayuntamientos</h2>
        <p>
          Las obras pueden adquirirse mediante <strong>cesión completa de derechos</strong>,
          sin royalties ni obligaciones futuras.
        </p>
      </section>

      <section>
        <h2>Contacto</h2>
        <p>contacto@vocesdelterritorio.es</p>
      </section>
    </main>
  );
}
