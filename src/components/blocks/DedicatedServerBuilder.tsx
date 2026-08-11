import * as React from "react"
import { 
  Cpu, HardDrive, Zap, Server, ShieldCheck, CheckCircle2, Sliders, ArrowRight, Activity, Terminal
} from "lucide-react"

interface CpuOption {
  id: string
  name: string
  cores: string
  baseClock: string
  family: "EPYC" | "Ryzen" | "Xeon"
  basePrice: number
}

const cpuOptions: CpuOption[] = [
  {
    id: "epyc-7302p",
    name: "AMD EPYC™ 7302P",
    cores: "16 Cores / 32 Threads",
    baseClock: "3.0GHz / 3.3GHz Turbo",
    family: "EPYC",
    basePrice: 129
  },
  {
    id: "ryzen-7950x",
    name: "AMD Ryzen™ 9 7950X",
    cores: "16 Cores / 32 Threads",
    baseClock: "4.5GHz / 5.7GHz Max Turbo",
    family: "Ryzen",
    basePrice: 169
  },
  {
    id: "xeon-6348",
    name: "Intel® Xeon® Gold 6348",
    cores: "28 Cores / 56 Threads",
    baseClock: "2.6GHz / 3.5GHz Turbo",
    family: "Xeon",
    basePrice: 249
  },
  {
    id: "dual-epyc-9654",
    name: "Dual AMD EPYC™ 9654",
    cores: "192 Cores / 384 Threads",
    baseClock: "2.4GHz / 3.7GHz Turbo",
    family: "EPYC",
    basePrice: 599
  }
]

const ramOptions = [
  { label: "64GB DDR4/DDR5 ECC", price: 0 },
  { label: "128GB DDR4/DDR5 ECC", price: 35 },
  { label: "256GB DDR4/DDR5 ECC", price: 85 },
  { label: "512GB Enterprise ECC", price: 180 },
  { label: "1024GB Ultra ECC (1TB)", price: 360 }
]

const storageOptions = [
  { label: "2x 1TB NVMe Gen4 (RAID 1)", price: 0 },
  { label: "2x 2TB NVMe Gen4 (RAID 1)", price: 30 },
  { label: "4x 1.92TB Enterprise NVMe (RAID 10)", price: 80 },
  { label: "4x 3.84TB Enterprise NVMe (RAID 10)", price: 170 },
  { label: "8x 7.68TB Enterprise U.2 NVMe (HW RAID)", price: 420 }
]

const bandwidthOptions = [
  { label: "100TB @ 1Gbps Dedicated Uplink", price: 0 },
  { label: "1Gbps Unmetered Dedicated", price: 45 },
  { label: "10Gbps Burst / 250TB Transfer", price: 90 },
  { label: "10Gbps Unmetered Dedicated", price: 195 }
]

const osOptions = [
  { label: "Ubuntu 24.04 LTS / 22.04 LTS", icon: "🐧", price: 0 },
  { label: "AlmaLinux 9 / Rocky Linux 9", icon: "🔴", price: 0 },
  { label: "Proxmox VE 8.2 Virtualization Engine", icon: "⚡", price: 0 },
  { label: "VMware ESXi 8.0 Hypervisor", icon: "🌐", price: 0 },
  { label: "Windows Server 2022 Standard (+16 Cores)", icon: "🪟", price: 25 },
  { label: "cPanel / WHM Auto-Installer (+100 Accts)", icon: "⚙️", price: 45 }
]

const locationOptions = [
  { id: "us-east", name: "Ashburn, VA (US East)", flag: "🇺🇸", ping: "12ms" },
  { id: "us-central", name: "Dallas, TX (US Central)", flag: "🇺🇸", ping: "24ms" },
  { id: "eu-central", name: "Frankfurt, Germany (EU)", flag: "🇩🇪", ping: "18ms" },
  { id: "asia-south", name: "Mumbai, India (Asia South)", flag: "🇮🇳", ping: "8ms" },
  { id: "asia-se", name: "Singapore (Asia East)", flag: "🇸🇬", ping: "32ms" }
]

export function DedicatedServerBuilder() {
  const [selectedCpu, setSelectedCpu] = React.useState<CpuOption>(cpuOptions[0])
  const [selectedRamIndex, setSelectedRamIndex] = React.useState(0)
  const [selectedStorageIndex, setSelectedStorageIndex] = React.useState(0)
  const [selectedBandwidthIndex, setSelectedBandwidthIndex] = React.useState(0)
  const [selectedOsIndex, setSelectedOsIndex] = React.useState(0)
  const [selectedLocation, setSelectedLocation] = React.useState(locationOptions[0])

  const totalMonthlyPrice = React.useMemo(() => {
    return (
      selectedCpu.basePrice +
      ramOptions[selectedRamIndex].price +
      storageOptions[selectedStorageIndex].price +
      bandwidthOptions[selectedBandwidthIndex].price +
      osOptions[selectedOsIndex].price
    )
  }, [selectedCpu, selectedRamIndex, selectedStorageIndex, selectedBandwidthIndex, selectedOsIndex])

  return (
    <div className="w-full bg-[#050507] border border-zinc-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden text-left font-sans">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Header Badge & Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-800/80">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Sliders className="w-3.5 h-3.5" />
            <span>Bare-Metal Hardware Customizer</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Build Your Custom Dedicated Server</h3>
          <p className="text-sm text-zinc-400 mt-1">Configure CPU, ECC RAM, NVMe RAID storage, and 10Gbps network uplinks with instant deployment.</p>
        </div>

        <div className="flex items-center gap-2 bg-zinc-900/80 p-2 rounded-2xl border border-zinc-800 shrink-0">
          <Activity className="w-4 h-4 text-emerald-400 animate-pulse ml-2" />
          <span className="text-xs font-extrabold text-zinc-300 pr-2">1-Hour Hardware SLA</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        
        {/* Left Options Configurator (8 Cols) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* 1. Select CPU Processor */}
          <div className="space-y-3">
            <label className="text-xs font-black uppercase tracking-wider text-zinc-400 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-blue-400" />
              <span>1. Choose Processor (Single-Tenant CPU)</span>
            </label>

            <div className="grid sm:grid-cols-2 gap-3">
              {cpuOptions.map((cpu) => {
                const isSelected = selectedCpu.id === cpu.id
                return (
                  <button
                    key={cpu.id}
                    onClick={() => setSelectedCpu(cpu)}
                    className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden cursor-pointer ${
                      isSelected
                        ? "bg-blue-600/15 border-blue-500 text-white shadow-lg shadow-blue-500/10 ring-1 ring-blue-500"
                        : "bg-zinc-900/60 border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                        {cpu.family}
                      </span>
                      <span className="text-sm font-extrabold text-blue-400">+${cpu.basePrice}/mo</span>
                    </div>
                    <div className="font-extrabold text-sm text-white mt-1">{cpu.name}</div>
                    <div className="text-xs text-zinc-400 mt-0.5">{cpu.cores}</div>
                    <div className="text-[11px] text-zinc-500 mt-1 font-mono">{cpu.baseClock}</div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* 2. Select RAM Memory */}
          <div className="space-y-3">
            <label className="text-xs font-black uppercase tracking-wider text-zinc-400 flex items-center gap-2">
              <Zap className="w-4 h-4 text-indigo-400" />
              <span>2. System RAM (ECC DDR4 / DDR5)</span>
            </label>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {ramOptions.map((ram, idx) => {
                const isSelected = selectedRamIndex === idx
                return (
                  <button
                    key={ram.label}
                    onClick={() => setSelectedRamIndex(idx)}
                    className={`p-3 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? "bg-indigo-600/20 border-indigo-500 text-white ring-1 ring-indigo-500"
                        : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white"
                    }`}
                  >
                    <div>{ram.label}</div>
                    <div className="text-[11px] text-indigo-400 mt-0.5">
                      {ram.price === 0 ? "Included" : `+$${ram.price}/mo`}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* 3. NVMe Storage Arrays */}
          <div className="space-y-3">
            <label className="text-xs font-black uppercase tracking-wider text-zinc-400 flex items-center gap-2">
              <HardDrive className="w-4 h-4 text-emerald-400" />
              <span>3. NVMe RAID Storage Array</span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {storageOptions.map((storage, idx) => {
                const isSelected = selectedStorageIndex === idx
                return (
                  <button
                    key={storage.label}
                    onClick={() => setSelectedStorageIndex(idx)}
                    className={`p-3.5 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? "bg-emerald-600/20 border-emerald-500 text-white ring-1 ring-emerald-500"
                        : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white"
                    }`}
                  >
                    <div>{storage.label}</div>
                    <div className="text-[11px] text-emerald-400 mt-0.5">
                      {storage.price === 0 ? "Included in base price" : `+$${storage.price}/mo`}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* 4. Operating System & Hypervisor */}
          <div className="space-y-3">
            <label className="text-xs font-black uppercase tracking-wider text-zinc-400 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-purple-400" />
              <span>4. Operating System / Hypervisor</span>
            </label>

            <div className="grid sm:grid-cols-2 gap-2.5">
              {osOptions.map((os, idx) => {
                const isSelected = selectedOsIndex === idx
                return (
                  <button
                    key={os.label}
                    onClick={() => setSelectedOsIndex(idx)}
                    className={`p-3 rounded-xl border text-left text-xs font-extrabold flex items-center justify-between transition-all cursor-pointer ${
                      isSelected
                        ? "bg-purple-600/20 border-purple-500 text-white ring-1 ring-purple-500"
                        : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-base">{os.icon}</span>
                      <span className="truncate">{os.label}</span>
                    </span>
                    <span className="text-[11px] text-purple-400 shrink-0 ml-2">
                      {os.price === 0 ? "Free" : `+$${os.price}`}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* 5. Datacenter Region */}
          <div className="space-y-3">
            <label className="text-xs font-black uppercase tracking-wider text-zinc-400 flex items-center gap-2">
              <Server className="w-4 h-4 text-amber-400" />
              <span>5. Datacenter Location</span>
            </label>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {locationOptions.map((loc) => {
                const isSelected = selectedLocation.id === loc.id
                return (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedLocation(loc)}
                    className={`p-3 rounded-xl border text-left text-xs font-extrabold transition-all cursor-pointer ${
                      isSelected
                        ? "bg-amber-600/20 border-amber-500 text-white ring-1 ring-amber-500"
                        : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-base">{loc.flag}</span>
                      <span className="text-[10px] text-emerald-400 font-mono">{loc.ping}</span>
                    </div>
                    <div className="mt-1 text-white truncate">{loc.name}</div>
                  </button>
                )
              })}
            </div>
          </div>

        </div>

        {/* Right Real-time Quote Summary (4 Cols) */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-950 border border-zinc-800 rounded-2xl p-6 space-y-6 shadow-2xl">
            
            <div className="pb-4 border-b border-zinc-800">
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">Custom Bare-Metal Quote</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-4xl font-black text-white">${totalMonthlyPrice}</span>
                <span className="text-xs text-zinc-400 font-bold">/month</span>
              </div>
              <p className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Zero Setup Fee • IPMI Included</span>
              </p>
            </div>

            {/* Config Breakdown List */}
            <div className="space-y-3 text-xs">
              <div className="flex items-start justify-between pb-2 border-b border-zinc-800/60">
                <span className="text-zinc-400 font-semibold">CPU:</span>
                <span className="text-white font-extrabold text-right ml-2">{selectedCpu.name}</span>
              </div>

              <div className="flex items-start justify-between pb-2 border-b border-zinc-800/60">
                <span className="text-zinc-400 font-semibold">RAM:</span>
                <span className="text-white font-extrabold text-right ml-2">{ramOptions[selectedRamIndex].label}</span>
              </div>

              <div className="flex items-start justify-between pb-2 border-b border-zinc-800/60">
                <span className="text-zinc-400 font-semibold">Storage:</span>
                <span className="text-white font-extrabold text-right ml-2">{storageOptions[selectedStorageIndex].label}</span>
              </div>

              <div className="flex items-start justify-between pb-2 border-b border-zinc-800/60">
                <span className="text-zinc-400 font-semibold">Bandwidth:</span>
                <span className="text-white font-extrabold text-right ml-2">{bandwidthOptions[selectedBandwidthIndex].label}</span>
              </div>

              <div className="flex items-start justify-between pb-2 border-b border-zinc-800/60">
                <span className="text-zinc-400 font-semibold">OS / Image:</span>
                <span className="text-white font-extrabold text-right ml-2">{osOptions[selectedOsIndex].label}</span>
              </div>

              <div className="flex items-start justify-between pb-2 border-b border-zinc-800/60">
                <span className="text-zinc-400 font-semibold">Location:</span>
                <span className="text-white font-extrabold text-right ml-2">{selectedLocation.name}</span>
              </div>
            </div>

            {/* Included Extras */}
            <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-2 text-[11px] text-zinc-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>2Tbps+ Anti-DDoS Protection Included</span>
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Full Out-of-Band IPMI / KVM Access</span>
              </div>
            </div>

            {/* Deploy CTA */}
            <a 
              href={`https://manage.hostingspell.com/cart.php?a=add&pid=dedicated-${selectedCpu.id}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full"
            >
              <button className="w-full py-4 px-6 rounded-xl bg-[#0073EC] hover:bg-[#005bb5] text-white font-extrabold text-sm shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-100 cursor-pointer">
                <span>Deploy Bare-Metal Server</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </a>

            <p className="text-[10px] text-center text-zinc-500">Instant Automated Provisioning or &lt; 4hr Custom Assembly</p>
          </div>
        </div>

      </div>
    </div>
  )
}
