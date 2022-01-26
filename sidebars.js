module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'welcome',
        'stakeholders',
        'concepts'
      ]
    },
    {
      type: 'category',
      label: 'Format Guides',
      link: {
        type: 'generated-index',
        title: 'Format Reference Guides',
        description: 'Click a format to explore how it works, calculate important numbers, and browse notes for each role.',
        slug: '/category/format-guides',
      },
      items: [
        'format-guides-overview', 
        'format-single-elim', 
        'format-double-elim', 
        'format-round-robin',
        {
          type: 'category',
          label: 'Swiss',
          link: {type: 'doc', id: 'format-swiss'},
          items: ['swiss-pairings']
        }
      ]
    },
    {
      type: 'category',
      label: 'Additional Thoughts',
      items: [
        'format-combinations',
        'go-beyond',
      ]
    },
    {
      type: 'category',
      label: 'Quick Info',
      items: [
        'cheat-sheet',
        'comparisons',
      ]
    }
  ]
};
