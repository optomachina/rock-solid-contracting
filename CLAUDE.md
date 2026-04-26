# CLAUDE.md

Project: Rock Solid Contracting marketing site (azrocksolid.com).

## Skill routing

When the user's request matches an available skill, ALWAYS invoke it using the Skill
tool as your FIRST action. Do NOT answer directly, do NOT use other tools first.
The skill has specialized workflows that produce better results than ad-hoc answers.

Key routing rules:
- Product ideas, "is this worth building", brainstorming → invoke office-hours
- Bugs, errors, "why is this broken", 500 errors → invoke investigate
- Ship, deploy, push, create PR → invoke ship
- QA, test the site, find bugs → invoke qa
- Code review, check my diff → invoke review
- Update docs after shipping → invoke document-release
- Weekly retro → invoke retro
- Design system, brand → invoke design-consultation
- Visual audit, design polish → invoke design-review
- Architecture review → invoke plan-eng-review
- Save progress, checkpoint, resume → invoke checkpoint
- Code quality, health check → invoke health

## Design System

Always read `DESIGN.md` before making any visual or UI decision. All font choices,
colors, spacing, layout patterns, and aesthetic direction are defined there. Do not
deviate without explicit user approval.

Quick rules (full spec in DESIGN.md):
- Fonts: Fraunces (display + italic), Newsreader (body), JetBrains Mono (data). Never
  Inter, Roboto, system-ui, Anton, Oswald, or any blacklisted face.
- Colors: `--rs-basalt`, `--rs-caliche`, `--rs-iron`, `--rs-varnish`, `--rs-sand`,
  `--rs-shadow`, `--rs-mesquite`, `--rs-dust`. Iron is the only true accent — use as
  stamp, never as gradient.
- Body copy is **never below 19px** (older demographic).
- Hero is asymmetric 38/62 split, NOT a centered hero.
- Services is a numbered typographic index, NOT a 3-icon card grid.
- Buttons are hard-edged 0px radius rectangles in iron-rust. NEVER pill, NEVER
  gradient, NEVER drop shadow.
- Headlines are sentence case (mono labels and buttons stay uppercase).

In QA / design-review mode, flag any code that doesn't match DESIGN.md.

A working HTML preview of the system lives at `.context/design-system/preview.html`.
