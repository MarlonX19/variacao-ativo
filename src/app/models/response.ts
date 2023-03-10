export interface SearchResponsePayload {
  chart: Chart;
}

interface Chart {
  result: Result[];
  error: any;
}

interface Result {
  meta: Meta;
  timestamp: number[];
  indicators: Indicators;
}

interface Meta {
  currency: string;
  symbol: string;
  exchangeName: string;
  instrumentType: string;
  firstTradeDate: number;
  regularMarketTime: number;
  gmtoffset: number;
  timezone: string;
  exchangeTimezoneName: string;
  regularMarketPrice: number;
  chartPreviousClose: number;
  priceHint: number;
  currentTradingPeriod: CurrentTradingPeriod;
  dataGranularity: string;
  range: string;
  validRanges: string[];
}

interface CurrentTradingPeriod {
  pre: Pre;
  regular: Regular;
  post: Post;
}

interface Pre {
  timezone: string;
  end: number;
  start: number;
  gmtoffset: number;
}

interface Regular {
  timezone: string;
  end: number;
  start: number;
  gmtoffset: number;
}

interface Post {
  timezone: string;
  end: number;
  start: number;
  gmtoffset: number;
}

interface Indicators {
  quote: Quote[];
  adjclose: Adjclose[];
}

interface Quote {
  high: number[];
  volume: number[];
  close: number[];
  open: number[];
  low: number[];
}

interface Adjclose {
  adjclose: number[];
}
