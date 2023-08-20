import { Pokemon } from "src/app/models/pokemon";

// pokemon-mockup-data.provider.ts
export const POKEMON_MOCKUP_DATA: Pokemon = {
    id: 666,
    name: 'Ariel',
    base_experience: 404,
    height: 1.70,
    weight: 777,
    abilities: [
        {
            ability: {
                name: 'Throw pies',
                url: 'https://fakeurl.com/ability/giggle'
            },
            is_hidden: false,
            slot: 1
        },
        {
            ability: {
                name: 'Coding',
                url: 'https://fakeurl.com/ability/coding'
            },
            is_hidden: false,
            slot: 2
        }
    ],
    types: [
        {
            slot: 1,
            type: {
                name: 'comic',
                url: 'https://fakeurl.com/type/comic'
            }
        }
    ],
    sprites: {
        front_default: '../../../assets/images/ariel.png',
        front_shiny: 'assets/pokejoker-with-golden-hat.jpg',
        back_default: 'assets/pokejoker-showing-his-back-tattoo.jpg',
        back_shiny: 'assets/pokejoker-showing-his-shiny-back-tattoo.jpg'
    },
    stats: [
        {
            base_stat: 999,
            effort: 0,
            stat: {
                name: 'humor-level',
                url: 'https://fakeurl.com/stat/humor'
            }
        }
    ],
    moves: [
        {
            move: {
                name: 'pie-throw',
                url: 'https://fakeurl.com/move/pie-throw'
            },
            version_group_details: [
                {
                    level_learned_at: 1,
                    version_group: {
                        name: 'red-nose',
                        url: 'https://fakeurl.com/version-group/red-nose'
                    },
                    move_learn_method: {
                        name: 'joke-book',
                        url: 'https://fakeurl.com/move-learn-method/joke-book'
                    }
                }
            ]
        }
    ],
    species: {
        name: 'jokester-species',
        url: 'https://fakeurl.com/pokemon-species/jokester'
    },
    is_default: true,
    order: 789,
    forms: [
        {
            name: 'stand-up-form',
            url: 'https://fakeurl.com/pokemon-form/stand-up'
        }
    ],
    held_items: []
};
