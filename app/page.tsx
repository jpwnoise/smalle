"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Music, Instagram, Youtube, MessageCircle } from "lucide-react"
import { FaSoundcloud } from "react-icons/fa"
import GallerySection from "./components/Galeria"

type CategoryKey = "hiphop" | "trap" | "dark" | "boombap"
type Song = { title: string; youtubeId: string }

export default function ArtistPage() {
  const [activeTab, setActiveTab] = useState<CategoryKey>("hiphop")
  const [openImage, setOpenImage] = useState(false)
  const [section, setSection] = useState<"services" | "beats">("services")

  const smalleSongs: Song[] = [
    { title: "Smalle Track 1", youtubeId: "YVvf9-fR-qE" },
    { title: "Smalle Track 2", youtubeId: "tYJ2O9YiJUc" },
    { title: "Smalle Track 3", youtubeId: "0OoExWupabs" },
    { title: "Smalle Track 4", youtubeId: "69rvfvg6dWA" },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-blue-950 text-white flex flex-col">

      <div className="flex-1 px-6 py-12">
        <div className="max-w-6xl mx-auto">

          {/* HERO */}
          <section className="relative w-full h-[500px] md:h-[650px] overflow-hidden mb-16 rounded-3xl">

            <Image
              src="/smalle.png"
              alt="Studio"
              fill
              priority
              className="object-cover"
            />

            {/* Overlay radial oscuro */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.2),rgba(0,0,0,0.85))]" />

            {/* Overlay azul + rojo suave */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-red-900/30" />


{/* ✨ SPARKLES TIPO CRUZ */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">

  {Array.from({ length: 20 }).map((_, i) => {
    const size = Math.random() * 14 + 10
    const top = Math.random() * 100
    const left = Math.random() * 100
    const delay = Math.random() * 5
    const duration = Math.random() * 2 + 2
    const rotation = Math.random() * 180

    return (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: [0, 1, 0],
          scale: [0.5, 1.2, 0.5],
          rotate: [rotation, rotation + 20, rotation],
        }}
        transition={{
          duration: duration,
          delay: delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute"
        style={{
          top: `${top}%`,
          left: `${left}%`,
          width: size,
          height: size,
        }}
      >
        {/* Línea vertical */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[2px] h-full bg-gradient-to-b from-blue-400 via-white to-red-400 blur-[1px]" />
        </div>

        {/* Línea horizontal */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[2px] w-full bg-gradient-to-r from-blue-400 via-white to-red-400 blur-[1px]" />
        </div>
      </motion.div>
    )
  })}

</div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent drop-shadow-xl">
                Smalle
              </h1>

              <p className="mt-6 text-lg md:text-2xl max-w-2xl bg-blue-600/40 border border-red-500/40 backdrop-blur-md rounded-xl p-6 shadow-2xl">
                “Hip hop en la sangre, fuego en la voz 🎤🔥🎶”
              </p>

            </div>
          </section>

          <GallerySection/>

          {/* YOUTUBE */}
          <section className="mt-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 tracking-tight bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
              🎬 Catálogo YouTube
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {smalleSongs.map((song, index) => (
                <div
                  key={index}
                  className="group relative bg-zinc-900/70 border border-blue-500/20
                  backdrop-blur-xl rounded-3xl p-4 shadow-xl 
                  hover:shadow-red-500/20 hover:border-red-500/40
                  transition-all duration-500"
                >
                  <div className="aspect-video overflow-hidden rounded-2xl border border-zinc-800">
                    <iframe
                      className="w-full h-full group-hover:scale-[1.02] transition-transform duration-500"
                      src={`https://www.youtube.com/embed/${song.youtubeId}`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>

                  <p className="mt-4 text-lg font-medium text-center text-white/70 group-hover:text-red-400 transition">
                    {song.title}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-black border-t border-blue-900/40 py-10">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">

          <h3 className="text-2xl font-bold text-blue-400">Contacto</h3>

          <a
            href="https://wa.me/523313262108"
            target="_blank"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 px-6 py-3 rounded-full transition shadow-lg"
          >
            <MessageCircle size={20} />
            WhatsApp: 3313262108
          </a>

          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="hover:text-blue-400 transition">
              <Instagram size={28} />
            </a>

            <a href="#" className="hover:text-red-500 transition">
              <Youtube size={28} />
            </a>

            <a href="#" className="hover:text-blue-400 transition">
              <Music size={28} />
            </a>

            <a href="#" className="hover:text-orange-500 transition">
              <FaSoundcloud size={28} />
            </a>
          </div>

          <p className="text-zinc-500 text-sm mt-4">
            © {new Date().getFullYear()} Smalle — Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* IMAGE MODAL */}
      <AnimatePresence>
        {openImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50"
            onClick={() => setOpenImage(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/waver.png"
                alt="Waver Large"
                width={500}
                height={500}
                className="rounded-2xl shadow-2xl border border-red-500/40"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  )
}