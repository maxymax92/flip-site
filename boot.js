const stored = (key) => {
  try {
    return localStorage.getItem(`flip-${key}`)
  } catch {
    return null
  }
}
const root = document.documentElement
const theme = localStorage.getItem('heroui-theme')
const resolved = theme === 'dark' || (theme !== 'light' && matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light'
root.dataset.theme = resolved
root.classList.add(resolved)
for (const key of ['text', 'contrast']) {
  const choice = stored(key)
  if (choice !== null && choice !== 'standard') root.dataset[key] = choice
}
if (stored('contrast') === null && matchMedia('(prefers-contrast: more)').matches) root.dataset.contrast = 'more'
if (stored('motion') === 'reduced') root.dataset.reduceMotion = 'true'
globalThis['__zod_globalConfig'] = { jitless: true }
