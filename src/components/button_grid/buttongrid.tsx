'use client'
import Link from "next/link"
import { Button } from "../ui/button"
import { MoreHorizontal, MessageCircle, Mail, Github, HomeIcon } from "lucide-react" // Importa apenas ícones específicos que serão usados
import {Play } from "lucide-react" // Importa todos os ícones para renderização dinâmica
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

  return (
    <div className="p-8">
      <div className="grid grid-rows grid-cols-3 gap-3 my-0">
      <Link href={'https://youtube.com'}>
              <Button className="h-32 w-32 rounded-2xl dark:shadow-[6px_6px_12px_#0d0f12,-6px_-6px_12px_#18181f] shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] dark:bg-zinc-900 bg-white border-[#e8e8e8] border-1" variant="secondary">
                <Play/>
              </Button>
            </Link>
            <Link href={'https://web.whatsapp.com'}>
              <Button className="h-32 w-32 rounded-2xl dark:shadow-[6px_6px_12px_#0d0f12,-6px_-6px_12px_#18181f] shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] dark:bg-zinc-900 bg-white border-[#e8e8e8] border-1" variant="secondary">
                <MessageCircle/>
              </Button>
            </Link>
            <Link href={'https://gmail.com'}>
              <Button className="h-32 w-32 rounded-2xl dark:shadow-[6px_6px_12px_#0d0f12,-6px_-6px_12px_#18181f] shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] dark:bg-zinc-900 bg-white border-[#e8e8e8] border-1" variant="secondary">
                <Mail/>
              </Button>
            </Link>
            <Link href={'https://github.com'}>
              <Button className="h-32 w-32 rounded-2xl dark:shadow-[6px_6px_12px_#0d0f12,-6px_-6px_12px_#18181f] shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] dark:bg-zinc-900 bg-white border-[#e8e8e8] border-1" variant="secondary">
                <Github/>
              </Button>
            </Link>
      </div>
    </div>
  );
}
