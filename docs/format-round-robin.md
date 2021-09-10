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
These matches are played in 'rounds' where each round has every competitor playing one of the other competitors (no repeats).
If there is an odd number of competitors, then one competitor each round will have a 'bye' (each competitor will get exactly one bye).

After all matches are completed, you will have a standings sorted by how the competitors performed.
The first sort is usually by # of matches won.
The secondary/tertiary/etc. sorts are called 'tiebreakers' and usually consist of the following (adjusted to taste):

* Head-to-head record
* Game Differential (games won minus games lost) or Game Win % (percentage of games won out of total games played)
* A videogame-specific stat (e.g. 'goal differential')

Certain games/sports support draws (ties), so they will award 'points' for a Win/Loss/Draw and use those points to sort their round-robin standings instead of using # of match wins.
A good example of this is FIFA tournaments, where the standard is 3 points for match win, 1 point for match draw, and 0 points for match loss.

Round Robins are visually distinct from 'brackets.' They may be shown as a table crossing the list of competitors with itself.
This way, you can easily see all matches for each competitor.

![round robin diagram](/img/format-guides/format-RoundRobin.png)

Often times (and especially for larger Round Robins) you may simply see a list of standings in lieu of an actual diagram of the matches (as this is easier to digest on a broadcast).

![round robin standings](/img/format-guides/format-RoundRobinStandings.png)

### Groups

:::important

Could use a visual highlighting how breaking 16 competitors into two groups of 8 *separates* those competitors from each other (e.g. divided by a 'wall') and/or a visual of reducing a large number of matches into a smaller number of matches

:::

Unlike with single-elim and double-elim, breaking a Round-Robin into groups effectively changes the format (you won't see the same matches that you would have originally).
Since the length of Round-Robin scales linearly with # of competitors (see below), breaking a large group into smaller group will save considerable time.
If you have 16 competitors for example, and break them into two groups of eight, then you will have two separate Round-Robins which will take half as long to complete (7 rounds of play instead of 15 rounds of play).
Time savings of this nature become more pronounced as the # of competitors increases; 128 competitors would take 127 rounds, but *16 groups of 8* still only needs 7 rounds.

### Double Round Robin

Double Round Robin is a common variant of Round Robin.
As the name implies, it is simply a repeated Round Robin.
Every competitor plays every other competitor once, and then it's done again.
More commonly seen in long-term 'league' projects rather than in one-day/one-week tournaments.

## By the Numbers

| Category              |      Value <br />(*n* is # of competitors)                |   Example / Notes |
| -------------         | :-----------:             | ----- |
| # of Matches Played   | *n! / [2! \* (n-2)!]* <br /> (# of combinations)       | 8 competitors = 28 matches played <br />17 competitors = 136 matches played |
| # of Necessary Rounds | *n-1* (if *n* is even) <br />*n* (if *n* is odd)          | 8 competitors = 7 rounds required <br /> 17 competitors = 17 rounds required |
| Distinct Placements   |   All placements <br /> (1st - *n*<sup>th</sup>)       |   |
| Possible progressions | 1 to *n*  |

## Notes for Different Roles

### Competitors & Competitive Ops

#### Competitor Experience

* Competitors get to play all the other competitors in the Round-Robin (or their Round-Robin group)
  * Plenty of guaranteed matches
  * No competitor gets a better/worse set of matches compared to anyone else in the group
* All matches are predetermined, so you should be able to provide a schedule of each round to competitors in advance. Communicate when they should expect to have this!
* Multi-stage tournaments often use round-robin as a lead-in to a playoff. Some competitors may end up out of playoff contention before their matches are over
  * This can, sometimes, lead to sandbagging (competitors not trying their hardest) in their final round-robin matches
  * In the worst case, competitors could participate in matchfixing/collusion around such a situation

#### Seeding

* A singular Round-Robin does not require seeding
* Round-Robin *groups* require seeding because otherwise you can end up with imbalanced groups
* With every competitor playing each other, you can use Round-Robin to acquire 'accurate' seeding for a multi-stage tournament (e.g. round-robin into double-elim)

#### Scheduling & Logistics

* Round-Robin supports ties! Unlike elimination formats, competitors can play a match and have a tied outcome.
* Round-Robin has a significantly larger # of rounds of play per competitors involved compared to elimination brackets or Swiss
  * If you do not have adequate setups to run all available matches at once, then runtime will be longer
  * On the positive side, competitors are guaranteed that many matches, and this is a common format for leagues played over several weeks
  * Again, you can break Round-Robin into smaller groups to save runtime
* Tiebreakers can take some time to calculate if it isn't natively handled in the tournament software/tooling you're using. Keep this in mind and be sure to communicate timeline expectations to competitors & broadcast in advance.

### Broadcast

#### Storylines & Information Flow

* If you have multiple round-robin groups, then each group is its own self-contained story
  * Who is expected to advance out of the group? Who is expected to be eliminated?
* If a competitor is already eliminated from contention for the next stage in a multi-stage tournament, then their late round-robin matches may not be suitable for broadcast
  * No one wants to see competitors sandbagging/not trying their hardest. Unless they do!
* Tiebreakers may take some time to sort out. Consider how you will communicate scenarios and tiebreakers to an audience, and work with Comp Ops for how & when they will be determined

#### Scheduling

* You can schedule every broadcasted match in advance, because 100% of round-robin matchups will be known
