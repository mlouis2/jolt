import React from "react";
import ReactDOM from "react-dom";
import api from "./api";

it("can get pokemon info", async () => {
  const info = await api.getPokemonInfo(1);
  expect(info.name).toEqual("bulbasaur");
  expect(info.types).toEqual(["poison", "grass"]);
  expect(info.index).toEqual(1);
  expect(info.sprite).toEqual(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  );
});

it("can get pokemon moves", async () => {
  const moves = await api.getPokemonMoves(1);
  expect(moves.length).toEqual(10);
});

it("can get pokemon evolution", async () => {
  // Need to preload 2 and 3 so that evolution chain is complete
  await api.getPokemonInfo(2);
  await api.getPokemonInfo(3);
  const evolution = await api.getPokemonEvolution(1);
  expect(evolution).toEqual(["1", "2", "3"]);
});
