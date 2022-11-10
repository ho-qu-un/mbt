import * as React from "react";
import { useMachine } from "@xstate/react";
import { createMachine } from "xstate";

export const playButtonMachineDefinition = {
  id: "play-button",
  initial: "ready",
  states: {
    ready: {},
  },
  schema: {
    events: {} as { type: "NOOP" },
    context: {},
  },
  tsTypes: {} as import("./PlayButton.typegen").Typegen0,
  predictableActionArguments: true,
};

export const playButtonMachine = createMachine(playButtonMachineDefinition);

export function PlayButton() {
  const [state, send] = useMachine(playButtonMachine);
  return (
    <div>
      {state.value === "ready" && <h1>Ready</h1>}
      <button onClick={() => send("NOOP")} role="play-button">
        NOOP
      </button>
    </div>
  );
}
