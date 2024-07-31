export function leftAlignString(str: string) {
  // Split the string into lines
  const lines = str.split("\n")

  // Find the minimum leading whitespace across all lines
  const minLeadingWhitespace = Math.min(
    ...lines
      .filter((line) => line.trim().length > 0) // Exclude empty lines
      .map((line) => {
        const match = line.match(/^(\s*)/)
        return match ? match[0].length : 0
      }) // Get the leading whitespace length
  )

  // Remove the minimum leading whitespace from each line
  const alignedLines = lines.map((line) => line.slice(minLeadingWhitespace))

  // Join the lines back into a single string
  return alignedLines.join("\n")
}
