import { Client, Account, Avatars, Databases } from "react-native-appwrite";
const projectId = process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID;
const endPoint = process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT;
const platform = "dev.mk.my-app";

// instantiate a shared client object
const client = new Client().setEndpoint(endPoint).setProject(projectId).setPlatform(platform);

// pass the client instance into other service classes
export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);


// This pattern is generally called the composition pattern (or sometimes dependency injection via composition).