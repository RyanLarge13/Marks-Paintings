/*
Marks Paintings - Art Gallery Website
Copyright (C) 2025 Ryan Large

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.
*/


// storageBucklet.ts ------------------
// This file will connect to the google storage bucket using 
// google-cloud/storage storing all editable images 
// for the owner of this website providing a CMS like experience

import { Storage } from "@google-cloud/storage";


// Storing creds in production env
const rawCredentials = process.env.GOOGLE_APPLICATION_CREDENTIALS;

// Kill app if there are issues connecting to bucket. Must not fail
if (!rawCredentials) {
  throw new Error("Missing GOOGLE_APPLICATION_CREDENTIALS env variable");
}

let parsedCredentials = null;

try {
  parsedCredentials = JSON.parse(rawCredentials);
} catch (err) {
  throw new Error("Failed to parse GOOGLE_APPLICATION_CREDENTIALS JSON");
}

const storage = new Storage({
  projectId: parsedCredentials.project_id,
  credentials: {
    client_email: parsedCredentials.client_email,
    private_key: parsedCredentials.private_key.replace(/\\n/g, "\n"),
  },
});

const bucketName = "marks_paintings";
const bucket = storage.bucket(bucketName);

export { bucket };