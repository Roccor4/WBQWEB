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

  // PASSWORD CONFIG
  const CORRECT_PASSWORD = "MayYourShadowNeverOutrunTheLight";

  // ALBUM IMAGES
  const ALBUM_IMAGES = [
    {
      url: "https://customer-assets.emergentagent.com/job_hidden-lore/artifacts/7ilvg9ur_ChatGPT%20Image%20Aug%206%2C%202025%2C%2011_05_04%20AM.png",
      title: "Luca Altomare",
      description: "Smoking a cigarette on a rainy Milanese evening."
    }
    // add more here...
  ];

  // ARCHIVE SECTIONS
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

  const getSectionExpansion = (id) => {
    switch (id) {
      case 'doctrines':
        return isDoctrinesExpanded;
      case 'album':
        return isAlbumExpanded;
      case 'vessel-journal':
        return isVesselJournalExpanded;
      case 'redacted-pages':
        return isRedactedPagesExpanded;
      default:
        return false;
    }
  };

  const setSectionExpansion = (id, val) => {
    switch (id) {
      case 'doctrines':
        setIsDoctrinesExpanded(val);
        break;
      case 'album':
        setIsAlbumExpanded(val);
        break;
      case 'vessel-journal':
        setIsVesselJournalExpanded(val);
        break;
      case 'redacted-pages':
        setIsRedactedPagesExpanded(val);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
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
      <div className="relative max-w-4xl mx-auto px-6" style={{ zIndex: 20 }}>
        {!isUnlocked ? (
          /* Password form here */
          <form onSubmit={handleSubmit}>…</form>
        ) : (
          <div ref={contentRef} className="space-y-12 animate-fade-in">
            {ARCHIVE_CONTENT.map((item) => (
              <div key={item.id}>
                {item.id === 'pocket-guide' ? (
                  /* Pocket Guide Section here */
                  <div>…</div>
                ) : (
                  <div
                    className="rounded-lg backdrop-blur-sm overflow-hidden"
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.4)',
                      border: '1px solid rgba(120, 53, 15, 0.3)'
                    }}
                  >
                    <button
                      onClick={() =>
                        setSectionExpansion(item.id, !getSectionExpansion(item.id))
                      }
                      className="w-full p-8 text-left flex items-center justify-between transition-all duration-300"
                      style={{
                        background: getSectionExpansion(item.id)
                          ? 'rgba(120, 53, 15, 0.1)'
                          : 'transparent'
                      }}
                    >
                      {/* Header: icon, title, ChevronUp/Down */}
                      <div className="flex items-center space-x-3">
                        {item.type === 'document' && <FileText />}
                        {item.type === 'gallery' && <Image />}
                        <h4 className="text-2xl" style={{ color: '#F5E6B8' }}>
                          {item.title}
                        </h4>
                      </div>
                      {getSectionExpansion(item.id) ? <ChevronUp /> : <ChevronDown />}
                    </button>

                    {getSectionExpansion(item.id) && (
                      <div
                        className="animate-fade-in"
                        style={{ borderTop: '1px solid rgba(120, 53, 15, 0.2)' }}
                      >
                        {/* Doctrines */}
                        {item.id === 'doctrines' && (
                          <div className="px-8 pb-8">
                            {/* …existing doctrines UI… */}
                          </div>
                        )}

                        {/* Album */}
                        {item.id === 'album' && (
                          <div className="px-8 pb-8">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                              {ALBUM_IMAGES.map((img, i) => (
                                <div
                                  key={i}
                                  onClick={() => setSelectedImage(img)}
                                  className="group cursor-pointer transition-all duration-300"
                                >
                                  <div
                                    className="aspect-[3/4] overflow-hidden rounded-lg mb-4"
                                    style={{ border: '1px solid rgba(120, 53, 15, 0.3)' }}
                                  >
                                    <img
                                      src={img.url}
                                      alt={img.title}
                                      className="w-full h-full object-contain bg-black/20"
                                    />
                                  </div>
                                  <h5
                                    className="text-lg mb-2"
                                    style={{ color: '#F5E6B8' }}
                                  >
                                    {img.title}
                                  </h5>
                                  <p
                                    className="text-sm leading-relaxed"
                                    style={{ color: 'rgba(245, 230, 184, 0.8)' }}
                                  >
                                    {img.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Coming Soon */}
                        {(item.id === 'vessel-journal' ||
                          item.id === 'redacted-pages') && (
                          <div className="p-8 text-center">
                            <p
                              className="text-lg italic"
                              style={{ color: 'rgba(245, 158, 31, 0.6)' }}
                            >
                              This content will be available soon. Check back for updates.
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full max-w-none max-h-none overflow-auto rounded-lg">
            <button
              onClick={() => setSelectedImage(null)}
              className="fixed top-4 right-4 z-20 p-3 rounded-full transition-colors"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                color: '#F5E6B8',
                backdropFilter: 'blur(8px)'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div
              className="min-h-full flex flex-col items-center justify-start py-16 px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-none h-auto block"
                style={{ maxHeight: 'none' }}
              />
              <div
                className="mt-8 p-6 rounded-lg max-w-2xl text-center"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  backdropFilter: 'blur(8px)'
                }}
              >
                <h3 className="text-xl mb-3" style={{ color: '#F5E6B8' }}>
                  {selectedImage.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(245, 230, 184, 0.8)' }}>
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
          20%, 40%, 60%, 80% { transform: translateX(4px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-shake { animation: shake 0.6s ease-in-out; }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        input::placeholder { color: rgba(245, 158, 31, 0.5) !important; }
      `}</style>
    </section>
  );
};

export default HiddenLoreArchive;
