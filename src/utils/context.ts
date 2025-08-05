import {createContext} from "react";
import type {SWContextValue} from "./types.ts";
import {defaultHero} from "./constants.ts";

export const SWContext = createContext<SWContextValue>({
    hero: defaultHero,
    changeHero: (hero: string) => console.log(hero)
});