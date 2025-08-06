import React, { useState, useRef, useEffect } from 'react';
import { Eye, EyeOff, Lock, FileText, Download, Shield, Image, ChevronDown, ChevronUp } from 'lucide-react';

// Self-contained Hidden Lore Archive Component
// Password: MayYourShadowNeverOutrunTheLight
// To update content: Edit the ARCHIVE_CONTENT object below
// To add album images: Add URLs to the ALBUM_IMAGES array below

const HiddenLoreArchive = () => {
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isShaking, setIsShaking] = useState(false);
  const [isAlbumExpanded, setIsAlbumExpanded] = useState(false);
  const [isDoctrinesExpanded, setIsDoctrinesExpanded] = useState(false);
  const [isVesselJournalExpanded, setIsVesselJournalExpanded] = useState(false);
  const [isRedactedPagesExpanded, setIsRedactedPagesExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const contentRef = useRef(null);

  // PASSWORD CONFIGURATION - Change here to update password
  const CORRECT_PASSWORD = "MayYourShadowNeverOutrunTheLight";

  // ALBUM IMAGES CONFIGURATION - Add new image URLs here for easy GitHub updates
  const ALBUM_IMAGES = [
    {
      url: "https://customer-assets.emergentagent.com/job_hidden-lore/artifacts/7ilvg9ur_ChatGPT%20Image%20Aug%206%2C%202025%2C%2011_05_04%20AM.png",
      title: "The Sacred Emblem of Ordo Solis",
      description: "The central symbol of the Order, representing the eternal Sun and its divine authority."
    }
    // Add more images here:
    // {
    //   url: "path/to/your/image.jpg",
    //   title: "Image Title",
    //   description: "Image description"
    // }
  ];

  // ARCHIVE CONTENT CONFIGURATION - Edit here to update archive entries
  const ARCHIVE_CONTENT = [
    {
      id: 'pocket-guide',
      title: 'The Pocket Guide of the Ordo Solis',
      type: 'document',
      description: 'The sacred handbook carried by every initiate. Contains the fundamental principles, rituals, and hierarchical structure of the Order.',
      quote: '"The Sun burns away the unworthy. Only through discipline and obedience may one hope to reflect its eternal light."',
      downloadUrl: 'https://customer-assets.emergentagent.com/job_hidden-lore/artifacts/428t89ic_The%20Pocket%20Guide%20of%20the%20Ordo%20Solis.pdf',
      fileSize: '80MB',
      coverImage: 'https://customer-assets.emergentagent.com/job_hidden-lore/artifacts/g6uoov7v_The%20Pocket%20Guide%20of%20the%20Ordo%20Solis.png',
      alwaysOpen: true
    },
    {
      id: 'doctrines',
      title: 'Doctrines',
      type: 'document',
      description: 'Core philosophical teachings and theological frameworks of the Ordo Solis. Essential readings for understanding the sacred hierarchy and spiritual discipline.',
      quote: '"Given Upon Arrival | Carried Always | Read Daily Before Sleep"',
      downloadUrl: 'https://customer-assets.emergentagent.com/job_hidden-lore/artifacts/gkbn7j5x_Doctrine%20of%20the%20Lamb.pdf',
      fileSize: '33MB',
      coverImage: 'https://customer-assets.emergentagent.com/job_hidden-lore/artifacts/jnbs7kh6_Copy%20of%20The%20Pocket%20Guide%20of%20the%20Ordo%20Solis.png',
      status: 'Available'
    },
    {
      id: 'album',
      title: 'Album',
      type: 'gallery',
      description: 'A collection of sacred images, photographs, and visual records from within the Order.',
      status: 'Available'
    },
    {
      id: 'vessel-journal',
      title: "Vessel's Journal — Archive File 17‑V",
      type: 'document',
      description: 'Personal writings and observations from a senior Vessel, documenting daily life within the compound.',
      status: 'Coming Soon'
    },
    {
      id: 'redacted-pages',
      title: 'Redacted Pages — Archive Series R/1973',
      type: 'document',
      description: 'Classified documents from the founding year, with sensitive information removed for security.',
      status: 'Coming Soon'
    }
  ];

  // Helper function to get expansion state
  const getSectionExpansion = (itemId) => {
    switch (itemId) {
      case 'doctrines': return isDoctrinesExpanded;
      case 'album': return isAlbumExpanded;
      case 'vessel-journal': return isVesselJournalExpanded;
      case 'redacted-pages': return isRedactedPagesExpanded;
      default: return false;
    }
  };

  // Helper function to set expansion state
  const setSectionExpansion = (itemId, value) => {
    switch (itemId) {
      case 'doctrines': setIsDoctrinesExpanded(value); break;
      case 'album': setIsAlbumExpanded(value); break;
      case 'vessel-journal': setIsVesselJournalExpanded(value); break;
      case 'redacted-pages': setIsRedactedPagesExpanded(value); break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsUnlocked(true);
      setError('');
      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
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
      style={{
        background: 'linear-gradient(to bottom, #000000, rgba(120, 53, 15, 0.2), #000000)',
        fontFamily: '"Cinzel", serif'
      }}
    >
      {/* Ordo Solis Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <img 
          src="https://customer-assets.emergentagent.com/job_hidden-lore/artifacts/7ilvg9ur_ChatGPT%20Image%20Aug%206%2C%202025%2C%2011_05_04%20AM.png"
          alt="Ordo Solis"
          className="w-96 h-96 object-contain"
        />
      </div>

      {/* Subtle Texture Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(120, 53, 15, 0.1), transparent, rgba(120, 53, 15, 0.1))'
        }}
      ></div>
      
      <div className="relative max-w-4xl mx-auto px-6">
        {!isUnlocked ? (
          <div className="text-center">
            {/* Main Headline */}
            <div className="mb-8">
              <h2 
                className="text-4xl md:text-6xl mb-4 tracking-wide leading-tight"
                style={{ 
                  fontFamily: '"Cinzel", serif', 
                  color: '#F3E8C7' 
                }}
              >
                Beyond This Point Lies the
              </h2>
              <h1 
                className="text-5xl md:text-7xl mb-6 tracking-wider leading-tight"
                style={{ 
                  fontFamily: '"Cinzel", serif', 
                  color: '#F5E6B8' 
                }}
              >
                Forbidden Archive
              </h1>
              <p 
                className="text-xl md:text-2xl font-serif italic max-w-2xl mx-auto leading-relaxed"
                style={{ 
                  color: 'rgba(245, 230, 184, 0.8)',
                  fontFamily: '"Cinzel", serif'
                }}
              >
                Only those with clearance may enter. Will you proceed?
              </p>
            </div>

            {/* Password Form */}
            <div className="max-w-md mx-auto mb-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5" style={{ color: 'rgba(245, 158, 31, 0.6)' }} />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Clearance Code"
                    className={`
                      w-full pl-12 pr-12 py-4 text-lg rounded-lg backdrop-blur-sm
                      transition-all duration-300
                      ${isShaking ? 'animate-shake' : ''}
                    `}
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      border: '1px solid rgba(120, 53, 15, 0.5)',
                      color: '#F3E8C7',
                      fontFamily: '"Cinzel", serif'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(120, 53, 15, 0.8)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(120, 53, 15, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(120, 53, 15, 0.5)';
                      e.target.style.boxShadow = 'none';
                    }}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center transition-colors"
                    style={{ color: 'rgba(245, 158, 31, 0.6)' }}
                    onMouseEnter={(e) => e.target.style.color = 'rgba(245, 158, 31, 1)'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(245, 158, 31, 0.6)'}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>

                {error && (
                  <div 
                    className="text-sm font-serif italic"
                    style={{ color: '#EF4444', fontFamily: '"Cinzel", serif' }}
                  >
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-4 text-lg tracking-wide transition-all duration-300 transform hover:scale-105 rounded-lg shadow-lg flex items-center justify-center gap-2"
                  style={{
                    background: 'linear-gradient(to right, #7F1D1D, #991B1B)',
                    color: '#F3E8C7',
                    border: '1px solid rgba(127, 29, 29, 0.5)',
                    fontFamily: '"Cinzel", serif'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(to right, #991B1B, #B91C1C)';
                    e.target.style.boxShadow = '0 10px 25px rgba(127, 29, 29, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'linear-gradient(to right, #7F1D1D, #991B1B)';
                    e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  <Shield className="h-5 w-5" />
                  Unlock Archive
                </button>
              </form>
            </div>

            {/* Newsletter Link */}
            <div className="text-center">
              <p 
                className="text-sm"
                style={{ 
                  color: 'rgba(245, 158, 31, 0.7)',
                  fontFamily: '"Cinzel", serif'
                }}
              >
                No clearance?{' '}
                <a
                  href="#newsletter"
                  className="underline transition-all duration-300"
                  style={{ 
                    color: '#F5E6B8',
                    textDecorationColor: 'rgba(245, 158, 31, 0.5)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#F3E8C7';
                    e.target.style.textDecorationColor = 'rgba(245, 158, 31, 1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#F5E6B8';
                    e.target.style.textDecorationColor = 'rgba(245, 158, 31, 0.5)';
                  }}
                >
                  Sign up here
                </a>
              </p>
            </div>
          </div>
        ) : (
          /* Unlocked Content */
          <div ref={contentRef} className="space-y-12 animate-fade-in">
            {/* Welcome Message */}
            <div 
              className="text-center pb-12"
              style={{ borderBottom: '1px solid rgba(120, 53, 15, 0.3)' }}
            >
              <h2 
                className="text-4xl md:text-5xl mb-6 tracking-wide"
                style={{ 
                  fontFamily: '"Cinzel", serif', 
                  color: '#F5E6B8' 
                }}
              >
                Welcome to the Archive
              </h2>
              <p 
                className="text-xl max-w-2xl mx-auto leading-relaxed italic"
                style={{ 
                  color: 'rgba(245, 230, 184, 0.8)',
                  fontFamily: '"Cinzel", serif'
                }}
              >
                Guard what you read well. Knowledge once gained cannot be forgotten.
              </p>
            </div>

            {/* Archive Index */}
            <div className="space-y-8">
              <h3 
                className="text-2xl tracking-wide mb-8"
                style={{ 
                  fontFamily: '"Cinzel", serif', 
                  color: '#F5E6B8' 
                }}
              >
                Archive Index
              </h3>

              {ARCHIVE_CONTENT.map((item) => (
                <div key={item.id}>
                  {/* The Pocket Guide - Always Open */}
                  {item.id === 'pocket-guide' ? (
                    <div 
                      className="rounded-lg p-8 backdrop-blur-sm"
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        border: '1px solid rgba(120, 53, 15, 0.3)'
                      }}
                    >
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/3">
                          <img 
                            src={item.coverImage}
                            alt={item.title}
                            className="w-full rounded-lg shadow-lg"
                            style={{ border: '1px solid rgba(120, 53, 15, 0.3)' }}
                          />
                        </div>
                        <div className="md:w-2/3 space-y-4">
                          <h4 
                            className="text-2xl md:text-3xl tracking-wide"
                            style={{ 
                              fontFamily: '"Cinzel", serif', 
                              color: '#F5E6B8' 
                            }}
                          >
                            {item.title}
                          </h4>
                          <p 
                            className="leading-relaxed"
                            style={{ 
                              color: 'rgba(245, 230, 184, 0.8)',
                              fontFamily: '"Cinzel", serif'
                            }}
                          >
                            {item.description}
                          </p>
                          <blockquote 
                            className="pl-4 italic"
                            style={{ 
                              borderLeft: '4px solid rgba(120, 53, 15, 1)',
                              color: 'rgba(245, 158, 31, 0.9)',
                              fontFamily: '"Cinzel", serif'
                            }}
                          >
                            {item.quote}
                          </blockquote>
                          <div className="pt-4">
                            <a
                              href={item.downloadUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                              style={{
                                background: 'linear-gradient(to right, rgba(120, 53, 15, 1), rgba(146, 64, 14, 1))',
                                color: '#F3E8C7',
                                border: '1px solid rgba(120, 53, 15, 0.5)',
                                fontFamily: '"Cinzel", serif'
                              }}
                              onMouseEnter={(e) => {
                                e.target.style.background = 'linear-gradient(to right, rgba(146, 64, 14, 1), rgba(180, 83, 9, 1))';
                                e.target.style.boxShadow = '0 10px 25px rgba(120, 53, 15, 0.2)';
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.background = 'linear-gradient(to right, rgba(120, 53, 15, 1), rgba(146, 64, 14, 1))';
                                e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                              }}
                            >
                              <Download className="h-4 w-4" />
                              Download PDF ({item.fileSize})
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* All Other Sections - Collapsible */
                    <div 
                      className="rounded-lg backdrop-blur-sm overflow-hidden"
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        border: '1px solid rgba(120, 53, 15, 0.3)'
                      }}
                    >
                      {/* Section Header */}
                      <button
                        onClick={() => setSectionExpansion(item.id, !getSectionExpansion(item.id))}
                        className="w-full p-8 text-left transition-all duration-300 flex items-center justify-between"
                        style={{
                          background: getSectionExpansion(item.id) 
                            ? 'rgba(120, 53, 15, 0.1)' 
                            : 'transparent'
                        }}
                        onMouseEnter={(e) => {
                          if (!getSectionExpansion(item.id)) {
                            e.target.style.backgroundColor = 'rgba(120, 53, 15, 0.05)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!getSectionExpansion(item.id)) {
                            e.target.style.backgroundColor = 'transparent';
                          }
                        }}
                      >
                        <div className="flex items-center gap-4">
                          {item.type === 'gallery' ? (
                            <Image className="h-5 w-5" style={{ color: '#F59E1F' }} />
                          ) : (
                            <FileText className="h-5 w-5" style={{ color: '#F59E1F' }} />
                          )}
                          <div>
                            <h4 
                              className="text-lg"
                              style={{ 
                                fontFamily: '"Cinzel", serif', 
                                color: '#F5E6B8' 
                              }}
                            >
                              {item.title}
                            </h4>
                            <p 
                              className="text-sm"
                              style={{ 
                                color: 'rgba(245, 230, 184, 0.6)',
                                fontFamily: '"Cinzel", serif'
                              }}
                            >
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span 
                            className="text-sm px-3 py-1 rounded"
                            style={{ 
                              backgroundColor: 'rgba(120, 53, 15, 0.3)',
                              color: 'rgba(245, 158, 31, 0.8)',
                              fontFamily: '"Cinzel", serif'
                            }}
                          >
                            {item.status}
                          </span>
                          {getSectionExpansion(item.id) ? (
                            <ChevronUp className="h-5 w-5" style={{ color: '#F59E1F' }} />
                          ) : (
                            <ChevronDown className="h-5 w-5" style={{ color: '#F59E1F' }} />
                          )}
                        </div>
                      </button>

                      {/* Section Content */}
                      {getSectionExpansion(item.id) && (
                        <div 
                          className="animate-fade-in"
                          style={{ borderTop: '1px solid rgba(120, 53, 15, 0.2)' }}
                        >
                          {/* Doctrines Content */}
                          {item.id === 'doctrines' && (
                            <div className="px-8 pb-8">
                              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                                <div className="group transition-all duration-300">
                                  <div 
                                    className="aspect-[3/4] overflow-hidden rounded-lg mb-4"
                                    style={{ border: '1px solid rgba(120, 53, 15, 0.3)' }}
                                  >
                                    <img 
                                      src={item.coverImage}
                                      alt={item.title}
                                      className="w-full h-full object-contain bg-black/20"
                                    />
                                  </div>
                                  <h5 
                                    className="text-lg mb-2"
                                    style={{ 
                                      fontFamily: '"Cinzel", serif', 
                                      color: '#F5E6B8' 
                                    }}
                                  >
                                    {item.title}
                                  </h5>
                                  <p 
                                    className="text-sm leading-relaxed mb-4"
                                    style={{ 
                                      color: 'rgba(245, 230, 184, 0.8)',
                                      fontFamily: '"Cinzel", serif'
                                    }}
                                  >
                                    {item.description}
                                  </p>
                                  {item.quote && (
                                    <blockquote 
                                      className="pl-3 italic text-xs mb-4"
                                      style={{ 
                                        borderLeft: '3px solid rgba(120, 53, 15, 1)',
                                        color: 'rgba(245, 158, 31, 0.9)',
                                        fontFamily: '"Cinzel", serif'
                                      }}
                                    >
                                      {item.quote}
                                    </blockquote>
                                  )}
                                  <a
                                    href={item.downloadUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
                                    style={{
                                      background: 'linear-gradient(to right, rgba(120, 53, 15, 1), rgba(146, 64, 14, 1))',
                                      color: '#F3E8C7',
                                      border: '1px solid rgba(120, 53, 15, 0.5)',
                                      fontFamily: '"Cinzel", serif'
                                    }}
                                    onMouseEnter={(e) => {
                                      e.target.style.background = 'linear-gradient(to right, rgba(146, 64, 14, 1), rgba(180, 83, 9, 1))';
                                      e.target.style.boxShadow = '0 10px 25px rgba(120, 53, 15, 0.2)';
                                    }}
                                    onMouseLeave={(e) => {
                                      e.target.style.background = 'linear-gradient(to right, rgba(120, 53, 15, 1), rgba(146, 64, 14, 1))';
                                      e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                                    }}
                                  >
                                    <Download className="h-4 w-4" />
                                    Download PDF ({item.fileSize})
                                  </a>
                                </div>
                              </div>
                              
                              <div 
                                className="mt-8 p-4 rounded-lg text-center"
                                style={{ 
                                  backgroundColor: 'rgba(120, 53, 15, 0.1)',
                                  border: '1px solid rgba(120, 53, 15, 0.2)'
                                }}
                              >
                                <p 
                                  className="text-xs italic"
                                  style={{ 
                                    color: 'rgba(245, 158, 31, 0.6)',
                                    fontFamily: '"Cinzel", serif'
                                  }}
                                >
                                  Core teachings and theological frameworks of the Order
                                </p>
                              </div>
                            </div>
                          )}

                          {/* Album Content */}
                          {item.id === 'album' && (
                            <div className="px-8 pb-8">
                              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                                {ALBUM_IMAGES.map((image, index) => (
                                  <div 
                                    key={index}
                                    className="group cursor-pointer transition-all duration-300 hover:scale-105"
                                    onClick={() => setSelectedImage(image)}
                                  >
                                    <div 
                                      className="aspect-square overflow-hidden rounded-lg mb-3"
                                      style={{ border: '1px solid rgba(120, 53, 15, 0.3)' }}
                                    >
                                      <img 
                                        src={image.url}
                                        alt={image.title}
                                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 bg-black/20"
                                      />
                                    </div>
                                    <h5 
                                      className="text-sm mb-1"
                                      style={{ 
                                        fontFamily: '"Cinzel", serif', 
                                        color: '#F5E6B8' 
                                      }}
                                    >
                                      {image.title}
                                    </h5>
                                    <p 
                                      className="text-xs leading-relaxed"
                                      style={{ 
                                        color: 'rgba(245, 230, 184, 0.6)',
                                        fontFamily: '"Cinzel", serif'
                                      }}
                                    >
                                      {image.description}
                                    </p>
                                  </div>
                                ))}
                              </div>
                              
                              <div 
                                className="mt-8 p-4 rounded-lg text-center"
                                style={{ 
                                  backgroundColor: 'rgba(120, 53, 15, 0.1)',
                                  border: '1px solid rgba(120, 53, 15, 0.2)'
                                }}
                              >
                                <p 
                                  className="text-xs italic"
                                  style={{ 
                                    color: 'rgba(245, 158, 31, 0.6)',
                                    fontFamily: '"Cinzel", serif'
                                  }}
                                >
                                  To add new images: Edit the ALBUM_IMAGES array in the component file
                                </p>
                              </div>
                            </div>
                          )}

                          {/* Coming Soon Content */}
                          {(item.id === 'vessel-journal' || item.id === 'redacted-pages') && (
                            <div className="p-8 text-center">
                              <p 
                                className="text-lg italic"
                                style={{ 
                                  color: 'rgba(245, 158, 31, 0.6)',
                                  fontFamily: '"Cinzel", serif'
                                }}
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
          </div>
        )}
      </div>

      {/* Image Modal for Album */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-90"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="fixed top-4 right-4 z-20 p-3 rounded-full transition-colors"
            style={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              color: '#F5E6B8',
              backdropFilter: 'blur(8px)'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(120, 53, 15, 0.9)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <div className="fixed inset-0 overflow-auto">
            <div className="min-h-full flex flex-col items-center justify-center p-8">
              <img 
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
                style={{ maxWidth: '90vw', maxHeight: '80vh' }}
              />
              
              <div 
                className="mt-6 p-6 rounded-lg max-w-2xl text-center"
                style={{ 
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  backdropFilter: 'blur(8px)'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <h3 
                  className="text-xl mb-3"
                  style={{ 
                    fontFamily: '"Cinzel", serif', 
                    color: '#F5E6B8' 
                  }}
                >
                  {selectedImage.title}
                </h3>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ 
                    color: 'rgba(245, 230, 184, 0.8)',
                    fontFamily: '"Cinzel", serif'
                  }}
                >
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&display=swap');
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
          20%, 40%, 60%, 80% { transform: translateX(4px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-shake {
          animation: shake 0.6s ease-in-out;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        input::placeholder {
          color: rgba(245, 158, 31, 0.5) !important;
        }
        
        /* Ensure Cinzel font is applied */
        * {
          font-family: 'Cinzel', serif !important;
        }
      `}</style>
    </section>
  );
};

export default HiddenLoreArchive;