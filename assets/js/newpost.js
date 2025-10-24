document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('postModal');
  const openBtn = document.getElementById('floatingNewPostBtn');
  const closeBtn = document.getElementById('closeModal');
  const form = document.getElementById('postForm');
  const output = document.getElementById('markdownOutput');
  const copyBtn = document.getElementById('copyBtn');
  const downloadBtn = document.getElementById('downloadBtn');

  if (openBtn) {
    openBtn.onclick = () => modal.style.display = 'block';
  }
  closeBtn.onclick = () => {
    modal.style.display = 'none';
    form.reset();
    output.textContent = '';
  };

  window.onclick = (e) => {
    if (e.target == modal) {
      modal.style.display = 'none';
      form.reset();
      output.textContent = '';
    }
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = form.postTitle.value.trim();
    const content = form.postContent.value.trim();
    if (!title || !content) return;

    const date = new Date().toISOString().split('T')[0];
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^[-]+|[-]+$/g, '');
    const filename = `${date}-${slug}.md`;

    const markdown = `---
layout: post
title: "${title}"
date: ${date}
---

${content}
`;

    output.textContent = markdown;

    downloadBtn.setAttribute('data-filename', filename);
  });

  copyBtn.onclick = () => {
    if (output.textContent) {
      navigator.clipboard.writeText(output.textContent).then(() => {
        alert('Markdown copied to clipboard');
      });
    }
  };

  downloadBtn.onclick = () => {
    if (!output.textContent) return;
    const filename = downloadBtn.getAttribute('data-filename') || 'new-post.md';
    const blob = new Blob([output.textContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };
});
