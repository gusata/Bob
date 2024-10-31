'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<h3>Try type here!!   </h3>',
  })

  return <EditorContent
  className='min-w-full min-h-full ml-3 prose'
  editor={editor} />
}

export default Editor
