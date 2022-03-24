import { createContext, useContext } from "react";
import { Criterion } from "refine-core/types";

export type CriterionGroupContext = {
  index: number;
  criteria: Criterion[];
  modify: {
    (payload: Criterion[] | null): void;
    (updateFn: (criteria: Criterion[]) => Criterion[] | null): void;
  };
  addCriterion: (payload: Criterion) => void;
  updateCriterion: {
    (index: number, payload: Criterion): void;
    (index: number, updateFn: (criterion: Criterion) => Criterion): void;
  };
  removeCriterion: (index: number) => void;
};

export const CriterionGroupContext =
  createContext<CriterionGroupContext | null>(null);
export const CriterionGroupProvider = CriterionGroupContext.Provider;

export const useCriterionGroup = () => {
  const criterionGroup = useContext(CriterionGroupContext);

  if (!criterionGroup) {
    throw new Error(
      `useCriterionGroup can only be used within a CriterionGroupProvider.`
    );
  }

  return criterionGroup;
};
