/**
 * @file src/index.ts
 * @author @Dungsky
 * @description Production declaration-scope candidate for Polar (payments-fintech).
 */

export interface CatalogEntity {
  vendor: string;
  entityId: string;
  slug: string;
  category: string;
  sourceRecord: string;
  canonicalSite: string;
}

export interface ServiceAccessFunnel {
  productName: string;
  funnelType: string;
  entryPointUrl: string;
  discoveryEndpoint: string;
  termsEndpoint: string;
}

export const polarCatalogEntity: CatalogEntity = {
  vendor: 'Polar',
  entityId: 'ent_01kzc2rqsw8fpc33xb0n7tdqv5',
  slug: 'polar',
  category: 'payments-fintech',
  sourceRecord: 'https://sourcey.com/polar',
  canonicalSite: 'https://polar.sh'
};

export const polarServiceFunnel: ServiceAccessFunnel = {
  productName: 'Polar API & Merchant Checkout',
  funnelType: 'service-access',
  entryPointUrl: 'https://polar.sh/dashboard',
  discoveryEndpoint: 'https://api.polar.sh/v1/discovery',
  termsEndpoint: 'https://polar.sh/legal/terms'
};

export function validatePolarScope(entity: CatalogEntity, funnel: ServiceAccessFunnel): boolean {
  if (!entity.entityId || entity.slug !== 'polar') {
    return false;
  }
  if (!funnel.entryPointUrl.startsWith('https://')) {
    return false;
  }
  return true;
}

export function executeScopeDeclaration(): { entity: CatalogEntity; funnel: ServiceAccessFunnel; valid: boolean } {
  const valid = validatePolarScope(polarCatalogEntity, polarServiceFunnel);
  return {
    entity: polarCatalogEntity,
    funnel: polarServiceFunnel,
    valid
  };
}
