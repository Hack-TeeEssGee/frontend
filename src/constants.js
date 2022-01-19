var BACKEND_URL, FRONTEND_URL;

if (process.env.NODE_ENV === "production") {

    BACKEND_URL = "https://api.kgpverse.chiragghosh.me";
    FRONTEND_URL = "https://kgpverse.chiragghosh.me";
}

else if (process.env.NODE_ENV === "development") {

    BACKEND_URL = "http://localhost:8000";
    FRONTEND_URL = "http://localhost:3000";
}

export { BACKEND_URL, FRONTEND_URL };

export const AUTH_URL = `${BACKEND_URL}/authenticate`;

export const ONESIGNAL_ID = "f23e745c-2af0-42e7-934f-8fb71bca9dda";