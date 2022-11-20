export interface Iserver extends IObjectWithContent {
  name: string;
  logs: Ifile[];
  scripts: Ifile[];
}

export interface Ifile extends IObjectWithContent {
  serverName: string;
  type: string;
  name: string;
  content: string;
}

interface IObjectWithContent {
  cardContent?: string[];
}
