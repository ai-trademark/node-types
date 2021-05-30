import { MongoClientOptions } from "mongodb";

interface ExternalServer {
  hostname: string;
  port: number;
}

export interface Env {
  TESTING_MODE: boolean;
  AB_CONCURRENT: number;
  DB_ALL_KEY: string;

  /**
   * Describes parameters for the current server
   */
  SERVER: {
    PORT: number;
  };

  MONGO_DB_CREDS: {
    USER: string;
    PASS: string;
    IP: string;
    URI: string;
    OPTIONS: MongoClientOptions;
  };

  MONGO_TARGETS: {
    INDEX: string;
    DETAILS: string;
    DB: string;
  };

  GCLOUD: {
    VISION_API: {
      KEY: string;

      // TODO: Remove once shift to client libraries
      URL: string;
      // TODO: Check if there are existing official types
      MODEL: string;
      MAX_RESULTS: number;
    };
  };

  SEARCH: {
    DEFAULT_PAGE_SIZE: number;
  };

  BACKEND_API: {
    GENERIC_AI: URL;
    PHONETIC_COMPARISON: URL;
    IMG_SEARCH: URL;
    TRANSLITERATE: URL;
  };
}
