---
id: swiss-pairings
title: Swiss Pairings
sidebar_label: Swiss Pairings
---

*How* competitors are paired up each round is a complex topic in Swiss.
So complex, that I just made this separate doc.

## Super TL;DR

* Go with what your tournament software does

or

* If you're advancing by final standings, then a safe choice is pairing randomly across the top & bottom halves of each Score Group by Pairing Number (seeding)
* If you're advancing by a record threshold, then your safest choice is probably pairing highest Pairing Numbers vs lowest Pairing Numbers in each score group (like in elimination brackets)

## The Not-So-Short

In Single-Elim and Double-Elim, matches are wholly deterministic based on seeding.
In Round-Robin, matches are wholly determined by "every competitor plays every other competitor once."
In Swiss, however, there are often multiple 'valid' ways to pair competitors each round.

There are some very detailed resources available on the Internet for exploring pairing methods in chess (such as [this one from a chess community](https://utuswiss.co.uk/Resources/Swiss%20Pairing%20Booklet.pdf)) but, as you'll see, they are highly specialized to the workings of a chess ranking system.
Other game communities don't publish their pairing algorithms (or, at least, they make it *extremely difficult* to find).

I'm going to write my own summary here, but just be aware that this is a complicated topic which can be (and often is) tuned and tweaked by different communities.

Each round, you'll have competitors in different 'Score Groups', which are another way of naming the records each competitor has (e.g. 2-0, 1-1, 0-1).
The goals of pairing up the teams within each Score Group are to avoid rematches, and to keep matchups 'fair' throughout the competition.
That second notion is subjective, and it is dependent on how you are advancing/eliminating competitors, and how standings are determined.

Usually, competitors are given a seed before the start of a Swiss competitions.
That's called their "Pairing Number," and it can be used to order the competitors in a given Score Group.
So while you might have, say, eight competitors in the "1-0" Score Group, you can order those competitors by their Pairing Number.
Most approaches involve splitting a Score Group into a top half and a bottom half, using the Pairing Numbers, and then pairing competitors up between those halves.
Chess, traditionally, pairs tops of each half and then works their way down each half in that fashion.

Example for the "1-0" score group for a 16-competitor Swiss competition:

![haha](/img/godhelpme.jpg)

But maybe you want traditional "top vs bottom seed" matchups, in which case you would have...

![i draw so gud](/img/godhelpme2.jpg)

Or, maybe, you just want to randomize the pairings between top and bottom. Then you'd have...

![jordan plz help me](/img/godhelpme3.jpg)

OR, MAYBE, you just go the whole hog and randomize *everyone* in the Scoring Group (I do not recommend this unless it's more social/fun, because it *will* pit top seeds against each other).

![jordan plz help me](/img/godhelpme4.jpg)

## Do What's Right for You

It's a bit of a cop-out answer, but you're going to need to work with what you have.
If you're working with a game where the rules are set in stone for Swiss, you should probably heed it.
If you're working with a particular tournament tool, then you're going to need to make peace with its pairing algorithm.
But, being aware of what those rules are, and how they might impact competitors & storytelling, is important nonetheless.
