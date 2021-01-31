import React, { Component } from "react";
import "./Pokecard.css";

// const img_API =
//     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const img_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

const padNumToThree = (number) =>
    number <= 999 ? `00${number}`.slice(-3) : number;

class Pokecard extends Component {
    render() {
        const { id, name, type, exp } = this.props;
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{name}</h1>
                <div className="Pokecard-image">
                    <img
                        src={`${img_API}${padNumToThree(id)}.png`}
                        alt={name}
                    />
                </div>
                <div className="Pokecard-data">TYPE: {type}</div>
                <div className="Pokecard-data">EXP: {exp}</div>
            </div>
        );
    }
}

export default Pokecard;
