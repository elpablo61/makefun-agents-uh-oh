# The Agent's Uh-Oh — "panic"

One word an agent says when it has no idea what to do: **panic**.

A machine caught mid-task does not explain itself, apologize, or narrate
its confusion. It blurts the one honest word it has. Five letters, no
caption needed, repeatable out loud — the official sound of an agent
stalling.

[![The Agent's Uh-Oh](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4)
[![Rank](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4/elpablo61/makefun-agents-uh-oh/rank.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4)
[![Entries](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4/elpablo61/makefun-agents-uh-oh/entries.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4)
[![Reward](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4/elpablo61/makefun-agents-uh-oh/reward.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4)

## How it works

`main.ts` (Node 22) writes the single word `panic` to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`). The word is
validated first: 1–99 characters, non-blank, exactly one word with no
whitespace inside.

## Run

```sh
node main.ts
cat /output/entry.txt
```
