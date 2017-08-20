/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.04
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "images/dir-logo.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
    "backgrounds/images/w1.jpg",
	"backgrounds/images/w3.jpg",
	"backgrounds/images/w4.jpg",
	"backgrounds/images/w5.jpg",
	"backgrounds/images/w6.jpg",
	"backgrounds/images/w7.jpg",
	"backgrounds/images/w8.jpg",
	"backgrounds/images/w9.jpg",
    "backgrounds/images/w10.jpg",
	"backgrounds/images/w11.jpg",
	"backgrounds/images/w12.jpg"

	
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 20000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 3000;

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
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{youtube: "ZB12-A2A4FA", name: "Davon Geht Die Welt Nicht Unter - Zarah Leander"},
	{youtube: "UXKr4HSPHT8", name: "Die Internationale"},
	{youtube: "3hPAI3O-1Vg", name: "Stolz weht die Flagge Schwarz-Weiß-Rot"},
	{youtube: "9dZj7YW5oFQ", name: "Trüber Sonntag"},
	{youtube: "Jk_yAEDnny4", name: "Isham Jones Orchestra - Who's Sorry Now"}

];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 34;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"The war has ended, quite differently indeed from how we expected. Our politicians have failed us miserably. - Kaiser Wilhelm II",
"If the Kaiser does not abdicate, the social revolution is inevitable. But I do not want it, I even hate it like sin. - Friedrich Ebert, SPD politician",
"Act! Act! Courageously, decisively and constantly… disarm the counter-revolution, arm the masses, occupy all positions of power. Act quickly! - Rosa Luxemburg",
"The working class must stand united against the Spartacists if democracy and socialism are not to be lost. - Gustav Noske",
"An almost unbroken chain of homeless men extends the whole length of the great Hamburg-Berlin highway. It is the same scene for the entire 200 miles… - Heinrich Hauser, German writer",
"This [the Treaty of Versailles] is not a peace. It is an armistice for 20 years. - Attributed to French military leader Ferdinand Foch",
"You have no right to proclaim this Republic! - Friedrich Ebert to Philip Scheidemann",
"Without democracy there is no freedom. Violence, no matter who is using it, is always reactionary. - Friedrich Ebert, SPD",
"Everything depends on… making the government firm and keeping it firm. Whether it pleases us or not, there is nothing else, and whoever can, should help. - Hans von Seeckt, Reichswehr general", 
"The wave of drunkenness which overtook the country ten years ago has left behind many hungover people. They have learned nothing. - Kurt Tucholsky on nationalism",
"Wir wollen keine Judenfetzen von Berlin!” (‘We don’t want any Jew confetti [paper money] from Berlin’) - A Bavarian farmer",
"Students and citizens, your resistance to the Republic and to democracy is simply a fear of words. You shy at them like restive horses; you fall into unreasoning panic at the sound of them. But they are just words… - Thomas Mann",


];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 10000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 2000;
