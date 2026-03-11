const state = {

filters:{},

activeTab:"summary"

};

export function getState(){

return state;

}

export function setState(key,value){

state[key]=value;

}
