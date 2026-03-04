"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export default function GallerySection() {
  const images = [
    "galeria1.jpg",
    "galeria2.jpg",
    "galeria3.jpg",
    "galeria4.jpg",
  ]

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const closeModal = () => setSelectedIndex(null)

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === 0 ? images.length - 1 : selectedIndex - 1
      )
    }
  }

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === images.length - 1 ? 0 : selectedIndex + 1
      )
    }
  }

  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-widest">
            Visual
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mt-4"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className="relative group overflow-hidden rounded-2xl cursor-pointer"
            >
              <img
                src={`/${img}`}
                alt={`Smalle ${index}`}
                className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-500"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 border-2 border-purple-600 rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50">

          {/* Botón cerrar */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white hover:text-purple-500 transition"
          >
            <X size={32} />
          </button>

          {/* Flecha izquierda */}
          <button
            onClick={prevImage}
            className="absolute left-4 md:left-10 text-white hover:text-purple-500 transition"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Imagen grande */}
          <img
            src={`/${images[selectedIndex]}`}
            alt="Imagen ampliada"
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl"
          />

          {/* Flecha derecha */}
          <button
            onClick={nextImage}
            className="absolute right-4 md:right-10 text-white hover:text-purple-500 transition"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  )
}