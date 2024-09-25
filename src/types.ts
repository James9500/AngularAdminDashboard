
export interface SimpleConfigProps {
    onClose: () => void; // Callback to close the popup
    onCreateField: (fieldName: string, defaultValue: string) => void; // Callback for creating the field
}

export interface SingleLineTextConfigProps {
  onConfigChange: (config: { defaultValue: string; }) => void;
}

export interface CheckboxConfigProps {
  onConfigChange: (config: { checkboxStyle: string; defaultChecked: boolean }) => void;
}

export interface MultiSelectConfigProps {
  onConfigChange: (config: {
    colorCode: boolean;
    options: string[];
    defaultOptions: string[];
  }) => void;
}

export interface SingleSelectConfigProps {
  onConfigChange: (config: {
    colorCode: boolean;
    options: string[];
    defaultOption: string;
  }) => void;
}

export interface NumberConfigProps {
  onConfigChange: (config: {
    preset: string;
    decimalPlaces: number;
    thousandSeparator: boolean;
    thousandSeparatorFormat: string;
    largeNumberAbbreviation: string;
    allowNegativeNumbers: boolean;
  }) => void;
}

export interface CurrencyConfigProps {
  onConfigChange: (config: {
    preset: string;
    currencySymbol: string;
    decimalPlaces: number;
    thousandSeparator: boolean;
    thousandSeparatorFormat: string;
    largeNumberAbbreviation: string;
    allowNegativeNumbers: boolean;
  }) => void;
}

export interface PercentageConfigProps {
  onConfigChange: (config: {
    decimalPlaces: number;
    thousandSeparator: boolean;
    displayAsProgressBar: boolean;
    allowNegativeNumbers: boolean;
    thousandSeparatorFormat: string;
  }) => void;
}

export interface DurationConfigProps {
  onConfigChange: (config: { precision: string; durationFormat: string }) => void;
}

export interface CreatedTimeConfigProps {
  onConfigChange: (config: {
    dateFormat: string;
    includeTime: boolean;
    timeFormat?: string;
    useSameTimeZone: boolean;
    displayTimeZone: boolean;
  }) => void;
}

export interface ButtonConfigProps {
  onConfigChange: (config: {
    label: string;
    style: string;
    action: string;
    urlFormula: string;
  }) => void;
  generateFormula: () => string; // Function to generate a formula
}

export interface ColumnData {
  field: string;
  headerText: string;
  width: number;
  textAlign: string;
  allowEditing: boolean;
  columnConfig?: {
    fieldName: string;
    fieldType: string;
    [key: string]: any;
  };
}

export interface LookupFieldsModalProps {
  open: boolean;
  onClose: () => void;
  tableId: number;
  tableName: string;
}

export interface LinkRecordConfigProps {
  onConfigChange: (config: {
    linkedTableId: number;
    linkedTableName: string;
  }) => void;
}
