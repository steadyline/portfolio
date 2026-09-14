# Paolo Dapul Portfolio — Reference Audit & Design Direction

## Executive assessment

The reference portfolio has two ideas worth retaining: a depth-based project montage that creates immediate visual intrigue, and a vertical-scroll-to-horizontal-project sequence that gives featured work a cinematic pace. Its weakness is not any single element but accumulation: dark grid, particles, radial glow, orbiting logos, glass panels, counters, pills, avatars, blur, and generic technology badges all compete before the visitor has learned what makes the person distinctive.

The recommended direction treats the portfolio as an authored editorial object rather than a developer-dashboard template. Project work is the imagery. Typography establishes identity. Acid chartreuse is used as a single, memorable signal against warm paper and near-black. Cards are rectangular, information-dense, and typographically disciplined; there are no invented client counts, ratings, experience totals, or testimonials.

## Reference patterns: retain, revise, reject

| Pattern | Decision | Rationale |
|---|---|---|
| Diagonal, blurred opening gallery | Retain the depth; revise the treatment | The overlap implies range and momentum. The new version keeps a three-card diagonal deck but uses selective blur only on peripheral cards and lets typography—not a portrait—own the first viewport. |
| Scroll-driven horizontal project gallery | Retain | It creates a strong narrative beat. The implementation maps normal vertical scrolling to one horizontal track on desktop, while mobile and reduced-motion modes use a native, touch-friendly horizontal scroller. |
| Large project cards | Retain, simplify | Big images make work legible. New cards remove glass, glow, and excessive radius; titles and metadata follow a consistent editorial hierarchy. |
| Grid/starfield/glow background | Reject | This is visually generic and competes with portfolio content. Flat material color and spacing create atmosphere with less decoration. |
| Portrait with orbiting tool icons | Reject | It prioritizes a familiar “tech stack” trope over point of view and work quality. Personal imagery can appear later when real photography is supplied. |
| Client-avatar stack, star score, counters | Reject unless verifiable | These elements read as marketplace proof widgets and become credibility liabilities when evidence is absent. |
| Skill-pill cloud | Reject | A long tool inventory has low information value. Capabilities are grouped by outcomes: direction, product design, creative development, and launch support. |
| Glass service cards | Reject | Repetition adds height without adding meaning. A compact ruled list improves scanning and feels more editorial. |

## Interaction principles

1. Motion supports hierarchy. The hero title reveals once, the image deck settles into place, and the work track responds directly to scrolling. There is no continuous decorative animation.
2. Motion has a static equivalent. `prefers-reduced-motion` removes reveal movement, disables smooth scrolling, and changes the long sticky horizontal scene into a native horizontal region. W3C specifically recommends honoring user motion preferences for non-essential interaction animation.[^1]
3. Mobile interaction is native. The project track uses CSS scroll snapping rather than forcing a desktop scroll transform into a narrow viewport. CSS Scroll Snap is designed to define stable resting positions within an overflow container.[^2]
4. Navigation remains explicit. Previous and next buttons supplement scrolling, reflecting WAI guidance that carousel-like interfaces need keyboard-operable controls rather than gesture-only discovery.[^3]
5. Image space is reserved. Placeholder artwork has explicit width, height, and aspect ratios, avoiding the image-driven layout shifts identified by web performance guidance.[^4]

## Content strategy

The current copy deliberately avoids unverified biography, client names, project results, and seniority claims. It establishes only the provided facts: Paolo Dapul, Philippines, and a design/development practice. Project names and visuals are clearly placeholders and should be replaced with real case studies. The final portfolio will become substantially stronger when every featured project has a specific role, problem, intervention, and measurable outcome.

Recommended project case-study structure:

- One-sentence outcome
- Context and constraint
- Paolo’s exact role
- Two or three decisive design/development choices
- Measured impact or concrete delivery result
- Image sequence showing system, not only a homepage hero

## Visual system

- **Palette:** warm paper `#F0EEE8`, near-black `#10100F`, signal chartreuse `#DFFF37`, plus project-specific coral and blue.
- **Typography:** Manrope for disciplined contemporary sans-serif typography, DM Mono for compact metadata, and Georgia only as a restrained editorial italic.
- **Geometry:** thin rules, minimal rounding, large circular calls to action, and oversized type. This produces identity without the glassmorphism/card-grid vocabulary of the reference.
- **Spacing:** large section transitions and fewer simultaneous components. The work receives the majority of visual space.

## Asset replacement map

Replace the four files in `public/assets/` with Paolo’s real work while keeping filenames, or update the `projects` array in `src/main.jsx`:

- `project-commerce.svg`
- `project-finance.svg`
- `project-culture.svg`
- `project-field.svg`

Use landscape images close to a 3:2 or 16:9 crop, ideally exported as AVIF or WebP with desktop and mobile sizes. Responsive images can reduce mobile transfer size and improve LCP.[^5]

## Sources

[^1]: W3C Web Accessibility Initiative, “[Understanding Success Criterion 2.3.3: Animation from Interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html),” updated September 16, 2025.
[^2]: MDN Web Docs, “[CSS Scroll Snap](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll_snap),” updated August 21, 2026.
[^3]: W3C Web Accessibility Initiative, “[Carousels Tutorial](https://www.w3.org/WAI/tutorials/carousels/).”
[^4]: web.dev, “[Cumulative Layout Shift (CLS)](https://web.dev/articles/cls).”
[^5]: web.dev, “[Serve Responsive Images](https://web.dev/articles/serve-responsive-images).”
