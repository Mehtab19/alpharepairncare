import { servicesData, ServiceItem } from './servicesData';
import { fridgeData, FridgeItem } from './fridgeData';
import { acData, AcItem } from './acData';
import { ovenData, OvenItem } from './ovenData';
import { electronicsData, ElectronicsItem } from './electronicsData';

// Union type for any service item
export type AnyServiceItem = ServiceItem | FridgeItem | AcItem | OvenItem | ElectronicsItem;

export const allServicesData: AnyServiceItem[] = [
  ...servicesData,
  ...fridgeData,
  ...acData,
  ...ovenData,
  ...electronicsData
];
