
Layan kde is a flat Design theme for KDE Plasma desktop.

In this repository you'll find:

- Aurorae Themes
- Kvantum Themes
- Plasma Color Schemes
- Plasma Desktop Themes
- Plasma Look-and-Feel Themes

## Installation

```sh
./install.sh
```

## Uninstallation

```sh
./uninstall.sh
```

## Fedora 44+ / Plasma Login Manager (PLM) users

Fedora 44 replaces SDDM with **Plasma Login Manager (PLM)** by default. PLM does **not** support custom QML themes (it is hard-coded to Breeze), so the `sddm/` theme in this repo will not apply on PLM.

PLM picks up its appearance from your Plasma settings:

- **Color scheme** — install via `./install.sh`, then in *System Settings → Colors* pick **Layan** (or **LayanLight**)
- **Wallpaper** — *System Settings → Wallpaper* → pick **Layan** / **Layan-light**

That gives you the Layan colors and background on the login screen. Buttons, fonts and layout stay Breeze — PLM exposes no hooks for those.

If you want the full Layan login screen (rounded panel, custom buttons, etc.), keep SDDM:

```sh
sudo dnf swap plasma-login-manager sddm
```

Then install the SDDM theme manually:

```sh
sudo cp -r sddm/6.0/Layan /usr/share/sddm/themes/
# set Current=Layan in /etc/sddm.conf  (or a drop-in under /etc/sddm.conf.d/)
```

## Recommendations

- For better looking please use this pack with [Kvantum engine](https://github.com/tsujan/Kvantum/tree/master/Kvantum).

  Run `kvantummanager` to choose and apply **Layan** theme.

- Install [Tela icon theme](https://github.com/vinceliuice/Tela-icon-theme) for a more consistent and beautiful experience.

## Donate

If you like my project, you can donate at:

<span class="paypal"><a href="https://www.paypal.me/vinceliuice" title="Donate to this project using Paypal"><img src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png" alt="PayPal donate button" /></a></span>

## License

GNU GPL v3

## preview

![1](../master/plasma/look-and-feel/com.github.vinceliuice.Layan/contents/previews/fullscreenpreview.jpg)
