const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const kebabCase = (srt) => srt.replace(/\s+/g, '-').toLowerCase()

export { capitalize, kebabCase }
