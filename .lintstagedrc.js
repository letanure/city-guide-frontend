module.exports = {
  // Lint & Prettify TS and JS files
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `pnpm lint --fix . ${filenames.join(' --file')}`,
    `pnpm test -- --findRelatedTests ${filenames.join(' ')}`,
  ],
}
