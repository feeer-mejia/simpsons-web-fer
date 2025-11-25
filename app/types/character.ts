export interface character {
    id: number;
    name: string;
    gender: string;
    portrait_path: string;
}

export interface ParamsCharacter {

    params: Promise<{
        idcharacter: string
    }>
}
