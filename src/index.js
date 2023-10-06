import { woman, man1, man2, man3 } from './assets/crew' 
import { europa, mars, moon, titan } from './assets/destination'
import { launchLandscape, launchPortrait, spaceCapsuleLandscape, spaceCapsulePortrait, spacePortLandscape, spacePortPortrait } from './assets/technology' 

export const crew = [
    {
        imgURL: man1,
        label: "COMMANDER",
        name: "Douglas Hurley",
        subtext: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        id: 'man1'
    },
    {
        imgURL: man2,
        label: "MISSION SPECIALIST",
        name: "Mark Shuttleworth",
        subtext: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        id: 'man2'
    },
    {
        imgURL: man3,
        label: "PILOT",
        name: "Victor Glover",
        subtext: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
        id: 'man3'
    },
    {
        imgURL: woman,
        label: "FLIGHT ENGINEER ",
        name: " Anousheh Ansari",
        subtext: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
        id: 'woman'
    },
];

export const destination = [
    {
        imgURL: moon,
        name: "MOON",
        subtext: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distanceKm: "384,400 KM",
        distanceDays: "3 DAYS",
        classname: 'moon active'
        
    },
    {
        imgURL: mars,
        name: "MARS",
        subtext: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distanceKm: "225 MIL. KM",
        distanceDays: "9 MONTHS"
    },
    {
        imgURL: europa,
        name: "EUROPA",
        subtext: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distanceKm: "628 MIL. KM",
        distanceDays: "3 YEARS"
    },
    {
        imgURL: titan,
        name: "TITAN",
        subtext: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distanceKm: "1.6 BIL. KM",
        distanceDays: "7 YEARS"
    }
];


export const technology = [
    {
    imgURLPortrait: launchPortrait,
    imgURL: launchLandscape,
    name: "Launch Vehicle",
    subtext: "A launch vehicle or carrier rocket is a rocket-	propelled vehicle used to carry a payload from 	Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    number: '1',
    id: 'one'
    },
    {
    imgURLPortrait: spacePortPortrait,
    imgURL: spacePortLandscape,
    name: "SPACEPORT",
    subtext: " A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    number: '2',
    id: 'two'
    },
    {
    imgURLPortrait: spaceCapsulePortrait,
    imgURL: spaceCapsuleLandscape,
    name: "SPACE CAPSULE",
    subtext: "A space capsule is an often-crewed spacecraft that 	uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    number: '3',
    id: 'three'
    }
];
    
export const teacnologyPortrait = [
    {
    imgURL: launchPortrait,
    name: "Launch Vehicle",
    subtext: "A launch vehicle or carrier rocket is a rocket-	propelled vehicle used to carry a payload from 	Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
    imgURL: spacePortPortrait,
    name: "SPACEPORT",
    subtext: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
    imgURL: spaceCapsulePortrait,
    name: "SPACE CAPSULE",
    subtext: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    }
];







