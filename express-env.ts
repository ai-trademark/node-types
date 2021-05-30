import { MongoClientOptions } from 'mongodb';

export interface Env {
  TESTING_MODE: boolean;
  AI_BACKEND: string | undefined;
  AB_CONCURRENT: number;
  DB_ALL_KEY: string | undefined;

  SERVER: {
    PORT: number;
  };

  MONGO_DB_CREDS: {
    USER: string | undefined;
    PASS: string | undefined;
    IP: string | undefined;
    URI: string;
    OPTIONS: MongoClientOptions;
  };

  MONGO_TARGETS: {
    INDEX: string | undefined;
    DETAILS: string | undefined;
  };

  GCLOUD: {
    VISION_API: {
      KEY: string | undefined;
      // TODO: Check if there are existing official types
      MODEL: string | undefined;
      MAX_RESULTS: number;
    };
  };
}
