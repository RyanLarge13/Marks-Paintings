export const genUrlForBucketImage = (fileName: string): string => {
  if (fileName) {
    return `https://storage.googleapis.com/marks_paintings/${fileName}`;
  } else {
    return "";
  }
};
