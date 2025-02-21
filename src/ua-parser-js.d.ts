declare module "ua-parser-js" {
  interface IDevice {
    model: string;
    type: string;
    vendor: string;
  }

  interface IParser {
    getDevice(): IDevice;
  }

  interface IUAParser {
    new (uastring?: string): IParser;
  }

  const UAParser: IUAParser;
  export default UAParser;
}
