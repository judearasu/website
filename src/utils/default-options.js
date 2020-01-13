module.exports = themeOptions => {
  const basePath = themeOptions.basePath || `/blog`
  const contentPath = themeOptions.contentPath || `_posts`
  const assetPath = themeOptions.assetPath || `_assets`

  return {
    basePath,
    contentPath,
    assetPath,
  }
}
