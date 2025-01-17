'use client'

import { useEditor, EditorContent, BubbleMenu, FloatingMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { RxFontBold, RxFontItalic, RxStrikethrough, RxCode } from 'react-icons/rx'
import { BubbleButton } from './BubbleButton'

const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<h3>Try typing here!</h3>',
    editorProps: {
      attributes: {
        class: 'outline-none leading-tight',
      },
    },
  })

  return (
    <>
      <EditorContent
        className="min-w-full min-h-full ml-6 prose border-none"
        editor={editor}
      />

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
        </>
      )}
    </>
  )
}

export default Editor
