'use client'

import { useEditor, EditorContent, BubbleMenu, FloatingMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { RxFontBold, RxFontItalic, RxStrikethrough, RxCode } from 'react-icons/rx'
import { BubbleButton } from './BubbleButton'
// Adicionar bibliotecas para geração de PDF e download
import { jsPDF } from 'jspdf'
import { Button } from '../ui/button'
import { setConfig } from 'next/config'

const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<h3>Try typing here!</h3>',
    editorProps: {
      attributes: {
        class: 'outline-none leading-tight dark:text-gray-100',
      },
    },
  })

  // Função para salvar o conteúdo em um arquivo
  const handleSaveFile = (type: 'pdf' | 'markdown' | 'txt') => {
    if (!editor) return

    const content = editor.getHTML()

    if (type === 'pdf') {
      const doc = new jsPDF()
      doc.html(content, {
        callback: () => {
          doc.save('content.pdf')
        },
      })
    } else {
      const blob = new Blob([content], { type: 'text/plain' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')

      link.href = url
      link.download = `content.${type}`
      link.click()

      URL.revokeObjectURL(url)
    }
  }

  return (
    <div className=" dark:text-gray-100 max-w-[60rem] mx-auto">
      {/* Container com tamanho máximo e rolagem */}
      <div className="max-h-[40rem] min-h-[40rem] overflow-auto border border-gray-300 rounded-md p-4">
        <EditorContent
          className="min-w-full dark:prose-invert dark:text-gray-100 min-h-full prose border-none"
          editor={editor}
        />
      </div>

      {editor && (
        <>
          <FloatingMenu
            editor={editor}
            className="bg-slate-100 border-2 py-2 px-1 shadow-black/20 shadow-lg rounded-2xl flex flex-col gap-1 flex-1 divide-x divide-slate-300 overflow-hidden"
            shouldShow={({ state }) => {
              const { $from } = state.selection
              const currentLineText = $from.nodeBefore?.textContent

              return currentLineText === '/'
            }}
          >
            <button
              className="flex items-center gap-1 p-1 rounded min-w-[280px] hover:bg-slate-300"
              onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            >
              <img
                src="http://www.notion.so/images/blocks/text/en-US.png"
                alt="text"
                className="w-12 border border-zinc-300 rounded"
              />
              <div className="flex flex-col text-left">
                <span className="text-sm">Header</span>
                <span className="text-xs text-zinc-400">Make a level 1 header</span>
              </div>
            </button>

            <button
              className="flex items-center gap-1 p-1 rounded min-w-[280px] hover:bg-slate-300"
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            >
              <img
                src="http://www.notion.so/images/blocks/code.a8b201f4.png"
                alt="code block"
                className="w-12 border border-zinc-300 rounded"
              />
              <div className="flex flex-col">
                <span className="text-sm">Code Block</span>
                <span className="text-xs text-zinc-400">Make a code block here</span>
              </div>
            </button>
          </FloatingMenu>

          <BubbleMenu
            className="bg-slate-100 border-2 shadow-black/20 shadow-lg rounded-2xl flex flex-1 divide-x divide-slate-300 overflow-hidden"
            editor={editor}
          >
            <BubbleButton
              onClick={() => editor.chain().focus().toggleBold().run()}
              data-active={editor.isActive('bold')}
            >
              <RxFontBold className="w-4 h-4" />
            </BubbleButton>

            <BubbleButton
              onClick={() => editor.chain().focus().toggleItalic().run()}
              data-active={editor.isActive('italic')}
            >
              <RxFontItalic className="w-4 h-4" />
            </BubbleButton>

            <BubbleButton
              onClick={() => editor.chain().focus().toggleStrike().run()}
              data-active={editor.isActive('strike')}
            >
              <RxStrikethrough className="w-4 h-4" />
            </BubbleButton>

            <BubbleButton
              onClick={() => editor.chain().focus().toggleCode().run()}
              data-active={editor.isActive('code')}
            >
              <RxCode className="w-4 h-4" />
            </BubbleButton>
          </BubbleMenu>

          {/* Botões para salvar arquivos */}
          <div className="mt-4 flex gap-6 absolute bottom-8">
            <Button
              onClick={() => handleSaveFile('pdf')}
              className="h-16 hover:bg-slate-950 hover:text-white transition-all px-4 py-2 rounded-2xl border-gray-400 border-2"
              variant={'secondary'}
            >
              Save as PDF
            </Button>
            <Button
              onClick={() => handleSaveFile('markdown')}
              className="h-16 hover:bg-slate-950 hover:text-white transition-all px-4 py-2 rounded-2xl border-gray-400 border-2"
              variant={'secondary'}
            >
              Save as Markdown
            </Button>
            <Button
              onClick={() => handleSaveFile('txt')}
              className="h-16 hover:bg-slate-950 hover:text-white transition-all px-4 py-2 rounded-2xl border-gray-400 border-2"
              variant={'secondary'}
            >
              Save as TXT
            </Button>
          </div>
        </>
      )}
    </div>
  )
}

export default Editor
