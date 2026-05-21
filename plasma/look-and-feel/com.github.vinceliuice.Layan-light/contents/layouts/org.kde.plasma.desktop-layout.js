var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/Configuration": {
                    "PreloadWeight": "42"
                },
                "/General": {
                    "ToolBoxButtonState": "topcenter",
                    "ToolBoxButtonX": "462",
                    "ToolBoxButtonY": "32"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///usr/share/wallpapers/Elarun/contents/images/2560x1600.png"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "100"
                        },
                        "/Configuration/General": {
                            "favoritesPortedToKAstats": "true",
                            "systemApplications": "systemsettings.desktop,org.kde.kinfocenter.desktop"
                        },
                        "/Configuration/Shortcuts": {
                            "global": "Alt+F1"
                        },
                        "/Shortcuts": {
                            "global": "Alt+F1"
                        }
                    },
                    "plugin": "org.kde.plasma.kickoff"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "42"
                        }
                    },
                    "plugin": "org.kde.plasma.appmenu"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "42"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "CurrentPreset": "org.kde.plasma.systemmonitor",
                            "popupHeight": "400",
                            "popupWidth": "560"
                        },
                        "/Configuration/Appearance": {
                            "chartFace": "org.kde.ksysguard.barchart",
                            "title": "Individueel gebruik van kernen"
                        },
                        "/Configuration/SensorColors": {
                            "cpu/cpu.*/usage": "86,87,245",
                            "cpu/cpu0/usage": "86,87,245",
                            "cpu/cpu1/usage": "204,86,245",
                            "cpu/cpu2/usage": "245,86,167",
                            "cpu/cpu3/usage": "245,125,86",
                            "cpu/cpu4/usage": "245,244,86",
                            "cpu/cpu5/usage": "127,245,86",
                            "cpu/cpu6/usage": "86,245,164",
                            "cpu/cpu7/usage": "86,206,245"
                        },
                        "/Configuration/Sensors": {
                            "highPrioritySensorIds": "[\"cpu/cpu.*/usage\"]",
                            "totalSensors": "[\"cpu/all/usage\"]"
                        }
                    },
                    "plugin": "org.kde.plasma.systemmonitor.cpucore"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "52"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "52"
                        }
                    },
                    "plugin": "org.kde.milou"
                },
                {
                    "config": {
                        "/Configuration": {
                            "popupHeight": "451",
                            "popupWidth": "560"
                        },
                        "/Configuration/Appearance": {
                            "showDate": "false"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "631",
                            "DialogWidth": "810"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "74",
                    "DialogWidth": "1366"
                },
                "/Configuration": {
                    "PreloadWeight": "42"
                }
            },
            "height": 1.7777777777777777,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 75.88888888888889,
            "minimumLength": 75.88888888888889,
            "offset": 0
        },
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "3",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 2.0,
            "hiding": "dodge-windows",
            "location": "left",
            "maximumLength": 50.94444444444444,
            "minimumLength": 34.833333333333336,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
