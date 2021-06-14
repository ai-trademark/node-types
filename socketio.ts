import { PhoneticComparison } from './phonetic';

declare namespace SocketTypes {
  type WsCompareStates =
    | { mode: 'error'; msg?: string }
    | { mode: 'jobQueued' }
    | { mode: 'querydb' }
    | { mode: 'startCompare'; totalResults: number }
    | { mode: 'await'; tmName: string } // Not used
    | { mode: 'errorCompare'; msg?: string }
    | { mode: 'concurrent'; num: number }
    | { mode: 'doneCompare' };

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
    | { mode: 'all' }
    | { mode: 'sample'; size: number }
    | { mode: 'headSame'; charCount: number }
    /**
     * Matches using the submine -p match method. Threshold means will only include results >= provided number. 
     * */
    | { mode: 'fuzzyMatching', threshold: number }
    | { mode: 'soundex' }
    | { mode: 'metafone' }
    | { mode: 'doubleMetafone' }
    | { mode: 'fuzzySoundex' }
    | { mode: 'fuzzyMetafone' }
    | { mode: 'fuzzyDoubleMetafone' }

    ;

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
     * String will then be parsed to fulfil data structure
     * as defined in interface ClientReq.
     */
    compare: (request: string) => void;

    /**
     * Trigger to stop comparing, happens when
     * client closes window or submits new request.
     */
    stop: () => void;
  }
}

type PhoneticResult = PhoneticComparison.ServerResponse;

export { SocketTypes, PhoneticResult };
