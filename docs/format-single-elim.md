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
Once you have 8 remaining competitors, rounds are then named "Quarterfinals" (8), "Semifinals" (4), and "Final" (2).
Optionally, you can add a 'third place match' where the losers of each semifinals match play for third place.

After all matches are completed, a set of standings is produced where competitors are placed based on where they were eliminated.

![single elim bracket image](/img/format-guides/format-single-elim-bracket.png)

## By the Numbers

| Category              |      Value <br />(*n* is # of competitors)                |   Example / Notes |
| -------------         | :-----------:             | ----- |
| # of Matches Played   | *n - 1*                   | 16 competitors = 15 matches played <br />17 competitors = 16 matches played |
| # of Necessary Rounds    |   log₂(*n*)               | 16 competitors = 4 rounds required <br /> 17 competitors = 5 rounds required |
| Distinct Placements   |   1st & 2nd, 3rd* & 4th, 4x T-5th,<br />8x T-9th, 16x T-17th, etc.       |   |
| Possible progressions | 1, 2, 3*, 4, 8, 16, etc.   |

**Only when a third place match is played.*

## Notes for Different Roles

### Competitors & Competitive Ops

#### Competitor Experience

* Competitors are only guaranteed one match (lowest of all format types)
  * Half of all competitors will only play one match
  * An additional quarter of all competitors will only play two matches
* Once the bracket is provided to them, competitors can chart out their predicted course through bracket (to prepare for matchups)
  * For this reason, you'll want to clearly communicate when the bracket will be available to competitors

#### Seeding

* Single-elimination depends heavily on excellent seeding
  * If there are significant unknowns or 'mistakes' in seeding, then top competitors may be eliminated earlier than intended by similarly-skilled opponents
* Seeding must be performed, and applied, in order to finalize and share the bracket with competitors and Broadcast

#### Scheduling & Logistics

* Single-Elim is efficient and fast
* Single-Elim brackets are easy to generate
  * At scale, use tournament software
  * At *very* large scale, make sure you're utilizing [Groups](/docs/concepts#groups--pools)

### Broadcast

#### Storylines & Information Flow

* Due to the deterministic nature of brackets, it's easy to chart out the 'predicted' matchups throughout the day
  * Higher seeds will generally beat lower seeds. You can follow top seeds as a default story
  * Disruptions to the expected outcomes, aka 'upsets', are also good stories to cover
* Matches *start* with larger predicted skill gaps, and *end* with smaller predicted skill gaps
  * It is common for broadcasts to skip the early rounds of larger brackets due to a lack of 'good' matches to watch
  * If you want to broadcast early rounds, there are some matchups where the 'middle' seeds play each other. These will be your best bets for close matches
* Every match is impactful, and the stakes are clear
  * The winner moves on, and the loser goes home
* There is a risk of key competitors going home 'early' off-stream if they are upset by a lower seed
  * Broadcasts commonly feed this sort of info to talent for them to inform the audience, if that match was off-stream.
  You could work this in with more flair visually, if desired.

#### Scheduling

* Flexible length of day. You can pick one match per round to broadcast, or you can 'hold' matches to broadcast multiple per round
  * The semifinals are the most common round where a match is held, so that you see the previous matches for *both* competitors who are in the the final match
