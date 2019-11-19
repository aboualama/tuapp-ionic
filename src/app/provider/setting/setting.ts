import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as Color from 'color';
import { Storage } from '@ionic/storage';
import { environment } from '../../../environments/environment';

const defaults = environment.themes[1];

defaults['primary'] = '#0bb8cc';
defaults['secondary'] = '#32db64';
defaults['tertiary'] = '#f4a942';
defaults['info'] = '#0bb8cc';
defaults['success'] = '#10dc60';
defaults['warning'] = '#ffce00';
defaults['danger'] = '#f53d3d';
defaults['dark'] = '#222';
defaults['medium'] = '#989aa2';
defaults['light'] = '#f4f4f4';

function CSSTextGenerator(colors) {
  colors = { ...defaults, ...colors };

  const {
    primary,
    secondary,
    tertiary,
    info,
    success,
    warning,
    danger,
    dark,
    medium,
    light
  } = colors;

  const shadeRatio = 0.1;
  const tintRatio = 0.1;
  const shadowRatio = 0.5;

  return `
    --ion-text-color-lv1: ${Color(primary).lighten(2)};
    --ion-text-color-lv2: ${Color(primary).lighten(0.6)};
    --ion-text-color-lv3: ${Color(primary).lighten(0.1)};
    --ion-text-color-lv4: ${Color(primary).darken(0.6)};
    --ion-text-color-lv5: ${Color(primary).darken(2)};

    --background: ${Color(light).lighten(0.1)};

    --ion-shadow-primary-color: ${Color(primary).lighten(1.7)};
    --ion-shadow-secondary-color: ${Color(secondary).lighten(1.7)};
    --ion-shadow-tertiary-color: ${Color(tertiary).lighten(1.7)};
    --ion-shadow-info-color: ${Color(info).lighten(1.7)};
    --ion-shadow-success-color: ${Color(success).lighten(1.7)};
    --ion-shadow-warning-color: ${Color(warning).lighten(1.7)};
    --ion-shadow-danger-color: ${Color(danger).lighten(1.7)};
    --ion-shadow-medium-color: ${Color(medium).lighten(1.7)};

    --ion-color-primary: ${primary};
    --ion-color-secondary: ${secondary};
    --ion-color-tertiary:  ${tertiary};

    --ion-color-info: ${info};
    --ion-color-success: ${success};
    --ion-color-warning: ${warning};
    --ion-color-danger: ${danger};

    --ion-color-dark: ${dark};
    --ion-color-medium: ${medium};
    --ion-color-light: ${light};`;
}

function contrast(color, ratio = 0.8) {
  color = Color(color);
  return color.isDark() ? color.lighten(ratio) : color.darken(ratio);
}


@Injectable({
  providedIn: 'root'
})
export class SettingProvider {
  constructor(
    private storage: Storage,
    @Inject(DOCUMENT) private document: Document
  ) {
    storage.get('theme').then(data => {
      if(data != null){
        this.setTheme(defaults);
      }else{
        const cssText = CSSTextGenerator(data);
        this.setGlobalCSS(cssText);
      }
    });
  }

  // Override all global variables with a new theme
  setTheme(theme) {
    const cssText = CSSTextGenerator(theme);
    this.setGlobalCSS(cssText);
    this.storage.set('theme', theme);
  }

  // Define a single CSS variable
  private setGlobalCSS(css: string) {
    this.document.documentElement.style.cssText = css;
  }

  get storedTheme() {
    return this.storage.get('theme');
  }
}

