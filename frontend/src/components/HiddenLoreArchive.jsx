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

  const getSectionExpansion = (id) => {
    switch (id) {
      case 'doctrines': return isDoctrinesExpanded;
      case 'album': return isAlbumExpanded;
      case 'vessel-journal': return isVesselJournalExpanded;
      case 'redacted-pages': return isRedactedPagesExpanded;
      default: return false;
    }
  };

  const setSectionExpansion = (id, value) => {
    switch (id) {
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
    <section className="relative w-full py-24 overflow-hidden" style={{ fontFamily: '"Cinzel", serif' }}>
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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-700/20 to-transparent z-10 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 z-20">
        {!isUnlocked ? (
          /* --- PASSWORD SCREEN --- */
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl mb-2" style={{ color: '#F3E8C7' }}>
              Beyond This Point Lies the
            </h2>
            <h1 className="text-5xl md:text-7xl mb-4" style={{ color: '#F5E6B8' }}>
              Forbidden Archive
            </h1>
            <p className="text-xl italic mb-8" style={{ color: 'rgba(245,230,184,0.8)' }}>
              Only those with clearance may enter. Will you proceed?
            </p>

            <form onSubm

