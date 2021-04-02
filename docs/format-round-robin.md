---
id: format-round-robin
title: Round Robin
sidebar_label: Round Robin
---

Round Robin, Round-Robin, RR.
Next to single elimination, Round Robin may be the 'other' ubiqutous format
 (featured in most traditional sports).

## How it Works

In short: "Everyone plays everyone else!"

Every competitor will play every other competitor once, meaning it's effectively one match per 'combination' of your competitors.
After all matches are completed, you will have a standings sorted by how the competitors performed.
The first sort is usually # of matches won.
The secondary/tertiary/etc. sorts are called 'tiebreakers' and usually consist of the following (adjusted to taste):

* Head-to-head record
* Game Differential (games won minus games lost) or Game Win % (percentage of games won out of total games played)
* [*Insert videogame-specific stat*] e.g. 'goal differential'

Occasionally, certain games/sports will boil all performance down to 'points' and will use those points for their round-robin standings instead of strictly # of matches won.
This is uncommon outside of games/sports where 'ties' are possible (e.g. FIFA), and consequently a match win/loss/tie will award different points.

Round Robins are visually distinct from 'brackets.' They may be shown as a table crossing the list of competitors with itself.
This way, you can easily see all matches for each competitor.

![round robin image](https://imgur.com/tjf3iQt.png)

Often times (and especially for larger Round Robins) you may simply see a list of standings in lieu of an actual diagram of the matches (as this is easier to digest on a broadcast).

## By the Numbers

| Category              |      Value <br />(*n* is # of competitors)                |   Example / Notes |
| -------------         | :-----------:             | ----- |
| # of Matches Played   | *n! / [2! \* (n-2)!]*       | 8 competitors = 28 matches played <br />17 competitors = 136 matches played |
| # of Necessary Rounds | *n-1* (if *n* is even) <br />*n* (if *n* is odd)          | 8 competitors = 7 rounds required <br /> 17 competitors = 17 rounds required |
| Distinct Placements   |   All placements <br /> (1st - *n*<sup>th</sup>)       |   |
| Possible progressions | 1 to *n*  |

## Considerations

### Competitors & Competitive Ops

* Round-Robin has a significantly larger # of rounds of play per competitors involved compared to elimination brackets or Swiss
  * If you do not have adequated setups to run all available matches at once, then runtime will be longer
  * On the positive side, competitors are guaranteed that many matches, and this is a common format for leagues played over several weeks
* With every competitor playing each other, you can use round robin to acquire 'accurate' seeding for a multi-stage tournament (e.g. round-robin into double-elim)
* Multi-stage tournaments often use round-robin as a lead-in to a playoff. Some competitors may end up out of playoff contention before their matches are over. This can, sometimes, lead to sandbagging (competitors not trying their hardest) in their final round-robin matches
* Tiebreakers can take some time to calculate if it isn't natively handled in the tournament software/tooling you're using. Keep this in mind and be sure to communicate timeline expectations to competitors & broadcast in advance.

### Broadcast

* You can schedule every single match out in advance, because round-robin matchups are predetermined
* If a competitor is already eliminated from contention for the next stage in a multi-stage tournament, then their late round-robin matches may not be suitable for broadcast.
* Tiebreakers may take some time to sort out. Try to plan how you will communicate scenarios and tiebreakers to an audience, and work with comp ops to plan how you'll determine these ASAP.
