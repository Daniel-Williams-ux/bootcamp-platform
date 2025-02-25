interface AppwriteConfig {
    endpoint: string;
    projectId: string;
    apiKey: string;
}

const env: { appwrite: AppwriteConfig } = {
    appwrite: {
        endpoint: String(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT),
        projectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
        apiKey: String(process.env.APPWRITE_API_KEY),
    }
}

export default env;