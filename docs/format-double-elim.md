---
id: format-double-elim
title: Double-Elimination Bracket
sidebar_label: Double-Elim Bracket
---

Double Elimination, Double-Elimination, Double-Elim, DE.
The *chocolate chip* ice cream of brackets.
It's still fairly simple and pairs well with other formats,
 but it has an added layer of complexity.

## How it Works

:::important

Need a visual aid showing some winners + losers matches in an initial state, and then after a couple matches have finished (showing someone advance in winners, and someone drop to losers, aaand someone being eliminated in losers)

:::

Competitors are seeded into an initial round of matches.
Win, and you advance to the next round in the 'winners bracket' (also known as 'upper bracket').
Lose once, and you are sent to 'losers bracket' (also known as 'lower bracket').
Lose a second time, and you are eliminated.
This continues until only one competitor remains in winners bracket
 and one competitor remains in losers bracket.
Then, those two competitors face each other in a grand final.

Rounds are typically named in each 'side' of bracket as "Winners/Losers Round X" (e.g. Winners Round 1, Losers Round 3, etc.).
Once you are in the last three rounds of either side bracket, those rounds are then named "Winners/Losers Quarterfinal", "Winners/Losers Semifinal", and "Winners/Losers Final".

After all matches are completed, a set of standings is produced where competitors are placed based on where they were eliminated.

:::important

Need a visual for the standings produced by double-elim (just placements)

:::

![double elim bracket image](https://imgur.com/9E3KGEH.png)

### Grand Final

:::important

Need a visual showing the winners final, losers final, grand final, and bracket reset (with indication of winners/losers side team and both teams in reset marked as losers)

:::

There are conflicting schools of thought on how exactly the 'grand final' (where the winners of Winners Bracket and Losers Bracket meet) should work.
Some believe that the competitor who entered grand final via winners bracket should have an advantage, either in the form of a bracket reset (where the team from losers match must win TWO matches, while the team from winners need only win ONE match), or a game advantage in a single match
 (like a 1-0 head start in a Best-of-5 match).
Others believe that there should be no advantage for the team from winners side.

Personally, I'm of the opinion that a double-elimination bracket is incomplete if it ends when two competitors have only lost once.
From that purist point of view, a grand final *must* have a bracket reset.
**But**, I understand that some esports have established a standard of no-advantage grand finals due to impractical match lengths (e.g. [Overwatch League](https://www.ggrecon.com/articles/were-the-vancouver-titans-done-dirty)).
Do what's right for your project, but be conscious of this debate and consider alternatives like single-elim in those cases.

### Pools

As the number of competitors scales up, entirely-double-elimination competitions are usually represented not as a singular behemoth bracket, but as [Groups](/docs/concepts#groups--pools) (commonly called 'pools') feeding into a final bracket (or, sometimes, *another* stage of double-elimination groups).
For example, if you have 128 competitors, then you can represent that as 8 pools of 16 competitors each.
Then, you would take a number from each pool (let's say top 2) and advance those competitors to the next 'stage'.
Anyone who advances from losers side will remain in losers side in the next stage, and anyone who advances from winners will remain in winners.
This could be two stages total, three stages total, or even more.
In the end, however, it is still just one double-elimination bracket.

In this diagram, you can visualize how the top teams from each group advance to the next stage.

![pools into bracket diagram](/img/format-guides/concepts-PoolsToBracket.png)

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
* *all matches are played as soon as they are available (e.g. none held for broadcast, and start any Winners Round 1 and Winners Round 2 matches together if applicable)*
* *there are adequate setups to play all necessary matches simultaneously*
* *perfect world, no delays*

## Notes for Different Roles

### Competitors & Competitive Ops

#### Competitor Experience

* Competitors are guaranteed two matches
  * Half of all competitors will only play two matches
  * Another quarter of all competitors will only play three matches
* Competitors can chart out their course through both sides of bracket (to prepare for predicted matchups)
* Especially for broadcasted double-elim brackets, be conscious of downtime for competitors
  * Classic example is the winner of winners final waiting for *hours* to play grand finals
* Conversely, be conscious of competitors burning out if playing too many matches back-to-back
  * A competitor may need to play Losers Semifinal, Losers Final, And Grand Finals consecutively
  * This can be addressed with quick breaks between those matches

#### Seeding

* Double-elimination relies on good seeding
  * If there are significant unknowns or 'mistakes' in seeding, then competitors may be sent to losers earlier than intended, or eliminated entirely,
    by similarly-skilled opponents

#### Scheduling & Logistics

* Double-elimination can be deceptively lengthy.
  * Refer to the table for total length!
  * Delays in *either* side of bracket (especially losers side) will hold up the overall bracket
* **Utilize bracket software!**
  * Double-elimination requires [complex algorithms](https://blog.smash.gg/changes-in-the-world-of-brackets-695ecb777a4c) to avoid early rematches in losers side of bracket.
  * Brackets can visually scale quickly- software makes it easy to break your bracket into pools for larger sizes (e.g. [1,365 competitors broken into 64 pools](https://smash.gg/tournament/genesis-5/event/melee-singles/brackets))
  * It may be tempting to draw your own double-elim bracket for a smaller event, but at *least* check it against one generated by bracket software. No one wants to be 'that person' who drew up a bracket with a double jeopardy (early rematch) in a high-profile event.

### Broadcast

#### Storylines & Information Flow

* It's easy to chart out the 'predicted' matchups throughout the day
  * Higher seeds will generally beat lower seeds. You can follow top seeds as a default story
  * Disruptions to this, aka 'upsets', are good stories themselves
* Every match is impactful
  * The winner moves on
  * The loser either goes to losers bracket, or goes home
* The "Losers Run"
  * Double-Elimination features a potential story where a competitor drops into losers side, and strings together wins
* Rematches can happen!
  * A story where a competitor is sent to losers, gets to grands, and rematches the competitor who beat them
  * Competitors may also meet in winners bracket, and then rematch later on in losers bracket
* Grand Finals can make or break excitement
  * At its best, a grand finals can be an instant classic
  * At its worst, a lopsided/boring grand finals can be twice the slog of a single-elim finals

#### Scheduling

* Flexible length of day. You can pick one match per round to broadcast, or you can 'hold up' matches to broadcast multiple/all per round
* Bracket reset introduces a variance into runtime
  * Grand finals might be one match, or it might be two matches

## Citations

1. [Moore, J. (2021, February 25). *The Math Behind SPR and UF*.](https://www.pgstats.com/articles/spr-uf-extra-mathematical-details)
