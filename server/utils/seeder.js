//use this for pushing the dummy data in database

const Profile = require ('../models/profile')
const dotenv = require('dotenv')
const profiles = require('../data/profile');


//setting up dotenv file
dotenv.config();

// connect database with this seeder
require('../db/conn')

const seedProfiles =async () => {
    try{

        await Profile.deleteMany();
        console.log('profiles are deleted');

        await Profile.insertMany(profiles)
        console.log('All profiles are added.');

        process.exit();

    }catch(error){
        console.log(error.message);
        process.exit();
    }
}

seedProfiles();