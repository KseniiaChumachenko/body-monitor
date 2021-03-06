import { useLocalObservable } from "mobx-react-lite";

export interface State {
  name?: string;
  type?: string;
  energy_cal?: number;
  energy_kj?: number;
  proteins?: number;
  carbohydrates?: number;
  fats?: number;
  u_id: string;
}

export function useStore({
  name,
  type,
  energy_cal,
  energy_kj,
  proteins,
  carbohydrates,
  fats,
  u_id,
}: State) {
  const store = useLocalObservable(() => ({
    u_id: u_id,
    name: name,
    setName: (newName: string) => {
      store.name = newName;
    },
    type: type || "Vegetables",
    setType: (newType: string) => {
      store.type = newType;
    },
    proteins: proteins,
    setProteins: (newProteins: number) => {
      store.proteins = newProteins;
    },
    energy_cal: energy_cal,
    setEnergyCal: (newEnergy: number) => {
      store.energy_cal = newEnergy;
    },
    energy_kj: energy_kj,
    setEnergyKj: (newEnergy: number) => {
      store.energy_kj = newEnergy;
    },
    carbohydrates: carbohydrates,
    setCarbohydrates: (newCarbs: number) => {
      store.carbohydrates = newCarbs;
    },
    fats: fats,
    setFats: (newFats: number) => {
      store.fats = newFats;
    },
  }));
  return store;
}
