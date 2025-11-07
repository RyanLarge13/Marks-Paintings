import { bucket } from "./storageBucket";

export const getBucketFolderImages = async (folderName: string | null) => {
  if (folderName !== null) {
    const [files] = await bucket.getFiles({ prefix: folderName });
    return files;
  } else {
    return [];
  }
};
