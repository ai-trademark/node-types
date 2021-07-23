interface MatchAPIBaseResponse {
    status: string;
    error: Array<any>;
    method: string;
    result: Array<any>;
}

interface MatchAPIPing extends MatchAPIBaseResponse {
    method: 'ping';
}

interface MatchAPIListRes extends MatchAPIBaseResponse {
    method: 'list';
    result: Array<string>;
}

interface MatchAPICountRes extends MatchAPIBaseResponse {
    method: 'count';
    result: Array<number>;
}

interface MatchAPIAddRes extends MatchAPIBaseResponse {
    method: 'add';
}

interface MatchAPIDeleteRes extends MatchAPIBaseResponse {
    method: 'delete';
}

interface SearchResult {
    score: number;
    filepath: string;
    metadata: any;
}

interface MatchAPISearchRes extends MatchAPIBaseResponse {
    method: 'search';
    result: Array<SearchResult>;
}

export {
    MatchAPIPing,
    MatchAPIListRes,
    MatchAPICountRes,
    MatchAPIAddRes,
    MatchAPIDeleteRes,
    SearchResult,
    MatchAPISearchRes
}