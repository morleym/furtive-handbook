---
id: format-swiss
title: Swiss
sidebar_label: Swiss
---

Common Aliases: Swiss, Swiss-Style, Swiss System.

Swiss provides a compromise between Round-Robin and runtime.
It is 'non-eliminating' (competitors continue to play matches regardless of winning/losing) but scales logarithmically.

## How it Works

Competitors are paired up for a first round of matches.
If there is an odd number of competitors, then one competitor will have a bye each round.
After the first round of matches is completed, competitors are paired up for the second round based on their records: 1-0 competitors are paired with 1-0 competitors, and 0-1 competitors are paired with 0-1 competitors.
We'll get more into the specifics about pairings later.

Assuming you are trying to determine a 1st place, this process will be repeated until one competitor holds a higher record than all other competitors.

For example, with 16 competitors you'll have the following records:

* After round 1: 8 at *1-0*, 8 at *0-1*
* After round 2: 4 at *2-0*, 8 at *1-1*, 4 at *0-2*
* After round 3: 2 at *3-0*, 6 at *2-1*, 6 at *1-2*, 2 at *0-3*
* After round 4: **1 at *4-0***, 4 at *3-1*, 6 at *2-2*, 4 at *1-3*, 1 at *0-4*

Now you've determined a 1st place, and the Swiss competition would be over.

### Advancing/Eliminating from Swiss

Typically, Swiss is used as an initial stage to whittle a larger group down to a smaller group for an elimination bracket final.
This is accomplished by either:

* Playing out a full number of rounds with all competitors, and then advancing a certain number from the top of the leaderboard afterwards. This is usually called "the top cut" advancing.

*or*

* Setting a threshold record for advancement/elimination (e.g. "win 3 matches and advance, lose 3 matches and be eliminated")
  * This gets messy if you don't have a 'square' number of competitors (8, 16, 32, etc.)

The former is usually used in larger fields of open competition, where numbers of competitors are unpredictable.
The latter is more commonly used in invitational events where the number of competitors is controlled.

### Tiebreakers

If you're advancing/eliminating based on a threshold, then you don't need to worry about tiebreakers!
Otherwise, Swiss competitions usually have a points system where you are awarded different points for winning, losing, or tying a match (or having a bye).
Sort standings based on those, and then use tiebreakers as needed

Swiss has a unique tiebreaker available called 'Strength of Schedule' which is a measurement of how strong a competitor's opponents were.
The simplest way to measure this is Opponent Match Win % (OMW): the overall match win-loss % of the opponents a competitor played.
So if two competitors are tied, but one of them has an OMW of 55% while the other has an OMW of 50%, then the one with 55% wins the tie.

Game Win % and OMW are two of the most common Swiss tiebreakers used.
Less commonly, events may use head-to-head or OGW (Opponent Game Win %) as additional tiebreakers.

### Pairings

To keep *this* page shorter, I stuffed detailed pairing info [in a separate page](swiss-pairings).

Long story short, I recommend that you either:

* Go with what your tournament software does

or

* If you're advancing by final standings, then a safe choice is pairing randomly across the top & bottom halves of each Score Group by Pairing Number (seeding) <br />
![haha.. please help jordan](/img/godhelpme3.jpg)
* If you're advancing by a record threshold, then your safest choice is pairing highest Pairing Numbers vs lowest Pairing Numbers in each score group (like in elimination brackets) <br /> ![haha.. please help jordan!!](/img/godhelpme2.jpg)

## By the Numbers

As always, a reminder that the below values assume you are playing to completion (to determine a 1st place)!

| Category              |      Value <br />(*n* is # of competitors)                |   Example / Notes |
| -------------         | :-----------:             | ----- |
| # of Matches Played   | ceiling[ log₂(*n*) ] \* floor[ *n*  / 2 ]                   | 16 competitors = 32 matches played <br />17 competitors = 40 matches played |
| # of Necessary Rounds    |   log₂(*n*)               | 16 competitors = 4 rounds required <br /> 17 competitors = 5 rounds required |
| Distinct Placements   |   All placements <br /> (1st - *n*<sup>th</sup>)       |
| Possible progressions | 1 to *n*  |

## Notes for Different Roles

### Competitors & Competitive Ops

#### Competitor Experience

* Swiss guarantees plenty of matches
* Make sure the rules of *your* Swiss competition are clearly communicated in advance
  * Everyone should know what it means to advance/win. Is it reaching a certain point in standings? Is it getting a certain record threshold?
  * Consider setting aside time for Q&A beforehand

#### Seeding

* Swiss does not rely *heavily* on good seeding
  * Good seeding has its largest impact in round 1
  * Good seeding creates useful pairing numbers

#### Scheduling & Logistics

* Swiss supports ties! Because Swiss can be used as a non-eliminating format, and ties on the standings can be broken by various means, individual matches/games can have tied results
* Swiss, like Round-Robin, requires adequate setups to play all matches at once (otherwise it will have a significantly long runtime)
* Swiss matchups cannot be determined in advance, so you need to have quick turnaround from round to round (in informing everyone of the next round's matches) to prevent delays
* Be on top of getting matches started! A single delayed match will hold up the entire upcoming round.
* Swiss can have meaningless matches in later rounds, so be wary of potential sandbagging. Using a record-based cutoff for advancement/elimination will usually prevent this (but will reduce number of guaranteed matches for competitors)
* Using bracketing software to generate pairings for each round is much faster than by hand. However, make sure you know *how* the software is generating pairings beforehand, and that it matches your expectations.

### Broadcast

#### Storylines & Information Flow

* Swiss is usually used as an initial stage for an event, followed by some form of elimination bracket
  * Consequently, the story of Swiss normally revolves around the records each competitor holds, and for any cutoff in the standings/records that competitors must make
* You will not know matchups beyond the current round! Coordinate with Comp Ops for the expected cadence of learning the standings as of the current round, and the next round's matchups
* For broadcast, it's usually much more clear-cut to use a record-based threshold for advancement/elimination
  * Makes the stakes of each match clear for talent and audience
* If you're using a fully-played-out Swiss stage, then coordinate with Comp Ops to know when to expect final standings to be sorted out

#### Scheduling

* Coordinate with Comp Ops to know the expected number of rounds played
* Consider the possible downtime between matches (if you broadcast a sweep, but any matches go longer in the round, then the next round will take a while to start)
  * One way to address this is being ready to hop into another, in-progress match if your first one ends quickly
