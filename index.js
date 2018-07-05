module.exports = function () {
  function({ addUtilities, config }) {
    let textSizes = config('textSizes')
    let fonts = config('fonts')
    let foutUtilities = Object.keys(fonts).map(fontName => {
      let fontSet = []
      for (const size of Object.keys(textSizes)) {
        fontSet.push({
          [`.text-${size}-${fontName}`]: {
            fontSize: `calc(${
              textSizes[size]
            } * var(--font-loading-size-modifier-${fontName}, 1))`,
          },
        })
      }
      return fontSet
    })

    // tell tailwind to generate these utilities…
    addUtilities(foutUtilities, {
      // …plus their breakpoint variants
      variants: ['responsive'],
    })
  }
}