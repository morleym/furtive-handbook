---
id: comparisons
title: Comparisons
sidebar_label: Comparisons
description: Comparing specific measurements across each format such as runtime
---

Each format has its own nuanced strengths & drawbacks to explore for your project's needs, but sometimes it helps to look at a particular measurement across all of the formats at once.

## Runtimes

### Calculating Runtimes

To compare runtimes of each format, I will be utilizing the # of necessary consecutive rounds.
To calculate an actual runtime, you would need to multiply this number of necessary rounds by the expected total length of a match in your esport (i.e. the time to set up a match *and* to play it).
In the case of Rocket League, for example, tournament organizers generally allot half an hour in total for a best-of-three match.
So to estimate the runtime of an all-Bo3 single-elimination bracket of 64 competitors, assuming we have sufficient setups to play all matches concurrently, we would multiply:

`[6 consecutive rounds required] × [30 minutes] = [180 minutes total runtime]`

Or, if we wanted to estimate runtime for this same 64 competitor tournament in a double-elimination format:

`[12-13 consecutive rounds required] × [30 minutes] = [360-390 minutes total runtime]`

There are more factors involved here, of course, such as varying match lengths (e.g. Bo3 changing to Bo5) and broadcast needs (e.g. broadcasting both semifinals in a single-elimination bracket).
There is also the prickly detail of "sufficient setups" in a live event setting.
If you have 16 first-round matches in a double-elimination bracket, but can only play 8 at a time, then that effectively adds *another* round's worth of runtime.

For double-elimination, my friend [Mitch "Dz" Dzugan](https://github.com/mitchdzugan/) created [an awesome tool called Tourney Time Calc](https://calc-tourney-time.herokuapp.com/) to visualize and calculate runtimes under such setup constraints.
While I hope to one day develop a tool for *all* formats to assist with that process, I believe you have enough of a start to calculate your own project-specific schedule needs from here.

For the sake of concisely comparing formats, I'm going to stick to the # of necessary consecutive rounds for the following comparison table.
Just be aware that constrained setups will extend the runtime of formats with more [**Total Matches**](#comparing-guaranteed-matches-and-total-matches) in a more drastic way than those with fewer.

### Comparing Runtimes

I've included a few sample values in the table below, and you can calculate values for *n* number of competitors by using the provided formulas.

| Format                  | # Of Necessary Consecutive Rounds | At 16 Competitors    | At 64 Competitors   | At 256 Competitors |
|:------------------------:|:-----:|:---------:|:------------------:| :----: |
| Single-Elimination      | log₂(n) rounded up    | 4 rounds     | 6 rounds      | 8 rounds  |
| Double-Elimination      | *Floor[log₂(n-1)] + Ceiling[log₂(2n/3)] + 1* <br />[[1]](#citations)   | 8-9 rounds    | 12-13 rounds   | 16-17 rounds  |
| Round Robin             | n-1 (if n is even)<br />n (if n is odd)     | 15 rounds   <br />\*Broken into two groups of 8: 7 rounds  | 63 rounds  <br />\*Broken into 8 groups of 8: 7 rounds  <br />\*Broken into 4 groups of 16: 15 rounds  | 255 rounds  <br />\*Broken into 16 groups of 16: 15 rounds  <br />\*Broken into 32 groups of 8: 7 rounds  |
| Swiss (Non-Eliminating) | log₂(*n*) rounded up  | 4 rounds        | 6 rounds        | 8 rounds  |

### My Takeaways for Runtimes

* Single-Elimination is the quickest & simplest format out there, and it isn't even close.
  However, it comes at the cost of guaranteed matches.
  One-and-done for HALF of your competitors, two-and-done for an additional quarter of them.
* Double-Elimination doubles the length of single-elimination, but provides the benefit of doubling guaranteed matches.
  So now, half of your competitors get TWO matches before they're done.
  It really does help soften the blow!
* Round Robin is arguably the most versatile runtime format due to the nature of group sizes linearly scaling its runtime.
  But for many contexts, you can't ignore the sheer number of matches which must be played (especially in live event settings with limited setups)
* Swiss length is equivalent to single-elimination but it comes with a number of asterisks for complexity and, similarly to round-robin, a possible strain on available setups

## Guaranteed Matches and Total Matches

Guaranteed Matches means the bare minimum number of matches each competitor will get to play in a competition.
Total Matches means the overall number of matches played by everyone in the entire competition.

A few notes on the usage of groups in this comparison:

* If you break single-elimination or double-elimination into groups, in order to advance participants to another stage (e.g. taking top 2 per group or top 4 per group)
  then it will remove some matches from the total count (largely negligible for the purpose of comparisons)
* If you break round-robin or Swiss into groups, however, you will play the full number of matches out
* In the comparison table, 'total' means the total matches played across *all* groups

### Comparing Guaranteed Matches and Total Matches

I've included a few sample values in the table below, and you can calculate values for *n* number of competitors by using the provided formulas.

| Format | Guaranteed Matches <br /> per Competitor | Total Matches <br /> Across All | 16 Competitors | 64 Competitors | 256 Competitors |
|:---:|:---:|:---:|:---:|:---:|:---:|
| Single-Elimination | 1 | *n* - 1 | Guaranteed: 1 <br />Total: 15 | Guaranteed: 1 <br />Total: 63 | Guaranteed: 1 <br />Total: 255 |
| Double-Elimination | 2 | 2*n* - 2 OR 2*n* - 1 | Guaranteed: 2 <br />Total: 30-31 | Guaranteed: 2 <br />Total: 126-127 | Guaranteed: 2 <br />Total: 510-511 |
| Round-Robin | *n* - 1 | *n*! / <br />[2! × (*n* - 2)!] | Guaranteed: 15 <br />Total: 120 | (4 groups of 16) <br />Guaranteed: 15 <br />Total: 480 <br /> <br />(8 groups of 8) <br />Guaranteed: 7 <br />Total: 224 | (16 groups of 16) <br />Guaranteed: 15 <br />Total: 1920 <br /> <br />(32 groups of 8) <br />Guaranteed: 7 <br />Total: 896 |
| Swiss (Non-Eliminating) | log₂(*n*) | ceiling[log₂(*n*)] <br />× floor[*n* / 2] | Guaranteed: 4 <br />Total: 32 | Guaranteed: 6 <br />Total: 192<br /><br />(2 groups of 32) <br />Guaranteed: 5 <br />Total: 160  | Guaranteed: 8 <br />Total: 1024 <br /><br />(2 groups of 128) <br />Guaranteed: 6 <br />Total: 896  |

### My Takeaways for Guaranteed Matches and Total Matches

* Single-Elimination guarantees only one match regardless of how many competitors you have.
  In exchange, it has substantially fewer total matches than any other format (except maybe a gauntlet or page playoff, which are rare formats to see in the wild)
* Double-Elimination, following suit, guarantees two matches regardless of competitor count.
  And, by virtue of every competitor needing to lose *twice*, it generally has double the matches of single-elimination (which is still considerably lower than other formats).
* Round Robin, as I touched on in the runtime comparisons, is extremely versatile.
  With a given number of competitors, you can pick different group sizes which each produce unique guaranteed match counts *and* total match counts.
  Still, as you scale up, the sheer total number of matches can be infeasible if you're in a live event context with limited setups.
  Also, competitors may not want THAT many matches in a tournament!
* Swiss *also* is versatile in that you *could* break it into groups to produce different runtimes and match totals.
  But, with the logarithmic nature of Swiss (see the [Runtime comparison table](comparisons#comparing-runtimes)), breaking Swiss into groups is unnecessary unless it is for constraints of scheduling and available setups.
  I would advise against breaking Swiss into groups because I believe its strength lies in providing a scaling number of guaranteed matches among a single, monolithic pool of players without 'breaking the runtime bank' the way Round Robin can.

## Citations

1. [Moore, J. (2021, February 25). *The Math Behind SPR and UF*.](https://www.pgstats.com/articles/spr-uf-extra-mathematical-details)
