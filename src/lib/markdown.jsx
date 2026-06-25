// Minimal markdown renderer for legal/static content pages.
// Supports: ## and ### headings, bullet lists, bold (**text**), links ([text](url) and [text](mailto:...)), paragraphs.
import React from 'react';

function inline(text, keyBase) {
  // Split on bold and link patterns, preserving order
  const parts = [];
  let remaining = text;
  let key = 0;
  const pattern = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/;

  while (remaining.length) {
    const match = remaining.match(pattern);
    if (!match) {
      parts.push(remaining);
      break;
    }
    const idx = match.index;
    if (idx > 0) parts.push(remaining.slice(0, idx));

    if (match[1] !== undefined) {
      parts.push(<strong key={`${keyBase}-${key++}`}>{match[1]}</strong>);
    } else {
      parts.push(
        <a key={`${keyBase}-${key++}`} href={match[3]} style={{ color: 'var(--primary-red)' }}>
          {match[2]}
        </a>
      );
    }
    remaining = remaining.slice(idx + match[0].length);
  }
  return parts;
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export default function MarkdownContent({ markdown }) {
  const lines = markdown.split('\n');
  const blocks = [];
  let listBuffer = [];
  let key = 0;

  function flushList() {
    if (listBuffer.length) {
      blocks.push(
        <ul className="legal-list" key={`ul-${key++}`}>
          {listBuffer.map((item, i) => (
            <li key={i}>{inline(item, `li-${key}-${i}`)}</li>
          ))}
        </ul>
      );
      listBuffer = [];
    }
  }

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      flushList();
      continue;
    }
    if (line.startsWith('# ')) {
      continue; // page h1 handled separately by the layout
    }
    if (line.startsWith('## ')) {
      flushList();
      const text = line.slice(3);
      blocks.push(<h2 id={slugify(text)} key={`h2-${key++}`}>{text}</h2>);
    } else if (line.startsWith('### ')) {
      flushList();
      blocks.push(<h3 key={`h3-${key++}`}>{line.slice(4)}</h3>);
    } else if (line.startsWith('* ')) {
      listBuffer.push(line.slice(2));
    } else {
      flushList();
      blocks.push(<p key={`p-${key++}`}>{inline(line, `p-${key}`)}</p>);
    }
  }
  flushList();

  return <>{blocks}</>;
}

// Extracts h2 headings from markdown for building a table of contents
export function extractToc(markdown) {
  return markdown
    .split('\n')
    .map(l => l.trim())
    .filter(l => l.startsWith('## '))
    .map(l => {
      const text = l.slice(3);
      return { text, id: slugify(text) };
    });
}
