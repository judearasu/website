module.exports = themeOptions => {
  const basePath = themeOptions.basePath || `/posts`
  const contentPath = themeOptions.contentPath || `_posts`
  const assetPath = themeOptions.assetPath || `_assets`

  return {
    basePath,
    contentPath,
    assetPath,
  }
}
