export default function Videos() {
  const videos = [
    'https://www.youtube.com/embed/7BtjYsn4H7o',
    'https://www.youtube.com/embed/8rVW1J3PElw',
    'https://www.youtube.com/embed/vLVULUCfxGM',
    'https://www.youtube.com/embed/OgU8gpqzgZI',
    'https://www.youtube.com/embed/3WXi_oHuMk0',
    'https://www.youtube.com/embed/o4gjU5YBXRM',
    'https://www.youtube.com/embed/EQxx-c-JGuI',
    'https://www.youtube.com/embed/OfmY40RB-e8'
  ];

  return (
    <section className="videos" id="videos">
      <div className="container">
        <div className="videos-header">
          <div className="section-label">Contenido Audiovisual</div>
          <h2 className="section-title">Streaming</h2>
        </div>
        <p className="videos-sub">Participaciones en medios y análisis de casos relevantes</p>
        <div className="videos-grid">
          {videos.map((videoUrl, index) => (
            <div key={index} className="video-wrapper">
              <iframe
                src={videoUrl}
                title={`Video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}