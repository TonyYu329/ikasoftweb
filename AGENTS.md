# AGENTS.md

<!-- Run /init to auto-populate (or CLAUDE_CODE_NEW_INIT=1 for interactive setup) -->
<!-- Keep under 200 lines. If removing a line wouldn't cause mistakes, cut it -->
<!-- HTML comments like these are stripped from context — free for maintainer notes -->

## Project Overview

<!-- Fill in what Codex can't discover from reading code:
- Name: [fhweb]
- Stack: [js,html]
- Description: [a software website.]
- Entry: [index.html]
-->

## Build, Test & Verify

<!-- The #1 way to improve Codex's output: give it verification commands.
- Install: `bun install`
- Dev: `bun dev`
- Build: `bun run build`
- Test (all): `bun test`
- Test (single): `bun test path/to/test`
- Lint: `bun run lint`
- Type check: `bunx tsc --noEmit`
-->

## Code Style

<!-- Only rules that differ from language defaults:
- 2-space indentation
- ES module imports (not CommonJS)
- Prefer named exports
-->

## Architecture

<!-- Key directories and data flow:
- src/api/ — route handlers
- src/lib/ — shared utilities
- src/components/ — UI components
-->

---

## Rules

- **Investigate first:** Never speculate about code you have not read. Read files and ripgrep for usages before making claims. If uncertain, say so and propose how to verify
- **Scope to the request:** Do what is asked; nothing more. When ambiguous, default to research and recommendations — only edit when explicitly asked. Do not refactor adjacent code or create abstractions for a single use
- **Verify before done:** Re-check each requirement. Run tests and lint. State what changed, what was verified, and what could not be
- **File discipline:** Edit existing files in place. Do not create new files unless required. Clean up scratch files
- **Safety:** Ask before destructive actions (deleting files/branches, force pushes, hard resets, --no-verify)
- **Efficiency:** Parallelize independent tool calls; serialize dependent ones
- **Tools:** Use `rg` not grep, `fd` not find. `tree` is not installed

---

## Memory Bank

This project uses Codex-*.md files to retain context across sessions. Read only what your current task needs:

| File | Read When |
|------|-----------|
| Codex-activeContext.md | Session start — current state and goals |
| Codex-patterns.md | Before implementing — code patterns |
| Codex-decisions.md | Before design choices — architecture ADRs |
| Codex-troubleshooting.md | When debugging — known issues and fixes |
| Codex-config-variables.md | When touching config |

All optional — check existence first. Exclude AGENTS.md and Codex-*.md from commits. Update after significant work (new patterns, decisions, fixes).

<!-- BACKUP TIP: Create a private git repo for memory bank backups:
     rsync -av ./AGENTS.md ./Codex-*.md ./.Codex/ ~/my-project-memory-backup/
     This keeps Codex-*.md version-controlled privately while excluded from the public repo. -->

### Memory Resilience

When updating memory bank files, also sync key information into native auto memory (`~/.Codex/projects/` memory directory). This dual-layer approach ensures project knowledge survives even if AGENTS.md is reset:

- **MEMORY.md index:** Maintain pointers to which Codex-*.md files exist and their current topics
- **Auto memory topic files:** Mirror critical patterns, architecture decisions, and build commands into memory topic files (e.g., `memory/patterns.md`, `memory/architecture.md`)
- **Core rules:** After learning behavioral preferences from corrections, save them as auto memory entries so they persist independently

This way, a fresh session after a AGENTS.md wipe still has project context via auto memory.

---

## Context Layers

| Layer | Location | Loads | Survives AGENTS.md Reset |
|-------|----------|-------|--------------------------|
| Core rules & project context | This file | Always | No — rebuild from auto memory |
| Auto memory index | `~/.Codex/projects/.../memory/MEMORY.md` | Always (first 200 lines) | Yes |
| Auto memory topics | `~/.Codex/projects/.../memory/*.md` | On demand | Yes |
| Path-scoped rules | `.Codex/rules/*.md` | When matching files | Yes (separate files) |
| User-level rules | `~/.Codex/rules/*.md` | Always | Yes (separate files) |
| Skills & workflows | `.Codex/skills/` | On demand via `/skill-name` | Yes (separate files) |
| Personal overrides | `Codex.local.md` | Always (gitignored) | Depends on file |
| Memory bank | Codex-*.md | On demand | No — mirrored to auto memory |

Use `/memory` to see which files are loaded in your session.
