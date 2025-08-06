import React, { useState, useRef } from 'react';
import {
  Eye,
  EyeOff,
  Lock,
  FileText,
  Download,
  Shield,
  Image,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const HiddenLoreArchive = () => {
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isShaking, setIsShaking] = useState(false);
  const [isDoctrinesExpanded, setIsDoctrinesExpanded] = useState(false);
  const [isAlbumExpanded, setIsAlbumExpanded] = useState(false);
  const [isVesselJournalExpanded, setIsVesselJournalExpanded] = useState(false);
  const [isRedactedPagesExpanded, setIsRedactedPagesExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const contentRef = useRef(null);

  const CORRECT_PASSWORD = "MayYourShadowNeverOutrunTheLight";

  const ALBUM_IMAGES = [
    {
      url: "https://customer-assets.emergentagent.com/job_hidden-lore/artifacts/7ilvg9ur_ChatGPT%20Image%20Aug%206%2C%202025%2C%2011_05_04%20AM.png",
      title: "Luca Altomare",
      description: "Smoking a cigarette on a rainy Milanese evening."
    }
    // add more images here...
  ];

  const ARCHIVE_CONTENT = [
    {
      id: 'pocket-guide',
      title: 'The Pocket Guide of the Ordo Solis',
      type: 'document',
      description:
        'The sacred handbook carried by every initiate. Contains the fundamental principles, rituals, and hierarchical structure of the Order.',
      quote:
        '"The Sun burns away the unworthy. Only through discipline and obedience may one hope to reflect its eternal light."',
      downloadUrl:
        'https://customer-assets.emergentagent.com/job_hidden-lore/artifacts/428t89ic_The%20Pocket%20Guide%20of%20the%20Ordo%20Solis.pdf',
      fileSize: '80MB',
      coverImage:
        'https://customer-assets.emergentagent.com/job_hidden-lore/artifacts/g6uoov7v_The%20Pocket%20Guide%20of%20the%20Ordo%20Solis.png',
      alwaysOpen: true
    },
    {
      id: 'doctrines',
      title: 'Doctrines',
      type: 'document',
      description:
        'Core philosophical teachings and theological frameworks of the Ordo Solis. Essential readings for understanding the sacred hierarchy and spiritual discipline.',
      quote: '"Given Upon Arrival | Carried Always | Read Daily Before Sleep"',
      downloadUrl:
        'https://customer-assets.emergentagent.com/job_hidden-lore/artifacts/gkbn7j5x_Doctrine%20of%20the%20Lamb.pdf',
      fileSize: '33MB',
      coverImage:
        'https://customer-assets.emergentagent.com/job_hidden-lore/artifacts/jnbs7kh6_Copy%20of%20The%20Pocket%20Guide%20of%20the%20Ordo%20Solis.png',
      status: 'Available'
    },
    {
      id: 'album',
      title: 'Album',
      type: 'gallery',
      description:
        'A collection of sacred images, photographs, and visual records from within the Order.',
      status: 'Available'
    },
    {
      id: 'vessel-journal',
      title: "Vessel's Journal — Archive File 17-V",
      type: 'document',
      description:
        'Personal writings and observations from a senior Vessel, documenting daily life within the compound.',
      status: 'Coming Soon'
    },
    {
      id: 'redacted-pages',
      title: 'Redacted Pages — Archive Series R/1973',
      type: 'document',
      description:
        'Classified documents from the founding year, with sensitive information removed for security.',
      status: 'Coming Soon'
    }
  ];

  const getSectionExpansion = id => {
    switch (id) {
      case 'doctrines': return isDoctrinesExpanded;
      case 'album': return isAlbumExpanded;
      case 'vessel-journal': return isVesselJournalExpanded;
      case 'redacted-pages': return isRedactedPagesExpanded;
      default: return false;
    }
  };

  const setSectionExpansion = (id, val) => {
    switch (id) {
      case 'doctrines': setIsDoctrinesExpanded(val); break;
      case 'album': setIsAlbumExpanded(val); break;
      case 'vessel-journal': setIsVesselJournalExpanded(val); break;
      case 'redacted-pages': setIsRedactedPagesExpanded(val); break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsUnlocked(true);
      setError('');
      setTimeout(() => {
        contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    } else {
      setError('Access Denied');
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 600);
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <section
      className="relative w-full py-24 overflow-hidden"
      style={{ fontFamily: '"Cinzel", serif' }}
    >
      {/* Background video + overlays */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0, opacity: 0.35 }}
      >
        <source
          src="https://videos.pexels.com/video-files/6136340/6136340-hd_1920_1080_30fps.mp4"
          type="video/mp4"
        />
      </video>
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-700/20 to-transparent z-10 pointer-events-none"
      />

      <div className="relative max-w-4xl mx-auto px-6 z-20">
        {!isUnlocked ? (
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl mb-2" style={{ color: '#F3E8C7' }}>
              Beyond This Point Lies the
            </h2>
            <h1 className="text-5xl md:text-7xl mb-4" style={{ color: '#F5E6B8' }}>
              Forbidden Archive
            </h1>
            <p
              className="text-xl italic mb-8"
              style={{ color: 'rgba(245,230,184,0.8)' }}
            >
              Only those with clearance may enter. Will you proceed?
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <div className="relative">
                <Lock
                  className="absolute left-4 top-1/2 transform -translate-y-1/2"
                  style={{ color: 'rgba(245,158,31,0.6)' }}
                />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Enter Clearance Code"
                  required
                  className={`w-full pl-12 pr-12 py-4 rounded-lg backdrop-blur-sm transition ${
                    isShaking ? 'animate-shake' : ''
                  }`}
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    border: '1px solid rgba(120,53,15,0.5)',
                    color: '#F3E8C7'
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(v => !v)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  style={{ color: 'rgba(245,158,31,0.6)' }}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
              {error && <p className="text-red-500 italic">{error}</p>}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-lg shadow-lg transform transition hover:scale-105"
                style={{
                  background: 'linear-gradient(to right, #7F1D1D, #991B1B)',
                  color: '#F3E8C7',
                  border: '1px solid rgba(127,29,29,0.5)'
                }}
              >
                <Shield /> Unlock Archive
              </button>
            </form>

            <p className="mt-4 text-sm" style={{ color: 'rgba(245,158,31,0.7)' }}>
              No clearance?{' '}
              <a
                href="https://preview.mailerlite.io/forms/1707528/161992586618209765/share"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={{ color: '#F5E6B8' }}
              >
                Sign up here
              </a>
            </p>
          </div>
        ) : (
          <div ref={contentRef} className="space-y-12 animate-fade-in">
            {/* Welcome */}
            <div
              className="text-center pb-12"
              style={{ borderBottom: '1px solid rgba(120,53,15,0.3)' }}
            >
              <h2 className="text-4xl mb-4" style={{ color: '#F5E6B8' }}>
                Welcome to the Archive
              </h2>
              <p className="italic" style={{ color: 'rgba(245,230,184,0.8)' }}>
                Guard what you read well. Knowledge once gained cannot be forgotten.
              </p>
            </div>

            {/* Archive Index */}
            <div className="space-y-8">
              <h3 className="text-2xl mb-4" style={{ color: '#F5E6B8' }}>
                Archive Index
              </h3>
              {ARCHIVE_CONTENT.map(item => (
                <div key={item.id}>
                  {item.id === 'pocket-guide' ? (
                    <div
                      className="rounded-lg p-8 backdrop-blur-sm"
                      style={{
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        border: '1px solid rgba(120,53,15,0.3)'
                      }}
                    >
                      {/* Pocket Guide content… */}
                    </div>
                  ) : (
                    <div
                      className="rounded-lg backdrop-blur-sm overflow-hidden"
                      style={{
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        border: '1px solid rgba(120,53,15,0.3)'
                      }}
                    >
                      <button
                        onClick={() =>
                          setSectionExpansion(item.id, !getSectionExpansion(item.id))
                        }
                        className="w-full p-8 flex items-center justify-between transition-colors duration-300"
                        style={{
                          background: getSectionExpansion(item.id)
                            ? 'rgba(120,53,15,0.1)'
                            : 'transparent'
                        }}
                      >
                        <div className="flex items-center gap-4">
                          {item.type === 'gallery' ? (
                            <Image style={{ color: '#F59E1F' }} />
                          ) : (
                            <FileText style={{ color: '#F59E1F' }} />
                          )}
                          <div>
                            <h4 style={{ color: '#F5E6B8' }}>{item.title}</h4>
                            <p style={{ color: 'rgba(245,230,184,0.6)' }}>
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          {item.status && (
                            <span
                              className="px-3 py-1 rounded"
                              style={{
                                background: 'rgba(120,53,15,0.3)',
                                color: 'rgba(245,158,31,0.8)'
                              }}
                            >
                              {item.status}
                            </span>
                          )}
                          {getSectionExpansion(item.id) ? (
                            <ChevronUp style={{ color: '#F59E1F' }} />
                          ) : (
                            <ChevronDown style={{ color: '#F59E1F' }} />
                          )}
                        </div>
                      </button>
                      {getSectionExpansion(item.id) && (
                        <div
                          className="px-8 pb-8 animate-fade-in"
                          style={{ borderTop: '1px solid rgba(120,53,15,0.2)' }}
                        >
                          {item.id === 'doctrines' && (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                              {/* Doctrines content… */}
                            </div>
                          )}
                          {item.id === 'album' && (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                              {ALBUM_IMAGES.map((img, i) => (
                                <div
                                  key={i}
                                  className="cursor-pointer"
                                  onClick={e => {
                                    e.stopPropagation();
                                    setSelectedImage(img);
                                  }}
                                >
                                  <div
                                    className="aspect-[3/4] overflow-hidden rounded-lg mb-4"
                                    style={{
                                      border: '1px solid rgba(120,53,15,0.3)'
                                    }}
                                  >
                                    <img
                                      src={img.url}
                                      alt={img.title}
                                      className="w-full h-full object-contain bg-black/20"
                                    />
                                  </div>
                                  <h5
                                    className="mb-2"
                                    style={{ color: '#F5E6B8' }}
                                  >
                                    {img.title}
                                  </h5>
                                  <p style={{ color: 'rgba(245,230,184,0.8)' }}>
                                    {img.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                          {(item.id === 'vessel-journal' ||
                            item.id === 'redacted-pages') && (
                            <p
                              className="text-center italic"
                              style={{ color: 'rgba(245,158,31,0.6)' }}
                            >
                              This content will be available soon. Check back for updates.
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.9)' }}
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full max-w-none max-h-none overflow-auto rounded-lg">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-3 rounded-full"
              style={{ backgroundColor: 'rgba(0,0,0,0.8)', color: '#F5E6B8' }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            {/* prevent closing modal when image clicked */}
            <div onClick={e => e.stopPropagation()}>
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                style={{ maxWidth: '80vw', maxHeight: '80vh' }}
                className="block mx-auto"
              />
              <div
                className="mt-6 p-6 text-center rounded-lg"
                style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
              >
                <h3 className="text-xl mb-2" style={{ color: '#F5E6B8' }}>
                  {selectedImage.title}
                </h3>
                <p style={{ color: 'rgba(245,230,184,0.8)' }}>
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes shake {
          0%,100% { transform: translateX(0); }
          20%,60% { transform: translateX(-4px); }
          40%,80% { transform: translateX(4px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-shake { animation: shake 0.6s ease-in-out; }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
      `}</style>
    </section>
  );
};

export default HiddenLoreArchive;