---
id: format-double-elim
title: Double-Elimination Bracket
sidebar_label: Double-Elim Bracket
---

Common aliases: Double Elimination, Double-Elimination, Double-Elim, DE.

## Ultra-Quick Look

The *chocolate chip* ice cream of brackets.
It's still fairly simple and pairs well with other formats,
 but it has an added layer of complexity and flavor.

Strengths:

* competitors are guaranteed 100% more matches than in single-elimination! (two instead of one, don't get *too* excited)
* stakes are still clear each match, and the "losers run" storylines exist

Potential Drawbacks:

* deceptively lengthy, and lower bracket can lag behind if you aren't careful
* half of your competitors are done after *two* matches
* if your seeding isn't great, then top competitors can still knock each other out VERY quickly

## How it Works

Competitors are seeded into an initial round of matches.
Win, and you advance to the next round in the 'upper bracket' (also known as 'winners bracket').
Lose once, and you are sent to 'lower bracket' (also known as 'losers bracket').
Lose a second time, and you are eliminated.
This continues until only one competitor remains in upper bracket
 and one competitor remains in lower bracket.
Then, those two competitors face each other in a grand final.
(We'll use both upper/lower and winners/losers in the diagrams here so that you can get a feel for it)

Rounds are typically named in each 'side' of bracket as "Upper/Lower Round X" (e.g. Upper Round 1, Lower Round 3, etc.).
Once you are in the last three rounds of either side of the bracket, those rounds are usually then named "Upper/Lower Quarterfinal", "Upper/Lower Semifinal", and "Upper/Lower Final".

After all matches are completed, a set of standings is produced where competitors are placed based on where they were eliminated.

![double elim bracket image](/img/format-guides/format-double-elimination-bracket.png)

### Grand Final

There are conflicting schools of thought on how exactly the 'grand final' (where the winners of Upper Bracket and Lower Bracket meet) should work.
Some believe that the competitor who entered grand final via upper bracket should have an advantage, either in the form of a bracket reset (where the team from lower finals must win TWO matches, while the team from upper finals need only win ONE match), or a game advantage in a single match
 (like a 1-0 head start in a Best-of-5 match).
Others believe that there should be no advantage for the team from upper side.

![double elim bracket reset image](/img/format-guides/format-double-elimination-reset.png)

Personally, I'm of the opinion that a double-elimination bracket is incomplete if it ends when two competitors have only lost once.
From that purist point of view, a grand final *must* have a bracket reset.
**But**, I understand that some esports have established a standard of no-advantage grand finals due to impractical match lengths (e.g. [Overwatch League](https://www.ggrecon.com/articles/were-the-vancouver-titans-done-dirty)).
Do what's right for your project, but be conscious of this debate and consider alternatives like single-elim in those cases.

### Pools

As the number of competitors scales up, entirely-double-elimination competitions are usually represented not as a singular behemoth bracket, but as [Groups](/docs/concepts#groups--pools) (commonly called 'pools') feeding into a final bracket (or, sometimes, *another* stage of double-elimination groups).
This is extremely prominent in large FGC/Smash tournaments.
For example, if you have 128 competitors, then you can represent it as 8 pools of 16 competitors each.
Then, you would take a number from each pool (let's say top 2) and advance those competitors to the next 'stage'.
Anyone who advances from lower side will remain in lower side in the next stage, and anyone who advances from upper will remain in upper.
This could be two stages total, three stages total, or even more.
In the case of [Genesis 5](https://smash.gg/tournament/genesis-5/event/melee-singles/overview)—a Super Smash Bros. Melee tournament which had **1,365** competitors—the competition was represented in *four* stages:

![genesis pools](/img/format-guides/genesis-pools.png)

Using groups will change lower-side matchups, but not upper-side matches, when compared to a monolithic bracket.

## By the Numbers

| Category              |      Value <br />(*n* is # of competitors)                |   Example / Notes |
| -------------         | :-----------:             | ----- |
| # of Matches Played*   | *2n - 2* or *2n -1*       | 16 competitors = 30 or 31 matches played <br />17 competitors = 32 or 33 matches played |
| # of Necessary Consecutive Rounds* | *Floor[log₂(n-1)] + Ceiling[log₂(2n/3)] + 1* <br />[[1](#citations)] (or see below table!)          | 16 competitors = 8-9 required <br /> 17 competitors = 9-10 rounds required |
| Distinct Placements   |   1st, 2nd, 3rd, 4th, 2x T-5th,<br />2x T-7th, 4x T-9th, 4x T-13th, etc.       |   |
| Possible progressions | 1, 2, 3, 4, 6, 8, 12, 16, etc.   |

**Variance due to whether or not a 'bracket reset' occurs*

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
* *there are adequate setups to play all necessary matches simultaneously*
* *all matches are played as soon as they are available (e.g. none held for broadcast, and start any Upper Round 1 and Upper Round 2 matches together if applicable)*
* *perfect world, no delays*

## Notes for Different Roles

### Competitors & Competitive Ops

#### Competitor Experience

* Competitors are guaranteed two matches
  * Half of all competitors will only play two matches
  * Another quarter of all competitors will only play three matches
* Once the bracket is provided to them, competitors can chart out their predicted course through bracket (to prepare for matchups)
  * For this reason, you'll want to clearly communicate when the bracket will be available to competitors
* Especially for broadcasted double-elim brackets, be conscious of downtime for competitors
  * Classic example is the winner of upper final waiting for *hours* to play grand finals
  * Usually, excessive downtime occurs because of delays in early lower side rounds.
  I recommend setting an early expectation/precedent for starting all matches in a timely manner
* Conversely, be conscious of competitors burning out if playing too many matches back-to-back
  * Depending on how you schedule matches in the final rounds, a competitor may need to play Lower Semifinal, Lower Final, And Grand Finals consecutively
  * This can be addressed with appropriate breaks between those matches

#### Seeding

* Double-elimination relies on good seeding
  * If there are significant unknowns or 'mistakes' in seeding, then top competitors may be sent to lower bracket earlier than intended, or eliminated entirely,
    by similarly-skilled opponents

#### Scheduling & Logistics

* Double-elimination can be deceptively lengthy.
  * Refer to the table for total length!
  * Delays in *either* side of bracket (especially lower side) can hold up the completion of the overall bracket
* **Utilize bracket software!**
  * Double-elimination requires [complex algorithms](https://blog.smash.gg/changes-in-the-world-of-brackets-695ecb777a4c) to avoid early rematches in lower side of bracket (also known as 'double jeopardy').
  * Brackets can visually scale quickly- software makes it easy to break your bracket into pools for larger sizes (e.g. [the aforementioned 1,365 competitors broken into 64 pools](https://smash.gg/tournament/genesis-5/event/melee-singles/brackets))
  * It may be tempting to draw your own double-elim bracket for a smaller event, but at *least* check it against one generated by bracket software. No one wants to be 'that person' who drew up a bracket with a double jeopardy in a high-profile event.
  * For large, open tournaments, no-shows can have a large impact on schedule. Some tournament software will include automatic check-in/disqualification systems, for this purpose!
* You have options for scheduling the last handful of matches. No matter which way you go, one competitor may need to play several matches consecutively. Utilize breaks! A common pattern is: Upper Final → Lower Semifinal → Lower Final → Grand Final (with an appropriate break between Lower Final and Grand Final)

### Broadcast

#### Storylines & Information Flow

* It's easy to chart out the 'predicted' matchups throughout the day
  * Higher seeds will generally beat lower seeds. You can follow top seeds as a default story
  * Disruptions to the expected outcomes, aka 'upsets', are also good stories to cover
* Every match is impactful
  * The winner moves on
  * The loser either goes to lower bracket, or goes home
* The "Losers Run"
  * Double-Elimination features a potential story where a competitor drops into lower side, and strings together wins. It's an exciting, fight-your-way-back-from-the-pits-of-hell kind of tale.
* Rematches can happen!
  * Competitors can meet in upper bracket and then rematch later on in lower bracket
    * Sometimes, this rematch might even happen in grand finals!
* Grand Finals can make or break excitement
  * At its best, a grand finals can be an instant classic
  * At its worst, a lopsided/boring grand finals can be twice the slog of a single-elim finals

#### Scheduling

* Flexible length of day. You can pick one match per round to broadcast, or you can 'hold up' matches to broadcast multiple/all in a round
* Double-elimination has *options* for 'match order' in the final handful of matches. Work with Comp Ops to determine a suitable order
* Bracket reset introduces a variance into runtime
  * Grand finals might be one match, or it might be two matches

## Citations

1. [Moore, J. (2021, February 25). *The Math Behind SPR and UF*.](https://www.pgstats.com/articles/spr-uf-extra-mathematical-details)
