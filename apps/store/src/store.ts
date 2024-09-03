import { create } from "zustand";

interface IFavorites {
    favoriteId: string | undefined;
    setFavoriteId: (id: string) => void;
}

const useStore = create<IFavorites>()((set) => ({
    favoriteId: undefined,
    setFavoriteId: (favoriteId: string) => {
        set({
            favoriteId,
        })
    }
}));

export default useStore;