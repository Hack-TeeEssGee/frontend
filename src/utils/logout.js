import { signOut } from "supertokens-auth-react/recipe/session";

async function onLogout () {
    await signOut();
    window.location.href = "/";
}

export default onLogout;