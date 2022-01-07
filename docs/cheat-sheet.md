---
id: cheat-sheet
title: Cheat Sheet
sidebar_label: Cheat Sheet
---

Important numbers for each format, in one place!

## Single-Elimination

Pros:

* fastest format in the West
* high-stakes every match

Potential Drawbacks:

* half of your competitors are done after one match
* if your seeding isn't great, then top competitors knock each other out VERY quickly

| Category              |      Value <br />(*n* is # of competitors)                |   Example / Notes |
| -------------         | :-----------:             | ----- |
| # of Matches Played   | *n - 1*                   | 16 competitors = 15 matches played <br />17 competitors = 16 matches played |
| # of Necessary Rounds    |   log₂(*n*) rounded up               | 16 competitors = 4 rounds required <br /> 17 competitors = 5 rounds required |
| Distinct Placements   |   1st & 2nd, 3rd* & 4th, 4x T-5th,<br />8x T-9th, 16x T-17th, etc.       |   |
| Possible progressions | 1, 2, 3*, 4, 8, 16, etc.   |

**Only when a third place match is played.*

## Double-Elimination

Strengths:

* competitors are guaranteed 100% more matches than in single-elimination!
* stakes are still clear each match, and the "losers run" storylines exist

Potential Drawbacks:

* deceptively lengthy, and lower bracket can lag behind if you aren't careful
* half of your competitors are done after *two* matches
* if your seeding isn't great, then top competitors can still knock each other out VERY quickly

| Category              |      Value <br />(*n* is # of competitors)                |   Example / Notes |
| -------------         | :-----------:             | ----- |
| # of Matches Played*   | *2n - 2* or *2n -1*       | 16 competitors = 30 or 31 matches played <br />17 competitors = 32 or 33 matches played |
| # of Necessary Rounds* | *Floor[log₂(n-1)] + Ceiling[log₂(2n/3)] + 1* <br />[[1](#citations)] (or see below table!)          | 16 competitors = 8-9 required <br /> 17 competitors = 9-10 rounds required |
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
