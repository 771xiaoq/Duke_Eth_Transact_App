/**
 * Shortens the given address by displaying only the first 5 characters and the last 4 characters.
 * @param {string} address - The address to be shortened.
 * @returns {string} - The shortened address.
 */
export const shortenAddress = (address) => `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
