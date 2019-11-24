import {auth, db, firebase} from './config';

// const image2base64 = require('image-to-base64');

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
  let snapshot = await db.collection('plants').get()
    .then(snap => {
      // console.log(snap)
      if (snap.empty) {
              console.log('query failed')
              return "QueryFailure"
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
  let snapshot = await db.collection('plants').where('Name', '==',plant_name).get()
    .then(snap => {
      // console.log(snap)
      if (snap.empty) {
              console.log('query failed')
              return "QueryFailure"

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
    return plants_data
  }
  else
  {
    plants_data = await getSinglePlant(plant_name)
    console.log(plants_data)
    return plants_data

  }
}


async function get_AllSpecies (){
  var start = new Date();
  let data;
  let snapshot = await db.collection('species').get()
    .then(snap => {
      // console.log(snap)
      if (snap.empty) {
              console.log('query failed')
              return "QueryFailure";
              
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

async function getSingleSpecie(specie_name){
  var start = new Date();
  let data;
  let snapshot = await db.collection('species').where("Specie_Name",'==', specie_name).get()
    .then(snap => {
      // console.log(snap)
      if (snap.empty) {
              console.log('query failed')
              return "QueryFailure";
              
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

async function getSpecieFunc (input){
  let specie_data;
  if(input == "All"){
    specie_data = await get_AllSpecies()
    console.log(specie_data)
    return specie_data
  }
  else
  {
    console.log(input)
    specie_data = await getSingleSpecie(input)
    console.log(specie_data)
    return specie_data

  }
  // console.log(specie_data)
}


////////////////////// Adding Plant Details ////////////////////////


async function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

async function Confirm_UniqueID(table_name, ID_name,ID_value){

  var start = new Date();
  let data;
  let snapshot = await db.collection(table_name).where(ID_name,'==', ID_value).get()
    .then(snap => {
      // console.log(snap)
      if (snap.empty) {
              // console.log('query failed')
              // console.log("len ", Object.keys(data).length);
              data = "empty";
              // return "empty"
              // return data;
              
          }
          else
          {
              console.log("query completed in:" , new Date() - start)
              const data_fetched = snap.docs.map(doc => doc.data());
              data = data_fetched
              console.log("len ", Object.keys(data).length);

              return "notempty" 
              
          }

    })
    .catch(function(error) {
      console.error("Error getting: ", error);
  });

    return data;

}

async function getSpecieNameFromSPid(Specie_ID){

  var start = new Date();
  let data;
  let snapshot = await db.collection("species").where("Specie_ID",'==',Specie_ID).get()
    .then(snap => {
      // console.log(snap)
      if (snap.empty) {
              console.log('query failed')
              // console.log("len ", Object.keys(data).length);

              return "empty"
              // return data;
              
          }
          else
          {
              // console.log("query completed in:" , new Date() - start)
              console.log(snap.id)
              const data_fetched = snap.docs.map(doc => doc.data());
              data = data_fetched[0]
              console.log(data)
              specie_name = data ['Specie_Name']
              specie_bioname = data ['Specie_bioName']
              // console.log("specie name ", specie_name, specie_bioname);

              return {data}
              
          }

    })
    .catch(function(error) {
      console.error("Error getting: ", error);
  });

    return data;

}

// getSpecieNameFromSPid(4)

async function IncrementSpecie(Specie_ID){
  let count;
  let snapshot = await db.collection("species").where("Specie_ID",'==',Specie_ID).get()
    .then(snap => {
      // console.log(snap)
      if (snap.empty) {
              console.log('query failed')
              // console.log("len ", Object.keys(data).length);

              return "empty"
              // return data;
              
          }
          else
          {
              // console.log("query completed in:" , new Date() - start)
              const data_fetched = snap.docs.map(doc => doc.data());
              data = data_fetched[0]
               count= data ['Occurences']

              // return {data}
              
          }

    })
    .catch(function(error) {
      console.error("Error getting: ", error);
  });

  //   await database.collection("species").where("Specie_ID",'==',Specie_ID).update({
  //     Occurences: count + 1
  //   })

  db.collection("species").where("Specie_ID", "==", Specie_ID)
  .get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          console.log(doc.id, " => ", doc.data());
                    
          // Build doc ref from doc.id
          db.collection("species").doc(doc.id).update({Occurences: count +1 });
      });
 })

}


async function IncrementPlantOnPerson(User_ID){
  let count;
  let snapshot = await db.collection("users").where("User_ID",'==',User_ID).get()
    .then(snap => {
      // console.log(snap)
      if (snap.empty) {
              console.log('query failed IncrementPlantOnPerson')
              // console.log("len ", Object.keys(data).length);

              return "empty"
              // return data;
              
          }
          else
          {
              // console.log("query completed in:" , new Date() - start)
              const data_fetched = snap.docs.map(doc => doc.data());
              data = data_fetched[0]
               count= data ['Tree']

              // return {data}
              
          }

    })
    .catch(function(error) {
      console.error("Error getting: ", error);
  });

  //   await database.collection("species").where("Specie_ID",'==',Specie_ID).update({
  //     Occurences: count + 1
  //   })

  db.collection("species").where("User_ID", "==", User_ID)
  .get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          console.log(doc.id, " => ", doc.data());
                    
          // Build doc ref from doc.id
          db.collection("users").doc(doc.id).update({Tree: count +1 });
      });
 })

}



async function Add_Tree_Details (tree_info){

  if (tree_info === undefined) {
        return;
    }
  
  let unique_id
  flag = true
  while(flag){
    
    unique_id = await getRndInteger(1, 10000)
    console.log(unique_id)
    let res = await Confirm_UniqueID("plants", "Plant_ID", unique_id)
    // console.log(res)
    if (res == "empty")  {
      flag = false
      break
    }
  }

  let specie_res = await getSpecieNameFromSPid(tree_info['Specie_ID'])

  console.log()

  var start = new Date();
  var Date_Now = new Date();
  // Date_Now.format("mm/dd/yy");
  
  let tree_item = {
      Location: tree_info['Location'],
      image : tree_info['Picture'],
      Name : tree_info['Name'],
      Plant_ID : unique_id,
      Planter_ID: tree_info['Planter_ID'],
      Specie_Bioname:specie_res['Specie_bioName'],
      Specie_ID : tree_info['Specie_ID'],
      Specie_Name :specie_res['Specie_Name'],
      Watered: start,
      Date_Planted: start,
      
  };

  // console.log("here")

  let obj = await db.collection('plants').add(tree_item)
    .then(snap =>
    {
      if(snap.empty){
        console.log("null")
        return null
      }
      else{
        console.log("issue here")
        // console.log(snap)
        return snap
      }
    })


  await IncrementSpecie(tree_item['Specie_ID'])
  await IncrementPlantOnPerson(tree_item['Planter_ID'])
  console.log("done adding Plant details, and settling all the tables")
  return "done";

}



////////////////////////////////////////////////////////////////////


export {
    signin,
    create_user,
    getPlants,
    getSinglePlant,
    getAllPlants,
    getSpecieFunc,
    getSingleSpecie,
    get_AllSpecies,
    Add_Tree_Details,
    IncrementSpecie,
    IncrementPlantOnPerson,
    getSpecieNameFromSPid,
    Confirm_UniqueID,
    getRndInteger,
};