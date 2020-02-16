/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.08
*/

/*URL for the server logo
Leave it blank to use text instead
(Put the files in the images folder)*/
var l_serverImage = "logo.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "sleekLoad 2";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"aurora.webm"
"bluefall.webm"
"bluetilefloor.webm"
"bluewhitecircles.webm"
"bokehlens.webm"
"cleanbokeh.webm"
"coldnight.webm"
"colorfulburst.webm"
"dancingstars.webm"
"dropsflares.webm"
"focusorangebokeh.webm"
"glimmering.webm"
"glowingrings.webm"
"greencircles.webm"
"hues.webm"
"inthedeep.webm"
"modernflourish.webm"
"orangeaura.webm"
"warminside.webm"
"yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format 
(Put the files in the backgrounds/videos folder)*/
var l_background = "glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them
(Put the files in the backgrounds/images folder)*/
var l_bgImages = [
	"image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
        "image6.jpg",
        "image7.jpg",
        "image8.jpg",
        "image9.jpg",
        "image10.jpg",
        "image11.jpg",
        "image12.jpg",
        "image13.jpg",
        "image14.jpg",
        "image15.jpg",
        "image16.jpg",
        "image17.jpg",
        "image18.jpg",
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much .ogg songs you want
(Put the files in the songs folder)*/
var l_musicPlaylist = [
	{youtube: "Jl2VuXhg8sI", name: "Atlas - Installation Music"},
	{youtube: "06gkqCqk3hc", name: "Atlas - Installation Music"},
        {youtube: "xiUwUIqvgBI", name: "Atlas - Installation Music"},
        {youtube: "N8GejInQ55U", name: "Atlas - Installation Music"},
        {youtube: "Xf7yh2WzE9g", name: "Atlas - Installation Music"},
        {youtube: "4yMVTdAX1jk", name: "Atlas - Installation Music"},
        {youtube: "tuaSnW8w6xg", name: "Atlas - Installation Music"},
        {youtube: "8G9XfgybSxE", name: "Atlas - Installation Music"},
        {youtube: "KFqeHVP-8ak", name: "Atlas - Installation Music"},
        {youtube: "cmCA2yJHGfs", name: "Atlas - Installation Music"},
        {youtube: "JWHLBJITLlQ", name: "Atlas - Installation Music"},
        {youtube: "VoXR4Bi2i7o", name: "Atlas - Installation Music"},
        {youtube: "XADORzlj__g", name: "Atlas - Installation Music"},
        {youtube: "IhINyF1pA0s", name: "Atlas - Installation Music"},
        {youtube: "H7JXdvjxzVU", name: "Atlas - Installation Music"},
        {youtube: "kpXj1AyM0x4", name: "Atlas - Installation Music"},
        {youtube: "Vq4l-MgAtOc", name: "Atlas - Installation Music"},
        {youtube: "hw522GIskVc", name: "Atlas - Installation Music"},
        {youtube: "hw522GIskVc", name: "Atlas - Installation Music"},
        {youtube: "53a3QBcELvE", name: "Atlas - Installation Music"},
        {youtube: "bNdljm6MmLY", name: "Atlas - Installation Music"},
        {youtube: "fkB3F4-NI8A", name: "Atlas - Installation Music"},
        {youtube: "OGzyTwrTRM8", name: "Atlas - Installation Music"},
        {youtube: "zXtZOxMNDXA", name: "Atlas - Installation Music"},
        {youtube: "ZMxAWLio0W4", name: "Atlas - Installation Music"},
        {youtube: "r68_rEdAO6U", name: "Atlas - Installation Music"},
        {youtube: "8QTgdPNMG_0", name: "Atlas - Installation Music"},
        {youtube: "Ouf9jFKZ7Sw", name: "Atlas - Installation Music"},
        {youtube: "Jgdd7MwG6WY", name: "Atlas - Installation Music"},

];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 10;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
	"Lock picking, keypad cracking and trespassing do make you KOS to the property owner!",
	"Do not turn off/Destroy ship modules for any reason. Doing so may result in an arrest, warn, or ban, as different modules carry different punishments!",
	"You must not use any homophobic, racist or offensive language In character (IC) or out of character(OOC)!",
        "Do not disconnect, suicide, change jobs, change names, etc. to get out of a roleplay/staff situation. This will result in a harsher or additional punishment!",
        "NEVER hurt a brother in any way. Never shoot or handcuff another clone trooper, Unless given orders from a commander you may cuff a “rogue” clone!",
        "An individual may opt out of an event if they do not wish to participate, but may not actively attempt to stop the event outside of roleplay. No one can be forced to sit out of an event!",
        "All donations are Subject to all regular server rules, Donations will in no way grant any form of immunity against punishment and can be retracted if the transgressions have been sufficiently deemed as requiring such!", 
        "RP simply stands for Roleplay, When you take up a job, character, or persona that you act out in character on the server and generally just play as a role like the name implies. Star Wars RP is literally this but set in the atmosphere and (usually) timeline of the Star Wars Universe!",
        "You may opt out of being in an event but you MUST not get in the way of the event, as well you cannot use any authority you have to tell others they cannot participate just because you don't wish to!",
        "Never assault an innocent/ally. If attacked you may defend yourself. NOTE: You must be DAMAGED! (not just blinded/pushed) in order to defend yourself!",
        "Please Don't be a dick to people. Being an 'edgy cool teenager' won't get you far on this server. You will be banned. Toxicity is not tolerated!",
        "Mingeing means purposefully harming the roleplay of the server, breaking or attempting to break the server's rules in any way and generally acting like an idiot!",
        "All jobs can own a defence firearm (1 handed) to protect their property, not to be used as an attacking weapon and not to be drawn when not (RP) threatened!",
        "You need to listen to people that are higher rank than you. If that person is abusing their rank, let a staff member know!",
        "Donations will not be Refunded, swapped or exchanged unless with explicit circumstances and discussion with the executive members of the staff team, such situations (an unforeseen issue has appeared with the product, such as a broken model!",
        "Cheating will result in an automatic or Permanent ban. This includes abusing Gmod/source exploits with client-side scripts and convars!",
        "You cannot remember that you were raided, or who raided you, so you can't be prepared.) Once you die in a raid as a defender (Or an attacker) you can't return to Defend!",
        "We are a serious RP server. Consider being serious at all times but understand there may also be times when the server relaxes!",
        "Anything that is considered detrimental to the roleplay of any situation by a staff member is to be Respected!",
        "Don't ask for a staff position. Post an application on the forums if you feel you are a good candidate for admin, and do not pester us about your application!",
        "Any attempts of scamming or misleading players / staff will result in a harsh punishment!",
        "Do not build inside unowned buildings. A user/s must buy the doors to the building they are building in/on (exceptions can be made for someone who has already built a base and forgot to Purchase doors!",
        "Cheating will result in an automatic or manual permanent ban. This includes abusing Gmod/source exploits with client-side scripts and convars!",
        "Random Death Matching (RDM) is not allowed You must always stay in character and role play every situation that you come across, otherwise this will be considered Fail Role Play (FailRP)!",
        "AFK Printer farming is not allowed. If you are AFK for more than 30 minutes you may be kicked!"
];
/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
