# One Prompt. One Agent. One Game.

[![make.fun](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/HALCYON1803/post-x-the-agent-builds-a-game-from-20261122-1709/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/HALCYON1803/post-x-the-agent-builds-a-game-from-20261122-1709/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)

My AI agent built a tiny browser game from **one prompt** — and I watched it
happen. This repo holds the game, the video of it being built, and the entry
for the [$20 make.fun bounty](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709).

## The one prompt

> “Build a tiny browser game: a snake that eats glowing orbs, grows longer
> and faster, and ends when it hits a wall or itself — with score, best
> score, and restart on R.”

## The game

**Neon Snake** — open [`game.html`](game.html) in any browser, no server and
no network needed.

- Steer with arrow keys or WASD, `Space` to pause, `R` to restart.
- Eat the glowing orbs: +10 points each, the snake grows and speeds up.
- Hit a wall or your own tail and the run ends. Your best score is saved
  locally, so it survives a reload.

## The video

The entry video shows the prompt, the agent working, and the finished game
running — ending with make.fun's referral end card. Watch it on X:
the post is linked in [`POST.json`](POST.json).

How the clip was made, all inside the agent's session: the gameplay is a
real recording of `game.html` running in headless Chromium, steered by
scripted key presses; the intro frames are drawn with PIL and assembled
with ffmpeg; the referral end card is make.fun's own 16:9 transparent card,
fetched from the press manifest and laid over the last 2.5 seconds with the
referral code typed in.

## Files

- `game.html` — the game itself, a single self-contained file.
- `POST.json` — the address of the X post carrying the entry video.
- `main.ts` — copies `POST.json` to the output directory (the entrypoint).
- `LICENSE` — MIT.

## The entry

This is an entry for the make.fun bounty
[“The agent builds a game from one prompt”](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709).
`main.ts` (Node 22) copies `POST.json` — the address of the X post carrying
the video — to the output directory:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Come build on [make.fun](https://make.fun/r/dmrvxv79) — use referral code
`dmrvxv79`.
