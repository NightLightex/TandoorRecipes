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
import type { SyncLog } from './SyncLog';
import {
    SyncLogFromJSON,
    SyncLogFromJSONTyped,
    SyncLogToJSON,
} from './SyncLog';

/**
 * 
 * @export
 * @interface ListSyncLogs200Response
 */
export interface ListSyncLogs200Response {
    /**
     * 
     * @type {number}
     * @memberof ListSyncLogs200Response
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof ListSyncLogs200Response
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ListSyncLogs200Response
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<SyncLog>}
     * @memberof ListSyncLogs200Response
     */
    results?: Array<SyncLog>;
}

/**
 * Check if a given object implements the ListSyncLogs200Response interface.
 */
export function instanceOfListSyncLogs200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ListSyncLogs200ResponseFromJSON(json: any): ListSyncLogs200Response {
    return ListSyncLogs200ResponseFromJSONTyped(json, false);
}

export function ListSyncLogs200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListSyncLogs200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(SyncLogFromJSON)),
    };
}

export function ListSyncLogs200ResponseToJSON(value?: ListSyncLogs200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'next': value.next,
        'previous': value.previous,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(SyncLogToJSON)),
    };
}

