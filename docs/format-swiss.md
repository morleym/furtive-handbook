---
id: format-swiss
title: Swiss System
sidebar_label: Swiss System
---

Common aliases: Swiss, Swiss-Style.

Swiss provides a compromise between Round-Robin and runtime.
The traditional form of it is 'non-eliminating' (competitors continue to play matches regardless of winning/losing) while its runtime scales logarithmically as a bracket does.

A quick word of warning: Swiss and its variants are complex, so this doc is going to be a little meatier than the others.
I may also simplify things where they are more complex in practice (Chess communities have *far* more complex Swiss rules than what I am going to cover here).

## How it Works

Competitors are paired up for a first round of matches.
If there is an odd number of competitors, then one competitor will have a bye each round.
After the first round of matches is completed, competitors are paired up for the second round based on their current match records: 1-0 competitors are paired with 1-0 competitors, and 0-1 competitors are paired with 0-1 competitors.
We'll get more into the specifics about pairings later.

Assuming you are trying to determine a 1st place, this process will be repeated until one competitor holds a higher record than all other competitors.

![swiss diagram](/img/format-guides/format-Swiss-RecordsChart.png)

For example (as pictured above), with 16 competitors you'll have the following records:

* After round 1: 8 at *1-0*, 8 at *0-1*
* After round 2: 4 at *2-0*, 8 at *1-1*, 4 at *0-2*
* After round 3: 2 at *3-0*, 6 at *2-1*, 6 at *1-2*, 2 at *0-3*
* After round 4: **1 at *4-0***, 4 at *3-1*, 6 at *2-2*, 4 at *1-3*, 1 at *0-4*

Now you've determined a 1st place, and the Swiss competition would be over.

### Advancing/Eliminating from Swiss

Typically, Swiss is used as an initial stage to whittle a larger group down to a smaller group for an elimination bracket final.
This is accomplished by either:

* Playing out a full number of rounds with all competitors, and then advancing a certain number from the top of the leaderboard afterwards. Commonly called "the top cut" advancing.

*or*

* Setting a threshold record for advancement/elimination (e.g. "win 3 matches and advance, lose 3 matches and be eliminated").
  When this is done, competitors *stop playing* when their record reaches the advancement/elimination threshold.
  * This is only recommended if the number of competitors is a power of 2 (like 8, 16, 32, etc.)
  * This effectively makes Swiss into an 'eliminating' format

The former is used in larger fields of open competition, where numbers of competitors are unpredictable.
The latter is generally used for invitational events where the number of competitors is controlled.

### Tiebreakers

If you're advancing/eliminating based on a record threshold, then you don't need to worry about tiebreakers!
Otherwise, Swiss competitions usually have a points system where you are awarded different points for winning, losing, or tying a match (or having a bye).
Sort standings based on those, and then use tiebreakers as needed.

Swiss has a unique tiebreaker concept called 'Strength of Schedule,' which is a measurement of how strong a competitor's opponents were.
The simplest way to measure this is Opponent Match Win % (OMW), which measures the % of all matches that a competitor's opponents won through the entire Swiss competition.
Higher is better, here, because it would indicate that one played tougher opponents.
So if two competitors are tied, but one of them has an OMW of 55% while the other has an OMW of 50%, then the one with 55% wins that particular tiebreaker.

Game Win % and OMW are two of the most common Swiss tiebreakers used.
Less commonly, events may use head-to-head or OGW (Opponent Game Win %) as additional tiebreakers.

### Pairings

To keep *this* page shorter, I stuffed detailed pairing info [into a separate page](swiss-pairings).

Long story short, I recommend that you either:

* Go with what your tournament software does (*and find out what that is*)

or

* If you're advancing by final standings with tiebreakers focused on *game win%* first, then a safe choice is pairing randomly across the top & bottom halves of each Score Group by Pairing Number <br />
![random within top & half pairings](/img/format-guides/format-swiss-pairings-random.png)
* If you're advancing by final standings with tiebreakers focused on *Strength of Schedule* first, then a safe choice is pairing straight across the top/bottom halves of the score group (so highest in top half vs highest in bottom half, all the way down to lowest in top half vs lowest in bottom half) <br /> ![strength of schedule pairings](/img/format-guides/format-swiss-pairings-sos.png)
* If you're advancing by a record threshold, then a safe choice is pairing the highest Pairing Numbers vs the lowest Pairing Numbers in each score group (like in elimination brackets) ![pairing like elim bracket](/img/format-guides/format-swiss-pairings.png)

## By the Numbers

As a reminder, the below values assume you are playing to completion (to determine a 1st place)!

| Category              |      Value <br />(*n* is # of competitors)                |   Example / Notes |
| -------------         | :-----------:             | ----- |
| # of Matches Played*   | ceiling[ log₂(*n*) ] \* floor[ *n*  / 2 ]                   | 16 competitors = 32 matches played <br />17 competitors = 40 matches played |
| # of Necessary Rounds*    |   log₂(*n*)               | 16 competitors = 4 rounds required <br /> 17 competitors = 5 rounds required |
| Distinct Placements   |   All placements <br /> (1st - *n*<sup>th</sup>)       |
| Possible progressions | 1 to *n*  |

*The edge cases for non-square numbers of competitors are pretty messy and vary by community, so this is a very rough look at numbers

## Notes for Different Roles

### Competitors & Competitive Ops

#### Competitor Experience

* Swiss guarantees plenty of matches
* Make sure the rules of *your* Swiss competition are clearly communicated in advance
  * Everyone should know what it means to advance/win. Is it making a certain cutoff in the standings? Is it reaching a certain record threshold?
  * Everyone should also know how pairings work, and tiebreakers (if applicable)
  * Consider setting aside time for Q&A beforehand
  * Ensure that competitors are kept updated about when the next round's matches will be available

#### Seeding

* Swiss does not *strictly* require seeding, but it plays an important role (so make sure you seed as well as possible)
  * Good seeding creates useful pairing numbers, which will impact pairings each round
  * Good seeding has its largest impact in round 1 pairings

#### Scheduling & Logistics

* Swiss supports ties, which means it supports esports titles that have ties (like FIFA)
  * Do not use the record-threshold version of Swiss if you are working with ties
* Swiss, like Round-Robin, will take much longer if you do not have adequate setups to play all available matches at once
* Swiss matchups cannot be determined in advance, so you need to have quick turnaround from round to round (informing everyone of the next round's matches) to prevent delays
  * This communication needs to go both to competitors and to Broadcast when applicable
* Be on top of getting matches started! A single delayed match can hold up the entire upcoming round because you generally need the current round's matches to be completed in order to generate the pairings for the next round.
* Swiss can have meaningless matches in later rounds, so be wary of potential sandbagging or people dropping out between rounds!
  * The record-threshold variant avoids this problem (but remember that it guarantees fewer matches and that it only works well when your # of competitors is a power of 2)
  * Familiarize yourself with your bracketing software's tools for handling drop-outs! If you don't catch a drop-out before they're paired against someone, plan to handle that with 'bye' points.
* Using bracketing software to generate pairings for each round is much faster than by hand. However, make sure you know *how* the software is generating pairings beforehand, and that it matches your expectations.

### Broadcast

#### Storylines & Information Flow

* Because Swiss can mean many things, make sure that you and Comp Ops are aligned on the format and win/advancement conditions
* Swiss is usually used as an initial stage for an event, followed by some form of elimination bracket
  * Consequently, the story of Swiss normally revolves around the Swiss standings/the records each competitor holds, and for any cutoff in the standings/records that competitors must make
* You will not know matchups beyond the current round! Coordinate with Comp Ops for the expected cadence of learning:
  * The standings as of the current round
  * The next round's matchups
* For broadcast, it's usually much more clear-cut to use a record-based threshold for advancement/elimination
  * Makes the stakes of each match clear for talent and audience
* Coordinate with Comp Ops to know when to expect final standings & tiebreakers to be sorted out

#### Scheduling

* Coordinate with Comp Ops to know the expected number of rounds played
* Consider the possible downtime between matches (e.g. if you broadcast a sweep, and a different match goes longer in the round, then the next round will take some time to start)
  * One way to address this is being ready to hop into another, in-progress match if your first one ends quickly
