import { useState } from "react";
import { QueryBuilder, groupBlueprintItems } from "@hammerstone/refine-react";
import { Condition, Blueprint } from "refine-types";
import {
  booleanCondition,
  dateCondition,
  dateWithTimeCondition,
  numericCondition,
  optionCondition,
  textCondition,
} from "refine-fixtures";

const blueprint: Blueprint = [];

const conditions: Condition[] = [
  optionCondition,
  booleanCondition,
  textCondition,
  dateCondition,
  dateWithTimeCondition,
  numericCondition,
];

const App = () => {
  const [debugBlueprint, setDebugBlueprint] = useState(() =>
    groupBlueprintItems(blueprint)
  );

  return (
    <div>
      <QueryBuilder
        blueprint={blueprint}
        conditions={conditions}
        onChange={(groupedBlueprint) => setDebugBlueprint(groupedBlueprint)}
      />
      <pre className="text-xs">{JSON.stringify(debugBlueprint, null, 2)}</pre>
    </div>
  );
};

export default App;
