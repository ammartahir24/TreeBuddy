import {auth, db, firebase} from './config';

async function is_valid_user(email, password) {
    let isValid = true;
    await auth.signInWithEmailAndPassword(email, password).catch((err) => {
        isValid = false;
    });
    if(isValid){
        console.log("SahiKamBro")
        console.log("valid user")
    }
    else
    {
        // return false;
        console.log("GhaltKamBro")
        console.log("invalid user")

    }
    return isValid;

}
async function signin (email, pass){
    console.log("verifying the user")
    let verify = await is_valid_user(email, pass);
    
    console.log(verify)
    if(verify){
        return "true";
    }
    else
    {
        return "false";
    }
    // return verify;
}

async function get_user(userID) {
    console.log("get user")
    let snapshot = null
    var start = new Date();
    let poridb = db.collection('users')

    console.log(poridb)

    // db.collection('users').where("Email",'==',userID).get()
    // .then(snap => {
    //         if (snap.empty) {
    //             console.log('query failed')
    //             return null;
    //         }
    //         else
    //         {
    //             console.log("query completed in:" , new Date() - start)
    //             const data = snap.docs.map(doc => {
    //                 let obj = doc.data()
    //                 obj['key'] = doc.id
    //                 return obj
    //             });
    //             snapshot = data[0];
    //         }
    //     })
    // if (snapshot === null) {
    //     return null;
    // } else {
    //     return snapshot;
    // }
}
 async function check_user_existence(user_Email)
 {
    console.log("Checking if the user exists: ", user_Email);
    let snapshot = null
    await db.collection('users').where("Email", '==', user_Email).get()
    .then(snap =>{
        if(snap.empty)
        {
            console.log("Query failed")
        }
        else
        {
            console.log("Query for checking user's existence completed")
            console.log(snap)

        }
    })

    // if(snapshot === null)
    // {
    //     console.log("empty snapshot")
    //     console.log(snapshot)
    // }
    // else
    // {
    //     console.log("snapshot not empty")
    //     console.log(snapshot)

    // }

    return "back from user existence";
 }

async function create_user(info) {
    if (info === undefined)
        return -1;

    let existence_response = await check_user_existence(info['Email'])
    console.log(existence_response)

    // let userProfile = {
    //     Name: info['Name'] || "",
    //     Email: info['Email'],
    //     Trees: info['Trees'] || 0,
    //     Rating : info['Rating'] || 0,
    //     Age : info['Age'] 
        
    // };

    // console.log("in db func")
    // console.log(userProfile)

    // let unique_id = info['Email'];

    // let snapshot = await get_user(unique_id);
    // console.log("snapshot",  snapshot)
    //let strRef = stor.ref();

    //strRef.putString("abc");
    // console.log("check getuser:", snapshot)
    // if (snapshot != null) { // User already exists no need to create account
    //     console.log("User already exists, not making an account");
    //     return 1;
    // }

    // await db.collection('users').add(userProfile)
    // await auth.createUserWithEmailAndPassword(info['Email'], info['Password']);
    // console.log("user created")
    // return 0
}


async function getAllPlants()
{
  var start = new Date();
  let data;
  let snapshot = await database.collection('plants').get()
    .then(snap => {
      // console.log(snap)
      if (snap.empty) {
              console.log('query failed')
          }
          else
          {
              console.log("query completed in:" , new Date() - start)
              const data_fetched = snap.docs.map(doc => doc.data());
              data = data_fetched
              // console.log(data);
              return data
              
          }

    })
    .catch(function(error) {
      console.error("Error getting: ", error);
  });

    return data;

}

async function getSinglePlant(plant_name)
{
  var start = new Date();
  let data;
  let snapshot = await database.collection('plants').where('Name', '==',plant_name).get()
    .then(snap => {
      // console.log(snap)
      if (snap.empty) {
              console.log('query failed')
          }
          else
          {
              console.log("query completed in:" , new Date() - start)
              const data_fetched = snap.docs.map(doc => doc.data());
              data = data_fetched
              // console.log(data);

              return data
              
          }

    })
    .catch(function(error) {
      console.error("Error getting: ", error);
  });

    return data;

}


async function getPlants(plant_name){

  let plants_data;
  if(plant_name == "All"){
    plants_data = await getAllPlants()
    console.log(plants_data)
  }
  else
  {
    plants_data = await getSinglePlant(plant_name)
    console.log(plants_data)

  }
}


export {
    signin,
    create_user,
    getPlants,
    getSinglePlant,
    getAllPlants,
};