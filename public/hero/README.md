# Hero images

Drop artwork here and it appears in the hero automatically — no code change
needed.

- Supported: .jpg / .jpeg / .png / .webp / .avif
- Shown in filename order, so prefix to control it: 01-..., 02-..., 03-...

Two rendering modes, chosen by how many files are present:

**One file — finished composition (current setup).**
Rendered whole with object-contain, never cropped, at quality 95 with
`priority`. The container uses the artwork's own aspect ratio, so supply the
full design exactly as it should appear. Current file is
`01-moriva-hero-v2.png` (2048x768).

Phones and tablets show the same full artwork, scaled to the screen width.
The buttons drawn in it are too small to tap there, so below the lg
breakpoint (1024px) real Get Started / Our Services buttons sit under it.

**Two or more files — collage.**
The first three fill three tilted cards with object-cover and mouse parallax,
so any roughly landscape aspect works.

Note: adding a second file switches the hero out of single-image mode. The
previous photo-only banner now lives in `public/archive/` for that reason.

In dev the list refreshes on reload. For production the list is read at
build time, so run a fresh build after adding files.
