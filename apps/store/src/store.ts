import { useState } from "react";

interface IFavorites {
    favoriteId: string | undefined;
    setFavoriteId: (id: string) =>void;
}

interface IStore {
    favorites: IFavorites;
}

const useStore = (): IStore => {
    const [favoriteId, setFavoriteId] = useState<string | undefined>(undefined);

    return {
        favorites: {
            favoriteId, setFavoriteId,
        }
    }
}

export default useStore;