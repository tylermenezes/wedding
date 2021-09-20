export interface Address {
  line1: string
  line2?: string
  city: string
  state: string
  postal: string
}

function addressToString(address: Address): string {
  return [
    address.line1,
    address.line2,
    address.city,
    `${address.state} ${address.postal}`
  ].join(', ');
}

export function makeAppleMapsUrl(address: Address): string {
  return `https://maps.apple.com/?address=${encodeURIComponent(addressToString(address))}`;
}

export function makeGoogleMapsUrl(address: Address): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(addressToString(address))}`;
}
