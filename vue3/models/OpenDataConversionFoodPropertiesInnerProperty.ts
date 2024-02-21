/* tslint:disable */
/* eslint-disable */
/**
 * Django Recipes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { OpenDataUnitVersion } from './OpenDataUnitVersion';
import {
    OpenDataUnitVersionFromJSON,
    OpenDataUnitVersionFromJSONTyped,
    OpenDataUnitVersionToJSON,
} from './OpenDataUnitVersion';

/**
 * 
 * @export
 * @interface OpenDataConversionFoodPropertiesInnerProperty
 */
export interface OpenDataConversionFoodPropertiesInnerProperty {
    /**
     * 
     * @type {number}
     * @memberof OpenDataConversionFoodPropertiesInnerProperty
     */
    readonly id?: number;
    /**
     * 
     * @type {OpenDataUnitVersion}
     * @memberof OpenDataConversionFoodPropertiesInnerProperty
     */
    version: OpenDataUnitVersion;
    /**
     * 
     * @type {string}
     * @memberof OpenDataConversionFoodPropertiesInnerProperty
     */
    slug: string;
    /**
     * 
     * @type {string}
     * @memberof OpenDataConversionFoodPropertiesInnerProperty
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof OpenDataConversionFoodPropertiesInnerProperty
     */
    unit?: string;
    /**
     * 
     * @type {number}
     * @memberof OpenDataConversionFoodPropertiesInnerProperty
     */
    fdcId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof OpenDataConversionFoodPropertiesInnerProperty
     */
    comment?: string;
    /**
     * 
     * @type {string}
     * @memberof OpenDataConversionFoodPropertiesInnerProperty
     */
    readonly createdBy?: string;
}

/**
 * Check if a given object implements the OpenDataConversionFoodPropertiesInnerProperty interface.
 */
export function instanceOfOpenDataConversionFoodPropertiesInnerProperty(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "slug" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function OpenDataConversionFoodPropertiesInnerPropertyFromJSON(json: any): OpenDataConversionFoodPropertiesInnerProperty {
    return OpenDataConversionFoodPropertiesInnerPropertyFromJSONTyped(json, false);
}

export function OpenDataConversionFoodPropertiesInnerPropertyFromJSONTyped(json: any, ignoreDiscriminator: boolean): OpenDataConversionFoodPropertiesInnerProperty {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'version': OpenDataUnitVersionFromJSON(json['version']),
        'slug': json['slug'],
        'name': json['name'],
        'unit': !exists(json, 'unit') ? undefined : json['unit'],
        'fdcId': !exists(json, 'fdc_id') ? undefined : json['fdc_id'],
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
        'createdBy': !exists(json, 'created_by') ? undefined : json['created_by'],
    };
}

export function OpenDataConversionFoodPropertiesInnerPropertyToJSON(value?: OpenDataConversionFoodPropertiesInnerProperty | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': OpenDataUnitVersionToJSON(value.version),
        'slug': value.slug,
        'name': value.name,
        'unit': value.unit,
        'fdc_id': value.fdcId,
        'comment': value.comment,
    };
}

