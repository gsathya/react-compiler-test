"use client";

// src/useMutation.ts
import * as React from "react";
import { MutationObserver, notifyManager } from "@tanstack/query-core";
import { useQueryClient } from "./QueryClientProvider.js";
import { noop, shouldThrowError } from "./utils.js";
import {c as _c} from 'react/compiler-runtime';
function useMutation(options, queryClient) {
  const $ = _c(17);
  const client = useQueryClient(queryClient);
  let t0;
  if ($[0] !== client || $[1] !== options) {
    t0 = () => new MutationObserver(client, options);
    $[0] = client;
    $[1] = options;
    $[2] = t0;
  } else {
    t0 = $[2];
  }
  const [observer] = React.useState(t0);
  let t1;
  let t2;
  if ($[3] !== observer || $[4] !== options) {
    t1 = () => {
      observer.setOptions(options);
    };
    t2 = [observer, options];
    $[3] = observer;
    $[4] = options;
    $[5] = t1;
    $[6] = t2;
  } else {
    t1 = $[5];
    t2 = $[6];
  }
  React.useEffect(t1, t2);
  let t3;
  if ($[7] !== observer) {
    t3 = (onStoreChange) =>
      observer.subscribe(notifyManager.batchCalls(onStoreChange));
    $[7] = observer;
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  let t4;
  let t5;
  if ($[9] !== observer) {
    t4 = () => observer.getCurrentResult();
    t5 = () => observer.getCurrentResult();
    $[9] = observer;
    $[10] = t4;
    $[11] = t5;
  } else {
    t4 = $[10];
    t5 = $[11];
  }
  const result = React.useSyncExternalStore(t3, t4, t5);
  let t6;
  if ($[12] !== observer) {
    t6 = (variables, mutateOptions) => {
      observer.mutate(variables, mutateOptions).catch(noop);
    };
    $[12] = observer;
    $[13] = t6;
  } else {
    t6 = $[13];
  }
  const mutate = t6;
  if (
    result.error &&
    shouldThrowError(observer.options.throwOnError, [result.error])
  ) {
    throw result.error;
  }
  let t7;
  if ($[14] !== mutate || $[15] !== result) {
    t7 = {
      ...result,
      mutate,
      mutateAsync: result.mutate,
    };
    $[14] = mutate;
    $[15] = result;
    $[16] = t7;
  } else {
    t7 = $[16];
  }
  return t7;
}
export {
  useMutation
};
//# sourceMappingURL=useMutation.js.map
