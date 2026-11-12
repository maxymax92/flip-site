const stored = (key) => {
  try {
    return localStorage.getItem(`flip-${key}`)
  } catch {
    return null
  }
}
const root = document.documentElement
const theme = stored('theme')
root.dataset.theme = theme === 'dark' || (theme !== 'light' && matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light'
for (const key of ['text', 'density', 'contrast', 'motion']) {
  const choice = stored(key)
  if (choice !== null && choice !== 'standard') root.dataset[key] = choice
}
if (stored('contrast') === null && matchMedia('(prefers-contrast: more)').matches) root.dataset.contrast = 'more'
if (stored('motion') === null && matchMedia('(prefers-reduced-motion: reduce)').matches) root.dataset.motion = 'reduced'
globalThis['__zod_globalConfig'] = { jitless: true }
