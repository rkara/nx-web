export interface CountyCollection {
    state: string;
    counties: County[];
}

export interface County {
    id: number;
    name: string;
}