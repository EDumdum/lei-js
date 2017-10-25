/**
 * Check requirements.  
 * Returns the LEI check digits appended to the value.
 * 
 * Requirements:
 * - rawValue must be not `Null`
 * - rawValue must be of type `String`
 * - rawValue must respest format `^[0-9A-Z]{18}$`
 * 
 * @param {*} rawValue 
 */
export function generate(rawValue: string): string;

/**
 * Does NOT check requirements.  
 * Returns the module 97 remainder.
 * Note: 
 *   `getMod97(value) === 1` is equivalent to `isValid(value)`. 
 *   You may want to use this method instead of `isValid` if you ensure argument 
 *   requirements on your side.
 * 
 * Requirements
 * - rawValue must be not `Null`
 * - rawValue must be of type `String`
 * 
 * @param {*} rawValue 
 */
export function getMod97(rawValue: string): number;

/**
 * Check requirements.  
 * Returns if the LEI check digits are valid.
 *
 * Requirements:
 * - rawValue must be not `Null`
 * - rawValue must be of type `String`
 * - rawValue must respect format `^[0-9A-Z]{20}$`
 * 
 * @param {*} rawValue 
 */
export function isValid(rawValue: string): boolean;