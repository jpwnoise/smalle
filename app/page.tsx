"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Music, Instagram, Youtube, MessageCircle } from "lucide-react"
import { FaSoundcloud } from "react-icons/fa"

export default function ArtistPage() {
  const [activeTab, setActiveTab] = useState<CategoryKey>("hiphop")
  const [openImage, setOpenImage] = useState(false)

  const categories: Record<
    CategoryKey,
    {
      label: string
      songs: { title: string; youtubeId: string }[]
    }
  > = {
    hiphop: {
      label: "Hip Hop",
      songs: [{ title: "Actitud", youtubeId: "xu8cAFimHt4" }],
    },
    trap: {
      label: "Trap",
      songs: [{ title: "Trap Session", youtubeId: "1MDW2jptxhA" }],
    },
    boombap: {
      label: "Boom Bap",
      songs: [{ title: "Horror Beat", youtubeId: "J8vEuzJD_XQ" }],
    },
    dark: {
      label: "Dark",
      songs: [{ title: "Horror Beat", youtubeId: "J8vEuzJD_XQ" }],
    },

  }

  /* ===== BEATS DE SOUNDCLOUD =====*/
  const beats = [
    {
      title: "Actitud",
      trackUrl: "https://soundcloud.com/juan-hernandez-262758473/actitud",
    },
    {
      title: "Kells",
      trackUrl: "https://soundcloud.com/juan-hernandez-262758473/kells",
    },
    {
      title: "Horror",
      trackUrl: "https://soundcloud.com/juan-hernandez-262758473/horror",
    },
    {
      title: "Resurección 2",
      trackUrl: "https://soundcloud.com/juan-hernandez-262758473/resureccion-2",
    },
    {
      title: "Resurección",
      trackUrl: "https://soundcloud.com/juan-hernandez-262758473/resureccion",
    },
  ]

  const generateEmbed = (url: string) =>
    `https://w.soundcloud.com/player/?url=${encodeURIComponent(
      url
    )}&color=%233c4c64&auto_play=false&hide_related=true&show_comments=false&show_user=false&visual=true`

  {/* SERVICES / BEATS SELECTOR */ }
  const [section, setSection] = useState<"services" | "beats">("services")
  type CategoryKey = "hiphop" | "trap" | "dark" | 'boombap'
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-purple-950 text-white flex flex-col">

      <div className="flex-1 px-6 py-12">
        <div className="max-w-5xl mx-auto">
          {/* HERO STUDIO FULL WIDTH */}
          <section className="relative w-full h-[500px] md:h-[650px] overflow-hidden mb-10">

            <Image
              src="/logo.png"
              alt="Studio"
              fill
              priority
              className="object-cover"
            />

            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Contenido encima */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
                Urbanizer Studio
              </h1>

              <p className="text-lg md:text-2xl text-gray-300 max-w-2xl">
                Producción profesional • Grabación • Mezcla • Masterización
              </p>

            </div>
          </section>

          {/* HEADER */}
          <div className="flex flex-col items-center text-center mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={() => setOpenImage(true)}
              className="cursor-pointer relative"
            >
              <Image
                src="/waver.png"
                alt="Waver"
                width={170}
                height={170}
                className="rounded-full border-4 border-purple-500 shadow-2xl"
              />
            </motion.div>

            <h1 className="text-5xl font-extrabold mt-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Waver
            </h1>

            <p className="text-gray-400 mt-3 text-lg">
              Productor & Beatmaker — Hip Hop / Trap
            </p>
          </div>

          {/* SECTION TOGGLE */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setSection("services")}
              className={`px-6 py-3 rounded-full font-semibold transition ${section === "services"
                ? "bg-purple-600 shadow-lg scale-105"
                : "bg-zinc-800 hover:bg-zinc-700"
                }`}
            >
              Servicios
            </button>

            <button
              onClick={() => setSection("beats")}
              className={`px-6 py-3 rounded-full font-semibold transition ${section === "beats"
                ? "bg-purple-600 shadow-lg scale-105"
                : "bg-zinc-800 hover:bg-zinc-700"
                }`}
            >
              Beats
            </button>
          </div>

          <AnimatePresence mode="wait">
            {section === "services" ? (
              <motion.div
                key="services"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {[
                  {
                    title: "Grabación",
                    desc: "Sesiones profesionales en estudio.",
                  },
                  {
                    title: "Producción",
                    desc: "Creación completa de beats personalizados.",
                  },
                  {
                    title: "Mezcla",
                    desc: "Balance, limpieza y claridad profesional.",
                  },
                  {
                    title: "Masterización",
                    desc: "Sonido potente listo para plataformas.",
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-purple-500 transition hover:scale-105"
                  >
                    <h3 className="text-xl font-bold mb-2 text-purple-400">
                      {service.title}
                    </h3>
                    <p className="text-gray-400">{service.desc}</p>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="beats"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid md:grid-cols-3 gap-6"
              >
                {[
                  "Trap",
                  "Boom Bap",
                  "Drill",
                  "Reggaetón",
                  "Dark / Horror",
                ].map((genre, index) => (
                  <div
                    key={index}
                    className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-pink-500 transition hover:scale-105 text-center"
                  >
                    <h3 className="text-xl font-bold text-pink-400">
                      {genre}
                    </h3>
                    <p className="text-gray-400 mt-2">
                      Beats disponibles en este estilo.
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* ======== TABS ======= */}
          {/* ****** SOUNDCLOUD ******* */}

          <div className="flex items-center justify-center gap-3 m-4 bg-purple-600 shadow-lg scale-105 text-xl font-semibold p-2 rounded-lg">
            <FaSoundcloud className="text-orange-500 text-2xl" />
            Catálogo de beats en SoundCloud
          </div>
          <div className="flex justify-center gap-4 mb-10 flex-wrap mt-10 bg-gradient-to-r from-[#ff5500]/30 to-[#ff7700]/30 p-4 rounded">
            {beats.map((beat) => (
              <div key={beat.trackUrl} className="mb-8">
                <h3 className="text-xl font-semibold mb-3">{beat.title}</h3>
                <iframe
                  width="100%"
                  height="140"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={generateEmbed(beat.trackUrl)}
                />
              </div>
            ))}
          </div>

          {/* YOUTUBE */}
          <div className="flex justify-center gap-4 mb-10 flex-wrap mt-10">
            <div>Catálogo Youtube</div>
            {(Object.keys(categories) as CategoryKey[]).map((key) => {
              const category = categories[key]

              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-2 rounded-full transition-all duration-300
        ${activeTab === key
                      ? "bg-purple-600 shadow-lg scale-105"
                      : "bg-zinc-800 hover:bg-zinc-700"
                    }`}
                >
                  {category.label}
                </button>
              )
            })}
          </div>

          {/* SONGS */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-8"
            >
              {categories[activeTab].songs.map((song, index) => (
                <div
                  key={index}
                  className="bg-zinc-900/70 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-zinc-800 hover:border-purple-500 transition"
                >
                  <h2 className="text-2xl font-semibold mb-4">
                    {song.title}
                  </h2>

                  <div className="aspect-video rounded-xl overflow-hidden">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${song.youtubeId}`}
                      title={song.title}
                      allowFullScreen
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* FOOTER CONTACT */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-10">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">

          <h3 className="text-2xl font-bold">Contacto</h3>

          {/* WhatsApp */}
          <a
            href="https://wa.me/523313262108"
            target="_blank"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 px-6 py-3 rounded-full transition shadow-lg"
          >
            <MessageCircle size={20} />
            WhatsApp: 3313262108
          </a>

          {/* Redes */}
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="hover:text-purple-400 transition">
              <Instagram size={28} />
            </a>

            <a href="#" className="hover:text-red-500 transition">
              <Youtube size={28} />
            </a>

            <a href="#" className="hover:text-purple-400 transition">
              <Music size={28} />
            </a>
          </div>

          <p className="text-gray-500 text-sm mt-4">
            © {new Date().getFullYear()} Waver — Todos los derechos reservados.
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
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
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
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  )
}