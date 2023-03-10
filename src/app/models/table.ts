export type TableValue = TableValues[];

interface TableValues {
  dayNumber: number;
  date: string;
  currencyValue: number | string;
  percentVariationByDay: string;
  percentVariationFromDayOne: string;
}
