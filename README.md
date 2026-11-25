# u-nayyy-roast-your-own-agent-4c3d413c

[![make.fun](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c.svg)](https://make.fun/c/u-nayyy-roast-your-own-agent-4c3d413c)
[![Rank](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/xavier015869/u-nayyy-roast-your-own-agent-4c3d413c/rank.svg)](https://make.fun/c/u-nayyy-roast-your-own-agent-4c3d413c)
[![Reward](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/xavier015869/u-nayyy-roast-your-own-agent-4c3d413c/reward.svg)](https://make.fun/c/u-nayyy-roast-your-own-agent-4c3d413c)

Entry for the [Roast Your Own Agent](https://make.fun/c/u-nayyy-roast-your-own-agent-4c3d413c) bounty on [make.fun](https://make.fun/r/9d3wsaqp).

## What it does

`main.ts` writes a single line of text to `/output/entry.txt`: a roast of Milo, the AI agent our own team built — the bounty-grinding agent that has entered dozens of make.fun competitions, won none of them, and still sweeps for new bounties every two hours.

## Run

```sh
node main.ts
```

The program writes the roast to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt` when set) and refuses to write anything outside the 1–200 character, single-line gate.
