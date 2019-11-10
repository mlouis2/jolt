import React from "react";
import ReactDOM from "react-dom";
import fakeapi from "./fakeapi";

it("can get pokemon info", async () => {
  const info = await fakeapi.getPokemonInfo(1);
  expect(info.name).toEqual("bulbasaur");
  expect(info.types).toEqual(["poison", "grass"]);
  expect(info.number).toEqual(1);
  expect(info.sprite).toEqual(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  );
});

it("can get pokemon moves", async () => {
  const moves = await fakeapi.getPokemonMoves(1);
  expect(moves).toEqual([
    {
      name: "razor-wind",
      description:
        "Inflicts regular damage. User's critical hit rate is one level higher when using this move. User charges for one turn before attacking. This move cannot be selected by sleep talk.",
      type: "normal"
    },
    {
      name: "swords-dance",
      description: "Raises the user's Attack by two stages.",
      type: "normal"
    },
    {
      name: "cut",
      description: "Inflicts regular damage.",
      type: "normal"
    }
  ]);
});

it("can get pokemon evolution", async () => {
  const evolution = await fakeapi.getPokemonEvolution(1);
  expect(evolution).toEqual(["1", "2", "3"]);
});
