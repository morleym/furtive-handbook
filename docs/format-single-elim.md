---
id: format-single-elim
title: Single-Elimination Bracket
sidebar_label: Single-Elim Bracket
---

Common aliases: Single Elimination, Single-Elimination, Single-Elim, SE.

The *vanilla ice cream* of competition formats.
It's simple, and it's a timeless format for 'playoffs' or 'championships' events.

## How it Works

Competitors are seeded into a round of matches.
Win, and you advance to the next round.
Lose, and you are eliminated.
This continues until only one competitor remains.
These rounds are typically named "Round of X" (e.g. Round of 64, Round of 32) to indicate how many competitors
 remain, or otherwise are referred to as "Round 1," "Round 2," etc.
Once you have 8 remaining competitors, rounds are then named "Quarterfinal" (8), "Semifinal" (4), and "Final" (2).
Optionally, you can add a 'third place match' where the losers of the semifinal matches play for third place.

After all matches are completed, a set of standings is produced where competitors are placed based on where they were eliminated.

![single elim bracket image](https://i.imgur.com/wJcEF9d.png)

## By the Numbers

| Category              |      Value <br />(*n* is # of competitors)                |   Example / Notes |
| -------------         | :-----------:             | ----- |
| # of Matches Played   | *n - 1*                   | 16 competitors = 15 matches played <br />17 competitors = 16 matches played |
| # of Necessary Rounds    |   log₂(*n*)               | 16 competitors = 4 rounds required <br /> 17 competitors = 5 rounds required |
| Distinct Placements   |   1st & 2nd, 3rd* & 4th, 4x T-5th,<br />8x T-9th, 16x T-17th, etc.       |   |
| Possible progressions | 1, 2, 3*, 4, 8, 16, etc.   |

**Only when a third place match is played.*

## Considerations

### Competitors & Competitive Ops

#### Competitor Experience

* Competitors are only guaranteed one match (lowest of all format types)
  * Half of all competitors will only get to play one match
* Competitors can chart out their course through bracket (to prepare for predicted matchups)

#### Seeding

* Single-elimination depends on excellent seeding
  * If there are significant unknowns or 'mistakes' in seeding, then competitors may be eliminated earlier than intended by similarly-skilled opponents

#### Scheduling & Logistics

* Single-Elim is efficient and fast
* Single-Elim brackets are easy to generate
  * At scale, use tournament software!

### Broadcast

#### Storylines & Information Flow

* Due to deterministic nature of bracket, it's easy to chart out the 'predicted' matchups throughout the day
  * Higher seeds will generally beat lower seeds. You can follow top seeds as a default story
  * Disruptions to this, aka 'upsets', are good stories themselves
* Matches start with large predicted skill gaps, and close with small predicted skill gaps
* Every match is impactful
  * The winner moves on, and the loser goes home
* There is a risk of key competitors going home 'early'

#### Scheduling

* Flexible length of day. You can pick one match per round to broadcast, or you can 'hold up' matches to broadcast multiple/all per round
