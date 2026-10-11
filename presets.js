export const SOURCES={rain:{name:'Rain',icon:'☂',file:'rain.mp3'},wind:{name:'Wind',icon:'≋',file:'wind.mp3'},thunder:{name:'Thunder',icon:'ϟ',file:'thunder.mp3'},ocean:{name:'Ocean Waves',icon:'◒',file:'ocean-waves.mp3'},birds:{name:'Birds',icon:'♧',file:'birds.mp3'},fireplace:{name:'Fireplace',icon:'♨',file:'fireplace.mp3'},crickets:{name:'Night Crickets',icon:'✦',file:'night-crickets.mp3'}};
export const PRESETS=[
{id:'rainy-night',name:'Rainy Night',description:'A quiet window, a city softened by rain.',theme:'rain',accent:'#8ba6b8',sounds:{rain:78,thunder:12}},
{id:'forest-morning',name:'Forest Morning',description:'First light filtering through leaves and birdsong.',theme:'forest',accent:'#9bb58c',sounds:{birds:68,wind:30,rain:8}},
{id:'ocean-breeze',name:'Ocean Breeze',description:'Open horizons, salt air, and a slow tide.',theme:'ocean',accent:'#8ab6b9',sounds:{ocean:82,wind:28}},
{id:'cozy-cafe',name:'Cozy Café',description:'Warm light, distant conversation, a place to settle.',theme:'cafe',accent:'#d6a66a',sounds:{fireplace:55,rain:20}},
{id:'thunderstorm',name:'Thunderstorm',description:'A dramatic sky rolling over a sheltered room.',theme:'storm',accent:'#a79ec4',sounds:{rain:72,thunder:62,wind:38}},
{id:'night-crickets',name:'Night Crickets',description:'The soft, living rhythm of a garden after dark.',theme:'night',accent:'#b6a77f',sounds:{crickets:78,wind:16}}
];
export function getPreset(id){return PRESETS.find(p=>p.id===id)||PRESETS[0];}