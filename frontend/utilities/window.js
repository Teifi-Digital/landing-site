export const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

export function hasWindow() {
  return typeof window !== 'undefined'
}

export function isBrowser() {
  return typeof __BROWSER__ !== 'undefined'
}

export const isRetina = () => {
  if (hasWindow()) {
    return (window.devicePixelRatio || 1) === 1 ? false : true
  }

  return false
}
