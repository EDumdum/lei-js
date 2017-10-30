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