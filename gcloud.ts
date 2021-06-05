declare namespace gcloud {
  namespace VisionAPI {
    type FeatureType =
      | "TYPE_UNSPECIFIED" // Unspecified feature type.
      | "FACE_DETECTION" // Run face detection.
      | "LANDMARK_DETECTION" // Run landmark detection.
      | "LOGO_DETECTION" // Run logo detection.
      | "LABEL_DETECTION" // Run label detection.
      | "TEXT_DETECTION" // Run text detection / optical character recognition (OCR). Text detection is optimized for areas of text within a larger image; if the image is a document, use DOCUMENT_TEXT_DETECTION instead.
      | "DOCUMENT_TEXT_DETECTION" // Run dense text document OCR. Takes precedence when both DOCUMENT_TEXT_DETECTION and TEXT_DETECTION are present.
      | "SAFE_SEARCH_DETECTION" // Run Safe Search to detect potentially unsafe or undesirable content.
      | "IMAGE_PROPERTIES" // Compute a set of image properties, such as the image's dominant colors.
      | "CROP_HINTS" // Run crop hints.
      | "WEB_DETECTION" // Run web detection.
      | "PRODUCT_SEARCH" // Run Product Search.
      | "OBJECT_LOCALIZATION"; // Run localizer for object detection.
  }
}

export { gcloud };
