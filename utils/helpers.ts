import { bucket } from "./storageBucket";

export const genUrlForBucketImage = (fileName: string): string => {
  if (fileName) {
    return `https://storage.googleapis.com/${bucket.name}/${fileName}`;
  } else {
    return "";
  }
};

export const getBucketFolderImages = async (folderName: string | null) => {
  if (folderName !== null) {
    const [files] = await bucket.getFiles({ prefix: folderName });
    return files;
  } else {
    return [];
  }
};
