declare namespace Transliterate {
  interface ServerRequest {
    word: string;
    locale: string | "en";
  }

  // TODO: Fix spelling
  interface ServerResponse {
    input_pronouce: string;
  }

  interface MiddlewareRequest {}

  interface MiddlewareResponse {
    transString: string;
    isAlreadyEnglish: boolean;
  }
}

export = Transliterate;
