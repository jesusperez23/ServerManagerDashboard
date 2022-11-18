export interface Iserver {
  name: string;
  logs: Ifile[];
  scripts: Ifile[];
}

export interface Ifile {
  serverName: string;
  type: string;
  name: string;
  content: string;
}
