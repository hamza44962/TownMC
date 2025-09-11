// src/App.jsx
import React, { useState } from "react";
import { Copy, Wifi, UserPlus, Gift, Heart, Slack } from "lucide-react";
import { motion } from "framer-motion";

const SERVER_IP = "play.townmc.net";
const DISCORD_URL = "#"; // replace with your Discord invite
const STORE_URL = "#"; // replace with your store / Tebex link

function copyToClipboard(text) {
  try {
    navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 bg-white/6 text-white/90 px-3 py-1 rounded-full text-sm">
      {children}
    </span>
  );
}

export default function App() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const ok = await copyToClipboard(SERVER_IP);
    setCopied(ok);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#071019] via-[#0b1722] to-[#071219] text-white">
      {/* Top bar */}
      <div className="bg-black/30 backdrop-blur sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-md bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-black font-extrabold">T</div>
            <div>
              <div className="font-bold text-lg">TownMC</div>
              <div className="text-xs text-white/60 -mt-0.5">Survival • Community • Events</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a href={STORE_URL} className="hidden sm:inline-block px-4 py-2 rounded-xl bg-emerald-400 text-zinc-900 font-semibold hover:scale-[0.99]">
              Store
            </a>
            <a href={DISCORD_URL} className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/6 hover:bg-white/5">
              <Slack className="w-4 h-4" /> Discord
            </a>
            <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })} className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/6">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <header className="flex-1 flex items-center justify-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6 py-20">
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Welcome to <span className="text-emerald-400">TownMC</span>
            </h1>
            <p className="mt-4 text-lg text-white/75 max-w-xl">
              Join our friendly survival server — build, trade and take part in weekly events.
              Grab a rank or crate key from the store to support the server.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 items-center">
              <a href={STORE_URL} className="px-5 py-3 rounded-lg bg-emerald-400 text-zinc-900 font-semibold shadow hover:scale-[0.995]">Visit Store</a>

              <a href={DISCORD_URL} className="px-4 py-3 rounded-lg border border-white/8 hover:bg-white/4">Join Discord</a>

              <button
                onClick={handleCopy}
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/6 hover:bg-white/8"
                aria-label="Copy server IP"
              >
                <Wifi className="w-4 h-4" />
                <div className="text-sm">
                  {SERVER_IP}
                </div>
                <Copy className="w-4 h-4 opacity-70" />
              </button>

              {copied && <div className="text-sm text-emerald-300 ml-2">Copied!</div>}
            </div>

            <div className="mt-6 flex gap-3 flex-wrap">
              <Pill><UserPlus className="w-4 h-4" /> 24/7 Online</Pill>
              <Pill><Gift className="w-4 h-4" /> Ranks & Keys</Pill>
              <Pill><Heart className="w-4 h-4" /> Friendly Staff</Pill>
            </div>
          </motion.div>

          <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="order-first lg:order-last">
            <div className="w-full rounded-2xl overflow-hidden border border-white/6 shadow-xl glass p-6">
              {/* Mock server preview card */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-white/70">Server</div>
                  <div className="text-2xl font-extrabold">{SERVER_IP}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-white/70">Players</div>
                  <div className="text-2xl font-extrabold">73</div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="bg-white/5 p-4 rounded-lg text-sm">
                  <div className="font-semibold">Mode</div>
                  <div className="text-white/70 mt-1">Survival</div>
                </div>
                <div className="bg-white/5 p-4 rounded-lg text-sm">
                  <div className="font-semibold">Region</div>
                  <div className="text-white/70 mt-1">EU</div>
                </div>
              </div>

              <div className="mt-4">
                <a href={STORE_URL} className="block text-center px-4 py-3 rounded-lg bg-emerald-400 text-zinc-900 font-bold">Open Store</a>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-extrabold mb-8">Server Features</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div whileHover={{ y: -4 }} className="p-6 bg-white/5 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-400 rounded p-2"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2L15 8l6 1-4.5 4 1 6L12 17l-5.5 2 1-6L3 9l6-1 3-6z" fill="#05201a"/></svg></div>
              <div>
                <div className="font-semibold">Survival Gameplay</div>
                <div className="text-sm text-white/70">Balanced economy and honest PvE.</div>
              </div>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} className="p-6 bg-white/5 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="bg-cyan-400 rounded p-2"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" fill="#05212b"/></svg></div>
              <div>
                <div className="font-semibold">Active Events</div>
                <div className="text-sm text-white/70">Weekly events with prizes and voting rewards.</div>
              </div>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} className="p-6 bg-white/5 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="bg-violet-400 rounded p-2"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" fill="#1b0922"/></svg></div>
              <div>
                <div className="font-semibold">Ranks & Perks</div>
                <div className="text-sm text-white/70">Unlock cosmetics and exclusive commands.</div>
              </div>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} className="p-6 bg-white/5 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="bg-amber-400 rounded p-2"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2l3 7h7l-5.5 4L20 22l-8-5-8 5 3.5-9L2 9h7l3-7z" fill="#2b1800"/></svg></div>
              <div>
                <div className="font-semibold">Community</div>
                <div className="text-sm text-white/70">Friendly staff and helpful players.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-tr from-white/2 to-white/3 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold">Ready to join TownMC?</h3>
            <p className="text-white/70">Connect to the server, join the Discord and support the project in the store.</p>
          </div>
          <div className="flex gap-3">
            <a href={`minecraft://${SERVER_IP}`} className="px-5 py-3 rounded-lg bg-emerald-400 text-zinc-900 font-semibold">Connect</a>
            <a href={STORE_URL} className="px-5 py-3 rounded-lg border border-white/8">Store</a>
            <a href={DISCORD_URL} className="px-5 py-3 rounded-lg border border-white/8">Discord</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-black/40 text-white/60 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-bold">TownMC</div>
            <div className="text-xs text-white/60">play.townmc.net • EU</div>
          </div>
          <div className="flex gap-4 text-sm">
            <a href={DISCORD_URL} className="hover:text-white">Discord</a>
            <a href={STORE_URL} className="hover:text-white">Store</a>
            <a href="#" className="hover:text-white">Rules</a>
          </div>
          <div className="text-xs">© {new Date().getFullYear()} TownMC — Made with ♥</div>
        </div>
      </footer>
    </div>
  );
}
