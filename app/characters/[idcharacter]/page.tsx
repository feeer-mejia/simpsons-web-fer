import { ParamsCharacter } from "@/app/types/character";

export default async function IdCharacter( { params }: ParamsCharacter ) {

    const { idcharacter } = await params;
    return (

        <div>
            <h1>This is the { idcharacter }´s Website</h1>
        </div>
    )

}