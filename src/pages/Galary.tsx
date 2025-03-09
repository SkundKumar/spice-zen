import React, { useState } from 'react';
import { Heart, ZoomIn, Download } from 'lucide-react';

interface Photo {
  id: number;
  url: string;
  title: string;
  photographer: string;
  size?: 'large' | 'regular';
}

const photos: Photo[] = [
  {
    id: 1,
    url: "/Website_Food Pictures/Restaurant pictures/Exterior-1.jpg",
    title: "",
    photographer: "",
    size: 'large'
  },
  {
    id: 2,
    url: "/Website_Food Pictures/Restaurant pictures/Hero Image_Uber .jpg",
    title: "",
    photographer: ""
  },
  {
    id: 3,
    url: "/Website_Food Pictures/Restaurant pictures/Interior 1.jpg",
    title: "",
    photographer: ""
  },
  {
    id: 4,
    url: "/Website_Food Pictures/Restaurant pictures/Hero pic 4.jpg",
    title: "",
    photographer: "",
    size: 'large'
  },
  {
    id: 5,
    url: "/Website_Food Pictures/Restaurant pictures/Party decoration.jpeg",
    title: "",
    photographer: ""
  },
  {
    id: 6,
    url: "/Website_Food Pictures/Restaurant pictures/Interior 4.jpg",
    title: "",
    photographer: ""
  }
];

function Galary() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [likedPhotos, setLikedPhotos] = useState<Set<number>>(new Set());

  const toggleLike = (id: number) => {
    setLikedPhotos(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 p-8">
      <div className='w-screen h-10 bg-orange-50  mb-5   flex justify-center items-center'>
      <a className="font-mono text-lg mb-5" href="/">Home</a>
      </div>
      {/* Header */}
      <header className="max-w-7xl mx-auto mb-12 text-center">
        
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent">
        North Park, Indian Restaurant & Café
        </h1>
        <p className="text-orange-800/80 text-xl">The Authentic taste of India</p>
      </header>

      {/* Bento Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
        {photos.map((photo) => (
          <div 
            key={photo.id} 
            className={`relative cursor-pointer rounded-3xl overflow-hidden transition-all duration-500 ease-out hover:scale-[1.02] ${
              photo.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''
            }`}
            onClick={() => setSelectedPhoto(photo)}
            style={{
              backgroundColor: '#fff',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(5px)',
            }}
          >
            <img
              src={`${photo.url}?auto=format&fit=crop&w=${photo.size === 'large' ? '1200' : '800'}&q=80`}
              alt={photo.title}
              className="w-full h-full object-cover transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="absolute inset-0 flex flex-col justify-between p-6 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/40">
              <div className="flex justify-end">
                <button 
                  className="p-2 bg-white/10 rounded-full backdrop-blur-md hover:bg-white/20 transition-all duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(photo.id);
                  }}
                >
                  <Heart className={`w-6 h-6 ${likedPhotos.has(photo.id) ? 'fill-red-500 text-red-500' : 'text-white'}`} />
                </button>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{photo.title}</h3>
                <p className="text-white/80">by {photo.photographer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4 backdrop-blur-lg"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-6xl w-full" onClick={e => e.stopPropagation()}>
            <img
              src={`${selectedPhoto.url}?auto=format&fit=crop&w=1800&q=90`}
              alt={selectedPhoto.title}
              className="w-full rounded-3xl shadow-2xl"
            />
            <div className="absolute top-4 right-4 flex gap-3">
              <button 
                className="p-3 bg-white/10 rounded-full backdrop-blur-md hover:bg-white/20 transition-all duration-200"
                onClick={() => toggleLike(selectedPhoto.id)}
              >
                <Heart className={`w-7 h-7 ${likedPhotos.has(selectedPhoto.id) ? 'fill-red-500 text-red-500' : 'text-white'}`} />
              </button>
              <button className="p-3 bg-white/10 rounded-full backdrop-blur-md hover:bg-white/20 transition-all duration-200">
                <Download className="w-7 h-7 text-white" />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent rounded-b-3xl">
              <h2 className="text-3xl font-bold mb-3 text-white">{selectedPhoto.title}</h2>
              <p className="text-white/80 text-lg">Photographed By:{selectedPhoto.photographer}</p>
            </div>
          </div>
        </div>
      )}
      <footer className="border-t border-dashed border-black py-12 mt-12">
        <div className="container mx-auto px-6">
          <p className="text-center text-black text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
           
              "Prices are subject to change without prior notice. Images are for illustration purposes only, and actual dishes may vary in presentation and ingredients."
              
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Galary;