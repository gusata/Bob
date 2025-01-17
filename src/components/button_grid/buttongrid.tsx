'use client'
import Link from "next/link"
import { Button } from "../ui/button"
import { MoreHorizontal, MessageCircle, Mail, Github, HomeIcon } from "lucide-react" // Importa apenas ícones específicos que serão usados
import * as Icons from "lucide-react" // Importa todos os ícones para renderização dinâmica
import { useState } from "react"

export default function ButtonGrid() {
  const [buttons, setButtons] = useState([
    { id: 1, href: "https://web.whatsapp.com", icon: "MessageCircle" },
    { id: 2, href: "https://youtube.com", icon: "Play" },
    { id: 3, href: "https://gmail.com", icon: "Mail" },
    { id: 4, href: "https://github.com", icon: "Github" },
  ]);
  const [editingButtonId, setEditingButtonId] = useState(null);
  const [showIconPicker, setShowIconPicker] = useState(false);

  // Lista de ícones para escolha
  const iconList = ["MessageCircle", "Play", "HomeIcon", "Mail", "Github"];

  const handleInputChange = (id: number, field: string, value: string) => {
    setButtons(prevButtons =>
      prevButtons.map(button =>
        button.id === id ? { ...button, [field]: value } : button
      )
    );
  };

  const handleIconSelect = (id: number, iconName: string) => {
    handleInputChange(id, 'icon', iconName);
    setShowIconPicker(false); // Fecha o seletor de ícones após a escolha
  };

  const renderIcon = (iconName: string, size: string | number | undefined) => {
    const LucideIcon = Icons[iconName];
    return LucideIcon ? <LucideIcon size={size} strokeWidth={2} /> : <Icons.Play size={size} strokeWidth={2} />;
  };

  return (
    <div className="p-8">
      <div className="grid grid-rows grid-cols-3 gap-3 my-0">
        {buttons.map(button => (
          <div key={button.id} className="relative group">
            <Link href={button.href}>
              <Button className="h-32 w-32 rounded-2xl border-zinc-800 border-2" variant="secondary">
                {renderIcon(button.icon, 48)}
              </Button>
            </Link>
            <div
              className="absolute top-2 right-2 p-1 rounded-full bg-gray-200 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => setEditingButtonId(button.id)}
            >
              <MoreHorizontal size={20} />
            </div>
            {editingButtonId === button.id && (
              <div className="absolute z-40 top-8 left-20 bg-white p-4 rounded-xl  border-2 border-zinc-800/1.2  shadow-lg w-80 ">
                <h3 className="text-sm font-semibold mb-2">Edit Button</h3>
                <input
                  type="text"
                  placeholder="Link"
                  value={button.href}
                  onChange={(e) => handleInputChange(button.id, 'href', e.target.value)}
                  className="p-1 border rounded mb-2 w-full"
                />
                <button
                  onClick={() => setShowIconPicker(!showIconPicker)}
                  className="p-1 border rounded w-full bg-gray-100 text-center"
                >
                  Choose Icon
                </button>
                {showIconPicker && (
                  <div className="absolute bottom-0 left-80 max-w-96 min-w-96 mt-12 bg-white p-4 rounded-xl border shadow-lg max-h-60 overflow-y-auto grid grid-cols-4 gap-2 z-50">
                    {iconList.map((iconName) => (
                      <div
                        key={iconName}
                        onClick={() => handleIconSelect(button.id, iconName)}
                        className="cursor-pointer flex flex-col items-center p-2 hover:bg-gray-100 rounded"
                      >
                        {renderIcon(iconName, 24)}
                        <span className="text-xs mt-1">{iconName}</span>
                      </div>
                    ))}
                  </div>
                )}
                <button
                  onClick={() => setEditingButtonId(null)}
                  className="mt-2 text-xs text-blue-500"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
