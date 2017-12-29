// Use this presets array inside your presetHandler
const presets = require('./presets');

const getPreset = (index) => {
    return presets[index] || null;
};

const createOrUpdatePresent = (index, array) => {
    if(!pressents[index]){
        return;
    }
    presets[index] = array;
    return presets[index];
}

// Complete this function:
const presetHandler = (method, index, newPresentArray) => {
    if (method === 'GET'){
        let preset = getPreset(index);
        if (preset){
            return [200, preset];
        }else{
            return [404];
        }
    }else if (method === 'PUT'){
        const newPresent = createOrUpdatePresent(index, newPresentArray);
        if (newPresent){
            return [200, newPresent];
        }else{
            return [404];
        }
    }else{
        return [400];
    }
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
