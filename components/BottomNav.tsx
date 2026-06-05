import Link from "next/link";

type Tab = "etitulo" | "onde-votar" | "notificacoes" | "mais-opcoes";

const tabs: { id: Tab; label: string }[] = [
  { id: "etitulo", label: "e-Título" },
  { id: "onde-votar", label: "Onde votar" },
  { id: "notificacoes", label: "Notificações" },
  { id: "mais-opcoes", label: "Mais opções" },
];

function TabIcon({ id, color }: { id: Tab; color: string }) {
  const props = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (id) {
    case "etitulo":
      return (
        <svg {...props}>
          <rect x="3" y="4" width="18" height="16" rx="2"></rect>
          <circle cx="9" cy="10" r="2.5"></circle>
          <path d="M14 9h4M14 13h4M6 17h12"></path>
        </svg>
      );
    case "onde-votar":
      return (
        <svg {...props}>
          <path d="M12 21s-6-5.2-6-10a6 6 0 1 1 12 0c0 4.8-6 10-6 10z"></path>
          <circle cx="12" cy="11" r="2"></circle>
        </svg>
      );
    case "notificacoes":
      return (
        <svg {...props}>
          <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.7 21a2 2 0 0 1-3.4 0"></path>
        </svg>
      );
    case "mais-opcoes":
      return (
        <svg {...props}>
          <line x1="4" y1="7" x2="20" y2="7"></line>
          <line x1="4" y1="12" x2="20" y2="12"></line>
          <line x1="4" y1="17" x2="20" y2="17"></line>
        </svg>
      );
  }
}

export function BottomNav({ activeTab }: { activeTab?: Tab }) {
  const activeColor = "#173058";
  const inactiveColor = "#9ca3af";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 mx-auto flex max-w-[430px] items-end justify-around border-t border-[#e0e0e0] bg-[#f2f2f2] px-3 py-2.5 sm:absolute">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const color = isActive ? activeColor : inactiveColor;

        return (
          <Link
            key={tab.id}
            href="/loading"
            className="flex flex-1 flex-col items-center gap-1"
          >
            <TabIcon id={tab.id} color={color} />
            <span
              className={`text-[10px] ${isActive ? "font-semibold text-[#173058]" : "font-medium text-[#9ca3af]"}`}
            >
              {tab.label}
            </span>
          </Link>
        );
      })}

      <div className="absolute bottom-1.5 left-1/2 h-1 w-[134px] -translate-x-1/2 rounded-full bg-black/20"></div>
    </div>
  );
}
