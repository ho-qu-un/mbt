import * as React from "react";
import { afterEach, assert, describe, test } from "vitest";
import { render, fireEvent, cleanup, RenderResult } from "@testing-library/react";
import { createModel } from "@xstate/test";
import { PlayButton, playButtonMachineDefinition } from "./PlayButton";
import { createMachine } from "xstate";

describe("Play button", () => {
  const machineDefinition = playButtonMachineDefinition as any;
  machineDefinition.states.ready.meta = {
    test: async (r: RenderResult) => {
      assert.ok(r.getByText("HI"));
    },
  };

  const testMachine = createMachine(machineDefinition);
  const testModel = createModel<RenderResult>(testMachine).withEvents({
    NOOP: {
      exec: async ({ getByText }) => {
        fireEvent.click(getByText("HI"));
      },
    },
  });

  const testPlans = testModel.getShortestPathPlans();
  testPlans.forEach((plan) => {
    describe(plan.description, () => {
      afterEach(cleanup);
      plan.paths.forEach((path) => {
        test(path.description, async () => {
          await path.test(render(<PlayButton />));
        });
      });
    });
  });

  test("coverage", () => {
    testModel.testCoverage();
  });
});
