/**
 * Should not exist on own:
 * @see MiddlewareResponseSuccess, MiddlewareResponseFailed
 */
interface MiddlewareResponse {
  success: boolean;
  responseTime: number;
}

declare namespace PhoneticComparison {
  interface ServerResponse {
    title1_normalized: string;
    title2_normalized: string;
    title1_ori: string;
    title2_ori: string;
    filename1: string;
    filename2: string;
    filename1_3d?: string;
    filename2_3d?: string;
    word1_list: Array<number>;
    word2_list: Array<number>;
    combined_image_filepath: string;
    combined_image_3d_filepath?: string;
    inference: {
      confidence: number;
      similarity: number;
      similar: boolean;
      imgGenerationTime: number;
      nnInferenceTime: number;
      inferenceTime: number;
    };
  }

  interface MiddlewareResponseSuccess extends MiddlewareResponse {
    success: true;
    results: ServerResponse;
  }

  interface MiddlewareResponseFailed extends MiddlewareResponse {
    success: false;
    debug?: string;
  }
}

export { PhoneticComparison };
