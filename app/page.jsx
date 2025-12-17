export default function Home() {
  return (
    <main
      style={{
        maxWidth: '760px',
        margin: '0 auto',
        padding: '96px 24px',
        lineHeight: 1.65,
      }}
    >
      <h1 style={{ marginBottom: '8px' }}>Voces del Territorio</h1>
      <p style={{ letterSpacing: '0.08em', fontSize: '13px', marginBottom: '48px' }}>
        HIMNOS CÍVICOS CONTEMPORÁNEOS
      </p>

      <p style={{ fontSize: '18px', marginBottom: '72px' }}>
        Iniciativa cultural para la creación de himnos cívicos contemporáneos de municipios de España.
      </p>

      <section style={{ marginBottom: '72px' }}>
        <h2>Proyecto</h2>
        <p>
          Voces del Territorio es una iniciativa cultural dedicada a la creación de himnos municipales
          inspirados en la historia, la geografía y la identidad de pueblos y ciudades.
        </p>
        <p>
          El proyecto se desarrolla con un enfoque respetuoso y colaborativo, en diálogo con archivos,
          historiadores locales y agentes culturales del territorio, con vocación de permanencia
          institucional y cultural.
        </p>
      </section>

      <section style={{ marginBottom: '72px' }}>
        <h2>Proceso</h2>
        <ul>
          <li>Investigación histórica, geográfica y cultural</li>
          <li>Composición musical y lírica en formato cívico</li>
          <li>Revisión institucional y ajustes</li>
          <li>Versión final con artistas o coros locales (opcional)</li>
        </ul>
      </section>

      <section style={{ marginBottom: '72px' }}>
        <h2>Para Ayuntamientos</h2>
        <p>
          Las obras pueden adquirirse mediante cesión completa de derechos, sin royalties ni
          obligaciones futuras.
        </p>
        <p>
          La cesión puede adaptarse a las necesidades del municipio, incluyendo autoría institucional
          o reconocimiento a colaboradores locales.
        </p>
      </section>

      <section>
        <h2>Contacto</h2>
        <p>contacto@vocesdelterritorio.es</p>
      </section>
    </main>
  );
}
