export type DoorType = "ramove" | "sendvicove";

export interface DoorModel {
  id: string;
  name: string;
  variants: number;
  description: string;
}

export interface DoorConfiguration {
  doorType: DoorType;
  modelId: string;
  variantIndex: number;
  color: string;
  colorName: string;
  construction: string;
  glassType: string;
  openingType: string;
  frameType: string;
  lockType: string;
  assembly: boolean;
  height: number;
  width: number;
  thickness: number;
  floorId: string;
  wallColor: string;
  notes: string;
}

export interface CartItem {
  id: number;
  configuration: DoorConfiguration;
  quantity: number;
}

export interface OpeningOption {
  id: string;
  name: string;
  image: string;
  alt: string;
}

export interface FloorOption {
  id: string;
  name: string;
  image: string;
}

export interface ColorMapping {
  [key: string]: string;
}

export interface ColorsData {
  standard_color_names: string[];
  unified_color_mapping: ColorMapping;
  variant_available_colors: {
    ramove: string[];
    sendvic: string[];
  };
}
