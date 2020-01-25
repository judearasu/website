const sanitizeHTML = require(`sanitize-html`)
const _ = require(`lodash`)

export function formatReadingTime(minutes) {
  let cups = Math.round(minutes / 5)
  // let bowls = 0
  if (cups > 5) {
    return `${new Array(Math.round(cups / Math.E))
      .fill("🍱")
      .join("")} ${minutes} min read`
  } else {
    return `${new Array(cups || 1).fill("☕️").join("")} ${minutes} min read`
  }
}

export function countText(rawText) {
  let timeToRead = 0
  const pureText = sanitizeHTML(rawText, { allowTags: [] })
  const avgWPM = 265
  const wordCount =
    _.words(pureText).length +
    _.words(pureText, /[\p{sc=Katakana}\p{sc=Hiragana}\p{sc=Han}]/gu).length
  timeToRead = Math.round(wordCount / avgWPM)
  if (timeToRead === 0) {
    timeToRead = 1
  }
  return timeToRead
}
