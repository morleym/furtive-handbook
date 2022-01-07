---
id: comparisons
title: Comparisons
sidebar_label: Comparisons
---

Compare important numbers across formats!

## Runtime

### Calculating Runtimes

To compare runtimes of each format, I will be utilizing the # of necessary consecutive rounds.
To calculate an actual runtime, you would need to multiply this number of necessary rounds by the expected total length of a match in your esport (i.e. the time to set up a match *and* to play it).
In the case of Rocket League, for example, tournament organizers generally allot half an hour in total for a best-of-three match.
So to estimate the runtime of an all-Bo3 single-elimination bracket of 64 competitors, we would multiply:

`[6 consecutive rounds required] × [30 minutes] = [180 minutes total runtime]`

Or, if we wanted to estimate runtime for this same 64 competitor tournament in a double-elimination format:

`[12-13 consecutive rounds required] × [30 minutes] = [360-390 minutes total runtime]`

There are more factors involved here, of course, such as varying match lengths (e.g. Bo3 changing to Bo5) and broadcast needs (e.g. broadcasting both semifinals in a single-elimination bracket).
While I hope to one day develop a tool to assist with that process, I believe you have enough of a start to calculate your own specific project schedule needs from here.

So, for simplicity's sake, I'm going to stick to the # of necessary consecutive rounds for the following comparison table.

### Comparing Runtimes

I've included a few sample values in the table below, but you can calculate values at whichever number of competitors by using the provided formulas.

| Format                  | # Of Necessary Consecutive Rounds | At 16 Competitors    | At 64 Competitors   | At 256 Competitors |
|:------------------------:|:-----:|:---------:|:------------------:| :----: |
| Single-Elimination      | log₂(n) rounded up    | 4 rounds     | 6 rounds      | 8 rounds  |
| Double-Elimination      | *Floor[log₂(n-1)] + Ceiling[log₂(2n/3)] + 1* <br />[[1](#citations)]   | 8-9 rounds    | 12-13 rounds   | 16-17 rounds  |
| Round Robin             | *n! / [2! \* (n-2)!]* <br /> (# of combinations)     | 15 rounds   <br />\*Broken into two groups of 8: 7 rounds  | 63 rounds  <br />\*Broken into 8 groups of 8: 7 rounds  <br />\*Broken into 4 groups of 16: 15 rounds  | 255 rounds  <br />\*Broken into 16 groups of 16: 15 rounds  <br />\*Broken into 32 groups of 8: 7 rounds  |
| Swiss (Non-Eliminating) | log₂(*n*) rounded up  | 4 rounds        | 6 rounds        | 8 rounds  |

### My Takeaways

* Single-elimination is the singular quickest & simplest format out there (but it comes at the cost of guaranteed matches)
* Double-elimination (generally) doubles the length of single-elimination (for the benefit of doubling guaranteed matches)
* Round-Robin is arguably the most versatile runtime format due to the nature of group sizes linearly scaling its runtime.
  But for many contexts, you can't ignore the sheer number of matches which must be played (especially in live event settings with limited setups)
* Swiss length is equivalent to single-elimination but it comes with a number of asterisks for complexity and, similarly to round-robin, a possible strain on available setups

## Citations

1. [Moore, J. (2021, February 25). *The Math Behind SPR and UF*.](https://www.pgstats.com/articles/spr-uf-extra-mathematical-details)
