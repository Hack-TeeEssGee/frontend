import { signOut } from "supertokens-auth-react/recipe/session";

async function onLogout (navigate) {
    await signOut();
    navigate("/");
}

export default onLogout;