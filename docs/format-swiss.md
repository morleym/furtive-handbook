---
id: format-swiss
title: Swiss-System Tournament
sidebar_label: Swiss
---

Swiss provides a compromise between Round-Robin and runtime.
It is 'non-eliminating' (competitors continue to play matches regardless of winning/losing) but scales logarithmically.

## How it Works

Competitors are paired up for a first round of matches.
If there is an even number of competitors, then all competitors will play each round.
If there is an odd number of competitors, then one competitor will have a bye each round.
After the first round of matches is completed, competitors are paired up for the second round based on their records (1-0 competitors are paired with 1-0 competitors, and 0-1 competitors are paired with 0-1 competitors).

Assuming you are trying to determine a 1st place, this will continue until one competitor holds a higher record than all other competitors.

E.g. for 8 competitors you'll have the following records after each round:

- Round 1: 4 at *1-0*, 4 at *0-1*
- Round 2: 2 at *2-0*, 4 at *1-1*, 2 at *0-2*
- Round 3: 1 at *3-0*, 3 at *2-1*, 3 at *1-2*, 1 at *0-3*

## By the Numbers

| Category              |      Value <br />(*n* is # of competitors)                |   Example / Notes |
| -------------         | :-----------:             | ----- |
| # of Matches Played   | ceiling[ log₂(*n*) ] \* floor[ *n*  / 2 ]                   | 16 competitors = 32 matches played <br />17 competitors = 40 matches played |
| # of Necessary Rounds    |   log₂(*n*)               | 16 competitors = 4 rounds required <br /> 17 competitors = 5 rounds required |
| Distinct Placements   |   1st & 2nd, 3rd* & 4th, 4x T-5th,<br />8x T-9th, 16x T-17th, etc.       | 

## Considerations

### Competitors & Competitive Ops

### Broadcast
