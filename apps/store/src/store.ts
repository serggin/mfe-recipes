//import { useState } from "react";
import { create } from "zustand";

interface IFavorites {
    favoriteId: string | undefined;
    setFavoriteId: (id: string) =>void;
}

/* interface IStore {
    favorites: IFavorites;
} */

/* const useStore = (): IStore => {
    //const [favoriteId, setFavoriteId] = useState<string | undefined>(undefined);
    const [favoriteId, setFavoriteId] = useState<string | undefined>(() => {
        console.log('init ************');
        return undefined;
    });

    return {
        favorites: {
            favoriteId, setFavoriteId,
        }
    }
} */

const useStore = create<IFavorites>()((set) => ({

        favoriteId: undefined,
        setFavoriteId: (favoriteId: string) => {
            set({

                    favoriteId,
                
            })
        }

}));

export default useStore;