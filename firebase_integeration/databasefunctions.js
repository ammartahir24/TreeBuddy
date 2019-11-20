import {auth, db, firebase} from './config';

async function is_valid_user(email, password) {
    console.log("valid user")
    let isValid = true;
    await auth.signInWithEmailAndPassword(email, password).catch((err) => {
        isValid = false;
    });
    console.log("Is-valid")
    console.log(isValid)
    return isValid;

}
async function signin (email, pass){
    console.log("sign in user")
    let verify = await is_valid_user(email, pass);
    console.log("Signed in")
}

export {
    signin,
};