'use client' ;

// useState & useEffect

import { useState, useEffect } from "react";
import { character } from "../types/character";
import { characterServices } from "../services/characterServices";

export const useCharacter = () => {
    const [character, setCharacter] = useState <character[]> ();
    const [loading, setLoading] = useState (true) ;
    const [error, setError] = useState<string | null>(null);
    useEffect(()=>{
        const fetchCharacters = async () => {
            const {getAllCharacters} = characterServices;
            try {
                setLoading(true);
                const data = await characterServices.getAllCharacters();
            } catch (error) {
            
            }
        }   
    })
}
