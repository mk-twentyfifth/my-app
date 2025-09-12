import { Client, Account, Avatars } from "react-native-appwrite";
const projectId = process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID;
const endPoint = process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT;
const platform = "dev.mk.my-app";

const client = new Client().setEndpoint(endPoint).setProject(projectId).setPlatform(platform);

export const account = new Account(client);
export const avatars = new Avatars(client);
