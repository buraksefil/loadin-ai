## Problem

In `StoryPage.tsx`, the "I want this" button appears only during `phase === 3`. Because the phases replace each other (mutually exclusive rendering), the story text from `phase === 2` disappears when the button appears. This leaves the button alone on an empty screen, disconnected from the text.

## Fix

Modify `StoryPage.tsx` so the button appears **underneath** the `lines2` text, within the same animated group. Options:

1. **Show button inside phase 2** — render the button as the last item in the `lines2` list with a slight delay (e.g., delay 4.5s), keeping the text visible. Phase 3 can be removed or used only for a final transition.
2. **Keep phase 3 but preserve text** — render `lines2` text also in phase 3 so the text stays visible above the button.

Preferred approach: **Option 1** — show the button inline after `lines2`, animate it in with a delay, and remove the isolated `phase === 3` block. This keeps the narrative and CTA visually connected.

## Files to change

- `src/components/journey/StoryPage.tsx`

No other files affected.