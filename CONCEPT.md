# Concept

This document describes all the possible features for the jambot and some of the use cases that are intended.

## Components

### The Brain
* Keeps track of the full state of the bot:
    * current BPM
    * current key
    * current mode (orchestrated / jam)
    * current song part (in orchestrated mode)
    * current mood (used for the Face)
        * fun
        * anger
        * etc.
* All other components are added and configured here
* The ONLY configuration for the bot should be made in the Brain
    * e.g. character traits

### The Beat Detector (Input Component)
* Detecting the current bpm of the input (all the time)

### The Key Detector (Input Component)
* Detecting the current key of the song/Bar (all the time)

### The Song Detector (Input Component)
* Detecting parts of a song (via orchestrate commands)
* [future use case] Detecting the music style

### The Drummer (Output Component)
* A Drum instrument

### The Bass (Output Component)
* A Bass intrument

### The Synth (Output Component)
* A simple lead synth instrument

### The Voice (Output Component)
* A robotic voice instrument

### The Face (Output Component)
* The UI of the bot (fullscreen face that shows current thoughts (optional) and facial expressions based on the state of the brain)

### The Light Show (Output Component)
* An Arduino-based RGB LED light show based on the current beat and song.

## Use Cases

### Show Tune \#1
Single artist with Synth sound. Plays a rythmical tune, a drum bot recognizes the tempo and joins in with a beat

### Show Tune \#2
Single artist plays a song together with a couple of bots. The song is orchestrated and the artist or a second human sends commands for the orchestration (now play part B, part C, etc.)

### Show Tune \#3
3 or more bots jam with each other. The only human interaction is the orchestration (now play part B, part C, etc.)

### Show Tune \#4
3 or more bots start to jam with each other without any human interaction (except for maybe a "Start" command)

### Show Tune \#5
Drummer battle: Artist with electronical drum pads does a drum battle versus a drum bot

## Milestones

### Phase 1:
* Electron app is set up
* Brain is basically set up
* Beat Detection works (with internal audio input)
* The Drummer works in a simple way with Samples (Kick, Snare, Hi-Hat)
* UI is able to show debug information (the brain's state like BPM)

### Phase 2:
* UI shows a face
* The Bass works with a nice Synth sound
* The concept of bars and parts of a song is understood by the bot
    * e.g. the command "Switch to part B after 4 bars" must be understood
* Key detection works (with internal audio input)
* Song part detection works

### Phase 3:
* The Synth works with some nice patterns
* UI shows a face with nice animations based on the state of the brain
* The Light Show works basically (Arduino construction with the RGB LEDs is available and can be controlled)
* The Mate for the Light Show has been drunk

### Phase 4:
* The Voice works with some robot vocals
* The Light Show is fun and awesome (details tbd)
* The Face UI is totally mega freakin' awesome (different faces available [at least one face for each instrument])
* The bots can play music with each other without requiring commands
