const firebase = require('firebase');
const axios = require('axios');

const firebaseConfig = {
  apiKey: "AIzaSyBmlyixNdwtyOE09HS5nMDAoiJ62VCaLEY",
  authDomain: "treebuddy123.firebaseapp.com",
  databaseURL: "https://treebuddy123.firebaseio.com",
  projectId: "treebuddy123",
  storageBucket: "treebuddy123.appspot.com",
  messagingSenderId: "352354846644",
  appId: "1:352354846644:web:ad742e8a277ea7f13554e1"
};

firebase.initializeApp(firebaseConfig);
let database = firebase.firestore();
let auth = firebase.auth()

// const image2base64 = require('image-to-base64');

async function imgTob64 (image_source){

}

// uploadImage = async (uri, imageName) => {
//       const response = await fetch(uri)
//       const blob = await response.blob()

//       var ref = await firebase.storage().ref().child("users/" + imageName)
//       return ref.put(blob)
//     }

// var res = uploadImage('./images.jpeg', "LoverBoix")
// console.log(res)



async function getAllItems(){

    var start = new Date();

    let snapshot = await database.collection('users').where('Email', '==', '20100108@lums.edu.pk').get()
      .then(snap => {
        // console.log(snap)
        if (snap.empty) {
                console.log('query failed')
            }
            else
            {
                console.log("query completed in:" , new Date() - start)
                const data = snap.docs.map(doc => doc.data());
                console.log(data[0]['Rating']);
            }

      })
      .catch(function(error) {
        console.error("Error getting: ", error);
    });

    // const snapshot = await db.collection('users').get()
    // console.log(snapshot)
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

async function getSinglePlant(plant_name)
{
  var start = new Date();
  let data;
  let snapshot = await database.collection('plants').where('Name', '==',plant_name).get()
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


// getPlants("Mangoo")
// getSinglePlant('Mangoo')

let user_profile = {
  Email : "mhasan3322@gmail.com",
  Name : "Hassan",
  Rating: 0,
  Rewards: 
  {
    plant_1_tree: 0,
    plant_5_tree: 0,
    plant_10_tree: 0,
    scan_1_tree:0,
    scan_5_tree:0,
    scan_10_tree:0,
    water_1_tree:0,
    water_5_tree:0,
    water_10_tree:0
  }
  ,
  Tree:[]
}




async function create_user(user_prof) {
    if (user_prof === undefined) {
        return;
    }
    // let unique_id = db.ref().child('groups').push().key;
    // let itemData = {
    //     Category: info['Category'],
    //     Name: info['Name'],
    //     Price: info['Price'],
    // };
    let obj = await database.collection('users').add(user_prof)
      .then(snap =>
      {
        if(snap.empty){
          console.log("null")
          return null
        }
        else{
          console.log(snap)
          return snap
        }
      })
    // itemData['key'] = obj.id;
    return "done";
}



async function get_AllSpecies (){
  var start = new Date();
  let data;
  let snapshot = await database.collection('species').get()
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
  let snapshot = await database.collection('species').where("Specie_Name",'==', specie_name).get()
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

// getSpecieFunc("Mango Specie")


/////////////////////////// // // // Add plant details // // // /////////////


async function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

async function Confirm_UniqueID(table_name, ID_name,ID_value){

  var start = new Date();
  let data;
  let snapshot = await database.collection(table_name).where(ID_name,'==', ID_value).get()
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
  let snapshot = await database.collection("species").where("Specie_ID",'==',Specie_ID).get()
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
  let snapshot = await database.collection("species").where("Specie_ID",'==',Specie_ID).get()
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

  database.collection("species").where("Specie_ID", "==", Specie_ID)
  .get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          console.log(doc.id, " => ", doc.data());
                    
          // Build doc ref from doc.id
          database.collection("species").doc(doc.id).update({Occurences: count +1 });
      });
 })

}


async function updateLatLong(){
  let snapshot= await database.collection('plants').get()
    .then(snap=>{
      if(snap.empty){
        return "error"
      }
      else{
        snap.forEach(function(doc){
          // console.log(doc.data())

          database.collection('plants').doc(doc.id).update({Location: {latitude: doc.data().Location.Latitude, longitude: doc.data().Location.Longitude}})
        });
      }
    })
}


async function IncrementPlantOnPerson(User_ID){
  let count;
  let snapshot = await database.collection("users").where("User_ID",'==',User_ID).get()
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

  database.collection("species").where("User_ID", "==", User_ID)
  .get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // console.log(doc.id, " => ", doc.data());
          console.log("Tree count: ", count)
                    
          // Build doc ref from doc.id
          database.collection("users").doc(doc.id).update({Tree: count +1 });
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
      Image : tree_info['Picture'],
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

  let obj = await database.collection('plants').add(tree_item)
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

let tree_info = {
  Name : "Treever",
  Planter_ID : 2,
  Planter_Name : "Hamza" ,
  Specie_ID: 11,

  Location: 
  {
    lat: 31.471399,
    long: 74.411191,
  }
  ,
  Picture: "https://images-na.ssl-images-amazon.com/images/I/61unKaYGOsL.jpg"
}


// Add_Tree_Details(tree_info)

///////////////// Add specie ///////////////////

let specie_prof = {
  Family: "Fabaceae",
  Order: "Fabales",
  Image: "",
  Kingdome: "Plantae",
  Occurences: 0,
  Specie_ID: 11,
  Specie_Name: "Rosewood",
  Specie_bioName: "Dalbergia",

}

async function CreateSpecie(specie_prof){

    let obj = await database.collection('species').add(specie_prof)
    .then(snap =>
    {
      if(snap.empty){
        console.log("null")
        return null
      }
      else{
        console.log("done with query")
        // console.log(snap)
        return snap
      }
    })
 //    database.collection("species").where("Specie_ID", "==", Specie_ID)
 //  .get()
 //  .then(function(querySnapshot) {
 //      querySnapshot.forEach(function(doc) {
 //          console.log(doc.id, " => ", doc.data());
                    
 //          // Build doc ref from doc.id
 //          database.collection("species").doc(doc.id).update({Order: "Sapindales" });
 //      });
 // })

}
updateLatLong()
// CreateSpecie(specie_prof)