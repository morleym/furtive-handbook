---
id: format-double-elim
title: Double-Elimination Bracket
sidebar_label: Double-Elim Bracket
---

Double Elimination, Double-Elimination, Double-Elim, DE.
The *chocolate chip* ice cream of brackets.
It's still fairly simple, and still pairs well with other ~~desserts~~ formats,
 but it has an added layer of complexity.

## How it Works

Competitors are seeded into an initial round of matches.
Win, and you advance to the next round in the 'winners bracket' (also known as 'upper bracket').
Lose once, and you are sent to 'losers bracket' (also known as 'lower bracket').
Lose a second time (in losers bracket), and you are eliminated.
This continues until only one competitor remains in winners bracket
 and one competitor remains in losers bracket.
Then, those two competitors face each other in a grand final.

Rounds are typically named in each 'side' of bracket as "Winners/Losers Round of X" (e.g. Winners Round of 64, Losers Round of 32, etc.) to indicate how many competitors
 remain.
Once you have are in the last three rounds of a bracket, those rounds are then named "Winners/Losers Quarterfinal", "Winners/Losers Semifinal", and "Winners/Losers Final".

After all matches are completed, a set of standings is produced (where competitors are placed based on where they were eliminated).

![double elim bracket image](https://imgur.com/9E3KGEH.png)

### Grand Finals

There are conflicting schools of thought on how exactly 'grand finals' (where the winners of Winners Bracket and Losers Bracket meet) should work, and we need to cover that briefly.
Some believe that the competitor who entered grand finals via winners bracket should have an advantage, either in the form of a bracket reset (where the team from losers match must win TWO matches, while the team from winners need only win ONE match), or a game advantage in a single match
 (like a 1-0 head start in a Best-of-5 match).
Others believe that there should be no advantage for the team from winners side.

Personally, I'm of the opinion that a double-elimination bracket is incomplete if it ends when two competitors have only lost once.
**But**, I understand that some esports have established a standard of no-advantage grand finals due to match length (e.g. [Overwatch League](https://www.ggrecon.com/articles/were-the-vancouver-titans-done-dirty)).
Do what's right for your project, but be conscious of the debate and consider the alternatives (like single-elim).

## By the Numbers

| Category              |      Value <br />(*n* is # of competitors)                |   Example / Notes |
| -------------         | :-----------:             | ----- |
| # of Matches Played*   | *2n - 2* or *2n -1*       | 16 competitors = 30 or 31 matches played <br />17 competitors = 32 or 33 matches played |
| # of Necessary Rounds* | *Floor[log₂(n-1)] + Ceiling[log₂(2n/3)] + 1* <br />[[1](#citations)] (or see below table!)          | 16 competitors = 8-9 required <br /> 17 competitors = 9-10 rounds required |
| Distinct Placements   |   1st, 2nd, 3rd, 4th, 2x T-5th,<br />2x T-7th, 4x T-9th, 4x T-13th, etc.       |   |
| Possible progressions | 1, 2, 3, 4, 6, 8, 12, 16, etc.   |

**Depends whether a 'bracket reset' occurs.*

| # of Competitors  | Total Rounds Required**|
| :-------:         |   :-------:           |
| 4                 | 4-5                   |
| 5-6               | 6-7*                     |
| 7-8               | 6-7                     |
| 9-12              | 7-8                     |
| 13-16             | 8-9                     |
| 17-24             | 9-10                     |
| 25-32             | 10-11                    |
| 33-48             | 11-12                    |
| 49-64             | 12-13                    |
| 65-96             | 13-14                    |
| 97-128            | 14-15                    |

**just trust me on this one*

***Total rounds assumes:*

* *all matches are the same length*
* *all matches are played as soon as they are available (e.g. none held for broadcast)*
* *there are adequate setups to play all necessary matches simultaneously*
* *perfect world, no delays in earlier rounds*

## Considerations

### Competitors & Competitive Ops

* Competitors are guaranteed two matches
  * A quarter of all competitors will only play one match
* Double-elimination can be deceptively lengthy.
  * Refer to the table for total length!
  * Delays in *either* side of bracket (especially losers side) will hold up the entire bracket
* Double-elimination relies on good seeding
  * If there are significant unknowns or 'mistakes' in seeding, then competitors may be sent to losers earlier than intended, or eliminated entirely,
    by similarly-skilled opponents
* Competitors can chart out their course through both sides of bracket (to prepare for predicted matchups)
* Especially for broadcasted double-elim brackets, be conscious of downtime for competitors
  * Classic example is the winner of winners final waiting for *hours* to play grand finals
* Conversely, be conscious of competitors burning out if playing too many matches back-to-back
  * Usually, a competitor may need to play Losers Semifinal, Losers Final, And Grand Finals consecutively
  * This can be addressed with quick breaks
* Double-elimination requires [complex algorithms](https://blog.smash.gg/changes-in-the-world-of-brackets-695ecb777a4c) to avoid early rematches in losers side of bracket.
* Brackets can visually scale quickly- consider breaking your bracket into 'groups' or 'pools' for larger sizes (e.g. [1,365 competitors](https://smash.gg/tournament/genesis-5/event/melee-singles/brackets))
* Utilize bracket software!
  * It may be tempting to draw your own double-elim bracket for a smaller event, but at *least* check it against one generated by bracket software

### Broadcast

* Flexible length of day. You can pick one match per round to broadcast, or you can 'hold up' matches to broadcast multiple/all per round
* It's easy to chart out the 'predicted' matchups throughout the day
  * Higher seeds will generally beat lower seeds. You can follow top seeds as a default story
  * Disruptions to this, aka 'upsets', are good stories themselves
* Every match is impactful
  * The winner moves on
  * The loser either goes to losers bracket, or goes home
* The "Losers Run"
  * A timeless tale where a competitor drops into losers side, and strings together wins
* Rematches can happen!
  * The classic is a competitor being sent to losers, getting to grands, and rematching the competitor who beat them
  * Competitors may also meet in winners bracket, and then meet again later in losers bracket 
* Bracket reset introduces a variance into runtime
  * Grand finals might be one match, or it might be two matches
* Grand Finals can make or break excitement
  * At its best, a grand finals can be an instant classic
  * At its worst, a lopsided/boring grand finals can be twice the slog of a single-elim finals

## Citations

1. [Moore, J. (2021, February 25). *The Math Behind SPR and UF*.](https://www.pgstats.com/articles/spr-uf-extra-mathematical-details)
