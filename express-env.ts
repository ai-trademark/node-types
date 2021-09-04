import { MongoClientOptions } from 'mongodb';

interface ExternalServer {
  hostname: string;
  port: number;
}

export interface Env {
  TESTING_MODE: boolean;
  AB_CONCURRENT: number;

  /**
   * Describes parameters for the current server
   */
  SERVER: {
    PORT: number;
  };

  SOCKET_IO: {
    PORT: number;
  };

  MONGO_DB_CREDS: {
    USER: string;
    PASS: string;
    IP: string;
    URI: string;
    OPTIONS: MongoClientOptions;
    URI_OPTIONS: string;
  };

  MONGO_TARGETS: {
    INDEX: string;
    DETAILS: string;
    DB: string;
    PHONETIC_INPUT: string;
  };

  GCLOUD: {
    VISION_API: {
      SERV_CRED_PATH: string;
      PROJ_ID: string;
      KEY: string;

      // TODO: Remove once shift to client libraries
      URL: string;
      // TODO: Check if there are existing official types
      MODEL: string;
      MAX_RESULTS: number;
    };

    KG: {
      VERSION: string;
      API_KEY: string;
    }
  };

  SEARCH: {
    DEFAULT_PAGE_SIZE: number;
    CACHE: {
      TIMEOUT: number;
      SCAN_INTERVAL: number;
    };
  };

  IMG_SEARCH: {
    UPLOAD_CACHE: {
      ENDPOINT: string;
      PORT: number;
      BUCKET_NAME: string;
      ACCESS_KEY: string;
      SECRET_KEY: string;
    };

    MATCH_API: {
      ENDPOINT: string;
      PORT: number;
    }
  };

  ES: {
    ENDPOINT: string;
    PORT: number;
    INDEX: string;
    FE_URL: string;
  }

  PHONETIC: {
    AB_ALL_CONCURRENT: number;
  };

  BACKEND_API: {
    GENERIC_AI: string;
    PHONETIC_COMPARISON: string;
    IMG_SEARCH: string;
    TRANSLITERATE: string;
  };
}
