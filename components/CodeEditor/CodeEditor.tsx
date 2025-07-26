'use client';
import useTheme from '@/theme/Theme.consumer';
import { Editor, useMonaco } from '@monaco-editor/react';
import { useEffect } from 'react';

export const CodeEditor = () => {
  const { theme } = useTheme();
  const monaco = useMonaco();

  useEffect(() => {
    if (!monaco) return;

    monaco.editor.defineTheme('custom', {
      base: theme === 'light' ? 'vs' : 'vs-dark',
      inherit: true,
      rules: [
        // comments (muted-foreground)
        {
          token: 'comment',
          foreground: theme === 'light' ? '#62748e' : '#90a1b9',
          fontStyle: 'italic',
        },
        // keywords (primary)
        {
          token: 'keyword',
          foreground: theme === 'light' ? '#0f172b' : '#e2e8f0',
        },
        // strings (secondary)
        {
          token: 'string',
          foreground: '#c24832',
        },
        // numbers (accent)
        {
          token: 'number',
          foreground: theme === "light" ? "#2563EB" : "#47ffbf",
        },
      ],
      colors: {
        'editor.background': theme === 'light' ? '#ffffff' : '#020618',
        'editor.foreground': theme === 'light' ? '#020618' : '#f8fafc',

        'editor.selectionBackground':
          theme === 'light' ? '#00968966' : '#00BC7D66',
        'editor.inactiveSelectionBackground':
          theme === 'light' ? '#00968966' : '#00BC7D66',

        'editorCursor.foreground': theme === 'light' ? '#0f172b' : '#f8fafc',

        'editorLineNumber.foreground':
          theme === 'light' ? '#6c6c6c' : '#858585',

        'editorLineNumber.activeForeground':
          theme === 'light' ? '#0f172b' : '#0f172b',

        'editorGutter.background': theme === 'light' ? '#ffffff' : '#020618',

        'editor.lineHighlightBackground':
          theme === 'light' ? '#f5f5f5' : '#01030e',

        'editor.lineHighlightBorder':
          theme === 'light' ? '#00000000' : '#00000000',
      },
    });

    monaco.editor.setTheme('custom');
  }, [monaco, theme]);

  return (
    <div className='h-full'>
      <Editor
        theme='custom'
        width='100%'
        language='javascript'
        options={{
          minimap: {
            enabled: false,
          },
          padding: { top: 16, bottom: 16 },
          renderLineHighlight: 'all', // ← only draw the line fill
          renderLineHighlightOnlyWhenFocus: false,
          cursorSmoothCaretAnimation: 'on',
          cursorStyle: 'line-thin',
          cursorBlinking: 'expand',
        }}
      />
    </div>
  );
};
