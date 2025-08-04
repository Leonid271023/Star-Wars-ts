export interface SWContextValue {
    page: string;
    changePage: (page:string) => void;

}

export interface Hero {
    name: string;
    img: string;
    url: string;
}

// export interface Characters {
//     [key: string]: Hero;
// }

export type Characters = Record<string, Hero>;
