---
id: format-basics
title: Format Basics
sidebar_label: Format Basics
---

This is a quick walkthrough of how I've formatted my format guides!

## How it Works

First, I'll start with a brief explanation of how the format works.

## By the Numbers

Next, I'll give you a reference table of relevant numbers for the format.
The values in this table assume that you are playing to completion and determining a 1st place.
If you are splitting your competition into groups, and stopping early to advance competitors to another stage, then these values will be different.

* \# of Matches Played
  * This is how many total matches will be played
* \# of Necessary Rounds
  * The number of necessary, consecutive rounds of play given *n* competitors
  * This is how you can calculate the runtime of a format! Multiply # of necessary rounds by the time you expect a match to take
* Distinct Placements
  * These are the final standings you will have after you've completed all matches. If you want to award prizing, these will be your options.
* Possible progressions
  * How many competitors you could advance from the format. This can involve shortening the competition (e.g. stopping a single-elim bracket after quarterfinals so that you can advance 4 competitors)

As an example, here is the reference table for **Single-Elimination**.

| Category              |      Value <br />(*n* is # of competitors)                |   Example / Notes |
| -------------         | :-----------:             | ----- |
| # of Matches Played   | *n - 1*                   | 16 competitors = 15 matches played <br />17 competitors = 16 matches played |
| # of Necessary Rounds    |   log₂(*n*)               | 16 competitors = 4 rounds required <br /> 17 competitors = 5 rounds required |
| Distinct Placements   |   1st & 2nd, 3rd* & 4th, 4x T-5th,<br />8x T-9th, 16x T-17th, etc.       |   |
| Possible progressions | 1, 2, 3*, 4, 8, 16, etc.   |

**Only when a third place match is played.*

## Considerations

Here, I will call out some common & important notes to keep in mind for different stakeholders.

### Competitors & Competitive Ops

Competitors & Comp Ops overlap enough on format-related concerns that I've grouped them together here.
Comp Ops, in an ideal world, exists to facilitate an excellent competitor experience while keeping everything running smoothly for broadcast & other stakeholders.
That being the case, Comp Ops' considerations are largely driven by how competitors feel & behave in different formats.
The items I list for them in each format usually relate to the competitor experience and the logistics for operating that format.

### Broadcast

Broadcast tells the story of the competition to the world.
That being the case, Broadcast considerations are largely driven by what stories can be told and how they can be told.
The items I list for them relate to predictability in a format, typical storylines, and potential pitfalls.
