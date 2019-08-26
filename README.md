# Tic-tac-toe Test

```
 _____ _____ _____
|     |     |     |
|  X  |  O  |  X  |
|_____|_____|_____|
|     |     |     |
|  X  |  X  |  O  |
|_____|_____|_____|
|     |     |     |
|  O  |  X  |  O  |
|_____|_____|_____|
```

You task is to create a web interface for a game of Tic-tac-toe (aka Noughts and Crosses).

# Getting started

Your first task will be to a repo for the test (e.g. on gitlab or github) and follow the instructions below.

Once you have finished, please email us the URL to your repo with instructions on how to run the application.

Please make commits as you go (> 1 and < 100).

## The Story

> As a consumer of a RESTFul API, I would like to be able to start a game, make a move and find out a winner.

*For the sake of simplicity, we will refer to a "consumer of a RESTFul API" as a "user" from now on.*

### Acceptance Criteria

* A User can start a game (and get an id for their game)
* A User can submit a 'move' to the game (moves alternate between 'O' and 'X')
* A User can get the current state of the game
* Once a game is over, no moves can be submitted

## Subsequent Stories

These are stretch goals if you have time (you can do them in any order):

* As a Developer, I want my code to be covered by tests, so I know if a change has broken something.
* As a User I would prefer if my game state wasn't lost if the server crashes and comes back up.
* As a User I would like multiple games to be playable concurrently.
* As a User, I would like to be able to join a game with my name and be allocated either 'O' or 'X'. This should prevent me from submitting when it's not my turn.
* As a User I would like a history of my games to be recorded and a way of seeing the results of all the games I have played.
* As a DevOps engineer I would like to be able to easily deploy this application. Please build a container for me.


## Limitations

You can use whatever online resources you want (aside from copy-pasting large chunks of code).

You are encouraged to use any frameworks or libraries you feel comfortable with.

You will be asked about the code you submit so you should be able to explain why every line is there.
