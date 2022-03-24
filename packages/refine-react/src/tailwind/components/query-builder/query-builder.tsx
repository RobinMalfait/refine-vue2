import React, { useEffect, useState } from "react";
import {
  Blueprint,
  Condition,
  CriterionBlueprintItem,
  GroupedBlueprint,
  ReactRefineFlavor,
} from "refine-core/types";
import { CriterionGroup } from "../criterion-group";
import { QueryBuilderProvider } from "./use-query-builder";

export type QueryBuilderProps = {
  blueprint: Blueprint;
  conditions: Condition[];
  onChange?: (blueprint: GroupedBlueprint) => void;
  flavor?: ReactRefineFlavor;
};

export const groupBlueprintItems = (blueprint: Blueprint): GroupedBlueprint => {
  const groupedBlueprint: GroupedBlueprint = [];
  let currentGroupIndex = 0;

  for (const item of blueprint) {
    if (item.type === "conjunction") {
      if (item.word === "or") {
        currentGroupIndex++;
      }
    }

    if (item.type === "criterion") {
      if (!Array.isArray(groupedBlueprint[currentGroupIndex])) {
        groupedBlueprint.push([]);
      }

      groupedBlueprint[currentGroupIndex].push(item);
    }
  }

  return groupedBlueprint;
};

export const getDefaultCriterion = (
  conditions: Condition[]
): CriterionBlueprintItem => ({
  type: "criterion",
  depth: 1,
  condition_id: conditions[0].id,
  input: { clause: conditions[0].meta.clauses[0].id },
});

export const QueryBuilder = ({
  blueprint: initialBlueprint,
  conditions,
  onChange,
  flavor,
}: QueryBuilderProps) => {
  const [groupedBlueprint, setGroupedBlueprint] = useState(() =>
    groupBlueprintItems(initialBlueprint)
  );

  useEffect(() => {
    if (onChange) {
      onChange(groupedBlueprint);
    }
  }, [groupedBlueprint]);

  const addGroup = () => {
    const newCriterionGroup: CriterionBlueprintItem[] = [
      getDefaultCriterion(conditions),
    ];

    return setGroupedBlueprint((groupedBlueprint) => [
      ...groupedBlueprint,
      newCriterionGroup,
    ]);
  };

  return (
    <QueryBuilderProvider
      value={{
        groupedBlueprint,
        updateGroupedBlueprint: setGroupedBlueprint,
        conditions,
      }}
    >
      <div data-testid="refine-query-builder">
        {groupedBlueprint.map((criteria, index) => (
          <CriterionGroup key={index} criteria={criteria} index={index} />
        ))}
        <button
          data-testid="refine-add-criterion-group"
          type="button"
          onClick={addGroup}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add an 'Or'
        </button>
      </div>
    </QueryBuilderProvider>
  );
};
