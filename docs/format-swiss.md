---
id: format-swiss
title: Swiss-System Tournament
sidebar_label: Swiss
---

Swiss provides a compromise between Round-Robin and runtime.
It is 'non-eliminating' (competitors continue to play matches regardless of winning/losing) but scales logarithmically.

:::note

The complexities of Swiss could be its own documentation site. This is going to focus on the 'common' applications of it in esports.

:::

## How it Works

Competitors are paired up for a first round of matches.
If there is an even number of competitors, then all competitors will play each round.
If there is an odd number of competitors, then one competitor will have a bye each round.
After the first round of matches is completed, competitors are paired up for the second round based on their records (1-0 competitors are paired with 1-0 competitors, and 0-1 competitors are paired with 0-1 competitors).

Assuming you are trying to determine a 1st place, this will continue until one competitor holds a higher record than all other competitors.

E.g. for 8 competitors you'll have the following records after each round:

* Round 1: 4 at *1-0*, 4 at *0-1*
* Round 2: 2 at *2-0*, 4 at *1-1*, 2 at *0-2*
* Round 3: **1 at *3-0***, 3 at *2-1*, 3 at *1-2*, 1 at *0-3*

Now you've determined a 1st place, and the Swiss competition would be over.

### Advancing/Eliminating from Swiss

Typically, Swiss is used as an initial stage to whittle a larger group down to a smaller group for an elimination bracket final.
This is accomplished by either:

* Playing out a full number of rounds with all competitors, and then advancing the "top cut" (e.g. "top 8 competitors on the standings will advance")

*or*

* Setting a threshold record for advancement/elimination (e.g. "win 3 matches and advance, lose 3 matches and be eliminated")
  * Obviously, this is messy if you don't have a 'square' number of competitors (8, 16, 32, etc.)

The former is usually used in larger fields of open competition (to ensure every competitor gets their guaranteed number of matches in).
The latter is more commonly used in invitational fields of competitors in order to keep every match meaningful (and so that it's *immediately clear* when someone advances or is eliminated).

### Tiebreakers

If you're advancing/eliminating based on a threshold, then you don't need to worry about tiebreakers!
Otherwise, Swiss competitions usually *either*:

* Use matches won as an initial sort, and then use tiebreakers as needed

*or*

* Use a 'Swiss points' system where winning/losing matches, or having a bye, awards you a set number of points. Sort standings based on those, and then use tiebreakers as needed

In many cases, these two methods are just semantically different ways to account for byes in Swiss standings (since a 'bye' must award *some* kind of match result or points value).

Swiss has a unique tiebreaker available called 'Strength of Schedule' which is a measurement of how strong a competitor's opponents were.
The simplest way to measure this is Opponent Match Win % (OMW): the overall match win-loss % of the opponents a competitor played.
So if two competitors are tied, but one of them has an OMW of 55% while the other has an OMW of 50%, then the one with 55% wins the tie.

Game Win % and OMW are two of the most common Swiss tiebreakers used.
Less commonly, events may use head-to-head or OGW (Opponent Game Win %) as additional tiebreakers.

### Pairings

*How* competitors are paired each round is a complex topic in Swiss.
In Single-Elim and Double-Elim, matches are wholly deterministic based on seeding.
In Round-Robin, matches are wholly determined by "every competitor plays every other competitor once."
In Swiss, however, there are often multiple 'valid' ways to pair competitors each round.

There are very detailed resources available on the Internet for exploring pairing methods in chess (such as [this one from a chess community](https://utuswiss.co.uk/Resources/Swiss%20Pairing%20Booklet.pdf)) but, as you'll see, they are highly specialized to the workings of a chess ranking system.

The general idea is to avoid rematches, and to keep things 'fair' throughout the competition.
That second notion is dependent on how you are advancing/eliminating competitors, and how standings are determined.

## By the Numbers

As always, a reminder that the below values assume you are playing to completion (to determine a 1st place)!

| Category              |      Value <br />(*n* is # of competitors)                |   Example / Notes |
| -------------         | :-----------:             | ----- |
| # of Matches Played   | ceiling[ log₂(*n*) ] \* floor[ *n*  / 2 ]                   | 16 competitors = 32 matches played <br />17 competitors = 40 matches played |
| # of Necessary Rounds    |   log₂(*n*)               | 16 competitors = 4 rounds required <br /> 17 competitors = 5 rounds required |
| Distinct Placements   |   All placements <br /> (1st - *n*<sup>th</sup>)       |
| Possible progressions | 1 to *n*  |

## Considerations

### Competitors & Competitive Ops

* Swiss supports ties! Because Swiss can be used as a non-eliminating format, and ties on the standings can be broken by various means, individual matches/games can have tied results
* Swiss, like Round-Robin, requires adequate setups to play all matches at once (otherwise it will have a significantly long runtime)
* Swiss matchups cannot be determined in advance, so you need to have quick turnaround from round to round (in informing everyone of the next round's matches) to prevent delays
* Be on top of getting matches started! A single delayed match will hold up the entire upcoming round.
* Swiss can have meaningless matches in later rounds, so be wary of potential sandbagging. Using a record-based cutoff for advancement/elimination will usually prevent this (but will reduce number of guaranteed matches for competitors)
* Using bracketing software to generate pairings for each round is much faster than by hand. However, make sure you know *how* the software is generating pairings beforehand, and that it matches your expectations.

### Broadcast

* Swiss is usually used as an initial stage for an event, followed by some form of elimination bracket
  * Consequently, the story of Swiss normally revolves around the records each competitor holds, and for any cutoff in the standings/records that competitors must make
* You will not know matchups beyond the current round! Coordinate with Comp Ops for the expected cadence of learning the standings as of the current round, and the next round's matchups
* For broadcast, it's usually much more clear-cut to use a record-based threshold for advancement/elimination
  * Makes the stakes of each match clear for talent and audience
* If you're using a fully-played-out Swiss stage, then coordinate with Comp Ops to know when to expect final standings to be sorted out
* Consider the possible downtime between matches (if you broadcast a sweep, but any matches go longer in the round, then the next round will take a while to start)
  * One way to address this is being ready to hop into another, in-progress match if your first one ends quickly
