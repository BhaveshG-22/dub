export interface DubEmbedOptions {
  token: string;
  onTokenExpired?: () => void;
}

export interface DubEmbed {
  init: (options: Options) => void;

  isWidgetOpen: boolean;
  toggleWidget: () => void;
  openWidget: () => void;
  closeWidget: () => void;

  destroy: () => void;
}

export interface Options {
  // The link token
  token: string;

  // The widget was opened
  onOpen?: () => void;

  // The widget was closed
  onClose?: () => void;

  containerStyles?: Partial<CSSStyleDeclaration>;
  popupStyles?: Partial<CSSStyleDeclaration>;
  buttonStyles?: Partial<CSSStyleDeclaration>;
}
