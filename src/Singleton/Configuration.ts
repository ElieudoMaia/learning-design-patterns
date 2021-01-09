class Configuration {
  private static instance: Configuration;
  public configName: string;

  private constructor(configName: string) {
    this.configName = configName;
  }

  public static getInstance(configName: string): Configuration {
    if (!this.instance) {
      this.instance = new Configuration(configName);
    }

    return this.instance;
  }
}

export { Configuration }