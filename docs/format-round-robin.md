---
id: format-round-robin
title: Round Robin
sidebar_label: Round Robin
---

Common aliases: Round Robin, Round-Robin, RR.

## Ultra-Quick Look

Next to single elimination, Round Robin may be the 'other' ubiquitous format
 (featured in most traditional sports).

Strengths:

* Most guaranteed matches possible
* Great at acquiring seeding for a following stage

Potential Drawbacks:

* Longest schedule required across all formats
* Lacks an exciting punch on its own—needs a following stage
* Can generate "throwaway" low-stakes match scenarios which can lead to sandbagging and/or collusion

## How it Works

In short: "Everyone plays everyone else!"

Every competitor will play every other competitor once, meaning there is effectively one match per combination of your competitors.
These matches are played in 'rounds' where each round has every competitor playing one of the other competitors whom they have not already played.
If there is an odd number of competitors, then one competitor each round will have a 'bye' where they sit out for the round (each competitor will get exactly one bye in those cases).

After all matches are completed, you will have a final standings sorted by how the competitors performed.
The first sort is usually by # of matches won.
The secondary/tertiary/etc. sorts are called 'tiebreakers' and usually consist of the following (adjusted to taste):

* Game Differential (games won minus games lost) or Game Win % (percentage of games won out of total games played)
* Head-to-head record among tied competitors
* A videogame-specific stat (e.g. goal differential in FIFA)

Certain games/sports support draws (ties), so they will award 'points' for a Win/Loss/Draw and use those points to sort their round-robin standings instead of using # of match wins.
For example, association football (and FIFA tournaments, as a result) commonly uses 3 points for match win, 1 point for match draw, and 0 points for match loss.

Round Robins are visually distinct from 'brackets.' They may be shown as a table crossing the list of competitors with itself.
This way, you can read the results of all matches for each competitor.
Read from left to right in the example below, you can see that Seed 1 won against Seed 2, lost against Seed 3, has not yet played Seed 4, and so on.

![round robin diagram](/img/format-guides/format-RoundRobin.png)

Often times (and especially for larger Round Robins) you may simply see a list of standings in lieu of an actual diagram of the matches (as this is easier to digest on a broadcast, and is sorted to give you the desired info about who is doing the best).

![round robin standings](/img/format-guides/format-RoundRobinStandings.png)

### Groups

Since the length of Round-Robin scales linearly with # of competitors (see below), breaking a large group into smaller groups will save considerable time.
If you have 16 competitors for example, and break them into two groups of eight, then you will have two separate Round-Robins which will each take half as long to complete (7 rounds of play instead of 15 rounds of play).
Time savings of this nature become more pronounced as the # of competitors increases; 128 competitors would take 127 rounds, but *16 groups of 8* still only needs 7 rounds.
An additional note: unlike with single-elim and double-elim, breaking a Round-Robin into groups significantly changes the matchups you will have.
Because now, in this same example, the competitors in one of those groups of 16 will not play *any* of the other 112 competitors.
To make sure everyone has a balanced experience across every group, you will need good seeding.

### Double Round Robin

Double Round Robin is a common variant of Round Robin.
As the name implies, it is simply a repeated Round Robin.
Every competitor plays every other competitor once, and then it's done again.
More commonly seen in long-term 'league' projects rather than in one-day/one-week tournaments.

## By the Numbers

| Category              |      Value <br />(*n* is # of competitors)                |   Example / Notes |
| -------------         | :-----------:             | ----- |
| # of Matches Played   | *n! / [2! × (n-2)!]* <br /> (# of combinations)       | 8 competitors = 28 matches played <br />17 competitors = 136 matches played |
| # of Necessary Consecutive Rounds | *n-1* (if *n* is even) <br />*n* (if *n* is odd)          | 8 competitors = 7 rounds required <br /> 17 competitors = 17 rounds required |
| Distinct Placements   |   All placements <br /> (1st - *n*<sup>th</sup>)       |   |
| Possible progressions | 1 to *n*  |

## Notes for Different Roles

### Competitors & Competitive Ops

#### Competitor Experience

* Competitors get to play all the other competitors in the Round-Robin (or their Round-Robin group, if applicable)
  * Plenty of guaranteed matches
  * No competitor gets a better/worse set of matches compared to anyone else in the group
* All matches are predetermined, so you should be able to provide a schedule of each round to competitors in advance. Communicate when they should expect to have this!
* Multi-stage tournaments often use round-robin as a lead-in to a playoff. Some competitors may end up out of playoff contention (or they could *clinch* a spot in playoffs, too) before they have finished all of their matches.
  * This can, sometimes, lead to sandbagging (competitors not trying their hardest) in their final round-robin matches
  * In the worst case, competitors could participate in matchfixing/collusion around such a situation. Make sure your ruleset covers this!
* Competitors may have questions about tiebreak scenarios heading into the later matches. Be prepared to answer & clarify these!

#### Seeding

* A singular Round-Robin does not require seeding
* Round-Robin *groups* require seeding because otherwise you can end up with imbalanced groups
* With the abundance of matchups being played, you can use Round-Robin to acquire 'accurate' seeding for a multi-stage tournament (e.g. round-robin into double-elim)

#### Scheduling & Logistics

* Round-Robin supports ties! Unlike elimination formats, competitors can play a match and have a tied outcome without breaking the format.
* Round-Robin has a significantly larger # of rounds of play per number of competitors compared to elimination brackets or Swiss
  * If you do not have adequate setups to run all available matches at once, then runtime will be longer
  * Again, you can break Round-Robin into smaller groups to save runtime
* Tiebreakers can take some time to calculate if it isn't natively handled in the tournament software/tooling you're using. Keep this in mind and be sure to communicate timeline expectations to competitors & broadcast in advance.

### Broadcast

#### Storylines & Information Flow

* If you have multiple round-robin groups, then each group is its own self-contained story
  * Who is expected to advance out of the group? Who is expected to be eliminated?
* If a competitor is already eliminated from contention for the next stage in a multi-stage tournament, then their late round-robin matches may not be suitable for broadcast
  * No one wants to see competitors sandbagging/not trying their hardest. Unless they do!
* Look for developing stories in the standings for each round.
  * Who is vying for 1st place, or is on the cutoff for advancing out of the round-robin stage? Watch *their* matches.
* Tiebreakers may take some time to sort out. Consider how you will communicate scenarios and tiebreakers to an audience, and work with Comp Ops for how & when they will be determined
  * It is worth considering creating visual assets to explain tiebreakers (to reduce burden on talent having to verbally explain them)

#### Scheduling

* You can schedule every broadcasted match in advance, because 100% of round-robin matchups will be known
