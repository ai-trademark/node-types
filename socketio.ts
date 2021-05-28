import PhoneticComparison = require("./phonetic");

declare namespace s {
  type WsCompareStates =
    | { mode: "error"; msg?: string }
    | { mode: "jobQueued" }
    | { mode: "querydb" }
    | { mode: "startCompare"; totalResults: number }
    | { mode: "await"; tmName: string }
    | { mode: "errorCompare"; msg?: string }
    | { mode: "doneCompare" };

  interface ServerEvents {
    /**
     * Respond to ping request by client.
     * Useful for debugging.
     */
    pong: (returnStr: string) => void;

    /**
     * Emits result found at current stage.
     * Cached results use this implementation too.
     */
    results: (val: Array<PhoneticComparison.ServerResponse>) => void;

    /**
     * Updates the frontend on current search status.
     */
    status: (currStatus: WsCompareStates) => void;
  }

  /**
   * What type of comparison to take:
   * - all    : Compares with all results in db. **USE WITH CAUTION**
   * - sample : Compares with randomly selected sample size.
   */
  type compareMode =
    | { mode: "all" }
    | { mode: "sample"; size: number }
    | { mode: "phoneticSimilar"; threshold: number }
    | { mode: "headSame"; charCount: number };

  /**
   * Client request from frontend
   */
  interface ClientReq {
    searchString: string;
    strategy?: compareMode;
  }

  interface ClientEvents {
    ping: (val: any) => void;
    /**
     * Triggers the start of ab-all comparison
     */
    compare: (sourceString: string) => void;
  }
}

export = s;
