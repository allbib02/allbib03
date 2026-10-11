const KEY='ambient-data';
const defaults={schemaVersion:1,preferences:{masterVolume:70,stopOnFinish:true,reduceMotion:false},customAtmospheres:[],favorites:[],focusHistory:[]};
function valid(data){if(!data||typeof data!=='object')return defaults;return {...defaults,...data,preferences:{...defaults.preferences,...(data.preferences||{})},customAtmospheres:Array.isArray(data.customAtmospheres)?data.customAtmospheres:[],favorites:Array.isArray(data.favorites)?data.favorites:[],focusHistory:Array.isArray(data.focusHistory)?data.focusHistory:[]};}
export function loadData(){try{return valid(JSON.parse(localStorage.getItem(KEY)||'null'));}catch{return defaults;}}
export function saveData(data){try{localStorage.setItem(KEY,JSON.stringify(valid(data)));return true;}catch{return false;}}
export function resetData(){try{localStorage.removeItem(KEY);}catch{}return loadData();}