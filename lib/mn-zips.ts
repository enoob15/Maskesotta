// Minnesota ZIP code prefixes (first 3 digits)
// Source: USPS ZIP code database for Minnesota
export const MN_ZIP_PREFIXES = [
    '550', '551', '553', '554', '555', '556', '557', '558', '559',
    '560', '561', '562', '563', '564', '565', '566', '567'
];

export function isMinnesotaZip(zip: string): boolean {
    const cleanZip = zip.replace(/\D/g, '');
    if (cleanZip.length < 5) return false;

    const prefix = cleanZip.substring(0, 3);
    return MN_ZIP_PREFIXES.includes(prefix);
}
