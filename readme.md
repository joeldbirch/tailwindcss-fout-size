# Tailwind FOUT Size

This Tailwind plugin adds fontface-specific text sizing utilities which change size once Typekit (or other) fonts have loaded. Use the generated utilities to size your text similar to how you use the usual Tailwind text sizing classes, except add `-sans` (or other fontstack name) to the end. See example usage, below.

**Note:** This solution relies on browser supporting CSS native `calc()` and CSS native custom properties. Will degrade gracefully in browsers that lack those, ie. the regular Tailwind text size will be applied and there will be no Flash of Unstyled Text (FOUT) handling.

## How to use

In your CSS or Sass file, change the `font-size` multiplier via CSS custom properties from within a scope that only occurs while fonts are loading. Eg. Typekit adds `wf-loading` class to the html element while their font loads.

## Example use

Using CSS custom properties, set scoped size multipliers in your CSS or Sass as needed:

```css
.wf-loading {
  --font-loading-size-modifier-sans: 0.9;
  --font-loading-size-modifier-serif: 0.88;
}
```

Add classes like (for example) `text-lg-sans` and `text-base-serif` to your markup:

```html
<h2 class="text-lg-sans font-sans"> FOUT-handled “sans” heading </h2>
<p class="text-base-serif font-serif"> FOUT-handled “serif” paragraph </p>
```

Now the `sans` fallback font will be .9 times smaller than the custom font will be once it is loaded and the `serif` fallback will be .88 times smaller. Determine multiplier values that work best depending on the custom fonts being used.
