interface Country {
  Country: string;
  CountryCode: string;
  Date: string;
  NewConfirmed: number;
  NewDeaths: number;
  Premium: any;
  Slug: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecoverd: number;
}

interface Global {
  NewConfirmed: number;
  NewDeath: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecoverd: number;
}

interface CovidSummaryResponse {
  Countires: Country[];
  Date: string;
  Global: Global;
  Message: string;
}
export { CovidSummaryResponse };
